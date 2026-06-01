# 대출가능성검사기 기획서

> 청년 서민을 위한 대출 시뮬레이션 + 필요 포인트 산출 + 신청 절차 가이드를 **한 화면에서** 제공하는 도구. 매월 월별 대출이 바뀔 때마다 데이터·이미지·텍스트를 일괄 교체해 운영.

---

## 1. 목적 & 사용자 시나리오

### 1-1. 도구의 목적
- **자가 진단**: "내가 이 조건이면 포인트 얼마 필요한가?"를 사용자가 직접 계산
- **신청 절차 가이드**: 계산 후 5단계 스크립트로 무엇을 해야 하는지 명확히 안내
- **시각적 유도**: 결과 → CTA 버튼 → 월별 대출 페이지로 이어지는 한 방향 흐름

### 1-2. 타깃 사용자
- **20~33세 청년 서민** (신용 점수 낮거나 직업·소득 불안정)
- 제도권 금융권에서 거절당한 경험이 있는 사용자
- "신용 정보" 외 비정형 자료로 평가받고 싶은 사용자

### 1-3. 핵심 사용자 시나리오
```
사용자 진입
  │
  ▼
① 월별 대출 확인 (현재 운영 중 대출 상품 인식)
  │
  ▼
② 신청 금액 & 기간 선택 (10·20·30·50만 원 / 1개월)
  │
  ▼
③ 대출 정보 입력 (옵션 → 이력 → 상태 → 좌석 캘린더 노출)
  │
  ▼
④ 신청 정보 (월대·앱 신청 여부 / 크미·소통거리 진행 상태)
  │
  ▼
⑤ 개인 정보 (이름·생년월일·전번·기종·이메일)
  │
  ▼
🪄 계산 버튼 클릭
  │
  ▼
🧮 결과 패널 표시 (혜택·필요 포인트·5단계 스크립트·CTA)
  │
  ▼
📲 CTA 버튼 클릭 → 월별 대출 신청 페이지
```

---

## 2. 페이지 구조 (와이어프레임)

```
<body>
 │
 ├─ <main class="app-main">  (max-w 1100px, 크림 배경)
 │   │
 │   ├─ 🖼️ 히어로 배너 ①  ← hero-loan-eligibility-checker_typeB.jpg
 │   │       └ 잘파세대 미션 빙고 + GETCHA 갓챠 (메인 비주얼)
 │   │
 │   ├─ 🖼️ 히어로 배너 ②  ← loan-eligibility-checker-02.jpg
 │   │       └ "대출이 필요하신 분, 주목" + 4가지 약속 (승인율 99%)
 │   │
 │   ├─ 🖼️ 히어로 배너 ③  ← loan-eligibility-checker-03.jpg
 │   │       └ 4가지 대출 옵션 (웨이팅/롸잇나우/블랙찬스/이벤트)
 │   │
 │   ├─ 🖼️ 히어로 배너 ④  ← loan-eligibility-checker-title.jpg
 │   │       └ "대출가능성검사기" 타이틀 바
 │   │
 │   ├─ § 라이브 시계 (#liveClock)
 │   │
 │   ├─ § 톤 알림 (.tone-note)
 │   │       └ "초면인데 친한 척 음슴체, 반말, 짧게 말할게"
 │   │
 │   └─ <form id="calculatorForm" class="form-grid">  (2단 그리드 ≥960px)
 │       │
 │       ├─ ① 📅 월별 대출 (panel)
 │       │       └ 대출 상품명 (static)
 │       │
 │       ├─ ② 🧮 신청 금액 (panel)
 │       │       ├ 얼마면 돼? (10/20/30/50만 원)
 │       │       └ 얼마나 끌고 갈 거야? (1개월 고정)
 │       │
 │       ├─ ③ 🧾 대출 정보 (panel)
 │       │       ├ 대출 옵션 (웨이팅/롸잇나우/블랙찬스/이벤트)
 │       │       ├ 🗓️ 웨이팅 캘린더 (옵션=웨이팅 시 노출)
 │       │       ├ 대출 옵션 가이드 (aside)
 │       │       ├ 대출 이력 (옵션 따라 동적)
 │       │       ├ 대출 상태 (이력 따라 동적)
 │       │       └ 이력·상태 가이드 (aside)
 │       │
 │       ├─ ④ 📋 신청 정보 (panel)
 │       │       ├ 월대 신청했어?
 │       │       ├ 앱 신청 찍고 왔어?
 │       │       ├ 크레딧 깼냐?
 │       │       ├ 크레딧 미션 가이드 (aside)
 │       │       ├ 소통거리 던졌어?
 │       │       ├ 소통거리 미션 가이드 (aside)
 │       │       ├ 보유 포인트 (input)
 │       │       └ 이모지 포인트 가이드 (aside)
 │       │
 │       └─ ⑤ ℹ️ 개인 정보 (panel)
 │               ├ 이름 뭐?
 │               ├ 민증 까 (생년월일)
 │               ├ 전번 딸까?
 │               ├ 핸펀 기종? (안드/아이폰)
 │               └ 이멜 주소?
 │
 ├─ <div class="action-area">
 │       └─ 🪄 계산 버튼 (이미지 버튼 → cta-loan-abracadabra.jpg)
 │
 └─ <section class="result-panel">  (계산 후 노출)
         │
         ├─ 🧮 미션 포인트 안내 (h2)
         │
         ├─ result-grid (9개 카드)
         │       ├ ✨ 혜택 (옵션별 동적)
         │       ├ 📋 신청 정보 요약
         │       ├ 🗓️ 심사 기간
         │       ├ 🧩 크레딧 미션 (크미)
         │       ├ 💸 이자 미션 (이미)
         │       ├ 🏦 원금 미션 (원미)
         │       ├ 🟰 총 필요 포인트
         │       ├ 🛢️ 현재 보유 포인트
         │       └ ➕ 추가 포인트 (적립 필요 여부)
         │
         ├─ 📋 5단계 신청 스크립트 (script-box)
         │       ├ ⓵ 월대 신청 완료
         │       ├ ⓶ 앱 신청 완료
         │       ├ ⓷ 크미 완료 (48h 이내)
         │       ├ ⓸ 소통거리 미션 완료 (48h 이내)
         │       └ ⓹ 포인트 상환 미션 완료 (이미+원미)
         │
         ├─ ☝️ [미션 포인트 적립] 요약 박스
         │
         ├─ ✌️ [포인트 구독] 박스 (옵션별 조건부)
         │
         ├─ 😓 포인트 적립 빡셈 힌트 (조건부)
         │
         └─ 📲 CTA 버튼 (월대 신청 페이지로 이동)
                 └ cta-newyear-lucky-loan-apply_typeC.jpg
```

---

## 3. 시각 & 톤앤매너

### 3-1. 컬러 시스템 (3단 구조)

| 영역 | 컬러 | 용도 |
|---|---|---|
| 상단 (배너·알림) | 화이트 + 핑크 (`#F2B8D0`, `#FFF0F7`) | 인트로, 부드러운 환영 |
| 중단 (폼) | 크림 `#FAF7F2` + 연보라 (`#DDD0F5`, `#F7F2FF`) | 입력 집중 |
| 하단 (결과) | 라일락 `#F3EEFF` + 보라 `#380097` | 결과·신뢰감 |

| 변수 | 값 | 용도 |
|---|---|---|
| `--accent` | `#380097` | 써주세요. 보라 (메인) |
| `--orange` | `#FF5400` | 경고·강조 |
| `--text` | `#2D1B4E` | 본문 |
| `--border` | `#DDD0F5` | 연보라 테두리 |
| `--pink-border` | `#F2B8D0` | 핑크 강조 테두리 |

### 3-2. 톤 (MZ 음슴체 / 반말 / 짧게)
- "민증 까", "전번 딸까?", "이멜 주소?"
- "국뽕 VS 애플빠", "포인트 얼마나 쟁여놈?"
- 사용자에게 "지금 너랑 친한 친구처럼 말하는 거야" 무드 형성
- 이모지 풀활용 (🎮 💎 🥇 🥈 🥉 🎁 🚀 🐶 🐢 🍀 등)

### 3-3. 이미지 버튼 (텍스트 X)
- 계산 버튼 → `cta-loan-abracadabra.jpg` ("대출 나와, 뚝딱!")
- CTA 버튼 → `cta-newyear-lucky-loan-apply_typeC.jpg` (월별 변경)
- 사용자가 텍스트 버튼보다 시각적 즐거움을 느끼도록

---

## 4. 데이터 구조 (`app.js` 상수)

| 상수명 | 용도 | 구조 |
|---|---|---|
| `LOAN_CONFIG` | 옵션별 기본 포인트·보너스·상태 매핑 | `{옵션: {basePoints, histories: {이력: {bonus, statuses: {상태: 값}}}}}` |
| `WAITING_SEAT_RANGES` | 웨이팅 5개 좌석의 신청 기간·할인율·기한 | `[{seat, startDate, endDate, creditDeadline, ...}]` |
| `LOAN_PRODUCT_TABLE` | 금액별 상환 방식·기본 포인트 | `[{amountText, baseRepayment, baseCredit, ...}]` |
| `LOAN_OPTION_STATUS_TABLE` | 옵션 → 이력 → 상태 캐스케이드 | `{옵션: {이력: [상태1, 상태2]}}` |
| `LOAN_REVIEW_SCHEDULE` | 옵션·이력·상태별 심사 기간 | `[{option, history, status, startDate, endDate}]` |
| `LOAN_BENEFITS` | 옵션별 헤택 문구 | `{옵션: 혜택텍스트}` |
| `POINT_SUMMARY_RAW` / `POINT_SUMMARY_TABLE` | 모든 조합의 포인트 요약 (TSV 원본 + 파싱 객체) | ~96행 |

### 4-1. 핵심 비즈니스 룰
- **웨이팅 좌석 5종**: Box(귀빈) / VIP(1열) / Royal(2열) / Standard(3열) / Original(입석) — 신청 시기에 따라 자동 결정
- **크레딧 미션 할인율**: 좌석 + 이력 + 상태 조합으로 0~50% 차등 (e.g. Box+재대출+Clean = 50% 할인)
- **원금 미션 인하율**: 30만 원·50만 원에서 원리포 상품일 때 1~8% (좌석 따라)
- **이자 미션**: 거의 항상 1% (10만 원만 0%)
- **CTA 버튼 링크**: `https://www.sirjuseyo.com/notice/024` ← 월별 변경 필요

---

## 5. 이미지 자산

### 5-1. 사용처별 이미지 (5장 — 모두 범용, 월별 교체 없음)

| # | 파일 | 용도 | 월별 교체 |
|---|---|---|---|
| 1 | `hero-loan-eligibility-checker_typeB.jpg` | 메인 히어로 (잘파세대 미션 빙고) — **광고·후킹·어그로** | ❌ (범용) |
| 2 | `loan-eligibility-checker-02.jpg` | 4가지 약속 (승인율 99%) — **광고** | ❌ (범용) |
| 3 | `loan-eligibility-checker-03.jpg` | 4가지 대출 옵션 안내 — **광고** | ❌ (범용) |
| 4 | `loan-eligibility-checker-title.jpg` | "대출가능성검사기" 타이틀 바 — **간판** | ❌ (범용) |
| 5 | `cta-loan-abracadabra.jpg` | 계산 버튼 ("대출 나와, 뚝딱!") — **이미지 버튼** | ❌ (범용) |

### 5-2. 결과 패널 하단 CTA (텍스트 버튼)

월별 대출 홈·상세 페이지의 `신청하기 →` 와 동일한 **텍스트 버튼** 방식. 매월 이미지 새로 제작 불필요.

| 항목 | 값 |
|---|---|
| 형식 | **텍스트 버튼** (이미지 아님) |
| 위치 | 결과 패널 하단 `.script-cta` 안 |
| 버튼 텍스트 | `[월컨셉] 대출 신청하기 →` (예: `🪖 호국보훈의 달 대출 신청하기 →`) |
| 버튼 링크 | `https://monthly-loan.sirjuseyo.com/[YYYY-MM]/` (예: `2026-06`) |
| 스타일 | 메인 카드 신청하기 버튼과 동일 톤 (오렌지 풀컬러 또는 보라 아웃라인) |
| 매월 교체 | 텍스트·링크의 월 부분만 (이미지 제작 불필요) |

---

## 6. 파일 구조

```
loan-checker/
├─ index.html          (메인 페이지, ~546줄)
├─ styles.css          (3단 컬러 + 폼 + 결과 패널, ~570줄)
├─ app.js              (계산 로직 + 데이터 상수, ~1629줄)
└─ assets/
   └─ img/
       ├─ hero-loan-eligibility-checker_typeB.jpg
       ├─ loan-eligibility-checker-02.jpg
       ├─ loan-eligibility-checker-03.jpg
       ├─ loan-eligibility-checker-title.jpg
       └─ cta-loan-abracadabra.jpg
       (CTA 버튼은 텍스트 — 별도 이미지 파일 없음)
```

**로컬 절대 경로:**
```
/Users/sirjuseyo/SirjuseyoVibeCodingProject/sirjuseyoApp/
  sirjuseyoApp_monthly-loan/monthly-loan-repo/loan-checker
```

---

## 7. 5월 → 6월 호국보훈 적용 가이드

### 7-1. HTML 하드코딩 텍스트 일괄 교체 (`index.html`)

| 위치 | 5월 (현재) | 6월 (적용) |
|---|---|---|
| `① 월별 대출 > 대출 상품명` | `5️⃣🈷️은 ❤️가정의 달 대출` | **`6️⃣🈷️은 🪖호국보훈의 달 대출`** |
| `④ 신청 정보 > 월대 신청 라벨` | `5️⃣🈷️은 ❤️가정의 달 대출 신청했어?` | **`6️⃣🈷️은 🪖호국보훈의 달 대출 신청했어?`** |
| `결과 패널 > 신청 정보 요약 헤더` | `5️⃣🈷️은 ❤️가정의 달 대출 신청 정보` | **`6️⃣🈷️은 🪖호국보훈의 달 대출 신청 정보`** |
| `결과 패널 > 심사 기간 디폴트` | `2026년 6월 1일 ~ 5일 / 매일` (이미 6월?) | **`2026년 7월 1일 ~ 5일 / 매일`** *(확인 필요)* |
| `결과 패널 > 웨이팅 신청일 디폴트` | `2026년 4월 11일` | **`2026년 6월 11일`** |
| `결과 패널 > 웨이팅 신청기간` | `2026년 4월 11일 ~ 15일` | **`2026년 6월 11일 ~ 15일`** |
| `결과 패널 > step5 적립 기한` | `2026년 5월 25일까지❗️` | **`2026년 7월 25일까지❗️`** *(확인 필요)* |
| `결과 패널 > 포인트 구독 시작일` | `2026.03.18` | **`2026.05.18`** (또는 운영 정책에 맞춰) |
| `이벤트 대출 가이드 (#7 옵션 가이드)` | `이벤트 대출 > 5월 한정 스페셜티 / 장미🌹대출` | **`이벤트 대출 > 6월 한정 스페셜티 / 월드컵⚽️대출`** |
| `step5Warning 등 메시지 내 이미지 명` | `cta-newyear-lucky-loan-apply_typeC.jpg` | **`cta-junememorial-loan-apply_typeA.jpg`** (또는 신규 파일명) |

### 7-2. `app.js` 데이터 일괄 교체

#### ① `WAITING_SEAT_RANGES` 좌석 날짜 변경

| 좌석 | 5월 (현재) | 6월 (적용) |
|---|---|---|
| Box Seat (귀빈석) | `2026-04-01 ~ 04-05` | **`2026-06-01 ~ 06-05`** |
| VIP Seat (1열) | `2026-04-06 ~ 04-10` | **`2026-06-06 ~ 06-10`** |
| Royal Seat (2열) | `2026-04-11 ~ 04-15` | **`2026-06-11 ~ 06-15`** |
| Standard Seat (3열) | `2026-04-16 ~ 04-20` | **`2026-06-16 ~ 06-20`** |
| Original Seat (입석) | `2026-04-21 ~ 04-25` | **`2026-06-21 ~ 06-25`** |

각 좌석의 `interestDeadline` / `principalDeadline`도 그에 맞춰 +2개월 시프트 (e.g. `2026-04-15` → `2026-06-15`).

#### ② `LOAN_REVIEW_SCHEDULE` 심사 기간 변경

| 옵션 | 5월 (현재) | 6월 (적용) |
|---|---|---|
| 웨이팅 대출 (전 이력·상태) | `2026-05-01 ~ 05-05` | **`2026-07-01 ~ 07-05`** |
| 블랙찬스 티켓 / 블찬현 | `2026-05-01 ~ 05-05` | **`2026-07-01 ~ 07-05`** |
| (그 외 "매일" 항목은 그대로) | — | (변경 없음) |

#### ③ `LOAN_OPTION_STATUS_TABLE` 이벤트 대출 교체

```js
// 5월 (현재)
"이벤트 대출": {
  "4월 한정 스페셜티": ["벚꽃 🌸 대출"],
}

// 6월 (적용)
"이벤트 대출": {
  "6월 한정 스페셜티": ["월드컵 ⚽ 대출"],
}
```

#### ④ `LOAN_REVIEW_SCHEDULE` 이벤트 대출 항목 교체

```js
// 5월 (현재)
{ option: "이벤트 대출", history: "4월 한정 스페셜티", status: "벚꽃 🌸 대출", startDate: "매일", endDate: "" }

// 6월 (적용)
{ option: "이벤트 대출", history: "6월 한정 스페셜티", status: "월드컵 ⚽ 대출", startDate: "매일", endDate: "" }
```

#### ⑤ `POINT_SUMMARY_RAW` TSV 데이터 교체

이벤트 대출 행에서 `4월 한정 스페셜티` / `벚꽃 🌸 대출` → **`6월 한정 스페셜티`** / **`월드컵 ⚽ 대출`** 로 일괄 교체. (4행 영향: 10만 / 20만 / 30만 / 50만)

### 7-3. 결과 패널 하단 CTA — 텍스트 버튼 + sirjuseyo 도메인

기존 이미지 버튼 방식(`cta-newyear-lucky-loan-apply_typeC.jpg`) → **텍스트 버튼**으로 전환. 매월 이미지 제작 불필요.

```html
<!-- 5월 (구방식 — 이미지 버튼) -->
<a class="script-cta-button" href="https://www.sirjuseyo.com/notice/024" ...>
  <img src="assets/img/cta-newyear-lucky-loan-apply_typeC.jpg" alt="..." />
</a>

<!-- 6월 (신방식 — 텍스트 버튼) -->
<a class="script-cta-button-text" href="https://monthly-loan.sirjuseyo.com/2026-06/">
  🪖 호국보훈의 달 대출 신청하기 →
</a>
```

| 항목 | 값 |
|---|---|
| 버튼 텍스트 | `🪖 호국보훈의 달 대출 신청하기 →` |
| 버튼 링크 | `https://monthly-loan.sirjuseyo.com/2026-06/` |
| 스타일 | 메인 카드 신청하기 버튼과 일관성 유지 (오렌지 풀컬러 또는 보라 아웃라인) |
| 매월 변경 | 월 부분(`2026-06`)과 이모지·문구만 (이미지 제작 X) |

> 💡 **도메인 정책 변경:** 과거 우피 시절 `sirjuseyo.com/notice/[번호]` 패턴 사용 → 현재는 자체 도메인 `monthly-loan.sirjuseyo.com/[YYYY-MM]/` 사용. CTA 링크도 이 도메인으로 일관.

### 7-4. HTML 디폴트값 점검 (⚠️ 누락 시 사용자에게 옛 정보 노출)

`index.html` 안에 페이지 로드 직후 즉시 보이는 **디폴트 텍스트값**이 박혀있음. JavaScript 계산 결과가 덮어쓰긴 하지만, **사용자가 옵션 선택 안 한 상태**에서는 디폴트값 그대로 노출됨. 6월 작업 시 함께 일괄 교체 필수.

| 위치 (HTML id) | 5월 (현재 디폴트) | 6월 (적용) |
|---|---|---|
| `#waitingDateText` | `2026년 4월 11일` | **`2026년 6월 11일`** |
| `#waitingPeriod` | `2026년 4월 11일 ~ 15일` | **`2026년 6월 11일 ~ 15일`** |
| `#discountSeat` | `Royal Seat (2열)` | (동일 — 좌석명은 범용) |
| `#reviewPeriod` | `2026년 6월 1일 ~ 5일 / 매일` *(이미 6월?)* | **`2026년 7월 1일 ~ 5일 / 매일`** |
| `#step5Deadline` | `2026년 5월 25일까지❗️` | **`2026년 7월 25일까지❗️`** |
| `#subscribeStartDate` | `2026.03.18` | **`2026.05.18`** (또는 운영 정책에 맞춰) |

**점검 명령어 (쮸티가 작업 시):**
```bash
# loan-checker 디렉토리에서 5월/4월 흔적 일괄 검색
grep -rnE "(2026[-./.]0[45]|4월 [0-9]+일|5월 [0-9]+일|벚꽃|장미)" loan-checker/

# 결과: 모든 매치를 6월/7월 기준으로 교체 → 다시 grep으로 0건 확인
```

> ⚠️ **위험 시나리오:** `app.js`의 데이터(#7-2)만 교체하고 HTML 디폴트값을 빼먹으면, 페이지 진입 직후 `2026년 4월 11일` 같은 옛 날짜가 보임 → 사용자 신뢰 손상.

---

## 8. 작업 이력

- **2026-05 (현재 운영 중)**: 5월 가정의 달 대출 / 장미🌹대출 / 좌석 4월 1~25일 / 심사 5월 1~5일
- **2026-06 (예정)**: 6월 호국보훈의 달 대출 / 월드컵⚽️대출 / 좌석 6월 1~25일 / 심사 7월 1~5일

---

## 9. TODO (6월 적용 시)

**핵심 작업 — 쮸티(Claude Code) 11호에게 핸드오프:**

- [ ] **month-config.js 신설** (#10 — 5월·6월 둘 다 등록 + 자동 감지 구현)
- [ ] **app.js 리팩토링** — 데이터를 month-config 참조하도록 변경 (#10-3 Step 2)
- [ ] **index.html 리팩토링** — 하드코딩 텍스트를 `data-config` 속성으로 변환 (#10-3 Step 3)
- [ ] **HTML 디폴트값 6개 항목** 6월 기준으로 일괄 교체 (#7-4)
- [ ] **CTA 텍스트 버튼 전환** — 이미지 → 텍스트 + `monthly-loan.sirjuseyo.com/2026-06/` 링크 (#7-3)
- [ ] **검증** — 컴퓨터 날짜 변경해서 5월·6월 자동 전환 확인 / 모든 옵션·이력·상태 조합 클릭 테스트 / `grep`으로 4월·5월 흔적 0건 확인

---

## 10. month-config 분리 + 자동 감지 (6월 작업 시 같이 구현)

> 매월 흩어진 데이터 교체 작업을 **한 파일 + 자동 감지**로 통합. 6월 작업 때 같이 구현하면 7월부터는 매월 작업이 거의 사라짐.

### 10-0. ✅ 활성 기간 정책 (확정 — 2026-05-31 댄디어빠쮸너야님 결정)

> **매월 26일 ~ 익월 25일 = 해당 월 대출 활성 기간**

| 월 | activePeriod.start | activePeriod.end | 비고 |
|---|---|---|---|
| 5월 | 2026-04-26 (전월 26일) | 2026-05-25 (당월 25일) | |
| 6월 | 2026-05-26 (전월 26일) | 2026-06-25 (당월 25일) | |
| 7월 | 2026-06-26 (전월 26일) | 2026-07-25 (당월 25일) | |
| N월 | (N-1)월 26일 | N월 25일 | 패턴 동일 |

**자동 감지 로직:**
```javascript
// 오늘이 activePeriod.start ~ activePeriod.end 안에 있는 config 선택
if (todayStr >= cfg.activePeriod.start && todayStr <= cfg.activePeriod.end) → 선택
```

**예시 (오늘 = 2026-05-31):**
- 5월 activePeriod: 04-26 ~ 05-25 → 05-31 > 05-25 → ❌ skip
- 6월 activePeriod: 05-26 ~ 06-25 → 05-26 ≤ 05-31 ≤ 06-25 → ✅ 6월 선택

**신규 월 추가 시 체크리스트:**
- `activePeriod.start` = 전월 26일
- `activePeriod.end` = 당월 25일
- 이 규칙만 지키면 자동 감지가 정상 작동함

### 10-1. 현재 구조의 문제

매월 바뀌어야 하는 데이터가 **3곳에 흩어져 있음** → 사람이 수동으로 찾아 교체 → 빼먹기 쉬움.

```
index.html  → 텍스트 8군데
app.js      → 데이터 5종 (좌석/심사/이벤트/TSV/혜택)
                                                  ← 매월 14곳 수정 😰
```

### 10-2. 개선 구조

```
[기존]
index.html ─┐
app.js ─────┼── 매월 14곳 직접 수정 😰
HTML 디폴트 ┘

[개선]
month-config.js (한 파일)  ── 매월 여기만 수정 / 자동 감지하면 0번 수정 😎
  ↑↑↑
  index.html, app.js가 이 값을 참조만 함
```

### 10-3. 구현 (3단계)

#### Step 1: `month-config.js` 신설

```javascript
// loan-checker/month-config.js
const MONTH_CONFIGS = {
  '2026-05': {
    loan: { name: '5️⃣🈷️은 ❤️가정의 달 대출', emoji: '❤️', concept: '가정의 달' },
    event: { period: '5월 한정 스페셜티', name: '장미 🌹 대출' },
    applyPeriod: { start: '2026-04-01', end: '2026-04-25' },
    reviewPeriod: { start: '2026-05-01', end: '2026-05-05' },
    pointDeadline: '2026-05-25',
    subscribeStart: '2026.03.18',
    detailUrl: 'https://monthly-loan.sirjuseyo.com/2026-05/',
    ctaText: '❤️ 가정의 달 대출 신청하기 →',
  },
  '2026-06': {
    loan: { name: '6️⃣🈷️은 🪖호국보훈의 달 대출', emoji: '🪖', concept: '호국보훈의 달' },
    event: { period: '6월 한정 스페셜티', name: '월드컵 ⚽ 대출' },
    applyPeriod: { start: '2026-06-01', end: '2026-06-25' },
    reviewPeriod: { start: '2026-07-01', end: '2026-07-05' },
    pointDeadline: '2026-07-25',
    subscribeStart: '2026.05.18',
    detailUrl: 'https://monthly-loan.sirjuseyo.com/2026-06/',
    ctaText: '🪖 호국보훈의 달 대출 신청하기 →',
  },
  // 7월, 8월... 미리 등록해두기
};

// 자동 감지 — 현재 날짜 기준 컨피그 선택
const NOW = new Date();
const CURRENT_MONTH = `${NOW.getFullYear()}-${String(NOW.getMonth() + 1).padStart(2, '0')}`;
const MONTH_CONFIG = MONTH_CONFIGS[CURRENT_MONTH] || MONTH_CONFIGS['2026-06']; // 폴백
```

#### Step 2: `app.js` 리팩토링 (데이터 자동 생성)

```javascript
// 좌석 날짜 자동 시프트
function generateSeatRanges(applyPeriod) {
  const { start } = applyPeriod;
  // 6월 1일~25일을 5일씩 5구간으로 자동 분할
  const seats = ['Box Seat (귀빈석)', 'VIP Seat (1열)', 'Royal Seat (2열)', 
                 'Standard Seat (3열)', 'Original Seat (입석)'];
  return seats.map((seat, i) => ({
    seat,
    startDate: shiftDate(start, i * 5),       // +0, +5, +10, +15, +20일
    endDate: shiftDate(start, i * 5 + 4),     // +4, +9, +14, +19, +24일
    interestDeadline: shiftDate(start, 14 + i * 5),
    principalDeadline: shiftDate(start, 14 + i * 5),
    interestRate: '1%',
    principalRate: ['1%', '2%', '4%', '6%', '8%'][i],
    creditDeadline: '앱에서 신청한 날로부터 48시간 내',
  }));
}

const WAITING_SEAT_RANGES = generateSeatRanges(MONTH_CONFIG.applyPeriod);

// 심사 일정도 자동 생성
const LOAN_REVIEW_SCHEDULE = generateReviewSchedule(MONTH_CONFIG.reviewPeriod);

// 이벤트 대출 컨셉도 자동 매핑
const LOAN_OPTION_STATUS_TABLE = {
  // ...
  '이벤트 대출': {
    [MONTH_CONFIG.event.period]: [MONTH_CONFIG.event.name],
  },
};
```

#### Step 3: `index.html` 디폴트값을 JS로 채우기

```html
<!-- 변경 전 (하드코딩) -->
<p class="static-value">5️⃣🈷️은 ❤️가정의 달 대출</p>

<!-- 변경 후 (data-config 속성 + JS) -->
<p class="static-value" data-config="loan.name"></p>

<script>
  // 페이지 로드 시 모든 data-config 속성 자동 치환
  document.querySelectorAll('[data-config]').forEach(el => {
    const path = el.dataset.config.split('.');
    let value = MONTH_CONFIG;
    path.forEach(key => value = value[key]);
    el.textContent = value;
  });
</script>
```

### 10-4. 결과

| 항목 | 기존 (수동) | 개선 후 (자동) |
|---|---|---|
| 매월 수정 파일 수 | 2개 (index.html + app.js) | **0개** (자동 감지) |
| 매월 수정 위치 | 14곳 | **0곳** (자동) |
| 신규 월 추가 시 | 14곳 다 손대기 | `month-config.js`에 **한 객체 추가** |
| 작업 시간 | ~30분 (실수 가능) | **0분** (자동) / 신규 월 등록 시 ~5분 |

### 10-5. 6월 작업 권장 흐름

1. **month-config.js 신설** (5월·6월·7월·8월 미리 등록)
2. **app.js 리팩토링** (위 Step 2 적용)
3. **index.html 리팩토링** (위 Step 3 적용 + 디폴트값 모두 `data-config`로 전환)
4. **시뮬레이션 검증**:
   - 컴퓨터 날짜를 2026-05-15로 바꿔보고 → 5월 데이터 자동 로드 확인
   - 컴퓨터 날짜를 2026-06-15로 바꿔보고 → 6월 데이터 자동 로드 확인
5. **배포** → 6월 1일이 되면 자동으로 6월 모드 시작
