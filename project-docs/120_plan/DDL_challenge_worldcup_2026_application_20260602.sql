-- =====================================================================
-- 감다살🐙문어 챌린지 신청 테이블 DDL
-- TECHSPEC v105 §4-3 그대로 (신규 추가 — 기존 테이블 변경 절대 금지)
-- 대상 DB: nano (DEV = sjy-nano-develop → PRD = sjy-nano-production 순서)
-- 실행 전제: TECHSPEC §0-5 ④ DEV/PRD DB 분리 확인 + 사장님 승인 후에만 실행
-- 작성: ClaudeAppCode 쮸티12호 / 2026-06-02
-- =====================================================================

CREATE TABLE `challenge_worldcup_2026_application` (
  `challenge_worldcup_2026_application_id` bigint NOT NULL AUTO_INCREMENT COMMENT '챌린지 신청ID',  -- T-027: JPA Entity Long 정합 위해 int→bigint (관리자+사장님 결정)
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
