# 프로젝트 정의서: 써주세요 대출 신청 내재화
> 작성일: 2026-04-23 / 작성자: 쮸리(Claude) for 댄디어빠쮸너야님
> 수신: 써주세요 2.0 서버팀 (Claude Code)

---

## 1. 프로젝트 배경 및 목적

### 현재 상황
- 대출 신청 폼을 외부 SaaS인 **Tally**(탈리)로 운영 중
- 탈리 비용: **월 60,000원**
- 신청 데이터가 탈리 서버에 저장됨 → 데이터 주권 없음
- 커스터마이징 한계, 관리자 기능 부재

### 목표
- 탈리를 완전히 제거하고 **써주세요 자체 인프라로 100% 내재화**
- 월 6만원 비용 절감
- 신청 데이터를 써주세요 AWS에 직접 저장
- 관리자 어드민 패널로 신청 현황 직접 관리

---

## 2. 시스템 전체 구성도

```
[고객]
  ↓ 신청 폼 작성
[apply.html] ← 프론트엔드 (쮸리팀 완성)
  ↓ POST /api/loan-applications
[API 서버] ← 서버팀 담당
  ↓ 저장
[DB: loan_applications] ← 서버팀 담당
  ↑ 조회/관리
[어드민 패널] ← 서버팀 담당
  ↑ 로그인
[관리자(댄디어빠쮸너야님)]
```

---

## 3. 프론트엔드 현황 (쮸리팀 완성 — 서버팀 참고용)

### 파일 위치
- `monthly-loan-repo/2026-04/apply.html` (단일 파일, 정적 HTML+JS)

### 수집 항목 (신청 폼 입력값)

| 변수명 | 항목 | 타입 | 비고 |
|--------|------|------|------|
| `amount` | 대출 희망 금액 | 선택 | 10만/20만/30만/50만 원 |
| `period` | 대출 기간 | 선택 | 1개월(30일) 확인 |
| `experience` | 써주세요 이용 경험 | 선택 | 있음/없음 |
| `method` | 대출 방법 | 선택 | 이벤트/롸잇나우/웨이팅 |
| `q1_name` | 성함 | 텍스트 | 한글 2~5자 |
| `q2_birth` | 생년월일 | 텍스트 | YYYY.MM.DD 형식 |
| `q3_phone` | 휴대폰 번호 | 텍스트 | 01X-XXXX-XXXX |
| `q4_email` | 이메일 | 텍스트 | 이메일 형식 검증 |
| `q5_purpose` | 대출 용도 | 텍스트 | 자유 입력 |
| `q6_device` | 핸드폰 기기 | 선택 | 안드로이드/아이폰 |
| `privacy_agreed` | 개인정보 동의 | 불린 | 동의 시에만 완료 가능 |

### 현재 프론트 상태 (서버 연동 전)
- 완료 화면에서 고객에게 카카오 채널로 직접 정보 전달 안내 중 (임시 방편)
- **서버 API 완성 후 → `apply.html`에 `fetch()` POST 연동 필요** (쮸리팀이 진행)

---

## 4. 서버팀 담당 업무

---

### 4-1. API 엔드포인트

#### ① 신청서 제출 (고객 → 서버)
```
POST /api/loan-applications
Content-Type: application/json

Request Body:
{
  "name":         "홍길동",
  "birth_date":   "1990.01.01",
  "phone":        "01012345678",
  "email":        "abc@naver.com",
  "loan_amount":  "30만 원",
  "loan_period":  "네, 확인했어요.",
  "experience":   "네, 이용했어요.",
  "loan_method":  "이벤트 대출",
  "loan_purpose": "생활비 충당",
  "device_type":  "안드로이드",
  "privacy_agreed": true
}

Response:
{
  "success": true,
  "application_id": "2026-04-0001"
}
```

#### ② 신청 목록 조회 (어드민)
```
GET /api/admin/loan-applications
Authorization: Bearer {admin_token}

Query Params:
  - status: 접수|검토중|승인|거절
  - method: 이벤트|롸잇나우|웨이팅
  - from: 2026-04-01
  - to:   2026-04-30
  - page, limit

Response:
{
  "total": 42,
  "data": [ { ...application } ]
}
```

#### ③ 신청 상세 조회 (어드민)
```
GET /api/admin/loan-applications/:id
Authorization: Bearer {admin_token}
```

#### ④ 상태 변경 (어드민)
```
PATCH /api/admin/loan-applications/:id/status
Authorization: Bearer {admin_token}

Body: { "status": "승인" }
```

#### ⑤ 엑셀 다운로드 (어드민)
```
GET /api/admin/loan-applications/export
Authorization: Bearer {admin_token}
→ .xlsx 파일 다운로드
```

---

### 4-2. 데이터베이스 스키마

#### 테이블: `loan_applications`

| 컬럼명 | 타입 | 설명 |
|--------|------|------|
| `id` | BIGINT (PK, Auto) | 고유 ID |
| `application_no` | VARCHAR | 신청 번호 (예: 2026-04-0001) |
| `name` | VARCHAR(20) | 성함 |
| `birth_date` | VARCHAR(10) | 생년월일 (YYYY.MM.DD) |
| `phone` | VARCHAR(15) | 휴대폰 번호 |
| `email` | VARCHAR(100) | 이메일 |
| `loan_amount` | VARCHAR(20) | 대출 희망 금액 |
| `loan_period` | VARCHAR(50) | 대출 기간 확인 여부 |
| `experience` | VARCHAR(50) | 써주세요 이용 경험 |
| `loan_method` | VARCHAR(20) | 대출 방법 (이벤트/롸잇나우/웨이팅) |
| `loan_purpose` | TEXT | 대출 용도 |
| `device_type` | VARCHAR(20) | 핸드폰 기기 종류 |
| `privacy_agreed` | BOOLEAN | 개인정보 동의 여부 |
| `status` | ENUM | 접수/검토중/승인/거절 (default: 접수) |
| `admin_memo` | TEXT | 관리자 메모 (nullable) |
| `created_at` | DATETIME | 신청 일시 |
| `updated_at` | DATETIME | 최종 수정 일시 |

> ⚠️ 개인정보(이름, 생년월일, 휴대폰, 이메일) 컬럼은 **암호화 저장** 권고

---

### 4-3. 어드민 패널 (Admin UI)

관리자만 접근 가능한 내부 웹 페이지

#### 필수 기능

| 기능 | 설명 |
|------|------|
| 로그인 | 어드민 계정 인증 (ID/PW 또는 써주세요 계정 SSO) |
| 신청 목록 | 날짜/상태/대출방법 필터 + 페이지네이션 |
| 신청 상세 | 고객 정보 전체 조회, 메모 입력 |
| 상태 변경 | 접수 → 검토중 → 승인 / 거절 |
| 엑셀 다운로드 | 필터된 목록 .xlsx 내보내기 |
| 신청 건수 통계 | 일별/방법별 카운트 |

#### 어드민 목록 화면 컬럼 (최소)
```
신청번호 | 신청일시 | 성함 | 휴대폰 | 금액 | 대출방법 | 상태 | 상세보기
```

---

### 4-4. 보안 요구사항

- HTTPS 필수 (개인정보 전송)
- API 인증: JWT 또는 세션 기반
- 어드민 API는 인증 없이 접근 불가
- 개인정보 컬럼 암호화 저장
- CORS: `apply.html` 도메인만 허용 (`monthly-loan.sirjuseyo.com`)
- Rate Limiting: 동일 IP 분당 10회 이상 POST 차단 (스팸 방지)

---

### 4-5. 인프라

| 항목 | 내용 |
|------|------|
| 클라우드 | AWS (써주세요 기존 인프라) |
| DB | RDS (MySQL 또는 PostgreSQL) 권고 |
| 서버 | 써주세요 2.0 서버에 통합 또는 별도 Lambda |
| 도메인 | api.sirjuseyo.com (또는 써주세요 기존 API 서버 활용) |

---

## 5. 역할 분담 요약

| 항목 | 담당 | 상태 |
|------|------|------|
| 신청 폼 HTML+JS (`apply.html`) | 쮸리팀 | ✅ 완료 |
| 신청 폼 → API POST 연동 | 쮸리팀 | ⏳ API 완성 후 진행 |
| POST API 구현 | **서버팀** | ❌ 미착수 |
| DB 스키마 생성 | **서버팀** | ❌ 미착수 |
| 어드민 패널 UI | **서버팀** | ❌ 미착수 |
| 어드민 인증 | **서버팀** | ❌ 미착수 |
| AWS 배포 | **서버팀** | ❌ 미착수 |

---

## 6. 서버팀 작업 우선순위 (권고)

```
1순위: DB 스키마 생성 + POST API 구현
       → 완성되면 즉시 쮸리팀에 API URL 공유
       → 쮸리팀이 apply.html에 연동 후 실제 신청 가능

2순위: 어드민 패널 (목록 + 상세 + 상태변경)
       → 신청 데이터 관리 시작

3순위: 엑셀 다운로드, 통계, 고도화
```

---

## 7. 참고 링크

- 신청 폼: `https://monthly-loan.sirjuseyo.com/apply/apply.html`
- GitHub 레포: `https://github.com/sirjuseyo/monthly-loan`
- 탈리 기존 폼(참고용): `https://tally.so/r/mBvDvR`
- 카카오 채널: `https://pf.kakao.com/_AcXXxl`

---

> 문의사항은 댄디어빠쮸너야님을 통해 쮸리팀으로 전달해주세요.
