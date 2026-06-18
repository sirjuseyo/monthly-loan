# 개발 명세서 (Technical Spec): 써주세요 감다살🐙문어 챌린지 내재화 v1.0

**작성일:** 2026-06-02
**작성자:** SCTC 쮸티 (CTO) — 클로드 앱 코드 단독 진행
**연관 기획서:** `PLAN_2026-06_월드컵_감다살문어_챌린지_20260602.md`
**상태:** 확정 — 개발 착수 가능
**베이스 문서:** `TECHSPEC_월별대출신청내재화_v1.0_Claude_Server_20260424.md` 구조 준수

---

## 0. ⚠️ 작업 전 필독 — 서버 다운 방지

### 0-1. 1번 사고 이력 (정확히)

> **사고 원인:** 월별 대출 작업 시 서버팀이 **운영 도메인을 무단 교체**하여 iOS/Android 앱 전체 다운.
>
> - 사고 변경: `nano-api.sirjuseyo.com` → `monthly-api.sirjuseyo.com` **교체** (병행 추가가 아닌 교체)
> - 사고 변경: `dev-nano-api.sirjuseyo.com` → `dev-monthly-api.sirjuseyo.com` **교체**
> - 결과: iOS/Android `A server with the specified hostname could not be found` 장애
> - 복구: Ser5호(Git 관리자) hotfix commit `0400573` + Route53 change `C06477581IX6EJYFTAO0H`
>
> **즉 endpoint 변경이 아니라 운영 도메인 자체를 교체한 게 원인.** 본 작업은 클로드 앱 코드 **단독** 진행이므로 도메인 통제 절대 준수.

### 0-2. 도메인 절대 원칙 (Ser5호 통제 공지 기준)

| 절대 원칙 | 위반 시 |
|---|---|
| ① **운영 도메인 임의 교체·삭제·비활성화 절대 금지** — 특히 `nano-api.sirjuseyo.com`, `dev-nano-api.sirjuseyo.com` (iOS/Android 실사용) | 앱 전체 다운 |
| ② **신규 도메인은 병행 추가만 가능** (교체 X) | 앱 전체 다운 |
| ③ **EKS Ingress, Route53, kustomization.yaml의 hostname/외부 endpoint 영향 구간 절대 수정 금지** | 인프라 전체 마비 |
| ④ **기존 인증/CORS wildcard 설정 변경 금지** | 인증 마비 |
| ⑤ **신규 테이블만 추가** — 기존 테이블 스키마 변경 금지 | 기존 데이터 손상 |
| ⑥ **DEV 전체 테스트 → CTO 승인 → PRD 배포** 순서 절대 준수 | 깨진 상태 노출 |

### 0-3. 본 작업의 도메인 사용 (안전)

> **본 작업은 신규 도메인 추가 없음. 기존 `admin-api.sirjuseyo.com` 도메인 위에 경로만 신설.** (4차 심사 작업과 동일 패턴)

| 사용 도메인 | DEV / PRD | 본 작업 영향 |
|-----|------|---------|
| `admin-api.sirjuseyo.com` / `dev-admin-api.sirjuseyo.com` | 기존 사용 중 | **경로 추가만** (`/open/challenge/worldcup-challenge-2026/**`, `/challenge/worldcup-challenge-2026/**`) — 도메인 자체는 무손상 |
| `nano-api.sirjuseyo.com` / `dev-nano-api.sirjuseyo.com` | iOS/Android 운영 도메인 | **절대 건드리지 않음** ⚠️ |
| `monthly-api.sirjuseyo.com` / `dev-monthly-api.sirjuseyo.com` | 월별대출 전용 병행 도메인 | **절대 건드리지 않음** ⚠️ |
| `member-api`, `point-api`, `point-api-v1` | 회원·포인트·광고 | **절대 건드리지 않음** ⚠️ |

### 0-4. 신규 경로 충돌 검토 결과

| 신규 경로 | 도메인 | 충돌 여부 |
|----------|------|---------|
| `/open/challenge/worldcup-challenge-2026/**` | `admin-api` | 없음 (`/open/**`는 4차 심사 작업으로 도입, `worldcup-challenge-2026` 하위 신규) |
| `/challenge/worldcup-challenge-2026/**` | `admin-api` | 없음 (기존 admin 엔드포인트 `/loan-app/**`, `/repayment/**` 등과 슬러그 자체가 다름) |

> ⚠️ **절대 변경 금지 기존 admin-api 운영 경로:** `/loan-app/**`, `/repayment/**`, `/loan-schedule/**`, `/loan-transaction/**`, `/loan-overdue/**`, `/cabinet-api/**`, `/css/**`, `/scrapped-transaction/**`, `/memo/**`, `/loan-product/**`, `/nano3/**`, `/members/**`, `/admin-member/**`, `/notice/**`, `/qna/**`, `/cash-back/**`, `/review-application/**`, `/open/review-application/**`

---

## 1. v1.0 범위 요약

| 항목 | 내용 |
|------|------|
| 목표 | 감다살🐙문어 챌린지 신청 → DB 저장 → 어드민 리스트 조회 |
| 클라이언트 | `apply-감다살문어챌린지-worldcup` 와이어프레임 기반, 별도 페이지로 배포 (`/apply/index.html`) |
| 어드민 | Vue.js 관리자 모드 > **신청 > 감다살🐙문어 챌린지** (월별 대출·Nano Credit 아래 추가) |
| 운영 기간 | 신청 2026.6.1(월) ~ 6.11(목) / 발표 한국 여정 종료 후 7일 이내 |
| 인증 | **비회원·비인증** (회원 로그인 불필요. `/open/**` 패턴) |
| 제외 범위 | 적중 자동 검증 / 추가 대출 자동 발행 (수동 처리) |
| CSV | v1.0 포함 |

---

## 2. 기술 스택

| 영역 | 기술 | 비고 |
|------|------|------|
| 클라이언트 | HTML + JS (`monthly-loan-repo/2026-06/worldcup-challenge/apply/index.html`) | 클로드 앱 코드 |
| 관리자 UI | Vue.js (admin-web) | 클로드 앱 코드 |
| 백엔드 API | Java v8, Spring Boot (sirjuseyo-nano) | 클로드 앱 코드 |
| DB | AWS RDS, MySQL | nano DB에 **신규 테이블 추가** |
| 인프라 | AWS EC2, API Gateway | 기존 인프라 활용 (변경 X) |

---

## 3. 환경 구성 (DEV / PRD)

### 3-1. 개발 순서 정책
```
항상 DEV 개발 → DEV 전체 테스트 완료 → CTO 승인 → PRD 반영 & 배포
브랜치 정책: feature/* → dev → main
```

### 3-2. DEV / PRD DB 분리 확인 필수
> ⚠️ DEV 착수 전 DEV DB / PRD DB 분리 여부 CTO 확인 보고 필수

### 3-3. 환경별 URL

| 구분 | DEV | PRD |
|------|-----|-----|
| 클라 (챌린지 상세 페이지) | `https://monthly-loan.sirjuseyo.com/2026-06/worldcup-challenge/index-dev.html` | `https://monthly-loan.sirjuseyo.com/2026-06/worldcup-challenge/` |
| 클라 (신청 폼) | `https://monthly-loan.sirjuseyo.com/2026-06/worldcup-challenge/apply/index-dev.html` | `https://monthly-loan.sirjuseyo.com/2026-06/worldcup-challenge/apply/` |
| API (신청) | `https://dev-admin-api.sirjuseyo.com/open/challenge/worldcup-challenge-2026/applications` | `https://admin-api.sirjuseyo.com/open/challenge/worldcup-challenge-2026/applications` |
| API (어드민) | `https://dev-admin-api.sirjuseyo.com/challenge/worldcup-challenge-2026/applications` | `https://admin-api.sirjuseyo.com/challenge/worldcup-challenge-2026/applications` |
| 어드민 UI | `https://dev-admin.sirjuseyo.com/#/pages/worldcup-challenge/applicationList` | `https://admin.sirjuseyo.com/#/pages/worldcup-challenge/applicationList` |

> ⚠️ 클라 DEV / PRD 파일 분리 (DEV: `index-dev.html` / PRD: `index.html`)
> ⚠️ HTTPS 강제

### 3-4. 파일 경로 (기획서 §11-1 확정)

| 파일 | 경로 |
|------|------|
| 챌린지 상세 페이지 (PRD) | `monthly-loan-repo/2026-06/worldcup-challenge/index.html` |
| 챌린지 상세 페이지 (DEV) | `monthly-loan-repo/2026-06/worldcup-challenge/index-dev.html` |
| 신청 폼 (PRD) | `monthly-loan-repo/2026-06/worldcup-challenge/apply/index.html` |
| 신청 폼 (DEV) | `monthly-loan-repo/2026-06/worldcup-challenge/apply/index-dev.html` |
| 자산 폴더 | `monthly-loan-repo/2026-06/worldcup-challenge/assets/` |
| 히어로 이미지 | `monthly-loan-repo/2026-06/worldcup-challenge/assets/worldcup-challenge-jun-001.jpg` (328KB, 1697×927) |

> 📌 **폴더 네이밍 정책:** kebab-case 영문 슬러그 (`worldcup-challenge`) — 한글/이모지/언더스코어 금지. "이벤트 대출"(월별 대출 옵션)과 혼동 방지 위해 `event` 대신 `challenge` 사용.

---

## 4. DB 스키마

### 4-1. 개인정보 저장 정책 (확정)

| 항목 | 결정 | 근거 |
|------|------|------|
| 암호화 | **없음 — 평문 저장** | 기존 nano LoanApplication 동일 패턴. 관리자 전용 |
| name_search | **없음** | 평문 저장이므로 name 컬럼 직접 LIKE 검색 |

### 4-2. 코드값 저장 정책 (확정)

기존 nano 패턴 동일: **코드값 DB 저장 + 화면 표시 분리**

| 컬럼 | DB 저장 | 화면 표시 |
|------|---------|---------|
| `status_cd` | `RECEIVED` / `REVIEWING` / `HIT` / `MISS` / `TICKET_ISSUED` / `EXPIRED` | 접수 / 검토중 / 적중 / 미적중 / 티켓발행 / 만료 |
| `point_confirmed_cd` | `Y` / `N` | 있습니다 / 없습니다 |
| `predict_final_result_cd` | `GROUP_FAIL` / `R32` / `R16` / `R8` / `R4` / `FINAL` / `WIN` | 조별예선 탈락 / 32강 / 16강 / 8강 / 4강 / 결승 / 우승 |

### 4-3. 테이블: `challenge_worldcup_2026_application`

> nano DB에 **신규 추가**. 기존 테이블 변경 절대 금지.

```sql
CREATE TABLE `challenge_worldcup_2026_application` (
  `challenge_worldcup_2026_application_id` int NOT NULL AUTO_INCREMENT COMMENT '챌린지 신청ID',
  `member_id`        int          DEFAULT NULL          COMMENT '고객번호 (v1.0은 NULL — 비회원 신청)',

  -- 신청자 입력 정보 (평문 저장)
  `name`             varchar(50)  DEFAULT NULL          COMMENT '성함',
  `birth_date`       varchar(10)  DEFAULT NULL          COMMENT '생년월일 (YYYY.MM.DD)',
  `phone`            varchar(11)  DEFAULT NULL          COMMENT '휴대폰번호 (하이픈 제거 11자리)',
  `email`            varchar(100) DEFAULT NULL          COMMENT '이메일',

  -- 챌린지 자격 확인
  `point_confirmed_cd` varchar(1) NOT NULL DEFAULT 'N'  COMMENT '감다살미션 10,000P 보유 (Y/N)',

  -- 예측 정보 5종
  `predict_group_result`        varchar(30) DEFAULT NULL  COMMENT '조별 예선 성적 (예: "2승 1무 0패")',
  `predict_czech_goals`         int         DEFAULT NULL  COMMENT '체코전 한국 골 수 (0~20)',
  `predict_mexico_goals`        int         DEFAULT NULL  COMMENT '멕시코전 한국 골 수 (0~20)',
  `predict_southafrica_goals`   int         DEFAULT NULL  COMMENT '남아공전 한국 골 수 (0~20)',
  `predict_final_result_cd`     varchar(20) DEFAULT NULL  COMMENT '최종 성적 (GROUP_FAIL/R32/R16/R8/R4/FINAL/WIN)',

  -- 동의
  `privacy_agreed`   tinyint(1)   NOT NULL              COMMENT '개인정보 동의 여부',

  -- 채점 결과 (발표 시점 어드민이 입력)
  `hit_group_result`       tinyint(1) DEFAULT NULL COMMENT '조별예선 적중 (0/1)',
  `hit_czech_goals`        tinyint(1) DEFAULT NULL COMMENT '체코전 적중 (0/1)',
  `hit_mexico_goals`       tinyint(1) DEFAULT NULL COMMENT '멕시코전 적중 (0/1)',
  `hit_southafrica_goals`  tinyint(1) DEFAULT NULL COMMENT '남아공전 적중 (0/1)',
  `hit_final_result`       tinyint(1) DEFAULT NULL COMMENT '최종성적 적중 (0/1)',
  `total_hit_count`        int        DEFAULT 0    COMMENT '총 적중 개수 (0~5) — 감다살티켓 매수',
  `ticket_amount`          int        DEFAULT 0    COMMENT '총 보상 금액 (만원 단위, 0~50)',

  -- 관리 정보
  `status_cd`        varchar(20)  NOT NULL DEFAULT 'RECEIVED'
                                                        COMMENT '상태 코드',
  `admin_memo`       text         DEFAULT NULL          COMMENT '관리자 메모',
  `is_deleted`       tinyint(1)   NOT NULL DEFAULT 0    COMMENT '삭제여부',

  -- 시스템 공통 (JPA Auditing)
  `created_at`       datetime     DEFAULT CURRENT_TIMESTAMP          COMMENT '신청일시',
  `updated_at`       datetime     DEFAULT CURRENT_TIMESTAMP
                                  ON UPDATE CURRENT_TIMESTAMP        COMMENT '최종수정일시',

  PRIMARY KEY (`challenge_worldcup_2026_application_id`),
  INDEX `idx_deleted_created`        (`is_deleted`, `created_at`),
  INDEX `idx_deleted_status_created` (`is_deleted`, `status_cd`, `created_at`),
  INDEX `idx_name`                   (`name`),
  INDEX `idx_phone`                  (`phone`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='2026 북중미 월드컵 감다살🐙문어 챌린지 신청';
```

### 4-4. 코드값 상수 정의 (Java Enum)

```java
public enum ChallengeWorldcup2026StatusCode {
    RECEIVED("RECEIVED", "접수"),
    REVIEWING("REVIEWING", "검토중"),
    HIT("HIT", "적중"),
    MISS("MISS", "미적중"),
    TICKET_ISSUED("TICKET_ISSUED", "티켓발행"),
    EXPIRED("EXPIRED", "만료");
}

public enum ChallengeWorldcup2026FinalResultCode {
    GROUP_FAIL("GROUP_FAIL", "조별예선 탈락"),
    R32("R32", "32강 진출 (32강 탈락)"),
    R16("R16", "16강 진출 (16강 탈락)"),
    R8("R8", "8강 진출 (8강 탈락)"),
    R4("R4", "4강 진출 (4강 탈락)"),
    FINAL("FINAL", "결승 진출 (준우승)"),
    WIN("WIN", "우승");
}
```

> 기존 nano `LoanApplicationStatusConverter` 패턴 동일 적용

---

## 5. API 명세

### 5-1. 챌린지 신청 접수 (클라 → 서버) — 비회원·비인증

```
POST /open/challenge/worldcup-challenge-2026/applications
Content-Type: application/json
인증: 없음 (비회원)
HTTPS: 필수
CORS: monthly-loan.sirjuseyo.com 허용
       — 기존 등록되어 있으면 추가 작업 불필요
Rate Limit: 동일 IP 분당 10회 초과 시 429
```

**Request Body**
```json
{
  "name":                      "홍길동",
  "birth_date":                "1990.01.15",
  "phone":                     "010-3720-1236",
  "email":                     "hong@naver.com",
  "point_confirmed_cd":        "Y",
  "predict_group_result":      "2승 1무 0패",
  "predict_czech_goals":       2,
  "predict_mexico_goals":      1,
  "predict_southafrica_goals": 3,
  "predict_final_result_cd":   "R16",
  "privacy_agreed":            true
}
```

**서버 처리 순서**
```
1. privacy_agreed = false → 400 반환
2. point_confirmed_cd = "N" → 400 ("감다살미션 10,000P 적립이 필요합니다.")
3. 필수값 검증
4. phone 전처리: 하이픈 제거
5. predict_final_result_cd Enum 검증
6. predict_*_goals 범위 검증 (0~20)
7. 중복 신청 체크: 같은 phone → 400 ("1인 1회 신청만 가능합니다.")
8. INSERT: status_cd='RECEIVED', is_deleted=0, created_at/updated_at=자동
9. 201 반환
```

**Response — 성공 (201)**
```json
{
  "success": true,
  "challenge_worldcup_2026_application_id": 42
}
```

**Response — 실패**
```json
{ "success": false, "message": "필수 항목 누락: name" }                          // 400
{ "success": false, "message": "감다살미션 10,000P 적립이 필요합니다." }          // 400
{ "success": false, "message": "이미 신청 내역이 있습니다." }                     // 400
{ "success": false, "message": "요청이 너무 많습니다." }                          // 429
{ "success": false, "message": "서버 오류가 발생했습니다." }                      // 500
```

---

### 5-2. 신청 리스트 조회 (어드민) — 기존 admin 세션 인증 필수

```
GET /challenge/worldcup-challenge-2026/applications
인증: 기존 admin 세션
```

**Query Parameters**
```
status_cd : RECEIVED|REVIEWING|HIT|MISS|TICKET_ISSUED|EXPIRED (미입력 시 전체)
name      : 이름 LIKE 검색
phone     : 휴대폰 LIKE 검색
page      : 1 (기본)
size      : 20 (기본, 10/20/50/100)
```

**Response (200)** — `is_deleted=0`, `created_at DESC` 정렬, 코드값 → 한글 label 변환 포함

---

### 5-3. 신청 상세 조회 (어드민) — 인증 필수

```
GET /challenge/worldcup-challenge-2026/applications/{id}
```

---

### 5-4. 채점 결과 입력 (어드민) — 인증 필수

```
PATCH /challenge/worldcup-challenge-2026/applications/{id}/scoring
```

**Request Body**
```json
{
  "hit_group_result": 1,
  "hit_czech_goals": 0,
  "hit_mexico_goals": 1,
  "hit_southafrica_goals": 0,
  "hit_final_result": 1
}
```

**서버 처리**
```
1. total_hit_count = hit_* 의 합 (0~5)
2. ticket_amount = total_hit_count × 10 (만원 단위, 0~50)
3. status_cd 자동:
   - total_hit_count = 0 → MISS
   - total_hit_count ≥ 1 → HIT
4. UPDATE
```

---

### 5-5. 상태 변경 (어드민) — 인증 필수

```
PATCH /challenge/worldcup-challenge-2026/applications/{id}/status
Body: { "status_cd": "TICKET_ISSUED" }
```

---

### 5-6. CSV 다운로드 (어드민) — 인증 필수

```
GET /challenge/worldcup-challenge-2026/applications/export
Query Params: 5-2 동일
Response: .csv 파일
```

---

## 6. 어드민 패널 (Vue.js admin-web)

### 6-1. 사이드바 메뉴 위치

```
신청
 ├ 월별 대출
 ├ Nano Credit
 └ 감다살🐙문어 챌린지  ← 신규 추가 (Nano Credit 아래)
```

### 6-2. 목록 화면 (`/pages/worldcup-challenge/applicationList`)

| 기능 | 구현 내용 |
|------|----------|
| 목록 조회 | API 5-2 호출, 페이지네이션 20건 |
| 필터 | 상태(6단계), 성함, 휴대폰 |
| 컬럼 | 신청ID / 접수일시 / 성함 / 휴대폰 / 예측5종 / 적중수 / 보상금액 / 상태 / 상세 |
| 상태 표시 | 코드값 → 라벨 변환 |
| CSV 다운로드 | API 5-6 |

### 6-3. 상세 화면 (`/pages/worldcup-challenge/detail/:id`)

| 기능 | 구현 내용 |
|------|----------|
| 전체 데이터 조회 | API 5-3 |
| 예측 5종 표시 | 조별예선 / 체코전 골 / 멕시코전 골 / 남아공전 골 / 최종성적 |
| 채점 입력 | 5개 체크박스 → API 5-4 |
| 적중 결과 자동 계산 | total_hit_count × 10만 원 = ticket_amount |
| 심사 상태 변경 | API 5-5 |
| 관리자 메모 | textarea + 저장 |
| ID 네비게이션 | 상단 `< ID+1  현재ID  ID-1 >` (4차 심사 패턴) |

---

## 7. 클라이언트 측 구현 (신청 폼)

### 7-1. 파일 경로

| 환경 | 파일 |
|------|------|
| DEV | `monthly-loan-repo/2026-06/worldcup-challenge/apply/index-dev.html` |
| PRD | `monthly-loan-repo/2026-06/worldcup-challenge/apply/index.html` |

> 와이어프레임 베이스: `apply-감다살문어챌린지-worldcup_20260602.html` (껍데기 추출본, info-panel 제거됨)

### 7-2. API Base URL

| 구분 | API Base URL |
|------|-------------|
| DEV | `https://dev-admin-api.sirjuseyo.com` |
| PRD | `https://admin-api.sirjuseyo.com` |

### 7-3. 전송 데이터 형식

| 필드 | 클라 입력 | 전송값 |
|------|---------|--------|
| phone | "010-3720-1236" | 그대로 (서버에서 하이픈 제거) |
| predict_*_goals | 문자열 input | `parseInt()` 후 number |
| predict_final_result | "16강 진출 (16강 탈락)" | `"R16"` (Enum 매핑) |
| point_confirmed | "있습니다" / "없습니다" | `"Y"` / `"N"` |

### 7-4. fetch() 처리

```javascript
const FINAL_RESULT_CD = {
  "조별예선 탈락": "GROUP_FAIL",
  "32강 진출 (32강 탈락)": "R32",
  "16강 진출 (16강 탈락)": "R16",
  "8강 진출 (8강 탈락)": "R8",
  "4강 진출 (4강 탈락)": "R4",
  "결승 진출 (준우승)": "FINAL",
  "우승": "WIN"
};

const POINT_CD = {
  "있습니다": "Y",
  "없습니다": "N"
};

const response = await fetch(`${API_BASE_URL}/open/challenge/worldcup-challenge-2026/applications`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name:                      state.q1_name,
    birth_date:                state.q2_birth,
    phone:                     state.q3_phone,
    email:                     state.q4_email,
    point_confirmed_cd:        POINT_CD[state.point_confirmed],
    predict_group_result:      state.p1_group_result,
    predict_czech_goals:       parseInt(state.p2_czech_goals),
    predict_mexico_goals:      parseInt(state.p3_mexico_goals),
    predict_southafrica_goals: parseInt(state.p4_southafrica_goals),
    predict_final_result_cd:   FINAL_RESULT_CD[state.p5_final_result],
    privacy_agreed:            true
  })
});
```

### 7-5. 오류 처리
| HTTP | 사용자 안내 |
|------|-----------|
| 400 | (서버 message 그대로 노출) |
| 429 | "잠시 후 다시 시도해주세요." |
| 500 | "일시적 오류가 발생했습니다." |
| network | "네트워크 연결을 확인해주세요." |

---

## 8. 담당자별 작업 목록

### 8-1. 서버 (Java / Spring Boot / DB) — 클로드 앱 코드
```
[ ] 0-1. DEV DB / PRD DB 분리 확인 → CTO 보고
[ ] 0-2. /open/** permitAll 적용 여부 실코드 확인 (4차 심사 작업으로 이미 적용 가능성)
[ ] 0-3. AdminCorsFilter의 monthly-loan.sirjuseyo.com 등록 여부 실코드 확인
[ ] 1. feature/worldcup-challenge-2026-api 브랜치 생성
[ ] 2. challenge_worldcup_2026_application 테이블 생성 (nano DEV DB)
[ ] 3. Enum 2개 생성 (StatusCode, FinalResultCode)
[ ] 4. 엔티티 + Converter 구현
[ ] 5. POST /open/challenge/worldcup-challenge-2026/applications 구현
       - 필수값 검증
       - phone 하이픈 제거
       - point_confirmed_cd = "N" 시 400
       - 중복 신청 체크 (phone 기준)
       - Enum 유효값 검증
[ ] 6. GET /challenge/worldcup-challenge-2026/applications (목록, is_deleted=0)
[ ] 7. GET /challenge/worldcup-challenge-2026/applications/{id} (상세)
[ ] 8. PATCH /challenge/worldcup-challenge-2026/applications/{id}/scoring (채점)
[ ] 9. PATCH /challenge/worldcup-challenge-2026/applications/{id}/status (상태)
[ ] 10. GET /challenge/worldcup-challenge-2026/applications/export (CSV)
[ ] 11. 기존 admin 세션 인증 적용
[ ] 12. Rate Limit (IP당 분당 10회)
[ ] 13. HTTPS 강제
[ ] 14. DEV 배포 (feature → dev 머지) → CTO 보고
```

### 8-2. 어드민 UI (Vue.js) — 클로드 앱 코드
```
[ ] 0. feature/worldcup-challenge-2026-admin 브랜치 생성
[ ] 1. 사이드바 메뉴 추가 (신청 > 감다살🐙문어 챌린지 — Nano Credit 아래)
[ ] 2. 신청 리스트 페이지 (/pages/worldcup-challenge/applicationList)
[ ] 3. 상태 필터 버튼
[ ] 4. 이름·휴대폰 검색
[ ] 5. 리스트 테이블 (코드값 → 한글 label 변환)
[ ] 6. 페이지당 행 수 (10/20/50/100)
[ ] 7. 페이지네이션
[ ] 8. 상세 화면 (/pages/worldcup-challenge/detail/:id)
[ ] 9. 채점 입력 UI (5개 체크박스 + 자동 계산)
[ ] 10. 상태 변경 PATCH → 자동 재조회
[ ] 11. 관리자 메모 입력·저장
[ ] 12. ID 네비게이션 (이전/다음)
[ ] 13. CSV 다운로드
[ ] 14. 오류 처리 (401/500/network)
[ ] 15. DEV 배포 → CTO 보고
```

### 8-3. 클라 (신청 폼) — 클로드 앱 코드
```
[ ] 1. 와이어프레임 베이스: apply-감다살문어챌린지-worldcup_20260602.html
[ ] 2. PRD: monthly-loan-repo/2026-06/worldcup-challenge/apply/index.html 생성
       - API Base URL = https://admin-api.sirjuseyo.com
[ ] 3. DEV: monthly-loan-repo/2026-06/worldcup-challenge/apply/index-dev.html 생성
       - API Base URL = https://dev-admin-api.sirjuseyo.com
[ ] 4. fetch() POST 연동 (7-4 코드)
[ ] 5. FINAL_RESULT_CD / POINT_CD 매핑 적용
[ ] 6. 오류 처리 (400/429/500/network)
[ ] 7. 성공 완료 화면
[ ] 8. DEV 테스트 → CTO 보고
```

### 8-4. 챌린지 상세 페이지 CTA → 신청 페이지 링크 — 클로드 앱 코드
```
[ ] 1. wireframe-감다살문어챌린지-worldcup_20260602.html 기반 PRD/DEV 파일 생성
[ ] 2. 하단 골드 CTA 버튼 (`감다살🐙 챌린지 신청하기 →`) → /apply/ 링크 연결
[ ] 3. 히어로 이미지 경로 확인 (worldcup-challenge-jun-001.jpg)
```

---

## 9. DEV 완료 기준 (PRD 배포 전 전항목 통과 필수)

```
[ ] 클라: 신청 → 201 응답 확인
[ ] 클라: 포인트 "없습니다" 선택 후 제출 → 400 응답 확인
[ ] 클라: 같은 phone 중복 신청 → 400 응답 확인
[ ] 서버: DB 정상 저장 (Enum 코드값, phone 하이픈 제거)
[ ] 어드민: DEV 로그인 → 신청 > 감다살🐙문어 챌린지 메뉴 접근 확인
[ ] 어드민: 리스트에 신청 데이터 노출 + 한글 label 표시
[ ] 어드민: 이름·휴대폰 검색 동작
[ ] 어드민: 상세 → 채점 5개 체크 → ticket_amount 자동 계산
[ ] 어드민: 상태 변경 후 리스트 자동 갱신
[ ] 어드민: 페이지네이션·행 수 변경
[ ] 어드민: ID 네비게이션 동작
[ ] 어드민: CSV 다운로드
[ ] 보안: 비인증 어드민 API 호출 → 401
[ ] 보안: Rate Limit 초과 → 429
[ ] 보안: HTTP → HTTPS 리다이렉트
[ ] ⚠️ 회귀: 기존 운영 API (월별 대출 / Nano Credit / 4차 심사) 정상 동작 확인
[ ] ⚠️ 회귀: iOS/Android 앱 정상 동작 확인 (nano-api, dev-nano-api 도메인 무손상)
[ ] ⚠️ 회귀: EKS Ingress / Route53 변경 없음 확인 (운영 도메인 보존)
[ ] CTO: 통합 테스트 → 댄디어빠쮸너야님 확인 요청
```

---

## 10. 개발 착수 순서

```
Step 0. ⚠️ 0-1 ~ 0-3 사전 확인 → CTO 보고
         ↓
Step 1. 서버: DEV DB 분리 확인 → 테이블 생성 + POST API → DEV 배포
         ↓
Step 2. 클라: 2026-06/worldcup-challenge/apply/index-dev.html DEV 버전 연동 → 신청 테스트
         ↓
Step 3. 어드민: 리스트·상세·채점 화면 DEV 구현 → 데이터 확인
         ↓
Step 4. CTO: DEV 완료 기준 (9) 전항목 통과 확인
         ↓
Step 5. ⚠️ 회귀 테스트:
         - 기존 운영 API (월별 대출 / Nano Credit / 4차 심사) 정상 동작
         - iOS/Android 앱 정상 동작 (nano-api 도메인 무손상)
         - EKS Ingress / Route53 변경 없음
         ↓
Step 6. 댄디어빠쮸너야님 확인 → PRD 배포 승인
         ↓
Step 7. PRD 배포 → 챌린지 페이지 오픈
```

---

> 문의: 댄디어빠쮸너야님 → SCTC 쮸티(CTO) 경유
