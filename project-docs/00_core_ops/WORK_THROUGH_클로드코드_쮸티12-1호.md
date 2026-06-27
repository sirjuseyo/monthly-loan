# WORK_THROUGH — 써주세요 월별대출 탈리 내재화
**최초 작성일:** 2026-05-31
**작성자:** 댄디어빠쮸너야님
**대상:** ClaudeAppCode 쮸티12호
> ⚠️ 이 파일은 덮어쓰지 말고 반드시 이어서 기록할 것

---

## WT-039 · T-039 [감다살 상세 카피·UI 일괄 수정] 단순 텍스트/스타일

| 항목 | 내용 |
|---|---|
| 작성일시 | 2026-06-04 | 작성자 | 쮸티12호 |
| 상태 | ✅ 완료 — PR#14 main merge(`183ac46`)·GitHub Pages 배포·운영검증 완료(run `26898681849`) |

[배경] 감다살🐙문어 챌린지 상세 페이지(DEV `index-dev.html` + PRD `index.html`) 카피·UI를 사장님 지시로 단건씩 다수 수정. **단순 텍스트/스타일 수정이라 W-041 분석출력 생략, 수정 내역으로 일괄 표기(사장님 지시).**
[대상] `2026-06/worldcup-challenge/index-dev.html`(DEV) + `index.html`(PRD) 2파일 동일 반영.

[처방 — 수정 내역]
① **보상설명**: 경기당 `+10만 원×3경기=30만 원`→`추가 대출 10만 원×3경기` / 최종 `+10만 원`→`추가 대출 10만 원` / 총합 `총 최대 50만 원.`(끝 점 삭제) → 최종 `전부 맞히면 추가 대출 최대 50만 원`
② **🐙티켓 5박스**: reward `10만 원`→`추가 대출 10만 원` / condition `한국`→`대한민국`
③ **합계박스(✨)**: `총 최대 50만 원`→`추가 대출 최대 50만 원` (보상설명과 통일, 「총」 삭제)
④ **사용방법**: `승인/입금 후`→`승인 후` / 톡문의 어순재배열 / `진행`→`진행하는데요. 단,` / `승인 후 바로 대출`→`⚡ 신청 후 바로 심사! 바로 입금!`(강조) / `10만(원리현)·20만(이포)·30만·50만(원리포)`→`💎 이자 미션과 원금 미션이 없는 10·20만 원(원리현)`(강조)
⑤ **자격**: `이벤트 신청 자격`→`챌린지 신청 자격`
⑥ **경기일정 `.match-date`**: 빨강+볼드 제거 (color `--korea-red`→`--text`, font-weight 700→400)
⑦ **💡핵심박스**: 2줄 레이아웃 + 본문 볼드 제거(`.method-highlight` font-weight 600→400) + 불릿 `∙`
⑧ **⚠️박스**: `집중`→`신청 전 필수 확인` 타이틀 / 본문 2줄 불릿 `∙` / 차감 워딩(`차감합니다.`→`차감하며,`)
⑨ **`6개월 이내`**: 빨강→검정 볼드 (인라인 `color:var(--text)`)
⑩ **푸터**: `감다살🐙문어 챌린지 · 2026 북중미 월드컵 한정 이벤트`→`2026 북중미 월드컵 한정 · 감다살🐙문어 챌린지`
⑪ **하단CTA**: `한국 운명`→`대한민국 운명`
⑫ **`한국`→`대한민국` 전 페이지 통일**(meta·히어로·경기일정제목·유의사항·주석·티켓 등) ※단 `(한국 시간)`은 표준표현이라 한국 유지(사장님 지시)

[검증] grep `한국` 잔여 0건(DEV/PRD 양쪽) / DEV·PRD 동일 반영. DEV 브라우저 미리보기 확인.
[배포 정책] 웹 레포(monthly-loan)는 dev 브랜치 없음 — feature→main 단일. PRD `index.html`+DEV `index-dev.html` 동시 배포(GitHub Pages 1회).

---

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 — T-039 (보관, 정책 201~205 · 마지막 WT-ID 밑)
```
[GitHub Pages PRD : 깃 & 배포 관리자 → 개발자]

monthly-loan T-039 반영 완료했습니다.

작업 내용:
- PR #14 feature/T-001-jun-loan-landing → main merge 완료
- merge commit: 183ac465630076656ea47dd65262bc5829e5b6a5
- GitHub Pages 운영 배포 완료

검증:
- GitHub Pages run 26898681849 success
- PRD 상세 URL HTTP/2 200
- DEV 상세 URL HTTP/2 200
- 운영 본문 PRD/DEV 모두 `대한민국 운명`, `추가 대출 최대 50만 원`, `한국 시간`, `신청 전 필수 확인` 확인
- 운영 본문 PRD/DEV 모두 `총 최대` 미검출
- main 기준 `한국`은 `한국 시간`에만 잔존 확인

문서:
- TODO_BOARD W-024/T-024 완료 처리   ※관리자측 표기오류(실제 대상 T-039) — 개발자 비고
- WORK_THROUGH WT-024 완료 보고서 작성  ※관리자측 표기오류(실제 WT-039)
- project-docs 문서 커밋/푸시 완료: 98ce6c6

한 줄:
- monthly-loan T-039 PR #14 main 반영 완료, merge 183ac46, Pages run 26898681849 success, 감다살 상세 DEV/PRD 카피·UI 반영 확인했습니다.
```

---

## WT-036 · T-036 [공통푸터 수정] 고객센터 사업문의·광고문의 삭제
| 항목 | 내용 |
|---|---|
| 작성일시 | 2026-06-03 | 작성자 | 쮸티12호 |
| 상태 | 진행중 — footer.js 수정 완료, DEV 검증 완료 |

[처방] `footer.js`(공통자산 1파일) 고객센터 카드에서 사업문의(dandy@)·광고문의(hailey@) 2줄 삭제 → 대표전화+고객문의(customer@)만. ※1파일=12페이지 전부 반영.
[검증] DEV 브라우저: 고객센터 rows=[대표전화, 고객문의], dandy/hailey 없음 확인.

---

## WT-038 · T-038 [감다살 신청폼] 포인트 미보유 닫기 → 감다살 챌린지 홈

| 항목 | 내용 |
|---|---|
| 작성일시 | 2026-06-03 | 작성자 | 쮸티12호 |
| 상태 | 진행중 — DEV+PRD 수정 완료, DEV 브라우저 검증 완료 |

[문제] 감다살 신청폼 포인트 "아니오" → 경고 → "닫기"(closeForm) → `window.close()`(같은탭 무효) + `https://monthly-loan.sirjuseyo.com/2026-06/`(호국보훈 PRD)로 리다이렉트. → ①감다살 아닌 호국보훈으로 감 ②DEV→PRD 샘 ③같은탭이라 window.close() 먹통.
[결정] 외부웹이라 앱 적립소 불가 / 웹홈은 앱홈과 동일 UI라 무의미 → **감다살 챌린지 홈(상세)으로 복귀** (사장님 확정).
[처방] `closeForm()`에서 window.close()·구 PRD URL 삭제 → 상대경로 리다이렉트:
- DEV `apply/index-dev.html` → `../index-dev.html` (감다살 상세 DEV)
- PRD `apply/index.html` → `../index.html` (감다살 상세 PRD)
[검증] DEV 브라우저(localhost:5503): closeForm() → `/worldcup-challenge/index-dev.html`(감다살 상세 DEV·배너) 복귀 확인. 같은 탭·DEV→DEV.

---

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 — T-038 (보관, 정책 201~205 · 마지막 WT-ID 밑)
```
[GitHub Pages PRD : 깃 & 배포 관리자 → 개발자]
monthly-loan T-038 반영 완료했습니다.

작업 내용:
- PR #13 feature/T-001-jun-loan-landing → main merge 완료 / merge commit 71615ee9d999c6ba9d8962fd7f8361e1f08417bc
- GitHub Pages 운영 배포 완료

검증:
- GitHub Pages run 26855320854 success / PRD·DEV 신청폼 HTTP/2 200
- main 기준 DEV closeForm() → ../index-dev.html 확인 / PRD closeForm() → ../index.html 확인
- window.close() 제거 확인 / 호국보훈 PRD 절대 URL 리다이렉트 제거 확인

문서: TODO_BOARD·WORK_THROUGH 반영 / 문서 커밋 6f4836d

한 줄: monthly-loan T-038 PR #13 main 반영 완료, merge 71615ee, Pages run 26855320854 success, 감다살 신청폼 닫기 DEV/PRD 상대경로 복귀 확인.
```

---

## WT-037 · T-037 [신청폼 탭 통일] 호국보훈 상세→신청폼 같은 탭
| 항목 | 내용 |
|---|---|
| 작성일시 | 2026-06-03 | 작성자 | 쮸티12호 |
| 상태 | 진행중 — DEV+PRD 수정 완료, DEV 검증 완료 |

[문제] 호국보훈 상세 신청버튼 `target="_blank"`(별도탭) ↔ 감다살 같은탭 → 불일치.
[처방] `2026-06/index-dev.html`(DEV) + `2026-06/index.html`(PRD) SpringMarch-waiting-button `target="_blank"` 제거 → 같은 탭(감다살과 통일). ※감다살 무수정.
[검증] DEV 브라우저: 신청버튼 target=(none), href=../apply/apply-dev.html 확인.

---

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 — T-035/036/037 (보관, 정책 201~205 · 마지막 WT-ID 밑)
```
[GitHub Pages PRD : 깃 & 배포 관리자 → 개발자]
monthly-loan T-035/T-036/T-037 반영 완료했습니다.

작업 내용:
- PR #12 feature/T-001-jun-loan-landing → main merge 완료 / merge commit 27262b15aa1cbe452c36c34b4ca7840216a9413c
- GitHub Pages 운영 배포 완료 / 공통 footer.js 및 12개 DEV/PRD 페이지 script 포함 확인
- 호국보훈 상세 신청버튼 target="_blank" 제거 확인

검증:
- GitHub Pages run 26852413538 success
- https://monthly-loan.sirjuseyo.com/footer.js HTTP/2 200 / 홈·호국보훈상세·loan-checker 200
- footer.js 내 #sjy-footer, www.sirjuseyo.com 절대경로, 대표전화/고객문의 확인
- 사업문의/광고문의/dandy/hailey 미노출 확인 / 12개 페이지 모두 /footer.js 포함 확인

문서: TODO_BOARD·WORK_THROUGH 반영 / 문서 커밋 cc0a8f5

한 줄: monthly-loan T-035/036/037 PR #12 main 반영 완료, merge 27262b1, Pages run 26852413538 success, 공통 footer 및 신청 같은 탭 반영 확인.
```

---

## WT-035 · T-035 [공통푸터] 써주세요 공용 푸터 전 페이지 이식 (footer.js)

| 항목 | 내용 |
|---|---|
| 회차 | 1~2회차 |
| 작성일시 | 2026-06-03 |
| 작성자 | 쮸티12호 |
| 레포 | 웹 `monthly-loan` |
| 상태 | 진행중(In-Progress) — 구현+브라우저 검증 완료, 사장님 테스트·커밋 대기 |

---

[작업 목표] 써주세요 공용 푸터(Contact~저작권, 소스 sirjuseyoWeb/index.html 386~489 원본 그대로)를 월별대출 전 페이지에 이식. 공통자산 방식(중복0·유지보수1곳).

[1회차 — footer.js 공통자산 + 12페이지 링크]
- 신규 `/footer.js` 생성: 소스 푸터 HTML+CSS 추출, `#sjy-footer`로 CSS 스코핑(원본 디자인 유지+기존 페이지 무충돌), DOMContentLoaded 시 body 끝에 주입
- 12개 페이지(홈·호국보훈상세/신청폼·감다살상세/신청폼·loan-checker, PRD+DEV)에 `<script src="/footer.js"></script>` 1줄씩
- 홈(가) 우선 적용 → 브라우저 검증(Contact·법적·About us·저작권 전부)

[2회차 — 자산 도메인 정정 (중요)]
- 1회차 자산 절대경로를 `https://sirjuseyo.com/`으로 했으나 → apex는 404
- CNAME 확인: 메인 사이트 = `www.sirjuseyo.com` → 전부 `https://www.sirjuseyo.com/`으로 정정
- 검증(curl): 로고·약관3·PDF3 전부 www 200

[검증 — Chrome 실측(localhost:5503)]
- 홈: 푸터 주입·로고 로드(naturalWidth 300)·링크 www 정상
- 감다살 신청폼(다른 CSS 프레임워크): 푸터 원본 그대로 렌더링·로고·저작권 정상 (스코핑 무충돌 확인)
- 12개 전부 `footer.js` 스크립트 1줄 보유 확인

[남은 작업] 사장님 테스트 → 커밋·푸시·PR
> ※ 저작권 텍스트 "(sirjuseyo.com)"은 원본 그대로 유지(URL만 www)

---

## WT-034 · T-034 [Phase 6~7] PRD DB 테이블 생성 (운영 RDS)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-03 |
| 작성자 | 쮸티12호 |
| 대상 | 운영 RDS `sjy-nano-production` / DB `nano` |
| 상태 | 테스트 완료(DONE) — 운영 테이블 생성·검증 완료 |

---

[작업 목표] 운영(PRD) DB에 challenge_worldcup_2026_application 테이블 생성 (DEV와 동일, 쮸티12호 직접 — 서버 PRD 배포 선행조건)

[① 읽기전용 확인 — 운영 맞는지·테이블 부재]
- host `sjy-nano-production`(운영 확실) / DB `nano` / 계정 `sirjuseyo@%` / @@read_only=0
- nano 총 58 테이블(실 운영 DB 확인) / challenge 테이블수=0(부재 확인)

[② 사장님 승인 → CREATE TABLE 실행]
- DDL: `project-docs/00_plan/DDL_challenge_worldcup_2026_application_20260602.sql` (PK bigint 반영본)
- 검증: 테이블존재=1 / 25컬럼 / 5인덱스 / PK **bigint**·auto_increment·PRI / 기본값(status_cd=RECEIVED·point_confirmed_cd=N·is_deleted=0·total_hit_count=0) 정상
- 기존 58개 테이블 무변경(신규 1개만 추가)

[결과] 운영 DB 준비 완료 → 서버 PRD 배포 시 Hibernate schema-validation 통과 예정. (DEV와 동일 스키마)

[남은 작업(Phase 7)] 서버 PRD 배포 → 어드민 PRD → 웹 PR#11 main머지 → 운영 동선확인 (일괄 작업요청서)

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 — PRD 일괄 배포 (보관, 정책 201~205 · 마지막 WT-ID 밑)
> 감다살🐙문어 챌린지 운영(PRD) 전체 배포 완료. 원문 그대로 보관.
```
[깃 & 배포 관리자 → 개발자/사장님]
감다살🐙문어 챌린지 PRD 일괄 배포 완료했습니다.

작업 내용:
- sirjuseyo-admin 전체 dev->main 병합 없이 요청 커밋만 선별 cherry-pick
  - 31beb1f T-025 신청 접수 API / d4af3c2 T-026 bean scan 핫픽스 / b493ec0 T-031 어드민 조회·채점 API
- 서버 PRD image main-20260602T185211UTC 배포
- EKS dispatch 실패 후 수동 GitOps 보정: sirjuseyo-eks commit 8df234b
- admin-web 전체 dev->main 병합 없이 T-032만 선별 반영: 8d45657 / 운영 S3·CloudFront 배포
- monthly-loan PR #11 main merge: merge commit bbeb1a9

검증:
- 서버 Deploy run 26841122436 success / admin-prod-deploy rollout success, pod 1/1, restart 0 / PRD liveness 200
- 신청 API GET -> 405(allow POST) / 운영 신청 POST 201, 생성 id 1
- 어드민 인증 API 비인증 호출 401 / admin-web https://admin.sirjuseyo.com/ 200
- CloudFront invalidation ICXV90F1K5SQCUYUR5TQ4XP2D1 completed
- monthly-loan Pages run 26841581778 success / 홈·상세·신청 URL 200

주의:
- 운영 테스트 신청 데이터 id 1 생성됨
- 어드민 실제 조회·채점은 관리자 로그인 세션 필요 → 비인증 401까지만 확인

문서: project-docs 반영 / 문서 커밋 feea658

한 줄: 감다살🐙문어 챌린지 PRD 일괄 배포 완료, 서버 b493ec0/EKS 8df234b/admin-web 8d45657/monthly-loan bbeb1a9 반영 및 운영 POST 201까지 확인.
```

---

## WT-033 · T-033 [Phase 5 회귀수정] DEV 홈/챌린지 — DEV 배너 + DEV→DEV 링크 + PRD 승무패

| 항목 | 내용 |
|---|---|
| 회차 | 1~5회차 (반복 수정) |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| 레포 | 웹 `monthly-loan` |
| 상태 | 진행중(In-Progress) — 수정 완료, 사장님 재테스트·커밋 대기 |

---

[문제 — Phase 5 회귀 점검 중 사장님 발견]
- DEV 홈(`index-dev.html`) 등에 DEV 표시 배너 없음
- DEV 페이지가 PRD로 연결됨 (홈DEV 신청하기→/2026-06/(PRD), 승무패→/2026-06/(PRD), 호국보훈상세DEV 신청→apply.html(PRD))

[처방]
(A) DEV 배너 추가 (apply-dev.html 패턴 동일: 주황 #FF5400 바 "🚧 DEV 테스트 환경 — 실사용자 접근 금지", body 직후):
- `index-dev.html`(홈) / `2026-06/worldcup-challenge/index-dev.html`(감다살 상세) / `2026-06/worldcup-challenge/apply/index-dev.html`(감다살 신청폼)
(B) DEV→DEV 링크 정합:
- `index-dev.html`: 호국보훈 신청하기 `./2026-06/`→`./2026-06/index-dev.html` / 승무패 `./2026-06/`→`./2026-06/worldcup-challenge/index-dev.html`
- `2026-06/index-dev.html`: 호국보훈 신청 `https://.../apply/apply.html`(절대PRD)→`../apply/apply-dev.html`(상대DEV, 로컬테스트 가능)
- ※PRD 파일(index.html 등) 무수정 확인

[1회차 검증] 배너 3곳 + DEV 링크 정합 grep 확인 / PRD 무손상

---

[2회차 — 사장님 발견: 호국보훈 상세 DEV 배너 누락]
- `2026-06/index-dev.html`(호국보훈 상세 DEV)에도 DEV 배너 추가 (1회차 배너 목록에서 빠졌음)
- 검증: DEV 배너 보유 5곳(홈·호국보훈상세·호국보훈신청폼·감다살상세·감다살신청폼)

[3회차 — 사장님 승인(A): loan-checker 포함]
- `loan-checker/index-dev.html`: DEV 배너 추가
- 홈 `index-dev.html`: 검사 시작하기 `./loan-checker/`→`./loan-checker/index-dev.html`
- `loan-checker/index-dev.html` CTA 정적 href `https://.../2026-06/`→`../2026-06/index-dev.html`

[4회차 — loan-checker JS 덮어쓰기 정정 (사장님 "여전히 PRD" 재발견)]
- 원인: loan-checker `index-dev.html` 인라인 스크립트(591행)가 `cta.href = cfg.detailUrl`로 정적 href를 month-config의 PRD URL로 다시 덮어씀
- 수정: DEV 전용 스크립트라 PRD 무영향. detailUrl을 DEV 경로로 변환:
  `cta.href = cfg.detailUrl.replace('https://monthly-loan.sirjuseyo.com/','../').replace(/\/$/,'/index-dev.html')`
- 검증: **Chrome 실측(localhost:5503)** — 홈 검사→`loan-checker/index-dev.html` / loan-checker CTA(JS 실행 후)→`../2026-06/index-dev.html` / 배너 true. 전부 DEV 확인.
- ※기존 PRD 화면 "여전히 PRD"는 사장님 5502 서버/브라우저 캐시였음(파일·런타임은 정상)

[5회차 — 사장님 지시(item3): PRD 홈 승무패 링크 정정]
- `index.html`(PRD 홈) 승무패 `./2026-06/`(호국보훈)→`./2026-06/worldcup-challenge/`(감다살 PRD 상세)
- ※W-035 당초 'PRD 무수정' 범위였으나 사장님 지시로 PRD 1건 수정 (범위 확장)
- ⚠️ **배포 타이밍 경고**: PRD 감다살 신청폼→PRD admin-api(챌린지 API 미배포). 이 PRD 링크 단독 운영배포 시 실사용자 신청 404. **반드시 Phase 7(서버 PRD)과 함께 출시**.

[최종 변경 파일 (6 DEV + 1 PRD)]
- DEV: `index-dev.html`, `2026-06/index-dev.html`, `2026-06/worldcup-challenge/index-dev.html`, `2026-06/worldcup-challenge/apply/index-dev.html`, `loan-checker/index-dev.html` (+ 기존 `apply/apply-dev.html`는 배너 기보유)
- PRD: `index.html` (승무패 링크 1건)

[커밋·푸시·PR — ✅ 완료]
- 코드 커밋 `2e405ab`(DEV5+PRD1) / 문서 커밋 `ff9fc87`
- 푸시 `feature/T-001-jun-loan-landing` / PR #11 (feature → main)

### 📤 깃 & 배포 관리자 작업요청서 (보관, 양식 6-⑥)
```
[개발자 -> 깃 관리자 전달]

monthly-loan T-033 작업 완료했습니다.
`feature/T-001-jun-loan-landing` 원격 푸시 완료했고 PR은 `#11`입니다.

작업 내용:
- DEV 환경 배너(주황 #FF5400) 추가: 홈/호국보훈상세/감다살상세/감다살신청폼/loan-checker
- DEV→DEV 링크 정합: 홈(신청·승무패·검사) / 호국보훈상세 신청 / loan-checker CTA(정적+인라인JS detailUrl→DEV 변환)
- PRD index.html 승무패 ./2026-06/ → ./2026-06/worldcup-challenge/ (호국보훈→감다살)

검증:
- Chrome 실측(localhost:5503): 홈/loan-checker 모든 링크 DEV 이동 + 배너 표시 확인

커밋:
- `2e405ab` `fix(dev): DEV 배너 + DEV→DEV 링크 정합 + PRD 승무패 링크 [T-033]`

문서:
- `project-docs` (웹 레포 monthly-loan, 문서 전용)
- 브랜치: `feature/T-001-jun-loan-landing`
- PR: `#11` (코드와 동일 PR)
- 문서 커밋: `ff9fc87` `docs: T-033 DEV 배너/링크 + PRD 승무패 기록 (WT-033 1~5회차) [T-033]`

한 줄 버전:
- monthly-loan T-033 완료, feature/T-001-jun-loan-landing 푸시 및 PR #11 생성, Chrome 실측 검증 했습니다. 깃 & 배포 관리자님 검토 부탁드립니다.
```

[남은 작업]
- 깃&배포 관리자 PR #11 검토·반영 → 작업완료서 수령

---

## WT-032 · T-032 [Phase 3-🅑] 어드민 UI (admin-web, Vue.js)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| 레포 | `Claude_Server_20260413/admin-web` |
| 브랜치 | `feature/worldcup-challenge-2026-admin` (origin/dev 최신화 후 분기) |
| 상태 | 테스트 완료(DONE) — DEV 배포·사장님 검증 완료 (PR#18 `a98ece0`, 정정 재배포 후 메뉴·리스트·상세·채점 정상) |

---

[작업 목표]
감다살🐙문어 챌린지 어드민 화면(리스트·상세·채점·CSV) 구현. **선배(review-application) 화면 카피캣 — 자의적 디자인 0.**

[처방 — 신규 3 + 수정 2]
- `service/worldcupChallenge/worldcupChallengeAPI.js` — review API 패턴 카피 + 챌린지 엔드포인트 + CSV(blob)
- `views/pages/worldcup-challenge/WorldcupChallengeApplicationList.vue` — ReviewApplicationList 카피캣 (필터·페이지네이션·테이블·CSV / `cw-` prefix / 6상태 / §6-2 컬럼: 예측5종·적중수·보상금액 추가)
- `views/pages/worldcup-challenge/WorldcupChallengeApplicationDetail.vue` — ReviewApplicationDetail 카피캣 (ID네비·헤더·2열카드 / `cwd-` prefix / 섹션: 기본정보·예측5종·채점입력5체크박스+자동계산·상태변경·메모)
- `router/index.js` — lazy import 2 + route 2 (review 라우트 패턴 동일)
- `_nav.js` — 사이드바 메뉴 "감다살🐙문어 챌린지" 추가 (TECHSPEC §6-1: 신청>Nano Credit 아래)

[검증]
- 정식 lint(vue-cli-service lint): 실제 코드 에러 0. 잔여는 전부 도구 아티팩트
  (.vue Parsing error = 벤치마크 review도 동일 / .js vue규칙오적용 = vue-eslint-parser 버전 불일치)
- ⚠️ 로컬 정식 빌드 미완: node-sass(4.13)↔Node20 비호환으로 기존 scss 파일에서 실패(환경 문제, 내 파일과 무관·내 파일 plain style). 관리자 CI(정상 env) 빌드 검증 예정.
- 코드 구조: 선배 벤치마크와 동일 패턴, plain `<style>`(scss 미사용)

[DEV 배포 완료 — 깃&배포 관리자 PR #18 dev 머지 + DEV 정적 배포]
- merge commit `a98ece0` / Docker Node12 build 성공 / S3 `dev-admin.sirjuseyo.com` + CloudFront invalidation Completed / DEV WEB 200
- `/challenge/**` 비인증 401 (인증경계 정상)
- ⚠️ `admin-web main...dev` diverged (PR 후 dev ahead 4 / behind 4) → **PRD 전체 dev→main 병합 금지, T-032 커밋만 선별 반영**

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 (보관 — 정책 201~205, 마지막 WT-ID 밑)
```
[DEV : 깃 & 배포 관리자 -> 개발자]
admin-web T-032 반영 완료했습니다.

원격 머지: feature/worldcup-challenge-2026-admin -> dev / PR #18 / merge commit a98ece08080217162a36d533e8b2a1c58786dcfd
DEV 정적 배포:
- Docker Node12 npm install && npm run build:dev 성공
- S3 s3://dev-admin.sirjuseyo.com/ / CloudFront invalidation IOBM0Y5ZZSSLU6RLSDZLPSQ3W status Completed
- DEV WEB https://dev-admin.sirjuseyo.com/ HTTP/2 200
확인:
- admin-web 레포에는 GitHub Actions workflow/checks 없음
- https://dev-admin-api.sirjuseyo.com/challenge/worldcup-challenge-2026/applications 비인증 HTTP/2 401 (어드민 API 인증경계 정상)
주의:
- 로컬 Node v25 build는 구형 webpack/OpenSSL 오류로 실패했으나 Docker Node12 기준 빌드 성공
- admin-web main...dev diverged. PR 병합 후 dev ahead 4 / behind 4 → PRD 전체 dev->main 병합 금지. PRD 반영 요청 시 T-032 대상 커밋만 선별 반영
문서: GitDeployOps TODO/WORK_THROUGH 업데이트, 완료보고서 WT-011 / project-docs commit 0aefda4

한 줄: admin-web T-032 PR #18 dev merge 완료, Docker Node12 DEV build 및 S3/CloudFront 정적 배포 완료, DEV URL 200 및 어드민 API 비인증 401 확인. PRD는 main/dev diverged로 전체 병합 금지.
```

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 — ②차(DEV 오배포 정정 재배포) (직전 보고서 밑 이어서 보관)
> ⚠️ 1차 DEV 배포 산출물이 **로컬 main 기준으로 빌드**되어 메뉴 미노출 → dev 기준 정정 재배포. **개발자 커밋/푸시는 정상(추가 수정 불필요)** 확인됨.
```
[깃 & 배포 관리자 → 개발자]
admin-web T-032 DEV 오배포 정정 재배포 완료했습니다.

원인:
- PR #18은 dev에 정상 머지됐으나, 이전 DEV 배포 산출물이 로컬 main 기준으로 생성됨
- 개발자 커밋/푸시는 정상이며 추가 수정/복원 작업 불필요

재배포:
- 원격 dev commit a98ece08080217162a36d533e8b2a1c58786dcfd 기준 재빌드
- Docker Node12 npm run build:dev 성공 / S3 s3://dev-admin.sirjuseyo.com/ 재동기화
- CloudFront /* 무효화: I9QWZI8CB2HREAM0E9WYK6DS27

검증:
- DEV WEB https://dev-admin.sirjuseyo.com/ → HTTP/2 200
- 배포 JS /29.js 에 '감다살🐙문어 챌린지' 및 '/pages/worldcup-challenge/list' 포함 확인
- DEV admin API 비인증 → HTTP/2 401

문서: T-012/W-012/WT-012 검증완료, WORK_THROUGH WT-012 / 원격 문서 커밋 ecb53c7

한 줄: admin-web T-032 DEV 오배포 정정 완료, 원격 dev a98ece0 기준 클린 재빌드/재업로드/CloudFront 무효화 완료, DEV URL 200 및 메뉴 번들 포함 확인.
```

---

## WT-031 · T-031 [Phase 3-🅐] 어드민 서버 API (sirjuseyo-admin, /challenge/** 인증)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| 레포 | `Claude_Server_20260413/sirjuseyo-admin` |
| 브랜치 | `feature/worldcup-challenge-2026-admin-api` (origin/dev 최신화 후 분기) |
| 상태 | 테스트 완료(DONE) — DEV 배포·검증 완료 (PR#25 `436447a`) |

---

[작업 목표]
TECHSPEC §5-2~5-6 어드민 조회·채점·상태·CSV API를 sirjuseyo-admin에 구현 (인증 /challenge/**).

[처방 — 신규 5 + Entity 메서드 1]
- `AdminChallengeWorldcup2026ApplicationController` — GET 목록/상세, PATCH 채점/상태/메모, GET CSV
- `AdminChallengeWorldcup2026ApplicationService` — §5-2~5-6 로직 (review 어드민 패턴 동일)
- `...ApplicationListItemVO` / `...ApplicationDetailVO`(+prev/next 네비) — 코드→라벨 변환
- `...ScoringRequestVO` — 채점 입력(hit 5종 0/1)
- Entity `updateScoring(...)` 메서드 추가
- 채점 로직: total_hit_count=hit5합 / ticket_amount=합×10(만원) / 0→MISS·≥1→HIT 자동
- 목록 page 1-base→Spring 0-base 변환, status_cd/name/phone 필터, 페이지네이션
- CSV: UTF-8 BOM + 12컬럼(코드→라벨), 필터 §5-2 동일

[보안 점검 §8-1 11~13]
- 인증: /challenge/** → 기존 anyRequest().authenticated() 자동 적용 ✅
- HTTPS: 인프라(Ingress/도메인) 레벨 ✅ 무수정
- Rate Limit(§5-1, IP 분당10): 어드민 무관·신청접수 API 대상 → **W-034 최후순위 분리(사장님 결정)**

[검증]
- ./gradlew compileJava --offline (JAVA8/Gradle5.6.4) → BUILD SUCCESSFUL
- 어드민 6개 .class 생성 확인

[커밋·푸시·PR — ✅ 완료]
- 로컬 커밋 `b5fe8a4` → `feature/worldcup-challenge-2026-admin-api` 푸시
- PR #25 (feature → dev): https://github.com/sirjuseyo/sirjuseyo-admin/pull/25

### 📤 깃 & 배포 관리자 작업요청서 (Phase 3-🅐 — 보관, 양식 6-⑥)
```
[개발자 -> 깃 관리자 전달]

sirjuseyo-admin T-031 작업 완료했습니다.
`feature/worldcup-challenge-2026-admin-api` 원격 푸시 완료했고 PR은 `#25`입니다.

작업 내용:
- 감다살🐙문어 챌린지 어드민 조회·채점 API 신규 구현 (TECHSPEC §5-2~5-6, 인증 /challenge/**)
- GET 목록(필터·페이지네이션·코드→라벨) / GET 상세(+prev·next) / PATCH 채점(자동계산) / PATCH 상태 / PATCH 메모 / GET CSV(UTF-8 BOM)
- 채점 로직: total_hit_count=hit5합, ticket_amount=×10, 0→MISS·≥1→HIT 자동
- 인증·HTTPS 기존 충족(무수정) / Rate Limit은 신청접수 API 대상 별도(W-034)

검증:
- ./gradlew compileJava → BUILD SUCCESSFUL (Java8/Gradle5.6.4)
- 벤치마크 review-application 어드민 패턴 동일

커밋:
- `b5fe8a4` `feat(challenge): 감다살문어 챌린지 어드민 조회·채점 API [T-031]`

문서:
- project-docs (웹 레포 monthly-loan, 문서 전용)
- 브랜치: feature/T-001-jun-loan-landing
- PR: 문서 PR 별도 미생성 (project-docs는 push-only 정책)
- 문서 커밋: `f86619e` `docs(challenge): Phase3-🅐 어드민 API 기록 [T-031/W-032·W-034]`

한 줄 버전:
- sirjuseyo-admin T-031 완료, feature/worldcup-challenge-2026-admin-api 푸시 및 PR #25 생성 완료, 컴파일(BUILD SUCCESSFUL) 검증 했습니다. 깃 & 배포 관리자님 feature → dev 검토 부탁드립니다. (dev 먼저 배포)
```

[DEV 배포 완료 — 깃&배포 관리자 PR #25 dev 머지 + DEV 배포]
- merge commit `436447a` / DEV image `dev-20260602T133152UTC` / rollout success·pod 1/1·liveness 200
- `/challenge/**` 비인증 GET → 401 (인증경계 정상) / bean·schema validation 오류 미재발

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 (보관 — 정책 201~205, 마지막 WT-ID 밑)
```
[깃 & 배포 관리자 → 개발자]
sirjuseyo-admin T-031 감다살문어 챌린지 어드민 조회/채점 API PR #25 dev 반영 및 DEV 배포 검증 완료했습니다.

작업 내용:
- PR #25 feature/worldcup-challenge-2026-admin-api → dev 병합 완료
- merge commit: 436447a74e3022682f30d06f20a2a367284cd920
- 신규 DEV image 생성 및 ECR push 완료 / DEV Kubernetes 배포 반영 완료
- /challenge/** 어드민 인증 경계 확인

검증:
- PR CI build-test → pass / admin Deploy GitHub Actions run 26823104036 → success
- DEV image dev-20260602T133152UTC (digest sha256:5febe86e...0f5a88)
- admin-dev-deploy rollout success / pod admin-dev-deploy-54c4447dd-4kmbv Ready 1/1 restart 0
- https://dev-admin-api.sirjuseyo.com/liveness → HTTP/2 200
- 비인증 GET /challenge/worldcup-challenge-2026/applications → HTTP/2 401
- Spring 로그: repository scan 17/25 정상 / member·nano EMF 초기화 정상 / Started AdminApplication / 이전 bean 미등록·schema validation 오류 미재발

배포 특이사항:
- EKS 자동 Repository Dispatch run 26823219064는 'Missing kustomization for admin/dev'로 실패
- 수동으로 sirjuseyo-eks/admin/dev/kustomization.yaml image tag 갱신 후 반영
- GitOps commit: e7cf571 deploy(dev): apply admin challenge management image / kubectl apply -k admin/dev 완료

문서:
- GitDeployOps TODO_BOARD W-009/T-009 검증완료 / WORK_THROUGH WT-009 완료보고서
- 문서 커밋: 3368e95 docs(gitdeploy): record admin challenge management dev deployment

한 줄: sirjuseyo-admin T-031 PR #25 dev merge 완료, image dev-20260602T133152UTC DEV 배포 완료, rollout success, pod 1/1 restart 0, liveness 200, /challenge/** 비인증 401 확인.
```

---

## WT-030 · T-030 [Phase 2 수정A] 상세→신청 CTA DEV/PRD 라우팅 정합

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| 파일 | `2026-06/worldcup-challenge/index-dev.html` (상세 DEV) |
| 상태 | 진행중(In-Progress) — 수정 완료, 재테스트·커밋 대기 |

---

[문제 — 사장님 지적]
DEV 상세(`index-dev.html`)의 신청 CTA `href="./apply/"` → 디렉토리 기본문서 `apply/index.html`(PRD 신청폼)으로 연결됨.
→ DEV 상세에서 신청 눌러도 PRD 폼이 열려 운영 admin-api로 POST → 404 → 사장님 테스트 실패(완료화면X·DB적재X·"No message available" 에러).
→ 사장님이 본 증상 1·2·3 전부 이 라우팅 오류 하나에서 파생.

[처방]
- `index-dev.html` 상세 CTA: `href="./apply/"` → `href="./apply/index-dev.html"` (DEV 상세 → DEV 신청폼)
- PRD 상세(`index.html`)는 `href="./apply/"`(=index.html PRD) 유지 — 정상, 무수정

[검증]
- DEV 상세 CTA = `./apply/index-dev.html` ✅ / PRD 상세 CTA = `./apply/` ✅
- 재테스트: `http://localhost:5502/2026-06/worldcup-challenge/index-dev.html` → 신청 → DEV 폼 → dev-admin-api → DB 적재 (사장님 재확인 예정, ※localhost로 접속)

[커밋·푸시·PR — ✅ 완료]
- 로컬 커밋: `210a1f3`(코드 T-029/030) + `766380d`(기록 T-025~030)
- 푸시: `feature/T-001-jun-loan-landing` (`8199d4b..766380d`, 8커밋)
- **PR #10** (`feature → main`): https://github.com/sirjuseyo/monthly-loan/pull/10

### 📤 깃 & 배포 관리자 작업요청서 (Phase 2 — 보관, 양식 6-⑥)
```
[개발자 -> 깃 관리자 전달]

monthly-loan T-018~T-030 작업 완료했습니다.
`feature/T-001-jun-loan-landing` 원격 푸시 완료했고 PR은 `#10`입니다.

작업 내용:
- 감다살🐙문어 챌린지 상세 페이지 구현 (T-018~022, DEV/PRD)
- 감다살🐙문어 챌린지 신청 폼 구현 (T-029, DEV/PRD) — API Base 분기(admin-api/dev-admin-api), FINAL_RESULT_CD·POINT_CD 매핑, fetch POST /open/challenge/worldcup-challenge-2026/applications, 오류처리 §7-5, 히어로 이미지
- 상세 CTA 라우팅 정합 (T-030) — DEV상세→DEV신청폼, PRD상세→PRD신청폼

검증:
- DEV 로컬 실테스트: 신청 → dev-admin-api 201 → DEV DB 적재 (id=2 개발자테스트, id=3 사장님 재테스트)
- 코드값 매핑 정상: 있습니다→Y / 16강 진출 (16강 탈락)→R16 / 우승→WIN
- DEV 상세 CTA → DEV 신청폼 연결 정상 확인

커밋:
- `a30eefd` `feat(T-018): 감다살문어 챌린지 상세+신청 폴더 골격 생성`
- `37fb69e` `fix(T-018): 챌린지 히어로 이미지 파일명 확정 + JPG 변환`
- `6d93dc1` `feat(T-019): 감다살문어 챌린지 상세 페이지 코딩 (DEV/PRD)`
- `8ef6521` `fix(T-021): 챌린지 상세 페이지 수정 8건 (DEV/PRD)`
- `93eb6fc` `fix(T-022): 챌린지 상세 페이지 2차 수정 7건 + 기획서·와이어프레임`
- `d2bd3ea` `docs(T-022): 챌린지 기획서·와이어프레임 2차 수정 반영`
- `210a1f3` `feat(challenge): 감다살문어 챌린지 신청 폼 DEV/PRD 구현 + 상세 CTA 라우팅 [T-029/T-030]`

문서:
- `project-docs` (코드와 동일 레포·동일 브랜치)
- 브랜치: `feature/T-001-jun-loan-landing`
- PR: `#10` (코드와 동일 PR)
- 문서 커밋: `766380d` `docs(challenge): Phase1~2 기록 + 산출물 [T-025~T-030]`

한 줄 버전:
- `monthly-loan T-018~T-030 완료, feature/T-001-jun-loan-landing 푸시 및 PR #10 생성 완료, DEV 로컬 실테스트(201·DB적재) 검증 했습니다. 깃 & 배포 관리자님 feature → main 검토 부탁드립니다.`
```

[배포 완료 — 깃&배포 관리자 PR #10 main 병합 + 운영 배포]
- merge commit `1938b0e` / GitHub Pages run `26805706474` success / 상세·신청폼·히어로 운영 200

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 (보관 — 정책 201~205, 마지막 WT-ID 밑)
> monthly-loan T-018~T-030 PR #10 main 반영 + 운영 배포 검증. 원문 그대로 보관.

```
[깃 & 배포 관리자 → 개발자]
monthly-loan T-018~T-030 감다살문어 챌린지 상세/신청폼 PR #10 main 반영 및 운영 배포 검증 완료했습니다.

작업 내용:
- PR #10 feature/T-001-jun-loan-landing → main 병합 완료
- merge commit: 1938b0ec6060b40789ebfdacbbcf4f400c676d5d
- GitHub Pages 운영 배포 완료
- 상세 페이지 DEV/PRD 운영 URL 확인 / 신청폼 DEV/PRD 운영 URL 확인 / 히어로 이미지 운영 URL 확인
- DEV/PRD API base 분기 확인: DEV dev-admin-api.sirjuseyo.com / PRD admin-api.sirjuseyo.com
- 상세 CTA 라우팅 확인: DEV 상세 → ./apply/index-dev.html / PRD 상세 → ./apply/

검증:
- GitHub Pages run 26805706474 → success
- 운영 URL: 상세 PRD/DEV HTTP/2 200 / 신청폼 PRD/DEV HTTP/2 200 / 히어로 JPG HTTP/2 200
- live HTML: FINAL_RESULT_CD 매핑 확인 / POINT_CD 매핑 확인 / DEV 신청폼 dev-admin-api base 확인
  / PRD 신청폼 admin-api base 확인 / DEV·PRD CTA 라우팅 정상 확인

주의:
- 관리자 검증에서는 추가 신청 POST 미수행 (DB write 회피). 개발자 완료보고서의 DEV 로컬 201 및 DB 적재 검증 결과를 인수 기준으로 기록.

문서:
- GitDeployOps TODO_BOARD / WORK_THROUGH WT-008 완료보고서 반영 완료
- 문서 커밋: 380aada docs(gitdeploy): record monthly-loan challenge pages deployment

한 줄: monthly-loan T-018~T-030 PR #10 main merge 완료, merge commit 1938b0e, GitHub Pages run 26805706474 success, 운영 상세/신청폼/히어로 200 및 API base/CTA live HTML 확인 완료.
```

---

## WT-029 · T-029 [Phase 2] 클라 신청 폼 구현 (DEV+PRD 동시)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| 파일 | `2026-06/worldcup-challenge/apply/index.html`(PRD) + `index-dev.html`(DEV) |
| 상태 | 진행중(In-Progress) — 구현+DEV 로컬 실테스트 완료, 커밋·푸시·PR 대기 |

---

[작업 목표]
와이어프레임(`apply-감다살문어챌린지-worldcup_20260602.html`)을 PRD/DEV 실파일로 구현, TECHSPEC §7 연동.

[처방 — 구현]
- 원본(와이어프레임) 그대로 복사 후 정밀 수정 (전사오류 방지). 두 파일 차이 = title·주석·ENV·API_URL 4줄뿐(API Base만 분기).
- API_URL: PRD `https://admin-api.sirjuseyo.com/open/challenge/worldcup-challenge-2026/applications` / DEV `https://dev-admin-api...`
- payload(§7-4): `event_cd` 제거, `point_confirmed_cd`/`predict_final_result_cd` 등 `_cd` 필드, `FINAL_RESULT_CD`(7종)·`POINT_CD`(Y/N) 매핑 추가
- 오류처리(§7-5): 400(서버 message)/429/500/network → 인라인 안내(`err-privacy`), 기존 `alert` 대체
- 히어로 이미지: placeholder div → `<img src="../assets/worldcup-challenge-jun-001.jpg">`
- 클라 검증(이름`^[가-힣]{2,5}$`·휴대폰·이메일·골0~20·동의)은 원본 유지

[검증 — DEV 로컬 실테스트 (A안)]
- 로컬 서버 `http://localhost:5500`(CORS 허용 포트 — AdminCorsFilter 등록 확인) 기동, 실제 Chrome으로 구동
- 랜딩/히어로이미지/완료화면 정상 렌더링 (스크린샷 증빙)
- 폼 실제 함수로 13스크린 진행 → 검증 통과 → 동의 클릭 → **실 fetch → 완료화면(s-done) 도달**
- 매핑 동작 확인: `있습니다→Y`, `16강 진출 (16강 탈락)→R16`
- **DB 실적재 확인: id=2 / name=쮸티로컬 / point_confirmed_cd=Y / predict_final_result_cd=R16 / status_cd=RECEIVED**
- CORS 통과(localhost:5500), 에러 없음 / DB 총 2건(id=1 #18, id=2 로컬폼) 보존

[남은 작업]
1. TODO_BOARD 작업현황 요약표 갱신 + 로컬 커밋(웹 레포 feature 브랜치)
2. 원격 푸시 + PR
> ⚠️ 종합 `테스트완료` 판정은 최종 클라 테스트(사장님) 후 — 본 항목은 개발자 로컬검증까지.

---

## WT-028 · T-028 [Phase 1 #18] 개발자 API 테스트 (DEV API↔DB 연동·적재 확인)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| 대상 | `dev-admin-api.sirjuseyo.com` (curl) + DEV `nano` DB (SELECT) |
| 상태 | 개발자 테스트 완료(DONE) — ※ 최종 `테스트완료` 판정은 최종 클라 테스트 몫 |

---

[목표]
클라 없이 개발자가 직접 DEV API를 호출해 정상/오류 동작 + DB 실적재를 실증. (거짓 보고 금지 — 실제 데이터 보존)

[A. 정상 신청 — ✅ 201]
- `POST /open/challenge/worldcup-challenge-2026/applications` (정상 payload)
- 응답: `{"data":{"challenge_worldcup_2026_application_id":1,"success":true},"error":{"code":"0000"}}` / HTTP 201
- DB 적재 검증(SELECT): id=1 / phone `01012120001`(하이픈제거✅) / point_confirmed_cd Y / predict 5종 정상 / status_cd `RECEIVED`(기본값✅) / is_deleted 0 / created_at 자동
- 한글 무결성: name=`쮸티테스트`, predict_group_result=`2승 1무 0패` (HEX `ECAEB8`=쮸 일치, utf8mb4 정상 저장 — CLI `?` 표시는 출력 charset 이슈)

[B. 오류 검증 — ✅ 400 3종 (TECHSPEC §5-1 메시지 일치)]
- 필수누락(name) → 400 `필수 항목 누락: name`
- 포인트 미보유(point_confirmed_cd=N) → 400 `감다살미션 10,000P 적립이 필요합니다.`
- 중복 phone(01012120001) → 400 `이미 신청 내역이 있습니다.`

[C. DB 오염 없음 — ✅]
- 최종 row_count = 1 (정상 1건만, 400 케이스는 미적재)
- **테스트 데이터 id=1 보존** (삭제 안 함 — 사장님 최종 클라 테스트 시 1번으로 노출)

[결론]
- DEV에서 API↔DB 연동·적재·검증·중복방지 전부 정상 동작 실증.
- Phase 1 #18(개발자 테스트) 완료. **단, T-025/026/027의 종합 `테스트완료`는 최종 클라(신청 폼) 테스트 후 결정.**

---

## WT-027 · T-027 [Phase 1 핫픽스2] 챌린지 PK BIGINT 정합 (DB ALTER)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| 대상 | DEV `nano` DB + TECHSPEC §4-3 / DDL 문서 (서버 코드 변경 없음) |
| 상태 | 진행중(In-Progress) — DEV ALTER+문서반영 완료, 재배포 요청 대기 |

---

[문제 — 깃&배포 관리자 2차 재배포 보고]
- T-026 hotfix(`ee8d8ee`) dev 반영(merge `073fb21`), Java8 compile·Deploy 성공, ECR image `dev-20260602T021207UTC`
- 그러나 신규 image 기동 시 **Hibernate schema-validation 실패**:
  `wrong column type ... [challenge_worldcup_2026_application_id]; found [int (INTEGER)], but expecting [bigint (BIGINT)]`
- 원인: DDL(§4-3)이 PK를 `int`로 정의했는데 JPA Entity는 `Long`(=bigint 기대) → 타입 불일치
- 조치(관리자): 직전 image `dev-20260523T233949UTC` 롤백, DEV 정상

[결정 — 관리자 의견 + 사장님 지시]
- **②안 채택: DB column을 BIGINT로 맞춤** (Entity `Long` 유지, 코드 무변경)
- 사유: 신규 테이블·PK·row 0건·Long ID 패턴 일반적/확장성·PRD 전 DEV schema 교정이 안전

[처방]
1. DEV/PRD 분리 + 현황 확인(읽기): host=`sjy-nano-develop`(DEV 확실), DB=`nano`, PK=`int auto_increment`, **row_count=0(안전)**
2. `ALTER TABLE challenge_worldcup_2026_application MODIFY COLUMN challenge_worldcup_2026_application_id BIGINT NOT NULL AUTO_INCREMENT` 실행
3. 검증: PK타입 `bigint`, NOT NULL, auto_increment, PRI ✅ (Entity Long 정합)
4. 문서 반영: TECHSPEC §4-3 + DDL `.sql`의 PK 정의 `int`→`bigint` (PRD 대비)

[서버 코드]
- 변경 없음 (Entity는 이미 `Long`). 기존 푸시된 커밋 `ee8d8ee` 그대로 재배포하면 schema-validation 통과.

[남은 작업]
1. 깃&배포 관리자께 재배포 요청 (코드 변경 없음, DB schema만 교정됨 → 기존 브랜치/image 재배포)
2. 재배포 후 DEV API 동작 확인 (#18: curl POST → DB 적재 확인)

---

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 (보관 — 정책 201~205, 마지막 WT-ID 밑)
> T-025/T-026/T-027 DEV 반영 전체 이력. 원문 그대로 보관.

```
[DEV : 깃 & 배포 관리자 → 개발자]
sirjuseyo-admin 감다살문어 챌린지 신청 접수 API DEV 반영 최종 완료했습니다.

대상: sirjuseyo-admin / PR #24 / feature/worldcup-challenge-2026-api → dev
API: POST /open/challenge/worldcup-challenge-2026/applications

[1차 반영: T-025]
- PR #24 dev 병합, merge commit 8533c05a7f8dd239ec5c4c8319c2356f15824b6d
- Java8 compileJava 성공 / GitHub Actions Deploy 성공 / ECR image dev-20260602T015104UTC
- DEV 배포 시 Spring startup 실패: ChallengeWorldcup2026ApplicationRepository bean 미등록
  (challenge repository/domain package가 NanoDataSourceConfig scan 범위 미포함)
- 조치: 직전 정상 image dev-20260523T233949UTC 롤백, liveness 200

[2차 반영: T-026]
- hotfix commit ee8d8ee dev 반영, dev merge commit 073fb211498fa31d4becdcbfcd76c7d9098799cc
- 수정: NanoDataSourceConfig repository scan에 repository.challenge / entity scan에 domain.challenge 추가
- Java8 compileJava 성공 / Deploy 성공 / ECR image dev-20260602T021207UTC
- 재배포 시 startup validation 실패: DB column id=int vs Entity Long(expected bigint)
- 조치: 직전 정상 image dev-20260523T233949UTC 롤백, liveness 200

[3차 반영: T-027]
- DEV DB schema 교정 확인 / row_count=0 확인 / id column bigint·PRI·auto_increment 확인
- 코드 추가 커밋 없음 / 기존 image dev-20260602T021207UTC 재적용

[최종 DEV 배포 결과]
- sirjuseyo-eks commit: 532f17e / kubectl apply -k admin/dev
- admin-dev-deploy rollout success / image dev-20260602T021207UTC
- pod admin-dev-deploy-59b98d5cc9-c86mg / Ready 1/1 / restart 0
- liveness https://dev-admin-api.sirjuseyo.com/liveness HTTP/2 200

[최종 확인]
- Repository bean 미등록 오류 미재발 / DB int vs bigint validation 오류 미재발
- DEV 서버 정상 기동 / /open/** permitAll 기존 설정 확인
- Ingress / Route53 / CORS / 인증 설정 변경 없음

문서: GitDeployOps TODO_BOARD/WORK_THROUGH 업데이트(WT-005,006,007) / project-docs commit ab52ee9

한 줄: 감다살문어 챌린지 신청 접수 API는 PR#24 dev 병합, bean scan hotfix, DEV DB BIGINT 교정 후
image dev-20260602T021207UTC로 최종 DEV 배포 완료. rollout success, pod 1/1 restart 0, liveness 200.
```

---

## WT-026 · T-026 [Phase 1 핫픽스] challenge Repository/Entity Spring bean 미등록 수정

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| 레포 | `Claude_Server_20260413/sirjuseyo-admin` |
| 브랜치 | `feature/worldcup-challenge-2026-api` (T-025와 동일, PR #24에 추가 커밋) |
| 상태 | 진행중(In-Progress) |

---

[문제 — 깃&배포 관리자 보고]
- PR #24 dev 병합 완료 (merge commit `8533c05`), Java8 compileJava·GitHub Actions Deploy 성공, ECR image `dev-20260602T015104UTC`
- 그러나 신규 DEV image 기동 시 **Spring startup 실패**: `ChallengeWorldcup2026ApplicationService`가 주입받는 `ChallengeWorldcup2026ApplicationRepository`가 Spring bean 미등록 → ApplicationContext 기동 실패
- 조치(관리자): 직전 정상 image `dev-20260523T233949UTC`로 롤백 완료, DEV 정상(rollout success, ready 1/1, liveness 200)

[원인 — 진단]
- admin 앱은 **다중 datasource** 구조. `NanoDataSourceConfig`가 `@EnableJpaRepositories(basePackages=...)`와 EntityManagerFactory `.packages(...)`로 **스캔 패키지를 명시 지정**.
- 기존 목록: `...repository.nano`, `...repository.review` / `...domain.nano`, `...domain.review`
- 내 신규 패키지 `...repository.challenge`, `...domain.challenge`가 **양쪽 목록에서 누락** → Repository bean·Entity 미등록 → 주입 실패.
- (4차 심사 때 `review`를 동일하게 명시 추가했던 선례 존재 — 같은 방식으로 누락된 것)

[처방 — 수정]
- `NanoDataSourceConfig.java` 2곳에 challenge 패키지 1줄씩 추가:
  - `@EnableJpaRepositories.basePackages` += `"com.sirjuseyo.albit.support.repository.challenge"`
  - EntityManagerFactory `.packages(...)` += `"com.sirjuseyo.albit.support.domain.challenge"`
- 그 외 datasource/도메인/인증/CORS 무수정 (TECHSPEC §0 준수)

[검증]
- `./gradlew compileJava --offline` → BUILD SUCCESSFUL
- 정상 작동 중인 `review` 등록과 기계적으로 동일한 패턴 → bean 등록 결정적 보장

[커밋·푸시 — ✅ 완료]
- 커밋 `ee8d8ee` → `feature/worldcup-challenge-2026-api` 푸시 (PR #24 자동 갱신, 2커밋 누적: `50f1b02`+`ee8d8ee`)

[남은 작업]
1. 깃&배포 관리자께 재배포 요청 (T-026 반영분)
2. 재배포 후 DEV API 동작 확인 (#18: curl POST → DB 적재 확인)

---

## WT-025 · T-025 [Phase 1] 서버 — DB + 신청 API (sirjuseyo-admin 한정)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| T-ID | T-025 |
| 레포 | `Claude_Server_20260413/sirjuseyo-admin` (서버 레포 — 웹 레포 아님) |
| 브랜치 | `feature/worldcup-challenge-2026-api` (origin/dev 최신화 후 분기) |
| 로컬 커밋 | `50f1b02` (challenge 소스 7개) — **원격 미푸시** |
| 상태 | 진행중(In-Progress) — 코드+컴파일+DEV DB 테이블생성 완료, 푸시·배포요청 대기 |

---

[작업 목표]
TECHSPEC v105 §4-3/§5-1 기준, 감다살🐙문어 챌린지 신청 접수 API를 `sirjuseyo-admin`에 구현.
POST `/open/challenge/worldcup-challenge-2026/applications` (비회원·비인증).

[진단(수정 이유)]
4차 심사 `review-application`이 동일 유스케이스(/open 신청 접수)의 검증된 최신 패턴 → 그대로 복제하여 위험 최소화(§0).

[처방(작성 코드 — 신규 7파일 + DDL 1)]
- Enum: `ChallengeWorldcup2026StatusCode`(접수~만료), `ChallengeWorldcup2026FinalResultCode`(GROUP_FAIL~WIN) — 검증(`isValid`)·표시(`labelOf`)용
- Entity: `ChallengeWorldcup2026Application` (테이블 매핑, 코드값 평문 String 저장 → §4-2 충족)
- Repository: `ChallengeWorldcup2026ApplicationRepository` (`existsByPhoneAndIsDeletedFalse` 중복체크 포함)
- VO: `ChallengeWorldcup2026ApplicationRequestVO` (`@JsonNaming` snake_case 자동매핑)
- Service: `ChallengeWorldcup2026ApplicationService` — §5-1 처리순서 1~9 (동의→포인트→필수값→하이픈제거→Enum검증→골0~20→중복→INSERT)
- Controller: `ChallengeWorldcup2026ApplicationController` — POST 비인증, 201 응답
- DDL: `project-docs/00_plan/DDL_challenge_worldcup_2026_application_20260602.sql` (§4-3 그대로, 내 워크스페이스 보관)

[설계 결정]
- 코드값 저장: **평문 String** 채택 (TECHSPEC §8-1.4 'Converter' 언급 대비). 사유: review 벤치마크 동일·§4-2 동일충족·서버다운위험 최소. Converter 전환은 지시 시 즉시 가능.

[검증]
- `./gradlew compileJava --offline` (JAVA_HOME=Temurin8 / Gradle5.6.4) → **BUILD SUCCESSFUL**
- challenge 7개 `.class` 전부 `build/classes/java/main/` 생성 확인

[DEV DB 테이블 생성 — ✅ 완료]
- 실접속 검증: host=`sjy-nano-develop`(DEV 확실), db=`nano`, 동일테이블수=0 → 안전 확인
- 사장님 승인 후 `CREATE TABLE` 실행 → 테이블존재=1, 25컬럼·5인덱스, 기본값 정상(status_cd=RECEIVED 등)

[원격 푸시 — ✅ 완료]
- `git push -u origin feature/worldcup-challenge-2026-api` → origin 새 브랜치 생성 (`50f1b02`)

[깃&배포 관리자 배포 요청(PR) — ✅ 완료]
- PR **#24** 생성: `feature/worldcup-challenge-2026-api → dev`
- URL: https://github.com/sirjuseyo/sirjuseyo-admin/pull/24

[작업요청서 원문 — 보관 (양식 6-⑥, 정책 201~205)]
```
[클로드 앱 코드(쮸티12호) → 깃 & 배포 관리자]

sirjuseyo-admin T-025 작업 완료했습니다.
`feature/worldcup-challenge-2026-api` 원격 푸시 완료했고 PR은 `#24`입니다.

작업 내용:
- 감다살🐙문어 챌린지 신청 접수 API 신규 구현 (POST /open/challenge/worldcup-challenge-2026/applications, 비인증)
- 신규 테이블 challenge_worldcup_2026_application + Enum 2종 + Entity/Repository/VO/Service/Controller (4차 심사 review 패턴 복제)
- DEV nano DB에 테이블 생성 완료 (25컬럼·5인덱스, 기존 스키마 무손상)

검증:
- ./gradlew compileJava → BUILD SUCCESSFUL (Java8/Gradle5.6.4)
- DEV(sjy-nano-develop) 실접속 검증: 테이블존재=1, 기본값(status_cd=RECEIVED 등) 정상
- TECHSPEC §0 준수: 도메인/Ingress/인증/CORS 무수정, 신규 테이블만 추가

커밋:
- 50f1b02 feat(challenge): 감다살문어 챌린지 신청 접수 API 구현 [T-025/Phase1]

한 줄 버전:
- sirjuseyo-admin T-025 완료, feature/worldcup-challenge-2026-api 푸시 및 PR #24 생성 완료, 컴파일·DEV DB 검증 했습니다. 깃 & 배포 관리자님 feature → dev 검토 부탁드립니다.
```

[남은 작업]
1. 깃&배포 관리자 PR #24 검토·머지 → DEV 서버 반영
2. DEV 서버 반영 후 API 동작 확인

---

## WT-024 · T-024 [Phase 0] 착수 전 안전 점검 (코드 0줄)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| T-ID | T-024 |
| 로컬 커밋 | (코드 미수정 — 점검 + 보고서 문서만) |
| 상태 | 테스트 완료(DONE) — 점검 완료 |

---

[작업 목표]
TECHSPEC v105 §0-5 착수 전 차단 지시 4개 항목을 서버 레포(`Claude_Server_20260413`, 읽기 전용)에서 확인.

[처방(점검 결과)]
- ① DEV/PRD DB 분리: ✅ DEV=`sjy-nano-develop` / PRD=`sjy-nano-production` 별도 RDS (application yml datasource 확인)
- ② admin-api 라우팅: ✅ `sirjuseyo-eks/ingress/` — admin-api→admin-svc / nano-api→nano-svc (테크스펙 §0-5 정합)
- ③ 인증 경계: ✅ `ResourceServerConfig.java` `/open/**` permitAll(4차 심사 T-019) + anyRequest authenticated
- ④ CORS: ✅ `AdminCorsFilter.java` monthly-loan.sirjuseyo.com + 로컬 5500~5503 등록됨
- 결론: **4차 심사 작업으로 인프라/보안 기충족. Phase 1은 신규 테이블+컨트롤러만 추가.**
- ⚠️ 서버 레포는 **읽기만, 수정·침범 0건** (선배 WT-026 침범 사고 교훈 준수)
- 완료 보고서 생성: `COMPLETION_REPORT_감다살문어챌린지_클라서버연동_쮸티12호_20260602.md`

---

## WT-023 · T-023 감다살🐙문어 챌린지 클라+서버 연동 마스터 (Phase 0~7)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| T-ID | T-023 |
| 로컬 커밋 | (Phase 추적 마스터 — 페이지별 작업 W-024~ 별도 커밋) |
| 상태 | 진행중(In-Progress) |

---

[작업 목표]
감다살🐙문어 챌린지 신청 폼(`apply-감다살문어챌린지-worldcup_20260602.html`)을 클라+서버 연동으로 실제 구현. TECHSPEC v105 기준 Phase 0~7 단계별 진행.

[진단(수정 이유)]
규모가 크므로 W-023은 Phase 구분(마스터)으로만 사용하고, 실제 페이지/작업은 페이지 하나하나를 별도 W-ID(W-024~)로 생성하여 진행한다. (댄디어빠쮸너야님 지시 2026-06-02)

[처방(수정 코드)]
- TODO_BOARD에 🗺️ Phase 추적 섹션 신설 (Phase 0~7 + 상태값)
- 작업할 때마다 Phase 표 출력 + 상태(`대기`/`진행중`/`완료`) 갱신
- 구(舊) T-020(신청 페이지 단독 등록, 실작업 0)은 W-023 마스터 Phase 2로 통합

**Phase 현황 (2026-06-02 기준):**
| Phase | 상태 |
|---|---|
| Phase 0 (안전 점검) | 대기 |
| Phase 1 (서버 DB+API) | 대기 |
| Phase 2 (클라 신청폼) | 대기 |
| Phase 3 (어드민) | 대기 |
| Phase 4 (CTA 연결) | ✅ 완료 (T-021 선반영) |
| Phase 5 (통합 검증+회귀) | 대기 |
| Phase 6 (CTO/사장님 승인) | 대기 |
| Phase 7 (PRD 배포) | 대기 |

> ⚠️ 절대 원칙: 인프라·도메인 무손상 / admin-api는 sirjuseyo-admin에만 / nano에 구현 금지.

---

## WT-022 · T-022 챌린지 상세 2차 수정 7건 + 기획서·와이어프레임 (가이드라인 선반영)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| T-ID | T-022 |
| 로컬 커밋 | 93eb6fc (코드+상세WF) / d2bd3ea (기획서+WF) |
| 상태 | 테스트 완료(DONE) |

---

[문제 위치]
파일: `2026-06/worldcup-challenge/index.html` + `index-dev.html` / 기획서 / 와이어프레임 2종

[증상(문제 설명)]
검수 결과 폰트 작게/회색 처리된 요소 반복 지적 + 텍스트 7건 수정. **다음 작업 가이드라인으로 문서 먼저 반영 요청.**

[처방(수정 코드)]
**문서 먼저 (가이드라인):**
- 기획서 §3-1 **폰트·스타일 가이드라인 신설** (후배 AI 필독): 기본 1.1rem, 본문 1.05rem↑, 회색 남용 금지, 핵심·경고 크게, 유의사항 검정
- 기획서 §7-5(채널)·§7-6(사용방법/티켓)·§8(유의사항 이벤트→챌린지) 텍스트 반영
- 와이어프레임 2종 동일 반영

**코드 (DEV/PRD):**
- ① `.match-venue` `.ticket-condition small`: 작게+회색 → 1.05rem + 검정
- ② 최종성적 괄호 `(16강·…)` → `(32강·16강·8강·4강·결승·우승)`
- ③ 발표채널 → "써주세요. 앱 & 웹 공지"
- ④ `.usage-label` 0.95rem → 1.15rem (티켓 사용방법 라벨 확대)
- ⑤ 사용방법 번호+들여쓰기 재구성 + "대출 신청 및 승인/입금 후 사용 가능" 추가
- ⑥ 사용가능티켓 "모든 대출(일반+추가) 상환 후 재대출" 문구
- ⑦ 유의사항 제목 + 본문 "이벤트"→"챌린지" 4곳 + "다수인 경우"→"다수인 경우에도"
- 브라우저 모바일 실측 검증 완료 (전 섹션 정상)
- 로컬 커밋: `93eb6fc`, `d2bd3ea`

---

## WT-021 · T-021 챌린지 상세 페이지 수정 8건 + 기획서·와이어프레임

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| T-ID | T-021 |
| 로컬 커밋 | 8ef6521 |
| 상태 | 테스트 완료(DONE) |

---

[문제 위치]
파일: `2026-06/worldcup-challenge/index.html` + `index-dev.html` / 기획서 / 와이어프레임 2종

[증상(문제 설명)]
댄디어빠쮸너야님 검수 결과 8건 수정 요청 (텍스트 2건 + 폰트/스타일 5건 + 폼 제거 1건).

[처방(수정 코드)]
**코드 (DEV/PRD):**
- ① step3: `이벤트 페이지 진입` → `챌린지 페이지 진입`
- ② 당첨자 발표: `16강 이상 진출 시` → `32강 진출 시`
- ③ 기본 폰트 6월 호국보훈 수준(`body font-size:1.1rem`)으로 확대 (전 본문 1.05~1.1rem)
- ④ 핵심·경고 문구 기본보다 크게: `.method-highlight` 1.18rem / `.warning-box` 1.12rem
- ⑤ 티켓 사용방법: `.usage-*` 1.1rem + 회색 제거(`color: var(--text)`)
- ⑥ 유의사항: `.notice-list` 1.05rem + 검정(`var(--text)`)
- ⑦ 하단 인라인 신청 폼(`.form-section` + 폼 + selectPoint JS) 전체 삭제
- ⑧ 하단 신청 CTA 섹션(`.apply-cta-*`) 신설 — 골드 버튼 `감다살🐙 챌린지 신청하기 →` → `./apply/`
- 브라우저 모바일 실측 검증 완료 (전 섹션 폰트/스타일/폼제거/버튼 정상)
- 로컬 커밋: `8ef6521`

**문서 (기획서 + 와이어프레임 2종):**
- 기획서: ①② 텍스트 반영 + §4 구조도 "신청 폼" → "신청 CTA → /apply/" + 신청 폼 분리 정책 추가
- 상세 와이어프레임: ①② 텍스트 + 폼 섹션 → CTA 버튼 교체 + JS 제거 + 우측 패널 ⑫ 갱신

---

## WT-020 · T-019 감다살🐙문어 챌린지 상세 페이지 코딩 (DEV/PRD)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| T-ID | T-019 |
| 로컬 커밋 | 6d93dc1 |
| 상태 | 테스트 완료(DONE) |

---

[문제 위치]
파일: `2026-06/worldcup-challenge/index.html` + `index-dev.html`
라인: 신규 (빈 골격 → 풀 페이지)

[증상(문제 설명)]
챌린지 상세 페이지가 빈 골격 상태. 기획서+와이어프레임 기준 실제 코딩 필요.

[진단(수정 이유)]
글로벌 규칙 "원본 그대로" → 와이어프레임 좌측 `page-content`를 자의적 해석 없이 그대로 구현 (인라인 폼 포함).

[처방(수정 코드)]
- `wireframe-감다살문어-worldcup` 좌측 page-content 100% 이식
- 구현 섹션:
  - 히어로 이미지: `./assets/worldcup-challenge-jun-001.jpg`
  - 히어로 텍스트: 빨강 그라데이션 + 🐙 워터마크 + 골드 태그 + "응원하다 50만 원 줍줍?"
  - 이벤트 소개 / 신청 기간(6.1~6.11) / 한국 A조 경기 3건
  - 혜택(감다살🐙티켓 5장, 총 50만 원) / 신청 조건(無)
  - 신청 방법(5스텝 + 경고) / 당첨자 발표 / 티켓 사용 방법 / 유의사항 10개
  - 인라인 간략 신청 폼 (3그룹: 기본정보·포인트확인·예측5종)
- JS: `selectPoint()` 포인트 검증 (없음→제출 비활성화), 제출 시 `./apply/` 이동
- CSS: 컬러 팔레트(한국레드·골드·보라), 모바일 max-width 480px 중앙, Pretendard 폰트
- 와이어프레임 전용 래퍼(phone-frame·info-panel·캡션) 제외
- DEV/PRD 동일 (정적 페이지), diff 0건
- 브라우저 모바일 뷰 실측 검증 완료 (히어로~유의사항~폼 전 섹션 정상)
- 로컬 커밋: `6d93dc1`

---

## WT-019 · T-018 감다살🐙문어 챌린지 상세+신청 폴더 골격 생성

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| T-ID | T-018 |
| 로컬 커밋 | a30eefd |
| 상태 | 테스트 완료(DONE) |

---

[문제 위치]
파일: `2026-06/worldcup-challenge/` (신규 폴더)

[증상(문제 설명)]
감다살🐙문어 챌린지 상세+신청 페이지를 담을 디렉토리 없음. 기획서 코딩 전 골격 선행 필요.

[원인/진단]
기획서 §11 경로가 `event-worldcup/`였으나 "이벤트 대출" 옵션과 혼동 + 글로벌 표준 미준수. → kebab-case 영문 슬러그 `worldcup-challenge/`로 확정 (댄디어빠쮸너야님 결정).

[처방(수정 코드)]
- 폴더 네이밍 정책 (글로벌 GitHub Pages 표준):
  - 폴더명: kebab-case 영문 슬러그 (한글/이모지/언더스코어 금지)
  - 파일명: `index.html` 통일 (URL `/apply/` 자동 접근)
  - DEV/PRD: `index.html` + `index-dev.html`
- 생성 골격:
  - `2026-06/worldcup-challenge/index.html` (상세 PRD)
  - `2026-06/worldcup-challenge/index-dev.html` (상세 DEV)
  - `2026-06/worldcup-challenge/apply/index.html` (신청 PRD)
  - `2026-06/worldcup-challenge/apply/index-dev.html` (신청 DEV)
  - `2026-06/worldcup-challenge/assets/`
- URL: `/2026-06/worldcup-challenge/` , `/2026-06/worldcup-challenge/apply/`
- 기획서 §11 경로/네이밍 정책 수정 반영
- ⚠️ assets/에 `worldcup-challenge_.png`(2.4MB, 댄디어빠쮸너야님 사전 배치) 함께 커밋됨 — 본 코딩 시 JPG 변환·적용 예정
- 로컬 커밋: `a30eefd`

### WT-019 2회차 — 히어로 이미지 확정 + JPG 변환 + 문서 반영

| 항목 | 내용 |
|---|---|
| 회차 | 2회차 |
| 작성일시 | 2026-06-02 |
| 로컬 커밋 | 37fb69e |
| 상태 | 테스트 완료(DONE) |

[처방(수정 코드)]
- 이미지 파일명 확정: `worldcup-challenge_.png` → `worldcup-challenge-jun-001.png`
- JPG 변환: `worldcup-challenge-jun-001.jpg` (2.4MB → **328KB**, 기획서 §10 사양 200~400KB 충족)
  - 히어로는 풀배경(투명 불필요) → JPG OK (gift-box 투명 PNG와 다름)
- 기획서 반영:
  - §5-3 히어로 이미지: TBD → ✅ 확정
  - §10/§10-1 이미지 자산: 파일명·용량 확정
  - §11 경로: `event-worldcup/` → `worldcup-challenge/` + 폴더 네이밍 정책 추가
  - §13-1/§13-2: 히어로 이미지 완료 처리
- 와이어프레임 2종 경로 통일:
  - `wireframe-감다살문어-worldcup`: event-worldcup→worldcup-challenge (8건)
  - `apply-감다살문어-worldcup`: 동일 (2건)
- 로컬 커밋: `37fb69e`

---

## WT-018 · T-017 gift-box 모바일 텍스트 침범 보정 (미디어쿼리)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| T-ID | T-017 |
| 로컬 커밋 | 0a81b5c |
| 상태 | 검증완료 (PR #9 MERGED) |

---

[문제 위치]
파일: `index.html` + `index-dev.html`
라인: CSS 106~108 (`@media(max-width:767px)` 신규)

[증상(문제 설명)]
모바일(실기기)에서 gift-box(Battlefield Cross 총 이미지)가 "🪖 호국보훈의 달" 메인 타이틀을 침범. 데스크탑은 정상.

[원인]
6월 총 이미지 비율 **1.5:1**(1536×1024)이 5월 박스장미 **1.83:1**(2816×1536)보다 세로가 길어, 동일 `width`에서도 세로로 더 늘어져 텍스트 영역까지 내려옴. (CSS는 5월과 동일했으나 이미지 구도 차이로 결과 상이)

[진단(수정 이유)]
기획서 §7-5-1 "CSS 절대 변경 금지"이나 실제 침범 발생 → **모바일 한정** 보정. 데스크탑은 정상이므로 미건드림.

[처방(수정 코드)]
- `@media(max-width:767px)` 신규 블록 추가 (데스크탑 `@media(min-width:768px)`와 경계 비충돌)
- `.gift-box` 모바일 override:
  - width: `min(341px,90vw)` → `min(250px,68vw)` (①축소)
  - top: `-110px` → `-125px` (②상향)
  - right: `-55px` → `-25px`
- 검증 방법: `getBoundingClientRect`로 모바일(360px) 시뮬레이션 측정
  - 보정 전: gift 하단이 타이틀보다 38px 아래 (침범)
  - 보정 후: 타이틀 상단까지 여백 26px 확보 (침범 해소)
- 데스크탑(1792px) computed style: 341/-110/-55 기존값 유지 확인
- 브라우저 시각 검증 완료 (텍스트 깨끗)
- 로컬 커밋: `0a81b5c`

---

## WT-017 · T-016 월드컵 카드 → 예언 챌린지 코드 반영 (DEV/PRD)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| T-ID | T-016 |
| 로컬 커밋 | cc6960d |
| 상태 | 검증완료 (PR #9 MERGED) |

---

[문제 위치]
파일: `index.html` + `index-dev.html`
라인: CSS 95~96 / HTML 191~194 (worldcup-card)

[증상(문제 설명)]
홈 페이지 월드컵 카드 문구가 "월드컵⚽️대출 / 이벤트 보기"로 표기 → 월별 대출 3옵션 중 하나인 "이벤트 대출"과 혼동.

[원인]
순수 참여형 예측 챌린지인데 "이벤트 / 대출" 단어를 그대로 사용.

[진단(수정 이유)]
대출 옵션과 완전 분리 → "이벤트 / 대출" 단어 제거, 예언 챌린지 컨셉으로 전환. (와이어프레임·기획서 확정안 기준)

[처방(수정 코드)]
DEV/PRD 동시 적용. 텍스트만 교체 (이미지 src·테두리·레이아웃 불변):
- 태그: `⚽ 6월 한정 이벤트` → `🔮 예언 챌린지`
- 메인: `2026 북중미 월드컵` → `추가 대출, 최대 50만 원의 행운을!`
- 보조: `🇰🇷 대한민국 대표팀 응원!` → `"나는야 문어🐙 파울, 감다살!"` (`.worldcup-subcopy` 신규)
- 설명: `월드컵⚽️대출` → `2026 북중미 월드컵 / 🇰🇷대한민국 축구 국가대표팀의 성적을 맞추세요.` (`.worldcup-desc` 신규)
- 버튼: `이벤트 보기 →` → `⚽ 몇승 몇무 몇패 신청하기 →`
- 이미지 `2026_worldcup_type102.jpg` 불변 확인 / 버튼 링크 `./2026-06/` 불변
- DEV 브라우저 실측 검증 완료
- 로컬 커밋: `cc6960d`

### WT-017 2회차 — 버튼 문구 변경

| 항목 | 내용 |
|---|---|
| 회차 | 2회차 |
| 작성일시 | 2026-06-02 |
| 로컬 커밋 | 2e2bf3b |
| 상태 | 검증완료 (PR #9 MERGED) |

[처방(수정 코드)]
- 버튼: `⚽ 몇승 몇무 몇패 신청하기 →` → `🐙 승무패 예언하기 →`
- 사유: 예언 챌린지 + 문어 파울 컨셉 일관성 (수정구슬🔮 태그 + 문어🐙 캐릭터 → 버튼까지 문어로 통일)
- 적용: `index.html` + `index-dev.html` + 와이어프레임 + 기획서 동시
- DEV 브라우저 실측 검증 완료
- 로컬 커밋: `2e2bf3b`

---

## WT-016 · T-015 월드컵 카드 → 예언 챌린지 기획서·와이어프레임 수정

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-06-02 |
| 작성자 | 쮸티12호 |
| T-ID | T-015 |
| 로컬 커밋 | 문서전용(Untracked 와이어프레임/기획서) |
| 상태 | 검증완료 (PR #9 MERGED) |

---

[문제 위치]
파일: `project-docs/00_plan/wireframe-monthly-loan-home-jun-v2.html` / `PLAN_2026-06_호국보훈의달대출_기획서.md`

[처방(수정 코드)]
- 와이어프레임: 월드컵 카드 본문 텍스트 5요소 교체 + `.worldcup-subcopy`/`.worldcup-desc` CSS 추가 + 우측 패널에 [증상/원인/진단/처방] 형식 + 기존→변경 대조표 기록
- 기획서 §7-7 제목: "월드컵 이벤트 카드" → "월드컵 예언 챌린지 카드"
- 기획서 §7-7-2: 기존→변경 대조표 + [증상/원인/진단/처방]
- 기획서 §7-7-4: "이벤트 대출 연결" → "⚠️ 컨셉 구분" (이벤트 대출 vs 예언 챌린지 구분표)
- 기획서 작업 이력 2026-06-02 추가
- 브라우저 출력 검증 완료

---

## WT-015 · T-014 대출 가능성 검사기 DEV 파일 신규 생성

---

### [개발자 → 깃 & 배포 관리자 전달] 작업 완료 보고서 원문

```
monthly-loan T-001~T-014 작업 완료했습니다.
`feature/T-001-jun-loan-landing` 원격 푸시 완료했고 PR은 `#7`입니다.

작업 내용:
- 6월 호국보훈의 달 대출 랜딩 페이지 신규 생성 (2026-06/index.html, DEV/PRD 분리)
- 신청하기 폼 6월 업데이트 (apply.html / apply-dev.html)
- 월별 대출 홈 페이지 6월 업데이트 + 월드컵 이벤트 카드 신설 (index.html, index-dev.html)
- 대출 가능성 검사기 5월 아카이브 + 6월 업데이트 + month-config.js 자동화 신설

검증:
- 6월 랜딩 페이지 로컬 브라우저 테스트 완료
- 홈 랜딩 페이지 Battlefield Cross 투명배경 정상 확인
- loan-checker 자동 감지 로직 검증 완료 (오늘=2026-05-31 → 6월 config 자동 선택)

커밋:
- `976dd8e` feat(T-001): 6월 호국보훈의 달 대출 랜딩 페이지 신규 생성
- `8f094b0` fix(T-001): 6월 페이지 날짜 잔존 수정
- `d802957` fix(T-001): 이미지 확장자 .jpg → .png 수정
- `4a54730` feat(T-002,003): 이미지 PNG→JPG 변환 및 HTML 순서 교체
- `46d035e` fix(T-005): 나노크레딧 섹션 텍스트 3건 수정
- `03bb5b5` feat(T-006,007): 신청하기 버튼 링크 변경 및 apply.html 6월 업데이트
- `cc0ae69` fix(T-007): apply-dev.html 6월 업데이트 4건 추가
- `bcfaa6f` feat(T-008,009): 홈 페이지 이미지 변환 및 index-dev.html 6월 업데이트
- `4eb9f5a` fix(T-009): gift-box 이미지 .jpg → .png 수정 및 규칙 문서화
- `69e0439` feat(T-010): index.html(PRD) 6월 호국보훈의 달 업데이트
- `552e222` feat(T-011): 6월 랜딩 이벤트 문구 교체 및 DEV/PRD 분리
- `8eab44b` feat(T-012): 대출 가능성 검사기 5월 버전 아카이브
- `f0bd4a7` feat(T-013): 대출 가능성 검사기 6월 업데이트 + month-config 분리
- `01627b3` feat(T-014): 대출 가능성 검사기 DEV 파일 신규 생성
- `56b15ac` feat(T-014): month-config 활성 기간 정책 명시 (매월 26일~익월 25일)
- `6fa91e9` docs(T-001~T-014): 쮸티12호 작업 문서 최종 반영

문서:
- `project-docs`
- 브랜치: `feature/T-001-jun-loan-landing` (코드 레포와 동일 브랜치에 포함)
- PR: `#7`
- 문서 커밋: `6fa91e9` docs(T-001~T-014): 쮸티12호 작업 문서 최종 반영

한 줄 버전:
- `monthly-loan T-001~T-014 완료, feature/T-001-jun-loan-landing 푸시 및 PR #7 생성 완료, 로컬 테스트 완료했습니다. 깃 & 배포 관리자님 feature → dev 검토 부탁드립니다.`
```

---

### [GitHub Pages PRD : 깃 & 배포 관리자 → 개발자] 완료 보고서

```
monthly-loan T-001~T-014 반영 완료했습니다.

- 원격 머지:
  - feature/T-001-jun-loan-landing -> main
  - PR: #7
  - merge commit: 0612e09a16bf2c8cbaf2470dd803d8c3b7142b90

- 배포:
  - GitHub Pages pages build and deployment 성공
  - run: 26730186641
  - 서버/ECR/Argo/Kubernetes 배포 대상 아님
  - 사유: 월별 대출 홈 정적 GitHub Pages 레포

- 확인:
  - PR #7 MERGED
  - https://monthly-loan.sirjuseyo.com/ HTTP/2 200
  - https://monthly-loan.sirjuseyo.com/2026-06/ HTTP/2 200
  - https://monthly-loan.sirjuseyo.com/apply/apply.html HTTP/2 200
  - https://monthly-loan.sirjuseyo.com/loan-checker/ HTTP/2 200
  - loan-checker JS 문법 검증 성공
  - 2026-05-31 기준 6월 config 자동 선택 확인

- 주의:
  - monthly-loan 원격에는 dev 브랜치가 없어 PR #7 base main 기준으로 반영했습니다.
  - GitHub Pages CDN cache-control은 max-age=600으로 확인했습니다.

- 문서:
  - GitDeployOps TODO/WORK_THROUGH 업데이트 완료
  - 완료 보고서 WT-001에 기록 완료
  - project-docs 문서 커밋/푸시 완료: df07887

한 줄 버전:
- monthly-loan T-001~T-014 feature/T-001-jun-loan-landing -> main 반영 완료, GitHub Pages 배포 성공 및 주요 운영 URL HTTP 200 확인했습니다.
```

---

### [GitHub Pages PRD : 깃 & 배포 관리자 → 개발자] 핫픽스 완료 보고서 (PR #8)

```
monthly-loan Battlefield-Cross PNG 누락 핫픽스 반영 완료했습니다.

원격 머지:
- feature/T-001-jun-loan-landing -> main
- PR: #8
- merge commit: bc6cbc2e43d4f322141086b7f3a834509cd89394

배포:
- GitHub Pages pages build and deployment 성공
- run: 26730714029
- 서버/ECR/Argo/Kubernetes 배포 대상 아님
- 사유: 월별 대출 홈 정적 GitHub Pages 레포

확인:
- PR #8 MERGED
- https://monthly-loan.sirjuseyo.com/ HTTP/2 200
- https://monthly-loan.sirjuseyo.com/2026-06/ HTTP/2 200
- https://monthly-loan.sirjuseyo.com/2026-06/assets/Battlefield-Cross_Jun-Loan.png HTTP/2 200
- https://monthly-loan.sirjuseyo.com/2026-06/assets/Battlefield-Cross_Jun-Loan.jpg HTTP/2 404

주의:
- .jpg 삭제는 의도된 변경으로 확인했습니다.
- GitHub Pages CDN cache-control은 max-age=600입니다.

문서:
- GitDeployOps W-002, T-002, WT-002 기록 완료
- 완료 보고서 WT-002에 기록 완료
- project-docs 문서 커밋/푸시 완료:
  - 기록 커밋 be9500a
  - 최종 정정 커밋 1db187b

한 줄 버전:
- monthly-loan Battlefield-Cross PNG 누락 핫픽스 PR #8 feature/T-001-jun-loan-landing -> main 반영 완료, GitHub Pages 배포 성공 및 PNG asset HTTP 200 확인했습니다.
```

---

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-014 |
| 로컬 커밋 | 01627b3 |
| 상태 | 진행중(In-Progress) |

---

[처방(수정 코드)]
- `loan-checker/index.html`(PRD) 복제 → `loan-checker/index-dev.html`(DEV) 생성
- diff 0건 확인 완료
- 로컬 커밋: `01627b3`

---

## WT-014 · T-013 대출 가능성 검사기 6월 업데이트 + month-config 분리

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-013 |
| 로컬 커밋 | f0bd4a7 |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `loan-checker/month-config.js`(신규) / `app.js` / `index.html` / `styles.css`

[처방(수정 코드)]

**month-config.js (신설 — §10)**
- 5월·6월 설정 객체 등록
- `new Date()` 기반 자동 감지 → `MONTH_CONFIG` 전역 노출
- 이후 신규 월 추가 시 이 파일에만 객체 추가

**app.js 리팩토링 (§7-2, §10)**
- `LOAN_CONFIG` 이벤트 히스토리: `"4월 한정 스페셜티"/"벚꽃 🌸 대출"` → `MONTH_CONFIG.event.period/name`
- `WAITING_SEAT_RANGES`: `_generateSeatRanges(MONTH_CONFIG.applyPeriod.start)` 자동 생성
- `LOAN_OPTION_STATUS_TABLE` 이벤트: MONTH_CONFIG 참조
- `LOAN_REVIEW_SCHEDULE` 날짜: `MONTH_CONFIG.reviewPeriod.start/end` 참조
- `POINT_SUMMARY_RAW` 이벤트 4행: template literal `${}` 동적 치환

**index.html (§7-1, §7-3, §7-4, §10)**
- 대출 상품명 / santaApply 라벨 / 결과 헤더 / step1 텍스트 6월로 교체
- 디폴트값: `waitingDateText·waitingPeriod·reviewPeriod·step5Deadline·subscribeStart` 6월 기준
- CTA: 이미지 버튼 → 텍스트 버튼 `.script-cta-button-text`
- `month-config.js` 스크립트 태그 추가 + `DOMContentLoaded` 자동 주입

**styles.css**
- `.script-cta-button-text` 신규 (오렌지 풀컬러, 호버 효과)

- 로컬 커밋: `f0bd4a7`

---

## WT-013 · T-012 대출 가능성 검사기 5월 아카이브

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-012 |
| 로컬 커밋 | 8eab44b |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `loan-checker/2026-05/` (신규 폴더)

[증상(문제 설명)]
기존에는 파일을 월별로 덮어썼으나, 히스토리 추적 및 광고 이미지 관리를 위해 아카이브 체계 도입.

[처방(수정 코드)]
- `loan-checker/2026-05/` 폴더 신규 생성
- 복제 대상: `index.html`, `app.js`, `styles.css`, `assets/img/` (이미지 8개)
- 로컬 커밋: `8eab44b`

---

## WT-012 · T-011 6월 랜딩 이벤트 문구 교체 (DEV/PRD 분리)

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-011 |
| 로컬 커밋 | 552e222 |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `2026-06/index.html`, `2026-06/index-dev.html` (신규)
라인: 1038

[처방(수정 코드)]
- `2026-06/index.html` 복제 → `2026-06/index-dev.html` 신규 생성
- line 1038 (DEV/PRD 동시):
  `'월드컵⚽️대출' 이벤트` → `'감다살🐙문어' 이벤트`
  `국대팀 예상 성적을 맞추는` → `대한민국 축구 국가대표팀 예선전 최종 성적을 맞추는`
- 로컬 커밋: `552e222`

---

## WT-011 · T-010 index.html(PRD) 6월 업데이트

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-010 |
| 로컬 커밋 | 69e0439 |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `index.html`
라인: 88~96(CSS), 171, 181, 183~184, 186, 188~197

[처방(수정 코드)]
- index-dev.html 테스트 완료본을 index.html(PRD)로 그대로 복사 적용
- diff 확인 후 완전 동일 검증 완료
- 로컬 커밋: `69e0439`

---

## WT-010 · T-009 index-dev.html 신규 생성 + 6월 업데이트

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-009 |
| 로컬 커밋 | bcfaa6f |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `index-dev.html` (신규 생성)
라인: 171, 181, 183, 184, 186, 188~195 (월드컵 카드)

[처방(수정 코드)]
- `index.html` 복제 → `index-dev.html` 생성
- line 171: `5월 대출` → `6월 대출`
- line 181: `Gift-Box-Rose_May-Loan.png` → `Battlefield-Cross_Jun-Loan.jpg`
- line 183: `🌹 이달의 대출` → `🪖 이달의 대출`
- line 184: `5️⃣🈷️은 ❤️가정의 달` → `6️⃣🈷️은 🪖호국보훈의 달`
- line 186: `href="./2026-05/"` → `href="./2026-06/"`
- line 188~195: 월드컵 이벤트 카드 신설 (`.worldcup-card` CSS + HTML)
  - 위치: main-card ↔ checker-card 사이
  - 이미지: `2026_worldcup_type102.jpg`
  - 버튼 링크: `./2026-06/` (메인카드 동일)
- ⚠️ gift-box CSS (`top:-110px / right:-55px / width:min(341px,90vw)`) 변경 없음 준수
- 로컬 커밋: `bcfaa6f`

---

## WT-009 · T-008 홈 페이지용 이미지 PNG→JPG 변환

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-008 |
| 로컬 커밋 | bcfaa6f |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `2026-06/assets/Battlefield-Cross_Jun-Loan.png`, `2026_worldcup_type102.png`
라인: -

[처방(수정 코드)]
- `sips -s format jpeg -s formatOptions 60 Battlefield-Cross_Jun-Loan.png --out Battlefield-Cross_Jun-Loan.jpg` → **124KB** ✅
- `sips -s format jpeg -s formatOptions 42 2026_worldcup_type102.png --out 2026_worldcup_type102.jpg` → **252KB** ✅
- 로컬 커밋: `bcfaa6f`

---

## WT-008 · T-007 apply.html 6월 업데이트 4건

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-007 |
| 로컬 커밋 | 03bb5b5 |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `apply/apply.html`
라인: 508, 511, 592, 754, 756, 1170

[증상(문제 설명)]
apply.html에 5월 대출명·심사일·개인정보 문구가 그대로 잔존.

[처방(수정 코드)]
- line 508, 511, 1170: `5️⃣🈷️은 ❤️가정의 달 대출` → `6️⃣🈷️은 🪖호국보훈의 달 대출` (3곳)
- line 592: `단, 심사는 5/1 ~ 5/5에 진행돼요.` → `단, 심사는 7/1 ~ 7/5에 진행돼요.`
- line 754: `[2026년 5월] 포인트를 적립하는` → `[월별 대출] 포인트를 적립하는`
- line 756: `2026년 5월 포인트를 적립하는 모든 대출 상품과` → `[월별 대출] 포인트를 적립하는 모든 대출 상품과`
- 로컬 커밋: `03bb5b5`

### WT-008 2회차 — apply-dev.html 동일 수정 추가

| 항목 | 내용 |
|---|---|
| 회차 | 2회차 |
| 작성일시 | 2026-05-31 |
| 로컬 커밋 | cc0ae69 |
| 상태 | 진행중(In-Progress) |

[문제 위치]
파일: `apply/apply-dev.html`
라인: 513, 516, 597, 759, 761, 1207

[증상(문제 설명)]
apply.html(PRD)만 수정하고 apply-dev.html(DEV)은 누락. DEV/PRD 두 파일 동기화 필요.

[처방(수정 코드)]
apply.html과 동일 4건 적용. 로컬 커밋: `cc0ae69`

---

## WT-007 · T-006 6월 랜딩 신청하기 버튼 링크 변경

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-006 |
| 로컬 커밋 | 03bb5b5 |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `2026-06/index.html`
라인: 3296

[증상(문제 설명)]
하단 신청하기 버튼이 외부 tally.so URL로 연결되어 있어 자체 apply.html로 유도 불가.

[처방(수정 코드)]
- `href="https://tally.so/r/mBvDvR"` → `href="https://monthly-loan.sirjuseyo.com/apply/apply.html"`
- 로컬 커밋: `03bb5b5`

---

## WT-006 · T-005 나노크레딧 섹션 텍스트 3건 수정

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-005 |
| 로컬 커밋 | 46d035e |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `2026-06/index.html`
라인: 1247, 1250, 1251, 1252

[증상(문제 설명)]
테스트 중 댄디어빠쮸너야님이 발견. 나노크레딧 섹션에 5월 이모지 잔존, 마침표 이중 표기, 불필요한 `-` 기호 존재.

[원인]
초기 복제 시 해당 문구의 `5️⃣🈷️` 이모지가 전체 치환 패턴에 포함되지 않았음. `-` 기호는 5월 원본에도 있었던 잔존 오류.

[진단(수정 이유)]
6월 페이지인데 5월 이모지 노출 → 사용자 혼란 야기. 마침표 이중/`-` 기호는 UI 오류.

[처방(수정 코드)]
- line 1247: `5️⃣🈷️ 대출이예요` → `6️⃣🈷️ 대출이예요`
- line 1250: `5️⃣🈷️ 대출부터 신청해야` → `6️⃣🈷️ 대출부터 신청해야`
- line 1251: `5️⃣🈷️ 대출을 신청하지 … 않습니다..❌` → `6️⃣🈷️ … 않습니다.❌`
- line 1252: `</ul>-` → `</ul>` (불필요 `-` 및 공백 제거)
- 로컬 커밋: `46d035e`

---

## WT-005 · T-004 기획서 이미지 순서 업데이트

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-004 |
| 로컬 커밋 | 문서 전용 — 별도 커밋 없음 |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `project-docs/00_plan/PLAN_2026-06_호국보훈의달대출_기획서.md`
라인: §4-1 와이어프레임, §4-2, §4-3, §4-4, 무드 흐름 주석

[증상(문제 설명)]
기획서 원본의 이미지 순서(①월드컵→②호국보훈)가 댄디어빠쮸너야님의 지시(①호국보훈→②월드컵)와 다름.

[원인]
클로드 채팅 쮸리가 작성한 기획서 원본의 무드 흐름 설계가 변경됨.

[진단(수정 이유)]
실제 적용 순서에 맞게 기획서도 동기화 필요.

[처방(수정 코드)]
- §4-1 와이어프레임: ① `worldcup-jun-001.jpg`(활기) → `memorial-jun-001.jpg`(차분/호국보훈) / ② `memorial-jun-001.jpg` → `worldcup-jun-001.jpg`(활기/월드컵)
- §4-2: 이미지① 도입부 히어로 (활기/월드컵) → (차분/호국보훈), 파일명·alt·HTML 예시 모두 memorial로 수정
- §4-3: 이미지② 신청 절차 종결 (차분/호국보훈) → (활기/월드컵), 파일명·HTML 예시 worldcup으로 수정
- §4-4 제작 방식 테이블: ①②순서 교체
- 무드 흐름 주석: 초반 호국보훈 추모(경건) → 마무리 월드컵 응원(활기)으로 수정

---

## WT-004 · T-003 HTML 이미지 순서 교체 및 .jpg 참조 수정

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-003 |
| 로컬 커밋 | 4a54730 |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `2026-06/index.html`
라인: 1031 (이미지①), 1959 (이미지②)

[증상(문제 설명)]
이미지 순서 및 확장자가 최종 방향과 불일치.

[처방(수정 코드)]
- line 1031: `worldcup-jun-001.png` → `memorial-jun-001.jpg` / alt `6월 호국보훈 추모`
- line 1959: `memorial-jun-001.png` → `worldcup-jun-001.jpg` / alt `대출 신청 절차 안내`
- 로컬 커밋: `4a54730`

---

## WT-003 · T-002 이미지 PNG → JPG 압축 변환

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-002 |
| 로컬 커밋 | 4a54730 |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `2026-06/assets/memorial-jun-001.png`, `worldcup-jun-001.png`
라인: -

[증상(문제 설명)]
기획서 권장 용량(150~250KB) 대비 원본 PNG가 각 2.2MB / 2.5MB로 과대 용량.

[원인]
기획서에 `.jpg` 포맷/용량 기준이 명시되어 있었으나 실제 에셋은 `.png`로 납품됨.

[진단(수정 이유)]
웹 페이지 로딩 성능 및 기획서 사양 준수를 위해 JPG 변환 + 압축 필요.

[처방(수정 코드)]
- `sips -s format jpeg -s formatOptions 55 memorial-jun-001.png --out memorial-jun-001.jpg` → **249KB** ✅
- `sips -s format jpeg -s formatOptions 40 worldcup-jun-001.png --out worldcup-jun-001.jpg` → **235KB** ✅
- 로컬 커밋: `4a54730`

---

## WT-002 · T-001 6월 호국보훈의 달 대출 랜딩 페이지 신규 생성

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| T-ID | T-001 |
| 로컬 커밋 | 976dd8e |
| 상태 | 진행중(In-Progress) |

---

[문제 위치]
파일: `2026-06/index.html`
라인: 신규 생성 (3304라인)

[증상(문제 설명)]
`2026-06/` 폴더에 `assets/`만 있고 랜딩 페이지(`index.html`)가 없어 6월 대출 신청자 접근 불가.

[원인]
6월 페이지 미생성. 이미지 에셋(worldcup-jun-001.jpg, memorial-jun-001.jpg, Battlefield-Cross_Jun-Loan.png, 2026_worldcup_type102.png)은 사전 준비 완료 상태.

[진단(수정 이유)]
5월 페이지(`2026-05/index.html`)를 원본으로 복제 후 6월 호국보훈의 달 컨셉(컬러·텍스트·이미지·날짜)으로 전환. 기획서 `PLAN_2026-06_호국보훈의달대출_기획서.md` 기준 적용.

[처방(수정 코드)]
- `2026-05/index.html` → `2026-06/index.html` 복제
- CSS 컬러 팔레트 전환 (기획서 §3-3 하드코딩 대응표 전체 적용):
  - `#880E4F` → `#0D47A1` (딥로즈 → 딥네이비)
  - `#7F0000` → `#0A2E5C` (다크레드 → 다크네이비)
  - `#C62828` → `#B71C1C` (장미레드 → 태극레드)
  - `#FFF9F0` → `#FFFBF0` (크림 → 아이보리)
  - `#FFEBEE` → `#E3F2FD` (연로즈 → 연블루)
  - `#FFF3E0` → `#FFF8E1` (웜크림 → 페일골드)
  - `#FFCDD2` → `#BBDEFB` (소프트로즈 → 라이트블루)
  - `#EF9A9A` → `#90CAF9` (미디엄로즈 → 미디엄블루)
  - `#FFB300` → `#FFC107` (웜앰버 → 골드앰버)
  - h1 원본 `#B71C1C` → `#0D47A1` (헤더 h1 배경: 진한로즈레드 → 딥네이비, C62828→B71C1C 치환 전 먼저 처리)
- h1 타이틀: `[신청중] 5️⃣🈷️은 ❤️가정의 달 대출` → `[신청중] 6️⃣🈷️은 🪖호국보훈의 달 대출`
- 도입부 blockquote: 기획서 §2 인용구/핵심 멘트로 교체
- 이미지① src: `./assets/fanmily-may-003.jpg` → `./assets/worldcup-jun-001.jpg`
- 이미지② src: `./assets/lover-may.jpg` → `./assets/memorial-jun-001.jpg`
- 이벤트명: `장미🌹대출` → `월드컵⚽️대출` (전체 치환)
- 이벤트 섹션 타이틀: `5️⃣🈷️ 한정 스페셜티` → `6️⃣🈷️ 한정 스페셜티`
- 신청/운영 기간: `2026년 5월 1일(금) ~ 2026년 5월 25일(월)` → `2026년 6월 1일(월) ~ 2026년 6월 25일(목)`
- 심사 기간: `2026년 5월 1일(금) ~ 2026년 5월 5일(화)` → `2026년 7월 1일(수) ~ 2026년 7월 5일(일)`
- 신청하기 버튼 aria-label 6월 텍스트로 교체 (href tally URL 유지)
- 로컬 커밋: `976dd8e feat(T-001): 6월 호국보훈의 달 대출 랜딩 페이지 신규 생성`
- 브랜치: `feature/T-001-jun-loan-landing`

### WT-002 2회차 — 날짜 잔존 수정

| 항목 | 내용 |
|---|---|
| 회차 | 2회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| 로컬 커밋 | 8f094b0 |
| 상태 | 진행중(In-Progress) |

[문제 위치]
파일: `2026-06/index.html`
라인: 1144 (웨이팅 설명), 2038~3243 (웨이팅 테이블 날짜 50개소)

[증상(문제 설명)]
1회차 치환 시 `YYYY/MM/DD` 슬래시 포맷 날짜(웨이팅 대출 테이블)와 웨이팅 설명 문구 날짜(`5/1 ~ 5/25`) 누락.

[원인]
기획서에 해당 날짜 포맷 명시 없었음. 실제 파일 그렙 후 발견.

[진단(수정 이유)]
웨이팅 대출 주차별 신청 기간 테이블이 5월 기준으로 남아 있어 사용자에게 잘못된 정보 노출.

[처방(수정 코드)]
- `5/1 ~ 5/25` → `6/1 ~ 6/25` (웨이팅 설명)
- `2026년 6월 1일~5일` → `2026년 7월 1일~5일` (웨이팅 심사 기간)
- `2026/05/01 ~ 2026/05/25` 5주차 구간 전체 → `2026/06/01 ~ 2026/06/25` (총 50개소)
- 로컬 커밋: `8f094b0 fix(T-001): 6월 페이지 날짜 잔존 수정`

### WT-002 3회차 — 이미지 확장자 불일치 수정

| 항목 | 내용 |
|---|---|
| 회차 | 3회차 |
| 작성일시 | 2026-05-31 |
| 작성자 | 쮸티12호 |
| 로컬 커밋 | d802957 |
| 상태 | 진행중(In-Progress) |

[문제 위치]
파일: `2026-06/index.html`
라인: 1031 (이미지①), 1959 (이미지②)

[증상(문제 설명)]
이미지 src가 `.jpg`로 참조되어 실제 파일을 불러오지 못하는 상태. 기획서에 `.jpg`로 표기되어 있었으나 실제 에셋은 `.png`.

[원인]
기획서 §4 이미지 사양에 `.jpg`로 명시되어 있었고, 실제 저장된 파일은 `.png`였음. 파일 실존 확인 없이 기획서 표기를 그대로 적용한 오류.

[진단(수정 이유)]
`2026-06/assets/` 폴더 직접 확인 결과 `worldcup-jun-001.png`, `memorial-jun-001.png`로 존재 확인. `.jpg` → `.png` 교체 필요.

[처방(수정 코드)]
- `./assets/worldcup-jun-001.jpg` → `./assets/worldcup-jun-001.png` (line 1031)
- `./assets/memorial-jun-001.jpg` → `./assets/memorial-jun-001.png` (line 1959)
- 로컬 커밋: `d802957 fix(T-001): 이미지 확장자 .jpg → .png 수정`

---

## WT-001 · 프로젝트 분석 및 목차 수립

| 항목 | 내용 |
|---|---|
| 회차 | 1회차 |
| 작성일시 | 2026-05-31 03:00 |
| 작성자 | 쮸티121호 |
| T-ID | T-001 |
| 로컬 커밋 | adfgedfg |
| 상태 | 테스트 완료(DONE) |

---

[문제 위치]
파일: (신규 프로젝트 — 기존 파일 없음)
라인: -

[증상(문제 설명)]
탈리(Tally) 대출 신청 폼을 월 6만원 비용을 지불하며 사용 중.
데이터 주권 없음, 커스터마이징 불가, 관리자 기능 부재.

[원인]
외부 SaaS 의존. 내재화 필요.

[진단(수정 이유)]
써주세요 자체 인프라(HTML+JS + AWS)로 이전하여 비용 절감 및 데이터 주권 확보.

[처방(수정 코드)]
- 탈리 폼(tally.so/r/mBvDvR) 분석 완료
- 수집 항목: 이름/생년월일/휴대폰/이메일/대출금액/기간/경험/방법/용도/기기
- A~F 작업 목차 수립 및 컨펌 완료
- CLAUDE.md 생성

---

### WT-001: 6월 대출 프로모션 페이지 상단·하단 `legal-shared.js` 연결

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-18 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `2026-06/index.html` |
| 연관 W-ID | W-001 |
| 연관 T-ID | T-001 |
| 커밋 해시 | `165a165` |
| 작업 이력 | 1차 작업 |
| 상태 | 진행중(In-Progress) |

**변경 (2건):**
- ① `<main class="max-w-4xl mx-auto ...">` → `<main class="wrap max-w-4xl mx-auto ...">` 추가 (1024라인) — `legal-shared.js`가 `.wrap` 컨테이너를 감지하여 상단·하단 법적고지 자동 주입하도록
- ② `<script src="/footer.js"></script>` → `<script src="/js/legal-shared.js"></script>` 교체 (3302라인) — 구형 footer.js(About Us/Contact 구형 콘텐츠) 제거, legal-shared.js로 교체

**주의사항:**
- `legal-shared.js`는 `.page` 또는 `.wrap` 클래스 감지 후 상단·하단 주입 (`if (!page) return;`)
- 기존 `footer.js`가 주입하던 구형 하단 콘텐츠(About us, Contact 등)는 이 교체로 자동 제거됨
- 로컬 브라우저(127.0.0.1:5502) 검증: `index.html` PRD 테스트 완료 ✅

---

**2차 작업 — 2026-06-18, 쮸티12-1호**

| 항목 | 내용 |
|------|------|
| 작업 이력 | 2차 작업 |
| 커밋 해시 | `1339e07` |
| 대상 파일 | `2026-06/index-dev.html` |
| 상태 | 진행중(In-Progress) |

**변경 (2건):**
- ① `<main class="max-w-4xl mx-auto ...">` → `<main class="wrap max-w-4xl mx-auto ...">` 추가 (1030라인)
- ② `<script src="/footer.js"></script>` → `<script src="/js/legal-shared.js"></script>` 교체 (3308라인)

---

### WT-002: 6월 대출 페이지 PC 좌우 너비 480px 고정

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-18 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `2026-06/index.html`, `2026-06/index-dev.html` |
| 연관 W-ID | W-002 |
| 연관 T-ID | T-002 |
| 커밋 해시 | `c21ccdd` |
| 작업 이력 | 1차 작업 |
| 상태 | 진행중(In-Progress) |

**변경 (2건):**
- ① `2026-06/index.html` `<style>` 최상단에 `.wrap { max-width: 480px; margin: 0 auto; }` 추가 (17라인)
- ② `2026-06/index-dev.html` 동일 적용 (17라인)
- 루트 `index.html`의 `.wrap` 방식과 동일 — PC에서도 480px 1열 고정

---

**2차 작업 — 2026-06-18, 쮸티12-1호**

| 항목 | 내용 |
|------|------|
| 작업 이력 | 2차 작업 (수정) |
| 커밋 해시 | `6fa6dbb` |
| 상태 | 진행중(In-Progress) |

**변경 (1건):**
- `.wrap { max-width: 480px; margin: 0 auto; }` → `!important` 추가
- 원인: Tailwind CDN `max-w-4xl(896px)`이 `.wrap` CSS를 오버라이드하여 480px 고정이 적용되지 않음
- index.html, index-dev.html 양쪽 모두 수정

---

### WT-003: 6월 대출 페이지 상단 법적고지 하단 여백 추가

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-18 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `2026-06/index.html`, `2026-06/index-dev.html` |
| 연관 W-ID | W-003 |
| 연관 T-ID | T-003 |
| 커밋 해시 | `632e98c` |
| 작업 이력 | 1차 작업 |
| 상태 | 진행중(In-Progress) |

**변경 (2건):**
- ① `2026-06/index.html` 18라인: `.legal-top { margin-bottom: 20px; }` 추가
- ② `2026-06/index-dev.html` 18라인: 동일 적용
- `legal-shared.js` 미수정 — sirjuseyo.com 전 페이지 영향 없음, 이 페이지에만 적용

---

### WT-004: 6월 대출 페이지 본문 폰트 18px 일괄 통일

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-19 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `2026-06/index.html`, `2026-06/index-dev.html` |
| 연관 W-ID | W-004 |
| 연관 T-ID | T-004 |
| 커밋 해시 | `90e5ae6` |
| 작업 이력 | 1차 작업 |
| 상태 | 진행중(In-Progress) |

**변경 (5건 × 2파일):**
- ① `h1` CSS에 `font-size: 18px !important` 추가 (Tailwind `text-[1.2rem]/sm:text-3xl` 오버라이드)
- ② `h2.section-title`: `1.4em(22.4px)` → `18px`
- ③ `h3.sub-section-title`: `1.5em(24px)` → `18px`
- ④ `.SpringMarch-waiting-button`: `1.6em(25.6px)` → `18px`
- ⑤ `.section-box`: `1.75rem(28px)` → `18px`
- index.html, index-dev.html 양쪽 동일 적용

---


### WT-005: 6월 대출 페이지 .card-title 폰트 18px 수정

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-18 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `2026-06/index.html`, `2026-06/index-dev.html` |
| 연관 W-ID | W-005 |
| 연관 T-ID | T-005 |
| 커밋 해시 | `6b0e53a` (index-dev), 이전 커밋 (index.html) |
| 작업 이력 | 1차 작업 |
| 상태 | 진행중(In-Progress) |

**변경 (2건 × 2파일):**
- ① `.card-title { font-size: 1.5rem(24px) }` → `18px` (565라인)
- ② 반응형 `.card-title { font-size: 1.35rem }` → `18px` (752라인)
- 대상: 블랙찬스 티켓, 한도상향 카드 섹션 타이틀
- index.html, index-dev.html 양쪽 동일 적용

---

### WT-006: 6월 대출 페이지 신청절차 step-icon 빨간 원 크기 축소

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-19 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `2026-06/index.html`, `2026-06/index-dev.html` |
| 연관 W-ID | W-006 |
| 연관 T-ID | T-006 |
| 커밋 해시 | `a9fdac0` |
| 작업 이력 | 1차 작업 |
| 상태 | 완료(Done) |

**변경 (2건 × 2파일):**
- ① `.step-box .step-icon { font-size: 1.5em }` → `1em`
- ② `.step-box .step-icon { width/height: 2.2em }` → `1.8em`
- 원인: 빨간 원(~40px)이 법적고지 텍스트(24px)보다 시각적으로 커 보이는 착시
- index.html, index-dev.html 양쪽 동일 적용

---

### WT-007: 6월 대출 페이지 procedure-list 파란 원 크기 축소

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-19 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `2026-06/index.html`, `2026-06/index-dev.html` |
| 연관 W-ID | W-007 |
| 연관 T-ID | T-007 |
| 커밋 해시 | `e69d2b8` |
| 작업 이력 | 1차 작업 |
| 상태 | 완료(Done) |

**변경 (2건 × 2파일):**
- ① `.procedure-list li::before { font-size: 1.4em }` → `1em` (파란 원 ~44px → ~29px)
- ② `.procedure-list li { padding-left: 3em }` → `2.5em` (원 크기 축소에 맞춰 여백 조정)
- index.html, index-dev.html 양쪽 동일 적용

---

---

## 깃 관리자 전달 작업 완료 보고서 (T-001~T-007)

monthly-loan T-001~T-007 작업 완료했습니다.
`feature/T-001-jun-loan-landing` 원격 푸시 완료했고 PR은 `#16`입니다.

작업 내용:
- `legal-shared.js` 연결 — 상단·하단 법적고지 자동 주입, `<main>`에 `wrap` 클래스 추가 (T-001)
- PC 좌우 너비 480px 고정 — `.wrap { max-width: 480px !important; margin: 0 auto !important; }` (T-002)
- 상단 법적고지 하단 여백 20px — `.legal-top { margin-bottom: 20px; }` (T-003)
- 본문 폰트 18px 일괄 통일 — h1/h2/h3/버튼/section-box/card-title 6개 항목 (T-004, T-005)
- 신청절차 빨간 원(step-icon) 크기 축소 — font-size 1.5em→1em, 크기 2.2em→1.8em (T-006)
- 웨이팅 파란 원(procedure-list li::before) 크기 축소 — font-size 1.4em→1em, padding-left 3em→2.5em (T-007)

검증:
- index.html 브라우저 로컬 확인 완료 (상단·하단 법적고지 주입, 480px 레이아웃, 폰트/원 크기)
- index-dev.html 동일 수정 적용 + DEV 배너 정상 표시 확인 완료

커밋:
- `165a165` T-001: 6월 대출 프로모션 페이지 legal-shared.js 연결
- `1339e07` T-001: 6월 DEV 페이지 legal-shared.js 연결
- `c21ccdd` T-002: 6월 대출 페이지 PC 좌우 너비 480px 고정
- `6fa6dbb` T-002: .wrap max-width !important 추가 — Tailwind 오버라이드 수정
- `632e98c` T-003: 상단 법적고지 하단 여백 20px 추가
- `90e5ae6` T-004: 본문 폰트 18px 일괄 통일 (법적고지 24px 규정 준수)
- `6b0e53a` T-005: index-dev.html .card-title 폰트 18px 수정
- `a9fdac0` T-006: step-icon 빨간 원 크기 축소
- `e69d2b8` T-007: procedure-list 파란 원 크기 축소

문서:
- `project-docs` (monthly-loan-repo 내 포함)
- 브랜치: `feature/T-001-jun-loan-landing`
- PR: `#16`
- 문서 커밋: `642244d` [T-007] WT-007 작성, T-007 완료 처리

한 줄 버전:
- `monthly-loan T-001~T-007 완료, feature/T-001-jun-loan-landing 푸시 및 PR #16 업데이트 완료, 브라우저 로컬 검증했습니다. 깃 & 배포 관리자님 feature → dev 검토 부탁드립니다.`


---

## 깃 & 배포 관리자 완료 보고서 (T-001~T-007)

[GitHub Pages PRD : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-001~T-007 반영 완료했습니다.
`feature/T-001-jun-loan-landing`의 누적형 PR #16 전체 병합은 하지 않았고, 요청 범위에 해당하는
`2026-06/index.html`, `2026-06/index-dev.html`만 `e69d2b8` 기준으로 `main`에 선별 반영했습니다.

반영 내용:
- T-001 legal-shared.js 연결
- T-002 .wrap max-width 480px !important
- T-003 상단 법적고지 하단 여백 20px
- T-004 본문 폰트 18px 일괄 통일
- T-005 card-title 18px
- T-006 step-icon 빨간 원 축소
- T-007 procedure-list 파란 원 축소

실반영 커밋:
- `8af7421` fix(loan): apply T-001~T-007 June page updates [Ser7-1]

검증:
- 원격 `main` HEAD = `8af7421` 확인
- GitHub Pages live 응답 `HTTP/2 200` 확인
- live header `last-modified` 갱신 확인

판단:
- `monthly-loan` 레포는 `dev` 브랜치가 없고, PR #16 base도 `main`입니다.
- 또한 PR #16은 누적형 open PR이라 전체 병합 시 요청 범위 밖 변경까지 함께 들어갈 수 있어 전체 병합하지 않았습니다.

문서:
- `project-docs/00_core_ops/TODO_BOARD_GitDeployOps_Ser7-1호_20260619.md`
- `project-docs/00_core_ops/WORK_THROUGH_GitDeployOps_Ser7-1호_20260619.md`

로컬 최신화:
- 로컬 `monthly-loan main` HEAD와 원격 `origin/main`이 동일한 `8af7421`로 확인되어 최신화 완료했습니다.


### WT-008: 홈 화면 18px 초과 폰트 18px 통일

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-19 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `index.html`, `index-dev.html` |
| 연관 W-ID | W-008 |
| 연관 T-ID | T-008 |
| 커밋 해시 | `062433f` |
| 브랜치 | `feature/T-008-home-font-18px` (신규) |
| PR | #17 |
| 상태 | 완료(Done) |

**변경 (4건 × 2파일):**
- ① `.nav-menu { font-size: 1.3rem(20.8px) }` → `18px`
- ② `.main-title { font-size: 1.4rem(22.4px) }` → `18px`
- ③ `.checker-icon { font-size: 1.2rem(19.2px) }` → `18px`
- ④ `.worldcup-title { font-size: 1.2rem(19.2px) }` → `18px`
- 법적고지 규정 준수: 본문 최대 18px
- index.html, index-dev.html 양쪽 동일 적용

---

## 깃 & 배포 관리자 완료 보고서 (T-008)

[GitHub Pages PRD : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-008 반영 완료했습니다.
`feature/T-008-home-font-18px`의 PR #17 전체 병합은 하지 않았고, 요청 범위에 해당하는
`index.html`, `index-dev.html`만 `062433f` 기준으로 `main`에 선별 반영했습니다.

반영 내용:
- `.nav-menu` `1.3rem(20.8px)` → `18px`
- `.main-title` `1.4rem(22.4px)` → `18px`
- `.checker-icon` `1.2rem(19.2px)` → `18px`
- `.worldcup-title` `1.2rem(19.2px)` → `18px`

실반영 커밋:
- `a4e3d45` fix(home): apply T-008 18px font updates [Ser7-1]

검증:
- 원격 `main` HEAD = `a4e3d45` 확인
- GitHub Pages deploy run `27775132030` success 확인
- live 응답 `HTTP/2 200` 확인
- live header `last-modified` 갱신 확인

판단:
- `monthly-loan` 레포는 `dev` 브랜치가 없고, PR #17 base도 `main`입니다.
- 또한 PR #17 diff에는 문서 변경이 함께 섞여 있어 전체 병합하지 않고 루트 홈 2개 파일만 선별 반영했습니다.

문서:
- `project-docs/00_core_ops/TODO_BOARD_GitDeployOps_Ser7-1호_20260619.md`
- `project-docs/00_core_ops/WORK_THROUGH_GitDeployOps_Ser7-1호_20260619.md`

로컬 최신화:
- 로컬 `monthly-loan main` HEAD와 원격 `origin/main`이 동일한 `a4e3d45`로 확인되어 최신화 완료했습니다.

---

### WT-009: 월드컵 챌린지 페이지 18px 초과 폰트 18px 통일

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-19 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `2026-06/worldcup-challenge/index-dev.html` |
| 연관 W-ID | W-009 |
| 연관 T-ID | T-009 |
| 커밋 해시 | `d783299` |
| 브랜치 | `feature/T-009-worldcup-font-18px` (신규) |
| PR | #18 |
| 상태 | 진행중(In-Progress) |

**변경 (9건):**
- ① `.section-title { font-size: 1.3rem(20.8px) }` → `18px`
- ② `.period-date { font-size: 1.3rem(20.8px) }` → `18px`
- ③ `.match-teams { font-size: 1.25rem(20px) }` → `18px`
- ④ `.total-box { font-size: 1.2rem(19.2px) }` → `18px`
- ⑤ `.no-condition { font-size: 2.4rem(38.4px) }` → `18px`
- ⑥ `.method-highlight { font-size: 1.18rem(18.88px) }` → `18px`
- ⑦ `.usage-label { font-size: 1.15rem(18.4px) }` → `18px`
- ⑧ `.apply-cta-title { font-size: 1.45rem(23.2px) }` → `18px`
- ⑨ `.apply-cta-button { font-size: 1.25rem(20px) }` → `18px`
- 히어로 영역(이미지·텍스트) 제외, 본문 전체 18px 이하 준수
- index-dev.html(DEV)만 대상

---

### WT-010: 월드컵 챌린지 페이지 legal-shared.js 연결

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-19 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `2026-06/worldcup-challenge/index-dev.html`, `2026-06/worldcup-challenge/index.html` |
| 연관 W-ID | W-010 |
| 연관 T-ID | T-010 |
| 커밋 해시 | `d783299` (T-009와 동일 커밋) |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| PR | #18 |
| 상태 | 진행중(In-Progress) |

**변경 (3건 × 2파일):**
- ① `<div class="page-card">` → `<div class="page-card page">` (legal-shared.js 감지용 클래스 추가)
- ② 하드코딩 `<footer class="page-footer">...</footer>` 제거
- ③ `<script src="/footer.js"></script>` → `<script src="/js/legal-shared.js"></script>` 교체
- DEV(`index-dev.html`) + PRD(`index.html`) 양쪽 동일 적용

---

---

### WT-020: legal-shared.js 서비스 링크 절대경로 수정

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-26 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `js/legal-shared.js` |
| 연관 W-ID | W-020 |
| 연관 T-ID | T-020 |
| 커밋 해시 | `ab9eac8` |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 테스트 완료(DONE) |

**문제:**
`legal-shared.js` Contact 섹션 서비스 카드의 링크가 루트 상대경로(`/privacy/...`)로 되어 있어 monthly-loan 도메인에서 404 발생.
- `monthly-loan.sirjuseyo.com/privacy/...` → 파일 없음 → 404
- privacy 파일은 `sirjuseyoWeb` 레포에만 존재 (`www.sirjuseyo.com/privacy/`)

**처방:**
서비스 카드 링크 3개를 절대경로로 변경 + `target="_blank" rel="noopener"` 추가

| 항목 | 변경 전 | 변경 후 |
|---|---|---|
| 서비스 이용약관 | `/privacy/01_terms.html` | `https://www.sirjuseyo.com/privacy/01_terms.html` |
| 개인정보 처리방침 | `/privacy/index002.html` | `https://www.sirjuseyo.com/privacy/index002.html` |
| 대부거래 표준약관 | `/privacy/08_standard-terms.html` | `https://www.sirjuseyo.com/privacy/08_standard-terms.html` |

**검증:**
- `http://127.0.0.1:5502/index-dev.html` → 서비스 이용약관 클릭 → `www.sirjuseyo.com/privacy/01_terms.html` 정상 오픈 확인 (사장님 로컬 테스트 완료)
- `sirjuseyoWeb/js/legal-shared.js`는 별도 파일로 미수정 → www.sirjuseyo.com 영향 없음

---

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 — T-020 (보관, 정책 201~205 · WT-020 밑)
```
[GitHub Pages PRD : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-020 반영 완료했습니다.
`feature/T-009-worldcup-font-18px`의 PR #18 전체 병합은 하지 않았고, 요청 범위에 해당하는
`js/legal-shared.js`만 `ab9eac8` 기준으로 `main`에 선별 반영했습니다.

반영 내용:
- `/privacy/01_terms.html` → `https://www.sirjuseyo.com/privacy/01_terms.html`
- `/privacy/index002.html` → `https://www.sirjuseyo.com/privacy/index002.html`
- `/privacy/08_standard-terms.html` → `https://www.sirjuseyo.com/privacy/08_standard-terms.html`
- 세 링크 모두 `target="_blank" rel="noopener"` 추가

실반영 커밋:
- `b112c62` fix(legal): apply T-020 service links [Ser7-1]

검증:
- 원격 `main` HEAD = `b112c62` 확인
- GitHub Pages deploy run `28282393428` success 확인
- `https://monthly-loan.sirjuseyo.com/js/legal-shared.js` live 응답 `HTTP/2 200` 확인
- live JS header `last-modified` 갱신 확인

판단:
- `monthly-loan` 레포는 `dev` 브랜치가 없고, PR #18 base도 `main`입니다.
- 실제 `ab9eac8` 커밋은 `js/legal-shared.js` 단일 변경이지만, PR #18에는 다른 코드/문서 변경도 누적되어 있어 전체 병합하지 않고 해당 파일만 선별 반영했습니다.

문서:
- `project-docs/00_core_ops/TODO_BOARD_GitDeployOps_Ser7-1호_20260619.md`
- `project-docs/00_core_ops/WORK_THROUGH_GitDeployOps_Ser7-1호_20260619.md`

로컬 최신화:
- 로컬 `monthly-loan main` HEAD와 원격 `origin/main`이 동일한 `b112c62`로 확인되어 최신화 완료했습니다.
```

---

### WT-021: [monthly-loan] 하단 법적고지 연체금리 문구 수정

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-27 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `js/legal-shared.js` |
| 연관 W-ID | W-021 |
| 연관 T-ID | T-021 |
| 커밋 해시 | `d586839` |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 진행중(In-Progress) |

**문제:**
하단 법적고지 그룹1 타이틀의 연체금리 수치가 구버전(+6%P·18%)으로 기재되어 있어 수정 필요.

**처방:**
| 항목 | 변경 전 | 변경 후 |
|---|---|---|
| 연체금리 | `+6%P 이내, 연 18%이내` | `+3%P 이내, 연 15%이내` |

**수정 위치:** `js/legal-shared.js` 60번줄 `.legal-group-title`

---

### WT-022: [sirjuseyoWeb] 하단 법적고지 연체금리 문구 수정

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-27 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `sirjuseyoWeb/js/legal-shared.js` |
| 연관 W-ID | W-022 |
| 연관 T-ID | T-022 |
| 커밋 해시 | `a1660d1` |
| 브랜치 | `feature/T-014-hero-slider-cleanup` (sirjuseyoWeb 레포) |
| 상태 | 진행중(In-Progress) |

**처방:**
| 항목 | 변경 전 | 변경 후 |
|---|---|---|
| 연체금리 | `+6%P 이내, 연 18%이내` | `+3%P 이내, 연 15%이내` |

**수정 위치:** `sirjuseyoWeb/js/legal-shared.js` 60번줄 `.legal-group-title`

---

### WT-023: [monthly-loan] footer.js → legal-shared.js 교체 + deprecated 처리

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-27 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `footer.js`, `apply/apply.html`, `apply/apply-dev.html`, `loan-checker/index.html`, `2026-06/worldcup-challenge/apply/index.html`, `2026-06/worldcup-challenge/apply/index-dev.html` |
| 연관 W-ID | W-023 |
| 연관 T-ID | T-023 |
| 커밋 해시 | `05a34aa` |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 진행중(In-Progress) |

**처방:**
1. `footer.js` 파일 상단에 DEPRECATED 코멘트 추가 (구버전 보관용)
2. 5개 HTML 파일에서 `<script src="/footer.js">` 주석처리 + `/js/legal-shared.js` 교체
3. `loan-checker/index.html` — `.app-main`에 `page` 클래스 추가 (legal-shared.js 감지 대응)

| 파일 | 처리 내용 |
|---|---|
| `footer.js` | DEPRECATED 코멘트 추가 |
| `apply/apply.html` | footer.js 주석처리 → legal-shared.js 교체 |
| `apply/apply-dev.html` | 동일 |
| `loan-checker/index.html` | `.page` 클래스 추가 + 교체 |
| `2026-06/worldcup-challenge/apply/index.html` | footer.js 주석처리 → legal-shared.js 교체 |
| `2026-06/worldcup-challenge/apply/index-dev.html` | 동일 |

---

### WT-011: 월드컵 챌린지 페이지 법적고지↔콘텐츠 영역 시각적 구분

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-20 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `2026-06/worldcup-challenge/index-dev.html`, `2026-06/worldcup-challenge/index.html` |
| 연관 W-ID | W-011 |
| 연관 T-ID | T-011 |
| 커밋 해시 | `af8d679` |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 테스트 완료(DONE) |

**변경:**
- 인라인 `<style>` 블록에 `.legal-top { margin-bottom: 20px; }` 추가 (DEV+PRD 양쪽 동일 적용)
- 상단 법적고지 영역과 페이지 콘텐츠 영역 사이 시각적 여백 구분

---

### WT-012: 대출 가능성 검사기 모바일 앱 사이즈 변경

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-20 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `loan-checker/index-dev.html` |
| 연관 W-ID | W-012 |
| 연관 T-ID | T-012 |
| 커밋 해시 | `5297575` |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 테스트 완료(DONE) |

**변경:**
- 인라인 `<style>` 블록에 `.app-main { max-width: 480px !important; margin: 0 auto !important; }` 추가 (`loan-checker/styles.css`의 1100px 오버라이드)
- `<main class="app-main">` → `<main class="app-main page">` (.page 클래스 추가 — legal-shared.js 감지)

---

### WT-013: 대출 가능성 검사기 법적고지 연결 (상단+하단)

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-20 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `loan-checker/index-dev.html` |
| 연관 W-ID | W-013 |
| 연관 T-ID | T-013 |
| 커밋 해시 | `5297575` |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 테스트 완료(DONE) |

**변경:**
- `<script src="/footer.js"></script>` → `<script src="/js/legal-shared.js"></script>` 교체
- 상단 법적고지 자동 주입 + 하단 콘텐츠 자동 주입

---

### WT-014: 대출 가능성 검사기 법적고지↔콘텐츠 간격

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-20 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `loan-checker/index-dev.html` |
| 연관 W-ID | W-014 |
| 연관 T-ID | T-014 |
| 커밋 해시 | `5297575` |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 테스트 완료(DONE) |

**변경:**
- 인라인 `<style>` 블록에 `.legal-top { margin-bottom: 20px; }` 추가 (다른 페이지와 동일)

---

### WT-015: 대출 가능성 검사기 폼 패널 2열 → 1열 변경

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-20 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `loan-checker/index-dev.html` |
| 연관 W-ID | W-015 |
| 연관 T-ID | T-015 |
| 커밋 해시 | `15592a9` |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 테스트 완료(DONE) |

**변경:**
- 인라인 `<style>` 블록에 `.form-grid { grid-template-columns: 1fr !important; }` 추가
- `styles.css`의 `@media(min-width:960px)` 내 `repeat(2,1fr)` 2열 → 1열 오버라이드

---

### WT-016: 대출 가능성 검사기 뚝딱 버튼 → 하단 법적고지 위로 이동

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-20 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `loan-checker/index-dev.html` |
| 연관 W-ID | W-016 |
| 연관 T-ID | T-016 |
| 커밋 해시 | `8bac5d8` |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 테스트 완료(DONE) |

**변경:**
- `div.action-area`가 `</main>` 밖에 있어 legal-shared.js `beforeend` 주입 후 하단 콘텐츠 아래로 밀리던 문제 해결
- `div.action-area`를 `</main>` 닫기 태그 바로 앞으로 이동
- 인라인 `<style>` 블록에 `.action-area { margin-top: 24px; padding-top: 24px; border-top: 2px solid #E5E0F0; }` 추가 (구분선)

---

### WT-017: 대출 가능성 검사기 두 번째 이미지 숨김 처리

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-20 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `loan-checker/index-dev.html` |
| 연관 W-ID | W-017 |
| 연관 T-ID | T-017 |
| 커밋 해시 | `bd47edb` |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 테스트 완료(DONE) |

**변경:**
- 상단 이미지 4개 중 두 번째 `loan-eligibility-checker-02.jpg` ('대출이 필요하신 분 주목') `section.hero-banner`에 `style="display:none;"` 추가

---

### WT-018: 대출 가능성 검사기 4번째 이미지 → 텍스트 박스 교체

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-20 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `loan-checker/index-dev.html` |
| 연관 W-ID | W-018 |
| 연관 T-ID | T-018 |
| 커밋 해시 | `e16b96f` |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 테스트 완료(DONE) |

**변경:**
- `loan-eligibility-checker-title.jpg` 이미지 제거
- 퍼플 그라디언트 텍스트 박스 교체:
  ```html
  <div class="title-text-box">
    <p class="title-text-main">대출 가능성 검사기</p>
    <p class="title-text-sub">지금 바로 확인해 보세요.</p>
  </div>
  ```
- 인라인 `<style>`: `.title-text-box { background: linear-gradient(135deg,#380097,#5a00cc); color:#fff; text-align:center; padding:40px 24px; width:100%; }` / `.title-text-main { font-size:18px; font-weight:900; }` / `.title-text-sub { font-size:14px; opacity:.88; }`

---

### WT-019: 대출 가능성 검사기 ①~⑤ 패널 폰트 18px 초과 통일

| 항목 | 내용 |
|------|------|
| 작업일 | 2026-06-20 |
| 작업자 | 쮸티12-1호 |
| 대상 파일 | `loan-checker/index-dev.html` |
| 연관 W-ID | W-019 |
| 연관 T-ID | T-019 |
| 커밋 해시 | `e86d599` (재수정) |
| 브랜치 | `feature/T-009-worldcup-font-18px` |
| 상태 | 테스트 완료(DONE) |

**변경:**
- 인라인 `<style>` 블록에 `.result-panel h2 { font-size: 18px !important; }` 추가
- 브라우저 기본 `h2` = 24px → CSS 명시 없으면 18px 규정 위반 → 오버라이드
- 1차 수정(`ec9a3d6`): `.page-intro h1`, `.title-bar-text` 셀렉터 → 해당 요소 HTML에 미존재 → 무효
- 재수정(`e86d599`): `.result-panel h2` 셀렉터로 정확히 타겟팅 → 사장님 검증 완료

---

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 — T-011~T-019 (보관, 정책 201~205 · 마지막 WT-ID 밑)
```
[GitHub Pages PRD : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-011~T-019 반영 완료했습니다.
`feature/T-009-worldcup-font-18px`의 PR #18 전체 병합은 하지 않았고, 요청 범위에 해당하는
`2026-06/worldcup-challenge/index.html`, `2026-06/worldcup-challenge/index-dev.html`, `loan-checker/index-dev.html`
3개 파일만 `origin/feature/T-009-worldcup-font-18px` 기준으로 `main`에 선별 반영했습니다.

반영 내용:
- [T-011] 월드컵 챌린지 `.legal-top { margin-bottom: 20px; }` 추가
- [T-012] 대출 검사기 `.app-main` 480px 오버라이드 + `.page` 클래스 추가
- [T-013] 대출 검사기 `footer.js` → `legal-shared.js` 교체
- [T-014] 대출 검사기 `.legal-top { margin-bottom: 20px; }` 추가
- [T-015] 대출 검사기 `.form-grid` 2열 → 1열 오버라이드
- [T-016] 대출 검사기 `action-area`를 `</main>` 안으로 이동 + 구분선 추가
- [T-017] 대출 검사기 두 번째 이미지 `display:none` 처리
- [T-018] 대출 검사기 4번째 이미지 → 퍼플 그라디언트 텍스트 박스 교체
- [T-019] 대출 검사기 `.result-panel h2` 18px 오버라이드

실반영 커밋:
- `c3063b3` fix(checker): apply T-011~T-019 updates [Ser7-1]

검증:
- 원격 `main` HEAD = `c3063b3` 확인
- GitHub Pages deploy run `27898271068` success 확인
- `https://monthly-loan.sirjuseyo.com/2026-06/worldcup-challenge/` live 응답 `HTTP/2 200` 확인
- `https://monthly-loan.sirjuseyo.com/loan-checker/index-dev.html` live 응답 `HTTP/2 200` 확인
- 두 URL 모두 live header `last-modified` 갱신 확인

판단:
- `monthly-loan` 레포는 `dev` 브랜치가 없고, PR #18 base도 `main`입니다.
- 또한 PR #18 diff에는 문서 변경이 함께 섞여 있어 전체 병합하지 않고 요청서 마지막 줄에 명시된 3개 파일만 선별 반영했습니다.

문서:
- `project-docs/00_core_ops/TODO_BOARD_GitDeployOps_Ser7-1호_20260619.md`
- `project-docs/00_core_ops/WORK_THROUGH_GitDeployOps_Ser7-1호_20260619.md`

로컬 최신화:
- 로컬 `monthly-loan main` HEAD와 원격 `origin/main`이 동일한 `c3063b3`로 확인되어 최신화 완료했습니다.
```

---

### 📥 깃 & 배포 관리자 작업 완료 보고서 원문 — T-009+T-010 (보관, 정책 201~205 · 마지막 WT-ID 밑)
```
[GitHub Pages PRD : 깃 & 배포 관리자 -> 개발자]

monthly-loan T-009+T-010 반영 완료했습니다.
`feature/T-009-worldcup-font-18px`의 PR #18 전체 병합은 하지 않았고, 요청 범위에 해당하는
`2026-06/worldcup-challenge/index.html`, `2026-06/worldcup-challenge/index-dev.html`만 `d783299` 기준으로 `main`에 선별 반영했습니다.

반영 내용:
- [T-009] 월드컵 챌린지 페이지 본문 18px 초과 폰트 항목 18px 통일
  - `.section-title`
  - `.period-date`
  - `.match-teams`
  - `.benefit-amount`
  - `.no-condition`
  - `.result-box`
  - `.usage-label`
  - `.apply-cta-title`
  - `.apply-cta-button`
- [T-010] `.page-card`에 `page` 클래스 추가
- [T-010] 하드코딩 footer 제거
- [T-010] `footer.js` → `legal-shared.js` 교체

실반영 커밋:
- `21f6ed0` fix(challenge): apply T-009 T-010 updates [Ser7-1]

검증:
- 원격 `main` HEAD = `21f6ed0` 확인
- GitHub Pages deploy run `27777530437` success 확인
- live 응답 `HTTP/2 200` 확인
- live header `last-modified` 갱신 확인

판단:
- `monthly-loan` 레포는 `dev` 브랜치가 없고, PR #18 base도 `main`입니다.
- 또한 PR #18 diff에는 문서 변경이 함께 섞여 있어 전체 병합하지 않고 월드컵 챌린지 2개 파일만 선별 반영했습니다.

문서:
- `project-docs/00_core_ops/TODO_BOARD_GitDeployOps_Ser7-1호_20260619.md`
- `project-docs/00_core_ops/WORK_THROUGH_GitDeployOps_Ser7-1호_20260619.md`

로컬 최신화:
- 로컬 `monthly-loan main` HEAD와 원격 `origin/main`이 동일한 `21f6ed0`로 확인되어 최신화 완료했습니다.
```


