// Google Analytics : ne se charge qu'avec l'accord du visiteur (même choix que sur l'accueil).
(function(){
  var GA_ID = 'G-X636W3KWGD';
  var KEY = 'meije_analytics', choice = null;
  try { choice = localStorage.getItem(KEY); } catch(e) {}
  function load(){
    var t = document.createElement('script');
    t.async = true; t.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(t);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
    document.addEventListener('click', function(ev){
      var a = ev.target.closest && ev.target.closest('a[href*="tidycal.com"], a[href*="buy.stripe.com"]');
      if (a) gtag('event', 'cta_click', { link_url: a.href, link_text: (a.textContent || '').trim().slice(0, 60), page: location.pathname });
    });
  }
  var box = document.getElementById('cookie');
  function save(v){ try { localStorage.setItem(KEY, v); } catch(e) {} box.classList.remove('show'); if (v === 'yes') load(); }
  if (choice === 'yes') load();
  else if (choice !== 'no') {
    box.classList.add('show');
    document.getElementById('cookie-yes').onclick = function(){ save('yes'); };
    document.getElementById('cookie-no').onclick = function(){ save('no'); };
  }
})();
