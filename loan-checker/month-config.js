/**
 * month-config.js
 * 월별 대출 검사기 설정 파일
 * 매월 신규 월 추가 시 이 파일에만 객체 하나 추가하면 자동 적용됨
 *
 * 작성자: 쮸티12호
 * 작성일: 2026-05-31
 * T-ID: T-013
 */

const MONTH_CONFIGS = {
  '2026-05': {
    // 대출 상품 정보
    loan: {
      name: '5️⃣🈷️은 ❤️가정의 달 대출',
      emoji: '❤️',
      concept: '가정의 달',
    },
    // 이벤트 대출
    event: {
      period: '5월 한정 스페셜티',
      name: '장미 🌹 대출',
    },
    // 신청 기간 (웨이팅 좌석 자동 생성 기준)
    applyPeriod: {
      start: '2026-04-01',
      end: '2026-04-25',
    },
    // 심사 기간
    reviewPeriod: {
      start: '2026-05-01',
      end: '2026-05-05',
      display: '2026년 5월 1일 ~ 5일 / 매일',
    },
    // 포인트 적립 기한 (step5Deadline)
    pointDeadline: '2026년 5월 25일',
    // 포인트 구독 시작일
    subscribeStart: '2026.03.18',
    // 6월 랜딩 페이지 URL
    detailUrl: 'https://monthly-loan.sirjuseyo.com/2026-05/',
    // CTA 버튼 텍스트
    ctaText: '❤️ 가정의 달 대출 신청하기 →',
    // 웨이팅 캘린더 기본 노출값 (Royal Seat 기준)
    defaultWaitingDate: '2026년 4월 11일',
    defaultWaitingPeriod: '2026년 4월 11일 ~ 15일',
    // step4Warning 심사 기간
    step4ReviewDisplay: '2026년 5월 1일 ~ 5일',
  },
  '2026-06': {
    loan: {
      name: '6️⃣🈷️은 🪖호국보훈의 달 대출',
      emoji: '🪖',
      concept: '호국보훈의 달',
    },
    event: {
      period: '6월 한정 스페셜티',
      name: '월드컵 ⚽ 대출',
    },
    applyPeriod: {
      start: '2026-06-01',
      end: '2026-06-25',
    },
    reviewPeriod: {
      start: '2026-07-01',
      end: '2026-07-05',
      display: '2026년 7월 1일 ~ 5일 / 매일',
    },
    pointDeadline: '2026년 7월 25일',
    subscribeStart: '2026.05.18',
    detailUrl: 'https://monthly-loan.sirjuseyo.com/2026-06/',
    ctaText: '🪖 호국보훈의 달 대출 신청하기 →',
    defaultWaitingDate: '2026년 6월 11일',
    defaultWaitingPeriod: '2026년 6월 11일 ~ 15일',
    step4ReviewDisplay: '2026년 7월 1일 ~ 5일',
  },
  // ← 7월 이후 여기에 추가
};

// 자동 감지: 오늘 날짜 기준으로 가장 가까운 미래/현재 대출 config 선택
// 로직: 각 config의 applyPeriod.end보다 오늘이 크면 skip → 다음 config 선택
// 예) 오늘=2026-05-31, 5월 applyPeriod.end=2026-04-25 → skip
//     오늘=2026-05-31, 6월 applyPeriod.end=2026-06-25 → 선택 ✅
const _now = new Date();
const _todayStr = `${_now.getFullYear()}-${String(_now.getMonth() + 1).padStart(2, '0')}-${String(_now.getDate()).padStart(2, '0')}`;
const _sortedKeys = Object.keys(MONTH_CONFIGS).sort();

var MONTH_CONFIG = null;
for (const _key of _sortedKeys) {
  if (_todayStr <= MONTH_CONFIGS[_key].applyPeriod.end) {
    MONTH_CONFIG = MONTH_CONFIGS[_key];
    break;
  }
}
// 폴백: 모든 대출 기간이 지났으면 마지막 config 사용
if (!MONTH_CONFIG) {
  MONTH_CONFIG = MONTH_CONFIGS[_sortedKeys[_sortedKeys.length - 1]];
}
