# WORK_THROUGH — 써주세요 월별대출 탈리 내재화
> 작성자: 쮸리(Claude) / 프로젝트: 탈리 → 써주세요 자체 인프라 이전
> ⚠️ 이 파일은 덮어쓰지 말고 반드시 이어서 기록할 것

---

## WT-001 · 프로젝트 분석 및 목차 수립
- 작성일: 2026-04-23 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-001

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

## WT-002 · apply-mockup.html 정적 목업
- 작성일: 2026-04-23 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-002

[문제 위치]
파일: 2026-04/apply-mockup.html (신규)
라인: -

[증상(문제 설명)]
실제 코드 작성 전 전체 화면 흐름 확인 필요.

[원인]
CLAUDE.md 규칙: "HTML 목업 먼저 제시 → 컨펌 후 실제 작업"

[진단(수정 이유)]
S0(랜딩) ~ 완료 화면까지 전체 흐름을 정적 HTML로 구현하여 댄디어빠쮸너야님 확인.

[처방(수정 코드)]
- 전체 화면 top-to-bottom 나열 (S0~S12)
- CDN GIF URL 포함 (탈리 원본)
- 목업 컨펌 완료 후 apply.html 실제 작업 진행

---

## WT-003~WT-008 · apply.html 기본 구조 및 콘텐츠
- 작성일: 2026-04-23 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-003~T-008

[문제 위치]
파일: 2026-04/apply.html (신규)
라인: 전체

[증상(문제 설명)]
탈리 폼을 HTML+JS로 대체해야 함.

[원인]
탈리 수식(conditional logic) → JS 순차 화면 진행으로 구현 필요.

[진단(수정 이유)]
단일 HTML 파일에 CSS+JS 포함. 화면별 show/hide 대신 goTo()/goBack() 네비게이션 방식 채택.

[처방(수정 코드)]
- 화면 구조: s0(랜딩) → s1(금액) → s2(기간) → s3(경험) → s4(방법) → s-q1~q6 → s-privacy → s-done
- progressMap: 각 화면별 진행률 0~100%
- history 스택으로 goBack() 구현
- desc-box 3개: 🐆이벤트 / 🚀롸잇나우 / 🐢웨이팅
- 완료 화면: buildSummary() + 카카오 채널 버튼

---

## WT-009 · 브랜드 아이덴티티 CSS 리디자인
- 작성일: 2026-04-23 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-009

[문제 위치]
파일: 2026-04/apply.html
라인: 1~332 (CSS 전체)

[증상(문제 설명)]
기존 CSS가 파란색(#2563eb) 기본 컬러. 써주세요 브랜드와 불일치.

[원인]
브랜드 아이덴티티 PDF(ver1.0.2) 미적용 상태.

[진단(수정 이유)]
써주세요 brand_identity_ver1.0.2 기준으로 전면 리디자인.

[처방(수정 코드)]
- CSS 변수 시스템 도입:
  --purple: #380097 / --mint: #A6D6DE / --orange: #FF5400
- Noto Sans KR Google Fonts 임포트
- 버튼: background #380097, min-height 54px, border-radius 14px
- 선택지 선택 상태: border #380097, bg #f0eaff
- 필수(*): color #FF5400 (오렌지)
- desc-box: border-left #A6D6DE (민트)
- 완료화면 ty-info: border-left #380097

---

## WT-010 · 카카오 채널 링크 수정
- 작성일: 2026-04-23 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-010

[문제 위치]
파일: 2026-04/apply.html
라인: 완료 화면 kakao-btn href

[증상(문제 설명)]
카카오 채널 링크가 가짜 URL로 삽입됨.
`https://pf.kakao.com/_xnKxoxkb` → 실제 채널 아님.

[원인]
할루시네이션. 근거 없이 링크를 생성함. 작업지침서 위반.

[진단(수정 이유)]
댄디어빠쮸너야님이 실제 채널 링크 제공.

[처방(수정 코드)]
- 수정 전: `https://pf.kakao.com/_xnKxoxkb`
- 수정 후: `https://pf.kakao.com/_AcXXxl`
- 채팅: `https://pf.kakao.com/_AcXXxl/chat`

---

## WT-011 · 기간 선택 "아니요" 경고 (B안)
- 작성일: 2026-04-23 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-011

[문제 위치]
파일: 2026-04/apply.html
라인: s2 화면 (opts-period), JS selectPeriodNo()

[증상(문제 설명)]
"아니요, 다른 기간으로 신청하고 싶어요." 선택 시 아무것도 안 됨.
선택 표시만 되고 화면 멈춤 → 사용자 혼란.

[원인]
selectOpt()의 nextId 값이 null → goTo(null) 즉시 return.

[진단(수정 이유)]
B안 선택: 인라인 경고 메시지 표시, 진행 차단.

[처방(수정 코드)]
- selectPeriodNo() 신규 함수: warn-period div display:block
- selectPeriodYes() 신규 함수: warn-period 숨기고 s3로 이동
- CSS: .period-warn { border-left: 3px solid var(--orange); background: #fff5f0; }
- 경고 문구: "⚠️ 현재 1개월(30일) 상품만 운영 중입니다. 다른 기간 신청은 불가합니다."

---

## WT-012 · 생년월일 인라인 캘린더 피커
- 작성일: 2026-04-23 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-012

[문제 위치]
파일: 2026-04/apply.html
라인: s-q2 화면, JS Q2 관련 함수 전체

[증상(문제 설명)]
생년월일 입력 시 임의 형식 입력 가능. 탈리처럼 캘린더 피커 없음.

[원인]
기본 text input만 있고 date picker 미구현.

[진단(수정 이유)]
탈리 방식: 클릭 시 인라인 캘린더 펼쳐짐, 직접 입력도 가능.

[처방(수정 코드)]
- .birth-picker { position: relative }
- .birth-cal: position absolute, 입력창 바로 아래 펼쳐짐
- 네비게이션: ◀◀(이전년) ◀(이전달) 2000년 1월 ▶(다음달) ▶▶(다음년)
- 요일 헤더: 월화수목금토일 (월요일 시작)
- 날짜 클릭 → YYYY.MM.DD 형식 자동 입력
- 직접 입력 시: 숫자만 입력 → 자동 dot 삽입 (20010101 → 2001.01.01)
- 외부 클릭 시 캘린더 닫힘
- 기본 시작년도: 1990년 (성인 사용자 기준)

---

## WT-013 · 휴대폰 번호 오입력 방어
- 작성일: 2026-04-23 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-013

[문제 위치]
파일: 2026-04/apply.html
라인: s-q3 화면, formatPhoneInput(), submitQ3()

[증상(문제 설명)]
모든 형식의 숫자/문자 입력 가능. 잘못된 번호 수집 가능성.

[원인]
기본 type="tel" 입력만 있고 validation 없음.

[진단(수정 이유)]
숫자만 허용, 한국 휴대폰 형식 검증.

[처방(수정 코드)]
- oninput: /[^0-9]/g 제거, 최대 11자리 제한
- submitQ3(): regex /^01[016789]\d{7,8}$/ 검증
- 에러: "올바른 휴대폰 번호를 입력해주세요. (예: 01012345678)"

---

## WT-014~WT-015 · 이름 한글 오입력 방어 + IME 버그 수정
- 작성일: 2026-04-23 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-014, T-015

[문제 위치]
파일: 2026-04/apply.html
라인: s-q1 화면, formatNameInput(), submitQ1()

[증상(문제 설명)]
1차: 영문/숫자 입력 가능.
2차(버그): 한글 입력 자체가 안 됨.

[원인]
1차: validation 없음.
2차: oninput에서 /[^가-힣]/g 로 즉시 제거 시,
모바일 한글 IME 조합 중간 단계(자모: ㄱ, ㅏ 등)가 가-힣 범위(U+AC00~U+D7A3) 밖이라 입력 자체가 차단됨.

[진단(수정 이유)]
입력 중 차단 제거. 제출 시에만 한글 검증.

[처방(수정 코드)]
- formatNameInput(): 에러 숨김만 처리, 차단 로직 제거
- submitQ1(): /^[가-힣]{2,5}$/ 검증
- 에러: "한글 실명을 입력해주세요. (2~5자)"

---

## WT-016 · 이메일 오입력 방어
- 작성일: 2026-04-23 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-016

[문제 위치]
파일: 2026-04/apply.html
라인: s-q4 화면, submitQ4()

[증상(문제 설명)]
이메일 형식 검증 없음. 아무 값이나 입력 가능.

[원인]
submitQ4()에 비어있는지만 체크.

[진단(수정 이유)]
이메일 형식 필수 검증.

[처방(수정 코드)]
- regex: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
- 에러: "올바른 이메일 형식으로 입력해주세요. (예: abc@naver.com)"

---

## WT-017 · 서버팀 프로젝트 정의서 작성
- 작성일: 2026-04-23 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-017

[문제 위치]
파일: PROJECT_DEFINITION_대출신청폼_내재화_서버팀전달.md (신규)
라인: -

[증상(문제 설명)]
서버팀(Claude Code)에게 클라이언트 작업 현황 및 API 요구사항 전달 필요.

[원인]
관리자 패널 + API 서버 구축을 서버팀이 담당하기로 결정.

[진단(수정 이유)]
인수인계 문서 작성.

[처방(수정 코드)]
- API 엔드포인트 5개 명세
- DB 스키마 (loan_applications 테이블)
- 어드민 패널 필수 기능
- 역할 분담표 (쮸리팀 vs 서버팀)
- 보안 요구사항

---

## WT-018~WT-022 · GitHub 관리 및 DEV/PRD 이중화
- 작성일: 2026-04-25 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-018~T-022

[문제 위치]
파일: 2026-04/apply.html, 2026-04/apply-dev.html
라인: JS 상단 API 설정 블록, 완료화면 selectPrivacy()

[증상(문제 설명)]
서버팀 요청: DEV/PRD 두 버전으로 신청 폼 분리 필요.
API 연동 코드 미작성 상태.

[원인]
서버팀은 DEV → PRD 순서로 배포. 클라이언트도 동일 프로세스 필요.

[진단(수정 이유)]
API_URL 상수만 다른 파일 2개로 분리.

[처방(수정 코드)]
apply.html (PRD):
- const ENV = 'PRD'
- const API_URL = 'https://api.sirjuseyo.com/loan-applications' // placeholder
- selectPrivacy()에 submitToAPI(payload) 비동기 호출 추가

apply-dev.html (DEV):
- apply.html 복사 후 수정
- title: [DEV] 써주세요 대출 신청
- const ENV = 'DEV'
- const API_URL = 'https://dev-api.sirjuseyo.com/loan-applications' // placeholder
- 상단 주황 배너: "🚧 DEV 테스트 환경 — 실사용자 접근 금지"

GitHub 이슈:
- HEAD.lock / index.lock 파일로 commit 실패 (샌드박스 마운트 권한 문제)
- 해결: 댄디어빠쮸너야님이 터미널에서 lock 파일 수동 삭제 후 push 완료

---

## WT-023 · apply-dev.html DEV API 연동
- 작성일: 2026-04-25 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-023

[문제 위치]
파일: 2026-04/apply-dev.html
라인: JS API 설정 블록, selectPrivacy()

[증상(문제 설명)]
서버팀에서 DEV API 연동 요청 전달.
기존 payload 필드명/타입이 서버팀 스펙과 불일치.
오류 처리 코드 없음.

[원인]
서버팀 API 스펙 수신 전 placeholder 상태였음.

[진단(수정 이유)]
서버팀 전달 내용 기준으로 DEV apply-dev.html 연동.

[처방(수정 코드)]
1. API_URL: https://dev-api.sirjuseyo.com/api/monthly-loan/applications
2. 데이터 변환:
   - loan_amount: "30만 원" → parseInt(30)
   - loan_method_cd: "이벤트 대출" → "EVENT" (METHOD_CD 테이블)
   - experience: "네, 이용했어요." → true (boolean)
   - period_confirmed: "네, 확인했어요." → true (boolean)
3. 응답 처리:
   - 201 → goTo('s-done')
   - 400 → "입력 정보를 다시 확인해주세요."
   - 429 → "요청이 너무 많습니다. 잠시 후 다시 시도해주세요."
   - 500 → "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
   - network → "네트워크 연결을 확인해주세요."
4. 오류 UI: 화면 하단 고정 오류 박스 (오렌지 보더, DEV 전용)

⚠️ 미확인 항목: RIGHTNOW/WAITING 코드값 서버팀 확인 필요

→ **CTO 확인 완료 (WT-023-B 참조)**

---

## WT-023-C · DEV API URL 수정 (dev-nano-api.sirjuseyo.com)
- 작성일: 2026-04-25 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-023 (보완)

[문제 위치]
파일: 2026-04/apply-dev.html
라인: API_BASE 상수

[증상(문제 설명)]
curl 테스트 시 `Could not resolve host: dev-api.sirjuseyo.com` 오류 발생.

[원인]
서버팀이 실제 사용하는 DEV 도메인은 서비스별로 분리돼 있음.
월별대출(나노) DEV 도메인: dev-nano-api.sirjuseyo.com
dev-api.sirjuseyo.com 은 존재하지 않는 도메인.

[진단(수정 이유)]
서버팀 Ingress 확인 결과:
- 어드민 API: dev-admin-api.sirjuseyo.com
- 멤버 API:   dev-member-api.sirjuseyo.com
- 나노(월별대출): dev-nano-api.sirjuseyo.com ← 이것이 정확한 URL

[처방(수정 코드)]
변경 전: const API_BASE = 'https://dev-api.sirjuseyo.com'
변경 후: const API_BASE = 'https://dev-nano-api.sirjuseyo.com'
최종 URL: https://dev-nano-api.sirjuseyo.com/api/monthly-loan/applications

[검증 결과]
curl 테스트 → HTTP/2 201
응답: {"success":true,"monthly_loan_application_id":3}
✅ DEV API 연동 완전 성공

---

## WT-023-B · CTO 확인 사항 반영 (experience/period_confirmed 타입 수정)
- 작성일: 2026-04-25 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-023 (보완)

[문제 위치]
파일: 2026-04/apply-dev.html
라인: selectPrivacy() → payload 객체

[증상(문제 설명)]
experience, period_confirmed 필드를 boolean으로 변환 전송했으나
CTO 답변으로 string 타입이 맞음을 확인.
또한 METHOD_CD 테이블에 RIGHTNOW → RIGHT_NOW (언더스코어 누락) 오타 있었음.
EARLY_BIRD 코드값이 실수로 포함돼 있었음 (서버팀 실수 — 제외 대상).

[원인]
CTO 확인 전 임의로 boolean 변환 처리.
loan_method_cd 코드값을 CTO 미확인 상태에서 구현.

[진단(수정 이유)]
CTO가 직접 확인한 값:
- experience: string ("네, 이용했어요." / "아니요, 없어요.")
- period_confirmed: string ("네, 확인했어요.")
- loan_method_cd: EVENT / RIGHT_NOW / WAITING (EARLY_BIRD 제외)
- CORS: allowedOrigins에 monthly-loan.sirjuseyo.com 포함 확인
- 인증: 불필요 (신청 폼 공개 API)

[처방(수정 코드)]
수정 1. METHOD_CD 테이블 오타 수정
  변경 전: 'RIGHTNOW'
  변경 후: 'RIGHT_NOW'
  EARLY_BIRD 항목 제거

수정 2. selectPrivacy() payload 타입 수정
  변경 전:
    experience:       state.experience.startsWith('네'),   // boolean ❌
    period_confirmed: state.period.startsWith('네'),       // boolean ❌
  변경 후:
    experience:       state.experience,                    // string ✅
    period_confirmed: state.period,                        // string ✅

---

---

## WT-026 · DEV/PRD 최종 API URL 반영
- 작성일: 2026-04-25 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-026

[문제 위치]
파일: apply-dev.html, apply.html
라인: API_BASE / API_URL 상수

[증상(문제 설명)]
서버팀 Ingress 확인 결과 최종 URL 확정.

[처방(수정 코드)]
- DEV: https://dev-monthly-api.sirjuseyo.com/api/monthly-loan/applications
- PRD: https://monthly-api.sirjuseyo.com/api/monthly-loan/applications

[검증 결과]
curl DEV → 201 ✅ / curl PRD → 201 ✅

---

## WT-027 · apply.html PRD payload 전면 수정
- 작성일: 2026-04-25 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-027

[문제 위치]
파일: 2026-04/apply.html
라인: selectPrivacy() → payload 객체

[증상(문제 설명)]
apply.html payload가 apply-dev.html과 완전히 불일치.
브라우저 테스트 시 API 오류 발생 (CORS + payload 문제).

[원인]
apply.html은 초기 placeholder 상태 그대로 방치됨.
parseAmount / METHOD_CD 함수 미정의.
필드명 오류: loan_period, loan_method (서버 스펙과 불일치)
loan_amount를 문자열로 전송 (서버팀 TECHSPEC 7-2절: 정수 요구)
PRD CORS allowedOrigins 누락 (서버팀 처리 완료)

[처방(수정 코드)]
추가: parseAmount() 함수, METHOD_CD 테이블
수정:
  loan_amount:    state.amount           → parseAmount(state.amount)  // 정수
  loan_period:    state.period           → period_confirmed: state.period
  loan_method:    state.method           → loan_method_cd: METHOD_CD[state.method]

[검증 결과]
PRD 어드민 데이터 정상 수신 확인 (박준호 13:40:08) ✅

---

## WT-028 · apply.html API 응답 검증 추가
- 작성일: 2026-04-25 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-028

[문제 위치]
파일: 2026-04/apply.html
라인: selectPrivacy() → submitToAPI 호출부

[증상(문제 설명)]
API 실패해도 완료 화면이 무조건 뜨는 버그.
개발 중 placeholder 상태에서 임시로 "실패해도 완료 화면 진행"으로 작성된 코드가 PRD에 그대로 남아있었음.

[처방(수정 코드)]
변경 전:
  await submitToAPI(payload);
  goTo('s-done');  // 항상 완료 화면 ❌

변경 후:
  const ok = await submitToAPI(payload);
  if (ok) { goTo('s-done'); }
  else { alert('신청 중 오류...'); }  // 실패 시 오류 안내 ✅

---

---

## WT-031 · UI 폰트/여백 탈리 수준 개선 (T-031)
- 작성일: 2026-04-25 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-031
- 상태: 🔄 진행 중

[문제 위치]
파일: 2026-04/apply.html, 2026-04/apply-dev.html
라인: CSS 폰트/여백 관련 전반

[증상(문제 설명)]
탈리(기존) 대비 폰트가 전반적으로 작고, 여백이 좁아 모바일에서 가독성 저하.

[작업 이력]

| 회차 | 대상 요소 | 변경 전 | 변경 후 | 비고 |
|------|-----------|---------|---------|------|
| R1 | landing-title | 21px | 24px | 랜딩 제목 |
| R1 | q-title | 18px | 22px | 질문 제목 |
| R1 | q-hint | 12px | 14px | 힌트 텍스트 |
| R1 | .opt | 15px | 17px | 선택지 텍스트 |
| R1 | .desc-box | 15px | 15px | (R3에서 추가 조정) |
| R2 | landing-title | 24px | 28px | 추가 확대 |
| R2 | landing-cta | 14px | 16px | CTA 박스 텍스트 |
| R2 | landing-header | padding 하단 0 | 36px | 제목↔이미지 여백 |
| R3 | landing-cta padding | 20px | 32px | ❌ 잘못 적용 (박스 안 패딩을 늘림) |
| R4 | landing-cta padding | 32px | 20px (복원) | 패딩 원복 |
| R4 | landing-cta font | 16px | 18px | 텍스트 유지 |
| R4 | landing-cta margin-top | 0 | 40px | 제목↔박스 여백 |
| R4 | landing-cta margin-bottom | 32px | 48px | 박스↔이미지 여백 |
| R5 | landing-cta margin-top | 40px | 72px | 제목↔박스 여백 추가 확대 |
| R6 | desc-box font-size | 13px | 16px | 대출방법 설명 박스 텍스트 |
| R6 | desc-box padding | 14px 16px | 20px 20px | 박스 내부 여백 확대 |
| R7 | privacy-box font-size | 15px | 17px | 개인정보 박스 텍스트 |
| R7 | privacy-box strong | 14px | 17px | 개인정보 박스 타이틀 |
| R7 | privacy-box padding | 20px | 24px | 개인정보 박스 여백 |
| R7 | ty-title | 18px | 22px | 완료 화면 제목 |
| R7 | ty-warn | 14px | 18px | 완료 화면 경고 텍스트 |
| R7 | ty-info font-size | 14px | 18px | 완료 요약 박스 텍스트 |
| R7 | ty-info padding | 20px | 28px 24px | 완료 요약 박스 여백 |
| R7 | kakao-btn font-size | 14px | 17px | 카카오 버튼 텍스트 |
| R7 | kakao-btn padding | 15px 10px | 18px 10px | 카카오 버튼 높이 |

## ⏳ 미완료 항목 (서버팀 대기)

## WT-029 · apply.sirjuseyo.com 서브도메인 (T-029)
- 작성일: 2026-04-25 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-029
- 상태: 🔄 진행 중

[현황]
현재 DEV/PRD 모두 GitHub Pages 도메인으로 테스트 완료.
- DEV: https://monthly-loan.sirjuseyo.com/2026-04/apply-dev.html ✅
- PRD: https://monthly-loan.sirjuseyo.com/2026-04/apply.html ✅

[비고 - GitHub Pages 서브도메인 제약]
- GitHub Pages는 레포당 커스텀 도메인 1개만 허용
- monthly-loan 레포는 이미 monthly-loan.sirjuseyo.com 사용 중
- apply.sirjuseyo.com 을 별도 서브도메인으로 운영하려면 AWS 배포 필요
- GitHub Pages에서는 구조상 불가 (같은 레포에 두 번째 커스텀 도메인 추가 불가)

[다음 액션]
- AWS 이전 시 서버팀이 DNS에 apply.sirjuseyo.com 서브도메인 추가
- 현재는 GitHub Pages URL 유지, AWS 이전 시점에 URL 변경 예정

### WT-030 · 4월 랜딩 페이지 연결 (T-030)
- 2026-04/index.html 신청 버튼 → apply.html 링크 연결
- 서버팀 어드민 + API 완성 후 진행

---

## WT-032 · 4차 심사 자료 내재화 기획서 작성
- 작성일: 2026-04-26 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-032

[문제 위치]
파일: PLAN_4차심사자료_내재화기획서.md (신규)
라인: -

[증상(문제 설명)]
탈리 4차 심사 자료 폼(증빙서류 업로드 + 금융정보 수집)을 써주세요 관리자 모드로 이전 필요.
파일 업로드 기능 포함으로 1차 신청 폼(apply.html) 대비 기술 복잡도 상승.
사전 기획 없이 진행 시 API 임의 구현 → 써주세요 앱 장애 위험.

[원인]
탈리 월 6만원 비용, 데이터 주권 없음, 어드민 통합 불가.

[진단(수정 이유)]
CLAUDE.md 규칙 1단계: 이슈 분석 → 분석 피드백 → 목차 제시 → 컨펌 후 작업.
기획서 작성으로 사장님 컨펌 받은 후 서버팀 협의 진행.

[처방(기획 내용)]
- 수집 항목: 총 16개 (Page 2: 14항목 / Page 3: 금융이력 / Page 4: 파일 업로드)
- 탈리 수식 분기 5개 구현 계획:
  · [분기1] 신용카드 → 예: 8-1(신용카드 월평균), 8-2(체크카드 월평균) 표시
  · [분기2] 현금서비스 → 예: 9-1(현금서비스 금액) 표시
  · [분기3] 소액결제 → 예: 10-1(금액), 10-2(휴대폰요금) 표시
  · [분기4] 대출보유 → 예: 13-1(총잔액), 13-2(기관별 동적행) 표시
  · [분기5] 제도권 → 다중선택, '해당없음' exclusive 처리
- A to Z 목차: A(기획) → B(서버팀 정의서) → C(HTML개발) → D(DEV/PRD) → E(GitHub) → F(배포)
- 서버팀 협의 필수 항목 7가지 명시 (API URL/파일업로드방식/DB스키마 등)
- ⚠️ API 관련 임의 구현 0건 — 서버팀 확정 전 C-8 API 연동 절대 금지 명시

[현재 상태]
사장님 컨펌 대기 중

---

## WT-032-R1 · 기획서 v1.1 스크린샷 대조 수정
- 작성일: 2026-04-26 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-032

[R1 수정 내역]

| # | 항목 | v1.0 (잘못됨) | v1.1 (수정됨) |
|---|------|--------------|--------------|
| 1 | 신용카드 "아니오" 분기 | 6-1, 6-2 모두 숨김 | "아니오, 체크카드만 사용해요." → 6-2만 표시 |
| 2 | 소득/지출 로직 | 단순 항목 나열 | 순차 체인 방식 (연소득 입력 → 월최고소득 표시 → ...) |
| 3 | 항목명 | 신용카드 월평균 등 불완전 | "최근 3개월 기준 월 평균 신용카드 사용금액" 등 전면 수정 |
| 4 | 대출기관 입력 방식 | 동적 행 추가 UI | textarea "[기관명/최초금액/현재잔액]" + 추가 칸 |
| 5 | Page 5 누락 | 없음 | 채무변제 증빙서류 조건부 페이지 추가 (제도권 해당 시) |
| 6 | 완료 화면 문구 | 부정확 | "톡에 [제출 완료]를 남기면 심사담당자가..." |
| 7 | 서버팀 정의서 순서 | 컨펌 후 시작 | 컨펌 전 draft 선행 작성 |

[탈리 수식 분기 총 개수]
- v1.0: 5개
- v1.1: 7개 (소득순차체인 + 신용카드 + 현금 + 소액결제 + 신용점수→대출 + 채무변제 추가)

---

## WT-032-R2 · 기획서 v1.2 2차 스크린샷 전수 재검증
- 작성일: 2026-04-26 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-032

[R2 수정 내역]

| # | 항목 | v1.1 (잘못됨) | v1.2 (수정됨) |
|---|------|--------------|--------------|
| 1 | 채무변제 증빙서류 위치 | Page 5 (별도 페이지) | Page 4 내 조건부 블록 (Submit 버튼 위) |
| 2 | Page 5 정의 | 채무변제 증빙서류 | 완료 화면 (Thank you page) - 올바른 정의 |
| 3 | 8-2 표시 조건 | 언급 없음 | 탈리 수식 미확인 플래그 추가 / 사장님 확인 필요 |
| 4 | 신용회복위원회 선택 시 채무변제 표시 여부 | 언급 없음 | Rule 20 "any of" 목록에 없음 → 표시 안됨으로 추정, 확인 필요 |
| 5 | 탈리 수식 번호 부여 | 없음 | Rule 1~21 번호 부여하여 구조화 |
| 6 | 사장님 확인 필요 항목 | 신용점수 1개 | 신용점수 + 8-2 조건 + 신용회복위원회 3개로 확장 |

---

## WT-032-R3 · 기획서 v1.3 탈리 제작자 답변 반영 (최종 확정)
- 작성일: 2026-04-28 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-032

[R3 확정 내역]

| # | 항목 | 결과 |
|---|------|------|
| 1 | 채무변제 섹션 위치 | ✅ Page 4 내 조건부 블록 확정 |
| 2 | 8-2 휴대폰 요금 표시 조건 | ✅ 소액결제 여부 무관, 항상 필수 표시 확정 |
| 3 | "해당 안해요" 선택 시 채무변제 증빙 | ✅ 숨김 확정 |
| 4 | 신용점수 필수 여부 | ✅ 필수 입력 확정 |
| 5 | 탈리 내재화 누락 항목 | ✅ 없음 최종 확인 |

→ T-032 기획서(A단계) 완료. 다음: B단계 서버팀 정의서 draft 작성

---

## WT-033 · 4차 심사 서버팀 프로젝트 정의서 작성
- 작성일: 2026-04-28 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-033
- 파일: PROJECT_DEFINITION_4차심사자료폼_내재화_서버팀전달.md

[작업 내용]
- 1차 신청 폼 정의서(PROJECT_DEFINITION_대출신청폼_내재화_서버팀전달.md) 구조 기반
- 수집 항목 전체 (텍스트 18개 + 파일 3종) DB 설계용 정리
- API 요구사항 6가지 (A~F) 기능 목록화
  - ⚠️ 엔드포인트 URL / 필드명 임의 결정 없음 → 서버팀 결정 후 쮸리팀 수령
- 파일 업로드 방식 2가지 옵션 (multipart vs presigned URL) 서버팀 선택용
- DB 스키마 요구사항 (review_applications + review_files 2테이블 구조)
- 어드민 패널 기능 요구사항 (목록/상세/파일다운로드/ZIP/상태변경/메모)
- 보안 요구사항 (HTTPS/암호화/S3접근제어/CORS/Rate Limiting)
- 서버팀 작업 우선순위 권고 (1순위: 방식결정 + API URL 쮸리팀 전달)
- 서버팀 → 쮸리팀 회신 필요 항목 6가지 명시

[현재 상태]
B-5: 서버팀 스펙 확정 및 쮸리팀 전달 대기 중
→ 수령 후 C단계 HTML 폼 개발 시작

---

## WT-034 · apply-review-mockup.html 정적 목업 제작 (C-1)
- 작성일: 2026-05-07 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-034

[문제 위치]
파일: apply-review/apply-review-mockup.html (신규)
라인: -

[증상(문제 설명)]
4차 심사 자료 수집 폼 실제 구현 전, 전체 화면 흐름 및 탈리 21개 Rule 로직 확인 필요.

[원인]
CLAUDE.md 규칙: "HTML 목업 먼저 제시 → 컨펌 후 실제 작업"
기획서 v1.3 기반으로 탈리와 동일한 조건부 로직 전체 구현 필요.

[진단(수정 이유)]
Page 1~5 전체 흐름, 21개 Rule 조건부 표시/숨김, 탭 전환(토스/카카오), 파일 업로드 슬롯을 정적 목업으로 구현하여 댄디어빠쮸너야님 컨펌.

[처방(수정 코드)]
- 5페이지 구조: 랜딩 / 기본정보+소득지출 / 금융이력 / 증빙서류 / 완료
- 21개 Rule 전체 구현 (Rule 1~6 순차체인, Rule 7~9 신용카드 분기, Rule 10~12 현금서비스, Rule 13~14 소액결제, Rule 15~16 신용점수→대출보유, Rule 17~19 대출보유→제도권, Rule 20~21 채무변제 증빙)
- 8-2 항상 필수 표시 (탈리 제작자 확정)
- "해당 안해요" exclusive 선택 로직
- 탈리 기획서 원본 텍스트 그대로 적용
- 댄디어빠쮸너야님 컨펌 완료

[현재 상태]
테스트 완료(DONE) — apply-review.html 실제 개발(T-035) 진행

---

## WT-035 · apply-review.html HTML+CSS+JS 구조 및 21개 Rule 구현 (C-2~C-9)
- 작성일: 2026-05-07 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-035

[문제 위치]
파일: apply-review/apply-review.html (신규)
라인: 전체

[증상(문제 설명)]
탈리 4차 심사 자료 수집 폼을 써주세요 자체 인프라로 내재화해야 함.

[원인]
탈리 월 6만원 비용, 데이터 주권 없음, 관리자 기능 부재.
목업(T-034) 컨펌 완료 → 실제 프로덕션 파일 개발 시작.

[진단(수정 이유)]
써주세요 브랜드 아이덴티티(#380097 purple / #A6D6DE mint / #FF5400 orange)로 실제 운영 가능한 단일 HTML 파일 구현.

[처방(수정 코드)]
- CSS: 써주세요 브랜드 컬러 시스템, Noto Sans KR, 반응형(max-width 520px)
- HTML: 5페이지 구조, 21개 Rule 전체 조건부 블록
- JS 상태 객체: `S = { q6, q7, q8, g3, debtTypes: new Set() }`
- JS Rule 함수: `r()` (Page 2), `rP3()` (Page 3), `syncDebtDoc()` (Page 4 Rule 20-21)
- 유효성 검사: validateName() 한글 2~5자, validatePhone() 01X 포맷, clamp() 신용점수
- 파일 업로드: makeSlots() 드래그앤드롭, 10MB 제한, 파일명 미리보기
- 탭 전환: 토스(5장) / 카카오페이(6장)
- 대출기관 행 동적 추가: addLoanRow()
- API_URL 상수 placeholder (C-11 B-5 게이트 주석)
- submitForm() → go(5) (API 연동 전 완료화면 이동)

[현재 상태]
테스트 완료(DONE) — UI 탈리 수준 맞추기(T-036) 진행 중

---

## WT-036 · apply-review.html UI 탈리 수준 맞추기 (C-10)
- 작성일: 2026-05-09 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-036
- 로컬 커밋 해시: `5b9069c`
- 원격 브랜치: `feature/apply-review-form`

[문제 위치]
파일: apply-review/apply-review.html
라인: CSS 전체 섹션 (body ~ .pg-ind)

[증상(문제 설명)]
사장님 스크린샷 비교 결과 — 탈리(좌) vs HTML(우) 폰트 전반적으로 작음.
랜딩 페이지 여백 부족, 배너 CSS gradient(임시) → 실제 이미지 교체 필요.

[원인]
초기 CSS 작성 시 폰트 크기를 탈리 대비 20~30% 작게 설정.
배너 이미지 경로 확정 전 gradient placeholder 사용.

[진단(수정 이유)]
탈리와 동일한 시각적 비중 확보. 모바일 가독성 개선.

[처방(수정 코드)]

| CSS 요소 | 전 | 후 |
|---------|----|----|
| body | 15px | 17px |
| max-width | 480px | 520px |
| logo | 22px | 30px |
| lnd-title | 22px | 34px |
| notice-box | 13px | 19px |
| lnd-title margin-bottom | - | 100px |
| notice-box margin-bottom | - | 44px |
| why-wrap padding-top | - | 44px |
| why-title | 15px | 22px (+ border-top/bottom 추가) |
| why-item | 13px | 16px (구분선 제거) |
| why-item strong | 13.5px | 17px |
| sec-title | 18px | 22px |
| ql | 15px | 17px |
| qs | 12px | 14px |
| inp/opt/ck-opt | 14~15px | 16px |
| tab/tab-lbl | 13px | 15px |
| btn | 16px | 17px |
| done-title | 21px | 26px |
| pg-ind | 12px | 14px |
| up-txt | 13px | 15px |

배너: CSS gradient → `<img src="../imgs/2depth_landing-page_pointeureul-jeogribhago-don-bilrigi-034.png">`
업로드 텍스트: 영문 → 한국어 통일

[현재 상태]
테스트 완료(DONE) — 사장님 디자인 컨펌 완료 (2026-05-09) ✅ / 원격 푸시 대기 중

---

## WT-037 · C-11 API 연동 + DEV/PRD 이중화
- 작성일: 2026-05-10 / 작업자: 쮸리(Claude)
- 연동 T-ID: T-037
- 로컬 커밋 해시: `5b9069c`
- 원격 브랜치: `feature/apply-review-form`

[문제 위치]
파일: apply-review/apply-review.html — JS 하단 submitForm() 섹션
파일: apply-review/apply-review-dev.html (신규)

[증상(문제 설명)]
apply-review.html의 submitForm()이 go(5)만 호출하는 placeholder 상태.
서버팀 TECHSPEC 확정 → API 연동 착수.

[원인]
B-5 게이트 해제: TECHSPEC_4차심사자료내재화_v1.0에 API URL + 필드명 확정.

[진단(수정 이유)]
TECHSPEC Phase 2 "이 TECHSPEC 회신 후 즉시 착수" 조건 충족.

[처방(수정 코드)]

**apply-review.html 변경 내역**

| 항목 | 전 | 후 |
|------|----|----|
| API_URL_PRD | '' (placeholder) | https://admin-api.sirjuseyo.com/open/review-application/applications |
| API_URL_DEV | '' (placeholder) | https://dev-admin-api.sirjuseyo.com/open/review-application/applications |
| API_URL | API_URL_PRD | API_URL_PRD (PRD 기본) |
| submitForm() | go(5) 단순 호출 | 비동기 2단계 플로우 |

신규 함수 4개:
- `collectFormData()` — 폼 전체 입력값 → TECHSPEC API-A Request Body JSON 변환. 조건부 필드 null 처리.
- `submitTextData(data)` — API-A POST, application_id 반환
- `uploadFiles(applicationId)` — API-B 파일 1개씩 순차 POST (HEALTH_INSURANCE / CREDIT_INFO / DEBT_REPAYMENT)
- `submitForm()` — 로딩 상태 → collectFormData → submitTextData → uploadFiles → go(5). 에러 시 alert.

**apply-review-dev.html 신규 생성**
- apply-review.html 복사
- title: "[DEV] 써주세요 4차 심사 자료 입력"
- API_URL = API_URL_DEV (DEV 서버 호출)
- 상단 주황색 DEV 배너 추가: "🚧 DEV 환경 — 실제 데이터가 저장됩니다 (테스트 전용) 🚧"

[현재 상태]
진행중(In-Progress) — 서버팀 DEV 배포 후 실제 API 연동 테스트 필요

---

## WT-037-R2 · 원격 피처 브랜치 푸시 + PR 생성
- 작성일: 2026-05-10 / 작업자: 쮸리(Claude)
- 연동 T-ID: T-036, T-037

[작업 내용]
- 로컬 피처 브랜치: `feature/apply-review-form`
- 원격 피처 브랜치 푸시: `origin/feature/apply-review-form`
- 커밋 해시: `5b9069c`
- PR: #1 (feature/apply-review-form → main)
- PR URL: https://github.com/sirjuseyo/monthly-loan/pull/1

[현재 상태]
깃 관리자 전달 대기 중 — feature → main 머지 요청

---

## WT-038 · debt_adjustment_types `해당 안해요.` → `해당 안해요` 마침표 제거
- 작성일: 2026-05-12 / 작성자: 쮸리(Claude)
- 연동 T-ID: T-038

[문제 위치]
파일: apply-review/apply-review.html
라인: selectNone() 함수 내 `S.debtTypes.add('해당 안해요.');`
라인: toggleDebt() 함수 내 `S.debtTypes.delete('해당 안해요.');`

파일: apply-review/apply-review-dev.html
라인: 동일 (두 파일 동일 로직)

[증상(문제 설명)]
서버팀 API SPEC(API_SPEC_4차심사자료_쮸리팀_v1.0_20260511.md) 대조 결과,
`debt_adjustment_types` 허용값 목록에서 불일치 발견.

[원인]
- 코드: `'해당 안해요.'` (마침표 있음)
- API SPEC: `"해당 안해요"` (마침표 없음 — "정확히 일치해야 함" 명시)
- TECHSPEC DB 컬럼 주석에도 `해당 안해요` (마침표 없음)로 정의

[진단(수정 이유)]
API SPEC에서 허용값 불일치 시 서버가 400 오류 반환 가능.
"해당 안해요" 선택 시 제출이 실패할 수 있는 버그.

[처방(수정 코드)]

| 파일 | 함수 | 수정 전 | 수정 후 |
|------|------|--------|--------|
| apply-review.html | toggleDebt() | `S.debtTypes.delete('해당 안해요.');` | `S.debtTypes.delete('해당 안해요');` |
| apply-review.html | selectNone() | `S.debtTypes.add('해당 안해요.');` | `S.debtTypes.add('해당 안해요');` |
| apply-review-dev.html | toggleDebt() | `S.debtTypes.delete('해당 안해요.');` | `S.debtTypes.delete('해당 안해요');` |
| apply-review-dev.html | selectNone() | `S.debtTypes.add('해당 안해요.');` | `S.debtTypes.add('해당 안해요');` |

※ UI 표시 텍스트(`해당 안해요.`)는 변경 없음 — API 전송값만 수정

[로컬 커밋]
- 브랜치: `feature/apply-review-form`
- 커밋 해시: `41266cc`
- 커밋 메시지: `T-038: debt_adjustment_types '해당 안해요.' → '해당 안해요' 마침표 제거 (API SPEC 불일치 수정)`

[원격 커밋]
- 커밋 `41266cc` 원격 푸시: `feature/apply-review-form` (2026-05-12)
- 커밋 `64b1947` 원격 푸시: TODO_BOARD / WORK_THROUGH 기록 (2026-05-12)
- 머지 커밋: `133d19a` (feature/apply-review-form → main, 세르7호님 처리)

[깃 관리자(세르7호) 완료 보고서 원문]
monthly-loan T-037/T-038 반영 완료했습니다.

* 원격 머지:
   * feature/apply-review-form -> main
   * 기존 PR #1은 이미 MERGED 상태였고, 추가 커밋 41266cc, 64b1947가 main에 빠져 있어 별도 병합 처리
   * merge commit: 133d19a
* 배포:
   * GitHub Pages main / root
   * Pages build: 995343300 built
   * CNAME: monthly-loan.sirjuseyo.com
   * HTTPS enforced: true
* 확인:
   * https://monthly-loan.sirjuseyo.com/apply-review/apply-review.html HTTP/2 200
   * https://monthly-loan.sirjuseyo.com/apply-review/apply-review-dev.html HTTP/2 200
   * API 전송값 debt_adjustment_types: 해당 안해요 마침표 제거 확인
* 문서:
   * GitOps TODO/WORK_THROUGH에 T-025 / WT-025 기록 완료
   * project-docs 문서 커밋/푸시 완료
   * commit: d44af8e
한 줄 버전:
* monthly-loan T-037/T-038 feature/apply-review-form -> main 반영 완료, GitHub Pages build 995343300 built, PRD/DEV 폼 200 및 debt_adjustment_types 마침표 제거 확인 완료했습니다.

[현재 상태]
PRD 배포 완료 — 댄디어빠쮸너야님 DEV 실테스트 대기 중

---

## WT-037-R1 · 폼 도메인 확정 및 서버팀 전달 메시지 작성
- 작성일: 2026-05-10 / 작업자: 쮸리(Claude)
- 연동 T-ID: T-037

[작업 내용]
TECHSPEC Phase 0-3 — 쮸리팀 DEV/PRD 폼 도메인 확정

| 구분 | 도메인 |
|------|--------|
| PRD | `review.sirjuseyo.com` |
| DEV | `dev-review.sirjuseyo.com` |

네이밍 근거: TECHSPEC 전체에서 일관되게 사용된 `review` (review_application 테이블, /review-application/ API 경로)
기존 서버팀 패턴 준수: admin → dev-admin, admin-api → dev-admin-api

[서버팀 전달 메시지]

```
TECHSPEC_4차심사자료내재화_v1.0 Phase 0-3 완료 보고입니다.

쮸리팀 DEV/PRD 폼 도메인 확정했습니다.

  - DEV 폼 도메인: dev-review.sirjuseyo.com
  - PRD 폼 도메인: review.sirjuseyo.com

TECHSPEC Section 5 CORS 정책에 따라
AdminCorsFilter allowedOrigins에 위 두 도메인 추가 부탁드립니다.

감사합니다.
```

전달 주체: 댄디어빠쮸너야님

[기록 위치]
- WORK_THROUGH 본 WT-037-R1
- PLAN_4차심사자료_내재화기획서.md D. DEV/PRD 이중화 섹션
