# 쮸리(Claude) 작업 규칙 - 써주세요 프로젝트

## ⚠️ 절대 규칙: 작업 진행 순서

**이슈 발생 또는 새 작업 시작 시 반드시 이 순서를 지킬 것!**

```
1. 이슈 분석
   → 현황 파악, 문제 정의, 배경 이해

2. 분석 피드백
   → 분석 내용 보고 후 사장님 확인/수정 받기

3. A to Z 작업 목차 제시
   → 전체 작업 흐름을 순서대로 나열

4. 목차 컨펌
   → 사장님 OK 받기 전까지 절대 작업 시작 금지!

5. HTML 목업 제시
   → 코드/파일 만들기 전에 목업 먼저 보여주기

6. 목업 컨펌 후 실제 작업 진행
```

---

## ❌ 절대 하면 안 되는 것

- 컨펌 없이 GitHub에 파일 생성/커밋/푸시
- 플랜 없이 혼자 작업 시작
- 작업 중간에 방향 바꾸기
- 여러 단계를 한 번에 점프

---

## 📁 프로젝트 정보

### 써주세요 (SirJuseyo)
- 앱 패키지: `company101.fundlock`
- Play Store: https://play.google.com/store/apps/details?id=company101.fundlock
- 숏링크: https://tinyurl.com/2cahzn3w

### 워크스페이스
- 로컬 경로: `/Users/sirjuseyo/SirjuseyoVibeCodingProject/sirjuseyoApp/sirjuseyoApp_monthly-loan`
- 구조:
  - `monthly-loan-repo/` → GitHub 레포 로컬 사본
  - `Banners/`, `BiCiLogo/` → 에셋
  - `sisrjuseyoApp_LoanEligibilityChecker/` → 대출 적합성 체커

### GitHub 레포
- URL: https://github.com/sirjuseyo/monthly-loan.git
- 도메인: monthly-loan.sirjuseyo.com (GitHub Pages)
- 구조:
  - `index.html` - 메인
  - `2026-04/index.html` - 4월 대출 랜딩 페이지
  - `CNAME` - monthly-loan.sirjuseyo.com

### 탈리 (Tally) → 내재화 예정
- 대시보드: https://tally.so/dashboard
- 4월 폼: https://tally.so/r/mBvDvR
- 현재 비용: 월 6만원
- **대체 목표: 써주세요 자체 인프라로 내재화**
- 탈리 용도 2가지:
  1. 신청 폼 (1번 - 현재 작업)
  2. 심사 3단계 자료 업로드/다운로드 (2번 - 나중 작업)

---

## 🏗️ 기술 스택 (내재화 방향)

| 항목 | 현재 | 목표 |
|------|------|------|
| 신청 폼 | Tally | HTML (정적) |
| 데이터 저장 | Tally | 써주세요 인프라 (AWS) |
| 관리자 UI | Tally Dashboard | 써주세요 관리자 모드 |
| 소스 관리 | - | GitHub |
| 빌드/배포 | GitHub Pages | AWS |

### 빌드 순서 (웹/HTML)
```
코딩 → 빌드 → 배포(AWS)
```
### 빌드 순서 (앱/서버)
```
코딩 → 컴파일 → 빌드 → 배포(AWS)
```

---

## 📋 진행 중인 작업

### [2026-04] 탈리 → 내재화 (1번: 신청 폼)
- 목차 컨펌 완료
- 다음 단계: A. 아키텍처 설계 (API 엔드포인트 확인)
