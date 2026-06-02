/*
 * 써주세요 공용 푸터 (공통 자산) — 월별대출 전 페이지 공통
 * 소스: sirjuseyoWeb/index.html (Contact ~ 저작권, 원본 그대로)
 * 사용: 각 페이지 </body> 직전에  <script src="/footer.js"></script>  한 줄
 * - CSS는 #sjy-footer 로 스코핑 (원본 디자인 유지 + 기존 페이지 무충돌)
 * - 자산(약관·로고·PDF)은 절대경로 https://www.sirjuseyo.com/... (페이지 깊이 무관)
 */
(function () {
  if (document.getElementById('sjy-footer')) return; // 중복 삽입 방지

  var CSS = [
    "#sjy-footer, #sjy-footer * { box-sizing: border-box; }",
    "#sjy-footer { font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', sans-serif; background:#fff; }",
    "#sjy-footer footer { background:#fff; padding:0; }",
    "#sjy-footer hr.section-divider { border:none; border-top:1px solid #E5E7EB; margin:28px 0; }",
    "#sjy-footer hr.section-divider-full { border:none; border-top:1px solid #E5E7EB; margin:28px -32px; }",
    "#sjy-footer .contact-section { background:#fff; padding:60px 32px 28px; max-width:900px; margin:0 auto; }",
    "#sjy-footer .contact-section h3 { font-size:28px; font-weight:700; margin-bottom:28px; color:#333; text-align:left; }",
    "#sjy-footer .contact-cards { display:flex; gap:16px; flex-wrap:wrap; margin-bottom:0; }",
    "#sjy-footer .contact-card { flex:1; min-width:260px; border:1px solid #E5E7EB; border-radius:12px; padding:28px 32px; text-align:left; }",
    "#sjy-footer .contact-card-title { font-size:17px; font-weight:700; color:#333; margin-bottom:18px; display:flex; align-items:center; gap:8px; }",
    "#sjy-footer .contact-card-title .ico { font-size:20px; }",
    "#sjy-footer .contact-row { font-size:16px; color:#555; line-height:2.2; }",
    "#sjy-footer .contact-row span { color:#999; margin-right:6px; }",
    "#sjy-footer .contact-link { color:#380097; text-decoration:none; }",
    "#sjy-footer .contact-link:hover { text-decoration:underline; }",
    "#sjy-footer .service-links { display:flex; flex-direction:column; gap:12px; }",
    "#sjy-footer .service-links a { font-size:16px; color:#380097; text-decoration:none; }",
    "#sjy-footer .service-links a:hover { text-decoration:underline; }",
    "#sjy-footer .legal-footer { background:#fff; border-top:1px solid #E5E7EB; padding:28px 32px 60px; max-width:900px; margin:0 auto; text-align:left; }",
    "#sjy-footer .corp-info-wrap { display:flex; flex-direction:column; gap:16px; margin-bottom:36px; }",
    "#sjy-footer .corp-info { font-size:15px; color:#555; line-height:2.1; border:1px solid #E5E7EB; border-radius:12px; padding:24px 28px; background:#FAFAFA; }",
    "#sjy-footer .corp-info strong { color:#333; font-weight:700; }",
    "#sjy-footer .corp-info .corp-name-en { font-size:13px; color:#888; }",
    "#sjy-footer .legal-block { margin-bottom:28px; }",
    "#sjy-footer .legal-block h4 { font-size:20px; font-weight:700; color:#000; margin-bottom:12px; }",
    "#sjy-footer .legal-block ul { padding-left:20px; }",
    "#sjy-footer .legal-block li { font-size:16px; color:#000; line-height:2; }",
    "#sjy-footer .legal-block p { font-size:16px; color:#000; line-height:2; }",
    "#sjy-footer .legal-block p.legal-warning { font-size:20px !important; font-weight:700; color:#000 !important; margin-bottom:12px; line-height:1.8; }",
    "#sjy-footer .footer-bottom { padding-top:28px; margin-top:36px; margin-left:0; margin-right:0; padding-left:20px; padding-right:20px; display:flex; align-items:center; gap:12px; }",
    "#sjy-footer .footer-logo { font-size:32px; font-weight:900; color:#333; letter-spacing:-2px; font-style:italic; }",
    "#sjy-footer .footer-copy { font-size:13px; color:#222; line-height:1.9; }",
    "#sjy-footer .section-label { font-size:28px; font-weight:700; margin-bottom:28px; color:#333; text-align:left; }"
  ].join("\n");

  var HTML =
    '<div id="sjy-footer">' +
    '  <div class="contact-section">' +
    '    <h3>Contact</h3>' +
    '    <div class="contact-cards">' +
    '      <div class="contact-card">' +
    '        <div class="contact-card-title"><span class="ico">📞</span> 고객센터</div>' +
    '        <div class="contact-row"><span>대표전화 ｜</span>010-2153-6193</div>' +
    '        <div class="contact-row"><span>고객문의 ｜</span><a href="mailto:customer@sirjuseyo.com" class="contact-link">customer@sirjuseyo.com</a></div>' +
    '      </div>' +
    '      <div class="contact-card">' +
    '        <div class="contact-card-title"><span class="ico">💬</span> 카카오톡 CS</div>' +
    '        <div class="contact-row"><a href="http://pf.kakao.com/_AcXXxl" class="contact-link" target="_blank" rel="noopener">카톡 채널로 가기</a></div>' +
    '        <div class="contact-row"><a href="http://pf.kakao.com/_cRVhn/chat" class="contact-link" target="_blank" rel="noopener">1:1 채팅방에 바로 문의하기</a></div>' +
    '      </div>' +
    '      <div class="contact-card">' +
    '        <div class="contact-card-title"><span class="ico">📄</span> 서비스</div>' +
    '        <div class="service-links">' +
    '          <a href="https://www.sirjuseyo.com/privacy/01_terms.html" target="_blank" rel="noopener">서비스 이용약관</a>' +
    '          <a href="https://www.sirjuseyo.com/privacy/index002.html" target="_blank" rel="noopener">개인정보 처리방침</a>' +
    '          <a href="https://www.sirjuseyo.com/privacy/08_standard-terms.html" target="_blank" rel="noopener">대부거래 표준약관</a>' +
    '        </div>' +
    '      </div>' +
    '    </div>' +
    '  </div>' +
    '  <footer>' +
    '    <div class="legal-footer">' +
    '      <div class="legal-block">' +
    '        <h4>대출금리 연 12% (연체금리는 약정이자율 +6%P 이내, 연 18%이내)</h4>' +
    '        <ul>' +
    '          <li>단, 2025년 2월 1일부터 신규체결, 갱신, 연장되는 계약에 한함. 해당 상품은 소액신용대출 상품입니다.</li>' +
    '          <li>만 20세 이상 고객 대상으로 개인신용평점 등 신용도 및 당사 평가 기준에 따라 대출 가능 여부 및 이자율 산출</li>' +
    '          <li>단, 채무 불이행 등록자는 제외</li>' +
    '          <li>이자는 매월 약정일에 부과하고, 상품에 따라 원금자유상환(만기일시상환), 원리금균등분할상환 등의 방법으로 상환</li>' +
    '          <li>조기상환 조건 없음</li>' +
    '          <li>대출계약을 체결하기전에 관계법령에 따라 금융상품에 관한 중요사항을 설명받을 수 있습니다.</li>' +
    '        </ul>' +
    '      </div>' +
    '      <hr class="section-divider">' +
    '      <div class="legal-block">' +
    '        <h4>부대비용 : 채무확인서 발급비, 신용조회비용 등 채무자 부담</h4>' +
    '        <ul>' +
    '          <li>수수료 없음</li>' +
    '          <li>대출계약 전 상품설명서 및 약관을 읽어보세요.</li>' +
    '        </ul>' +
    '      </div>' +
    '      <hr class="section-divider">' +
    '      <div class="legal-block">' +
    '        <p class="legal-warning">중개수수료를 요구하거나 받는 것은 불법입니다. 과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다. 대출시 신용등급 또는 개인신용평점 하락으로 다른 금융거래가 제약 받을 수 있습니다.</p>' +
    '        <ul>' +
    '          <li>일정기간 원리금이 연체될 경우 기한의 이익을 상실할 수 있습니다. 대출조건을 정확히 확인해주세요</li>' +
    '          <li>대출기간 : 1개월~3개월</li>' +
    '          <li>예시 : 10만원을 연 12%로 3개월 원리금 균등 상환시 총 납부금액 33,956원</li>' +
    '        </ul>' +
    '      </div>' +
    '      <hr class="section-divider-full">' +
    '      <h3 class="section-label" style="margin-top: 28px;">About us</h3>' +
    '      <div class="corp-info-wrap">' +
    '        <div class="corp-info">' +
    '          <strong>주식회사 혁사호재 (ALBIT Inc.)</strong><br>' +
    '          대표이사 : 박준호 / PARK JUN HO<br>' +
    '          주소 : 서울특별시 강남구 선릉로 428, 15층 123호<br>' +
    '          <span class="corp-name-en">Address : 1081, DI TOWER, 428 Seolleung-ro, Gangnam-gu, Seoul 06198, Republic of Korea</span><br>' +
    '          사업자등록번호 : 619-88-00665<br>' +
    '          통신판매업 : 2019-서울강남-04564호' +
    '        </div>' +
    '        <div class="corp-info">' +
    '          <strong>써주세요연계대부 (ALBITF)</strong><br>' +
    '          대표 : 정희선 / JUNG HEE SUN<br>' +
    '          주소 : 서울특별시 강남구 도곡로 112, 2층 C2-7호(도곡동, 서한빌딩)<br>' +
    '          사업자 등록번호 : <a href="https://www.sirjuseyo.com/imgs/home/써주세요연계대부 사업자등록증.pdf" target="_blank" rel="noopener" style="color:#380097; text-decoration:underline;">778-28-01770</a><br>' +
    '          대부업 등록번호 : <a href="https://www.sirjuseyo.com/imgs/home/써주세요연계대부 대부업 등록증.pdf" target="_blank" rel="noopener" style="color:#380097; text-decoration:underline;">2024-서울강남-0087-대부</a><br>' +
    '          대부중개업 등록번호 : <a href="https://www.sirjuseyo.com/imgs/home/써주세요연계대부 대부중개업 등록증.pdf" target="_blank" rel="noopener" style="color:#380097; text-decoration:underline;">2024-서울강남-0088-대부중개</a>' +
    '        </div>' +
    '      </div>' +
    '      <hr class="section-divider">' +
    '      <div class="footer-bottom" style="background: #F3F0FF; border: 2px solid #380097; border-radius: 12px; padding: 24px 20px; margin-left: 0; margin-right: 0;">' +
    '        <img src="https://www.sirjuseyo.com/imgs/home/logoPurpleSplash@2x.png" alt="써주세요 로고" style="width: 52px; height: auto; flex-shrink: 0; align-self: flex-start;" />' +
    '        <div class="footer-copy" style="font-size: 14px; color: #1a1a1a; line-height: 2; font-weight: 600;">' +
    '          This website is owned and operated by ALBIT Inc. &amp; ALBITF<br>' +
    '          © 2026 ALBIT Inc. &amp; ALBITF All rights reserved.<br>' +
    '          <span style="color: #380097; font-weight: 700;">써주세요.(sirjuseyo.com)는 주식회사 혁사호재(ALBIT Inc.)와 써주세요연계대부(ALBITF)의 공동운영 서비스입니다.</span>' +
    '        </div>' +
    '      </div>' +
    '    </div>' +
    '  </footer>' +
    '</div>';

  function inject() {
    if (document.getElementById('sjy-footer')) return;
    var style = document.createElement('style');
    style.setAttribute('data-sjy-footer', '');
    style.appendChild(document.createTextNode(CSS));
    document.head.appendChild(style);
    var wrap = document.createElement('div');
    wrap.innerHTML = HTML;
    document.body.appendChild(wrap.firstElementChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
