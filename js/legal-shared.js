(function () {
  var css = document.createElement('style');
  css.textContent =
    '.legal-top{background:linear-gradient(135deg,#FFFDE7 0%,#FFF9C4 100%);padding:18px 20px;font-size:24px;font-weight:400;color:#333;line-height:1.6;border-bottom:2px solid #F0E68C}' +
    '.legal-bottom{background:linear-gradient(135deg,#FFFDE7 0%,#FFF9C4 100%);padding:28px 20px;margin-top:16px;font-size:20px;color:#000;line-height:1.8;font-weight:400;border-top:2px solid #F0E68C;border-bottom:2px solid #F0E68C}' +
    '.legal-group{margin-bottom:24px;padding-bottom:24px;border-bottom:1px solid rgba(0,0,0,0.08)}' +
    '.legal-group:last-child{margin-bottom:0;padding-bottom:0;border-bottom:none}' +
    '.legal-group-title{font-size:24px;font-weight:700;color:#000;margin-bottom:12px}' +
    '.legal-group-body{font-size:24px;font-weight:400;color:#000;line-height:1.8}' +
    '.legal-group-body p{margin-bottom:6px;padding-left:1em;text-indent:-1em}' +
    '.legal-group-body p::before{content:"• "}' +
    '.legal-group-body p:last-child{margin-bottom:0}' +
    '.bottom-section{padding:24px 20px;border-top:1px solid #F0F0F0}' +
    '.bottom-title{font-size:16px;font-weight:700;color:#111;margin-bottom:14px;padding-bottom:8px;border-bottom:2px solid #380097;display:inline-block}' +
    '.bottom-title-wrap{margin-bottom:14px}' +
    '.contact-card{border:1px solid #ECECEC;border-radius:12px;padding:18px 20px;margin-bottom:8px;background:#FAFAFA;box-shadow:0 1px 4px rgba(0,0,0,0.03)}' +
    '.contact-card-title{font-size:14px;font-weight:700;color:#333;margin-bottom:10px;display:flex;align-items:center;gap:6px}' +
    '.contact-row{font-size:14px;color:#555;line-height:2}' +
    '.contact-row span{color:#999;margin-right:4px}' +
    '.contact-link{color:#380097;text-decoration:none;font-weight:500}' +
    '.contact-link:hover{text-decoration:underline}' +
    '.service-links{display:flex;flex-direction:column;gap:8px}' +
    '.service-links a{font-size:14px;color:#380097;text-decoration:none;font-weight:500}' +
    '.service-links a:hover{text-decoration:underline}' +
    '.corp-box{border:1px solid #ECECEC;border-radius:12px;padding:20px;margin-bottom:8px;background:#FAFAFA;font-size:14px;color:#555;line-height:2;box-shadow:0 1px 4px rgba(0,0,0,0.03)}' +
    '.corp-box strong{color:#111;font-weight:700}' +
    '.corp-desc{font-size:12px;color:#7C3AED;font-weight:600;margin-bottom:4px;letter-spacing:-0.2px}' +
    '.corp-link{color:#380097;text-decoration:underline}' +
    '.store-card{border:1px solid #ECECEC;border-radius:12px;padding:16px 18px;margin-bottom:8px;display:flex;align-items:center;gap:14px;background:#FAFAFA;box-shadow:0 1px 4px rgba(0,0,0,0.03)}' +
    '.store-badge{display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#111 0%,#333 100%);color:#fff;padding:10px 18px;border-radius:10px;text-decoration:none;flex:1;box-shadow:0 2px 8px rgba(0,0,0,0.15)}' +
    '.store-badge:hover{opacity:0.9}' +
    '.store-badge-sub{font-size:10px;color:#aaa}' +
    '.store-badge-name{font-size:16px;font-weight:700;color:#fff}' +
    '.store-platform{font-size:13px;color:#555;display:flex;align-items:center;gap:4px;width:75px;flex-shrink:0}' +
    '.copyright-box{background:linear-gradient(135deg,#F3F0FF 0%,#EDE9FE 100%);border:2px solid #380097;border-radius:12px;padding:20px;display:flex;align-items:flex-start;gap:12px;box-shadow:0 4px 16px rgba(56,0,151,0.1)}' +
    '.copyright-logo{width:25px;height:25px;border-radius:50%;flex-shrink:0}' +
    '.copyright-text{font-size:13px;color:#1a1a1a;line-height:1.9;font-weight:600}' +
    '.copyright-brand{color:#380097;font-weight:700}';
  document.head.appendChild(css);

  var page = document.querySelector('.page') || document.querySelector('.wrap');
  if (!page) return;

  /* ── 상단 법적 고지 ── */
  var legalTop =
    '<div class="legal-top">' +
      '<span style="display:inline-block;background:#7C3AED;color:#fff;padding:4px 12px;border-radius:6px;margin-bottom:8px">써주세요연계대부</span><br>' +
      '2024-서울강남-0087-대부<br>' +
      '2024-서울강남-0088-대부중개<br>' +
      '등록시・도 명칭 : 서울시 강남구청(대부업 담당 : 02-3423-5524)' +
    '</div>';
  page.insertAdjacentHTML('afterbegin', legalTop);

  /* ── 하단 전체 ── */
  var html =

    /* ── 법적 고지 하단 ── */
    '<div class="legal-bottom">' +
      '<div class="legal-group">' +
        '<div class="legal-group-title">대출금리 연 12% (연체금리는 약정이자율 +6%P 이내, 연 18%이내)</div>' +
        '<div class="legal-group-body">' +
          '<p>단, 2025년 2월 1일부터 신규체결, 갱신, 연장되는 계약에 한함. 해당 상품은 소액신용대출 상품입니다.</p>' +
          '<p>만 20세 이상 고객 대상으로 개인신용평점 등 신용도 및 당사 평가 기준에 따라 대출 가능 여부 및 이자율 산출</p>' +
          '<p>단, 채무 불이행 등록자는 제외</p>' +
          '<p>이자는 매월 약정일에 부과하고, 상품에 따라 원금자유상환(만기일시상환), 원리금균등분할상환, 이자전부 포인트상환, 이자전부와 원금일부 포인트상환 등의 방법으로 상환</p>' +
          '<p>조기상환 조건 없음</p>' +
          '<p>대출계약을 체결하기전에 관계법령에 따라 금융상품에 관한 중요사항을 설명받을 수 있습니다.</p>' +
        '</div>' +
      '</div>' +
      '<div class="legal-group">' +
        '<div class="legal-group-title">부대비용 : 채무확인서 발급비, 신용조회비용 등 채무자 부담</div>' +
        '<div class="legal-group-body">' +
          '<p>수수료 없음</p>' +
          '<p>신용조회비용은 포인트로 결제</p>' +
          '<p>대출계약 전 상품설명서 및 약관을 읽어보세요.</p>' +
        '</div>' +
      '</div>' +
      '<div class="legal-group">' +
        '<div class="legal-group-title">“중개수수료를 요구하거나 받는 것은 불법입니다.”<br>“과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다.”<br>“대출시 신용등급 또는 개인신용평점 하락으로 다른 금융거래가 제약 받을 수 있습니다.”</div>' +
        '<div class="legal-group-body">' +
          '<p>일정기간 원리금이 연체될 경우 기한의 이익을 상실할 수 있습니다. 대출조건을 정확히 확인해주세요</p>' +
          '<p>대출기간 : 1개월~3개월</p>' +
          '<p>예시 : 10만원을 연 12%로 3개월 원리금 균등 상환시 총 납부금액 33,956원</p>' +
        '</div>' +
      '</div>' +
    '</div>' +

    /* ── Contact ── */
    '<div class="bottom-section">' +
      '<div class="bottom-title-wrap"><span class="bottom-title">Contact</span></div>' +
      '<div class="contact-card">' +
        '<div class="contact-card-title"><span>📞</span> 고객센터</div>' +
        '<div class="contact-row" style="font-size:24px"><span>대표전화 ｜</span>010-2153-6193</div>' +
        '<div class="contact-row"><span>고객문의 ｜</span><a href="mailto:customer@sirjuseyo.com" class="contact-link">customer@sirjuseyo.com</a></div>' +
      '</div>' +
      '<div class="contact-card">' +
        '<div class="contact-card-title"><span>💬</span> 카카오톡 CS</div>' +
        '<div class="contact-row"><a href="http://pf.kakao.com/_AcXXxl" class="contact-link" target="_blank" rel="noopener">카톡 채널로 가기</a></div>' +
        '<div class="contact-row"><a href="http://pf.kakao.com/_cRVhn/chat" class="contact-link" target="_blank" rel="noopener">1:1 채팅방에 바로 문의하기</a></div>' +
      '</div>' +
      '<div class="contact-card">' +
        '<div class="contact-card-title"><span>📄</span> 서비스</div>' +
        '<div class="service-links">' +
          '<a href="/privacy/01_terms.html">서비스 이용약관</a>' +
          '<a href="/privacy/index002.html">개인정보 처리방침</a>' +
          '<a href="/privacy/08_standard-terms.html">대부거래 표준약관</a>' +
        '</div>' +
      '</div>' +
    '</div>' +

    /* ── About us ── */
    '<div class="bottom-section">' +
      '<div class="bottom-title-wrap"><span class="bottom-title">About us</span></div>' +
      '<div class="corp-box" style="font-size:22px;color:#000">' +
        '<strong style="color:#000">써주세요연계대부 (ALBITF)</strong><br>' +
        '대표 : 정희선 / JUNG HEE SUN<br>' +
        '대표전화 : 010-2153-6193<br>' +
        '주소 : 서울특별시 강남구 논현로72길 16, 4층 424호 (역삼동, 초원빌딩)<br>' +
        '사업자 등록번호 : <a href="https://www.sirjuseyo.com/imgs/home/써주세요연계대부 사업자등록증.pdf" target="_blank" rel="noopener" class="corp-link">778-28-01770</a><br>' +
        '대부업 등록번호 : <a href="https://www.sirjuseyo.com/imgs/home/써주세요연계대부 대부업 등록증.pdf" target="_blank" rel="noopener" class="corp-link">2024-서울강남-0087-대부</a><br>' +
        '대부중개업 등록번호 : <a href="https://www.sirjuseyo.com/imgs/home/써주세요연계대부 대부중개업 등록증.pdf" target="_blank" rel="noopener" class="corp-link">2024-서울강남-0088-대부중개</a>' +
      '</div>' +
      '<div class="corp-box">' +
        '<div class="corp-desc">대안신용평가 &amp; 포인트 이력 ・소비력 ・구매력 분석</div>' +
        '<strong>주식회사 혁사호재 (ALBIT Inc.)</strong><br>' +
        '대표이사 : 박준호 / PARK JUN HO<br>' +
        '주소 : 서울특별시 강남구 선릉로 428, 15층 123호<br>' +
        '사업자등록번호 : 619-88-00665<br>' +
        '통신판매업 : 2019-서울강남-04564호' +
      '</div>' +
    '</div>' +

    /* ── 앱 다운로드 ── */
    '<div class="bottom-section">' +
      '<div class="bottom-title-wrap"><span class="bottom-title">📱 앱 다운로드</span></div>' +
      '<div class="store-card">' +
        '<a href="#" class="store-badge">' +
          '<svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M4 2.8L18.6 16 4 29.2V2.8Z" fill="#EA4335"/>' +
            '<path d="M4 2.8L22.4 10.6L18.6 16L4 2.8Z" fill="#FBBC04"/>' +
            '<path d="M4 29.2L18.6 16L22.4 21.4L4 29.2Z" fill="#34A853"/>' +
            '<path d="M22.4 10.6L28 14.2C29.3 14.9 29.3 17.1 28 17.8L22.4 21.4L18.6 16L22.4 10.6Z" fill="#4285F4"/>' +
          '</svg>' +
          '<div>' +
            '<span class="store-badge-sub">GET IT ON</span><br>' +
            '<span class="store-badge-name">Google Play</span>' +
          '</div>' +
        '</a>' +
        '<div class="store-platform">' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="#3DDC84"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/></svg>' +
          ' 안드로이드' +
        '</div>' +
      '</div>' +
      '<div class="store-card">' +
        '<a href="#" class="store-badge">' +
          '<svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<rect width="32" height="32" rx="7" fill="url(#ag2)"/>' +
            '<defs><linearGradient id="ag2" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#18BFFB"/><stop offset="100%" stop-color="#2072F3"/></linearGradient></defs>' +
            '<path d="M21.5 20.5H10.5L9 23H23L21.5 20.5Z" fill="white"/>' +
            '<path d="M16 8L20 15H12L16 8Z" fill="white"/>' +
            '<path d="M13 15L10 20.5H16L13 15Z" fill="white"/>' +
            '<path d="M19 15L22 20.5H16L19 15Z" fill="white"/>' +
          '</svg>' +
          '<div>' +
            '<span class="store-badge-sub">Download on the</span><br>' +
            '<span class="store-badge-name">App Store</span>' +
          '</div>' +
        '</a>' +
        '<div class="store-platform">' +
          '<svg width="12" height="14" viewBox="0 0 14 16" fill="#555"><path d="M13.23 11.3c-.28.65-.41.94-.77 1.52-.5.81-1.2 1.82-2.08 1.83-.78.01-1-.51-2.06-.5-1.07 0-1.3.51-2.08.5-.88-.01-1.54-.93-2.04-1.74C2.57 10.72 2 7.84 3 6.04c.7-1.28 1.97-2.03 3.16-2.03 1.18 0 1.92.51 2.89.51.94 0 1.52-.51 2.88-.51 1.07 0 2.21.58 2.9 1.59-2.54 1.4-2.14 5.04.4 5.7zM9.5.5C9.97 1.18 9.75 2.5 9 3.17c-.76.67-1.97.97-2.5.25C6.06 2.75 6.32 1.48 7.1.82 7.88.16 9.02-.16 9.5.5z"/></svg>' +
          ' 아이폰' +
        '</div>' +
      '</div>' +
    '</div>' +

    /* ── 저작권 ── */
    '<div class="bottom-section" style="padding-bottom:40px">' +
      '<div class="copyright-box">' +
        '<img class="copyright-logo" src="/imgs/home/logoPurpleSplash@2x.png" alt="써주세요 로고" />' +
        '<div class="copyright-text">' +
          'This website is owned and operated by ALBITF.<br>' +
          '© 2026 ALBITF. All rights reserved.<br>' +
          '<span class="copyright-brand">써주세요.(sirjuseyo.com)는 써주세요연계대부(ALBITF)의 서비스입니다.</span>' +
        '</div>' +
      '</div>' +
    '</div>';

  page.insertAdjacentHTML('beforeend', html);
})();
