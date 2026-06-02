# 완료 보고서 — 감다살🐙문어 챌린지 클라+서버 연동

**작성자:** ClaudeAppCode 쮸티12호
**작성 시작일:** 2026-06-02
**연관 테크스펙:** `TECHSPEC_2026-06_감다살문어챌린지내재화_v105_Claude_App_Code_20260602.md`
**연관 기획서:** `PLAN_2026-06_월드컵_감다살문어_챌린지_20260602.md`
**전달 대상:** 클로드 서버팀 (`Claude_Server_20260413` 워크스페이스)

> ⚠️ 본 보고서는 **페이지(Phase) 하나 끝날 때마다 미리미리 작성·갱신**한다. 최종 시점에 서버팀 워크스페이스로 전달.

---

## 🚨 절대 원칙 (TECHSPEC §0 — 선배 피로 쓴 규칙)

| # | 원칙 |
|---|---|
| 1 | 운영 도메인(`nano-api`/`dev-nano-api`/`monthly-api`/`dev-monthly-api`) 교체·삭제·수정 **절대 금지** (선배 사고: Ingress hostname 교체 → iOS/Android 앱 전체 다운) |
| 2 | EKS Ingress / Route53 / kustomization hostname **수정 금지** |
| 3 | 인증/CORS wildcard **변경 금지** |
| 4 | **신규 테이블만 추가** — 기존 스키마 변경 금지 |
| 5 | admin-api 경로는 **`sirjuseyo-admin` 레포에만** 구현 — `sirjuseyo-nano` 구현 금지 (선배 사고: admin API를 nano에 잘못 구현 → 이중 작업) |
| 6 | DEV 테스트 → CTO 승인 → PRD 순서 준수 |
| 7 | 서버팀 워크스페이스(`Claude_Server_20260413`)는 **후배 작업 공간** — 점검은 읽기만, 수정·침범 금지 |

---

## 🗺️ Phase 진행 현황

| Phase | 내용 | 상태 |
|---|---|---|
| Phase 0 | 착수 전 안전 점검 | ✅ 완료 (2026-06-02) |
| Phase 1 | 서버 — DB + 신청 API (`sirjuseyo-admin`) | 🔵 진행중 (코드+컴파일 완료, DDL 실행·커밋 대기) |
| Phase 2 | 클라 — 신청 폼 | ⏳ 대기 |
| Phase 3 | 어드민 — Vue.js (admin-web) | ⏳ 대기 |
| Phase 4 | 상세 CTA → /apply/ 연결 | ✅ 완료 (T-021 선반영) |
| Phase 5 | DEV 통합 검증 + 회귀 | ⏳ 대기 |
| Phase 6 | CTO/사장님 승인 | ⏳ 대기 |
| Phase 7 | PRD 배포 | ⏳ 대기 |

---

## Phase 0 — 착수 전 안전 점검 ✅ 완료 (2026-06-02)

> 점검 대상 서버 레포: `/Users/sirjuseyo/SirjuseyoOldApp/Claude_Server_20260413/` (**읽기 전용 — 수정·침범 없음**)

| # | 점검 항목 | 결과 |
|---|---|---|
| ① | DEV/PRD DB 분리 여부 | ✅ **분리됨** — DEV는 `sjy-nano-develop` RDS, PRD는 `sjy-nano-production` RDS (별도 인스턴스). `application-dev.yml` / `application-production.yml`의 nano datasource jdbc-url 상이 확인 |
| ② | admin-api=`sirjuseyo-admin` 라우팅 (실 Ingress) | ✅ **확정** — `sirjuseyo-eks/ingress/`: `admin-api`→`admin-prod-svc` / `dev-admin-api`→`admin-dev-svc`, `nano-api`→`nano-prod-svc` / `dev-nano-api`→`nano-dev-svc`. (테크스펙 §0-5 정합) |
| ③ | `/open/**`(비인증) ↔ `/challenge/**`(인증) 경계 | ✅ **이미 적용** — `ResourceServerConfig.java`: `.antMatchers("/open/**").permitAll()`(4차 심사 T-019) + `.anyRequest().authenticated()`. → 신규 신청 API `/open/challenge/...`는 비인증 자동 적용, 어드민 `/challenge/...`는 인증 필요 |
| ④ | AdminCorsFilter에 `monthly-loan.sirjuseyo.com` 등록 여부 | ✅ **이미 등록** — `AdminCorsFilter.java` allowedOrigins에 `https://monthly-loan.sirjuseyo.com` 포함 + 로컬 테스트 포트(5500~5503)도 등록 |

### 📌 Phase 0 결론 (서버팀/CTO 보고용)

> **4차 심사 내재화 작업 덕분에 신규 인프라/보안 작업이 거의 불필요한 상태.**
> - DB 분리 ✅ / Ingress admin 라우팅 ✅ / `/open/** permitAll` ✅ / CORS 등록 ✅ 모두 **기존 충족**
> - Phase 1(서버)에서 필요한 신규 작업: **신규 테이블 1개 + 신규 컨트롤러/서비스/Enum 추가**만. 인프라·도메인·인증·CORS는 **건드릴 필요 없음.**

> ⚠️ **단, DB 분리는 코드(application yml) 레벨 확인.** 실제 RDS 인스턴스 분리·테이블 생성 권한은 Phase 1 착수 시 서버 실작업에서 최종 확인 필요(테크스펙 §0-5 ④).
> 🔒 민감정보(RDS 엔드포인트 전체 주소)는 본 보고서에 미기재 — 인스턴스 명만 표기.

---

## Phase 1 — 서버 DB + 신청 API 🔵 진행중 (2026-06-02)

> 대상 레포: `sirjuseyo-admin` (TECHSPEC §0-5 고정). 브랜치 `feature/worldcup-challenge-2026-api` (최신 `dev` 기준 분기).

### ① 사전 작업 (완료)
| 단계 | 결과 |
|---|---|
| GitHub 연결 복구 | ✅ `/etc/hosts`에 `140.82.112.3 github.com` 등록(사장님 직접) → HTTP 200 |
| `dev` 최신화 | ✅ origin/dev fast-forward (원격앞 0, 완전 동기화) |
| feature 브랜치 | ✅ `feature/worldcup-challenge-2026-api` 분기 |

### ② 구현 산출물 (신규 파일 7 + DDL 1, 컴파일 성공)
> 벤치마크: 4차 심사 `review-application` 패키지 패턴 그대로 복제.

| # | 파일 (sirjuseyo-admin/src/main/java/com/sirjuseyo/albit/...) | 역할 |
|---|---|---|
| 1 | `support/common/code/ChallengeWorldcup2026StatusCode.java` | 상태 Enum (RECEIVED/REVIEWING/HIT/MISS/TICKET_ISSUED/EXPIRED) |
| 2 | `support/common/code/ChallengeWorldcup2026FinalResultCode.java` | 최종성적 Enum (GROUP_FAIL/R32/R16/R8/R4/FINAL/WIN) |
| 3 | `support/domain/challenge/ChallengeWorldcup2026Application.java` | JPA 엔티티 (테이블 매핑) |
| 4 | `support/repository/challenge/ChallengeWorldcup2026ApplicationRepository.java` | Repository (`existsByPhoneAndIsDeletedFalse` 중복체크 포함) |
| 5 | `admin/controller/challenge/vo/ChallengeWorldcup2026ApplicationRequestVO.java` | 요청 VO (snake_case 자동 매핑) |
| 6 | `admin/service/ChallengeWorldcup2026ApplicationService.java` | 신청 검증·저장 (§5-1 처리순서 1~9) |
| 7 | `admin/controller/challenge/ChallengeWorldcup2026ApplicationController.java` | `POST /open/challenge/worldcup-challenge-2026/applications` (비인증) |
| 8 | (내 워크스페이스) `project-docs/00_plan/DDL_challenge_worldcup_2026_application_20260602.sql` | 테이블 생성 DDL (§4-3 그대로) |

### ③ 컴파일 검증 ✅
- `./gradlew compileJava --offline` (JAVA_HOME=Temurin 8, Gradle 5.6.4) → **BUILD SUCCESSFUL**
- challenge 7개 `.class` 전부 `build/classes/java/main/` 생성 확인

### ④ 설계 결정 메모 (투명 보고)
> **코드값 저장: 평문 String 채택** (Converter 미사용).
> - TECHSPEC §8-1.4는 "Converter 구현" 언급. 그러나 **가장 최신·동일 유스케이스(`/open` 신청 접수)인 `review-application` 벤치마크**는 `status_cd`를 평문 String으로 저장 → 이게 Phase 0 분석의 기준.
> - 평문 String도 §4-2(DB는 코드값 저장, 화면은 라벨 표시)를 100% 충족하며, Enum 2개는 **검증(`isValid`)·표시(`labelOf`)** 용도로 사용.
> - 서버다운 위험(§0) 최소화 + 검증된 패턴 일관성 우선. **Converter 방식 원하시면 즉시 전환 가능.**

### ⑤ Phase 1 작업 진행 상태
| 단계 | 상태 | 비고 |
|---|---|---|
| feature 브랜치 로컬 커밋 | ✅ 완료 | `50f1b02` (소스 7개) — 원격 미푸시 |
| DEV RDS 테이블 생성(DDL 실행) | ✅ 완료 | DEV `sjy-nano-develop`/`nano`에 실접속 검증(DEV 확실·동일테이블 0) 후 사장님 승인받아 `CREATE TABLE` 실행. 결과: 테이블존재=1, 25컬럼·5인덱스, 기본값(status_cd=RECEIVED/point_confirmed_cd=N/is_deleted=0/total_hit_count=0) 정상 |
| 원격 푸시 | ✅ 완료 | `feature/worldcup-challenge-2026-api` origin 푸시 (`50f1b02`) |
| 깃&배포 관리자께 DEV 배포 요청 | ✅ 완료 | **PR #24** 생성 (feature→dev) https://github.com/sirjuseyo/sirjuseyo-admin/pull/24 |
| 관리자 머지 → DEV 반영 | ✅ 완료 | 최종 image `dev-20260602T021207UTC` rollout success·liveness200 (T-026 bean·T-027 bigint 핫픽스 포함 3차 반영) |
| #18 개발자 API 테스트 (API↔DB) | ✅ 완료 | DEV 실호출: 정상201(id=1 DB실적재, 한글·하이픈제거·RECEIVED 확인) + 400 3종(필수누락/포인트N/중복phone) 정확 / DB 1건만(오염無)·테스트데이터 보존 |
| 종합 `테스트완료` 판정 | ⏳ 대기 | **최종 클라(신청 폼) 테스트 후 결정** — Phase 2/5 |
