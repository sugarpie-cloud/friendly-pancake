(function() {
  if (window.__UserBlockedScreenLoaded) return;
  window.__UserBlockedScreenLoaded = true;

  const style = `
    #blocked-screen {
      position: fixed;
      inset: 0;
      background: #ffffff;
      z-index: 9999999999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: #111;
      text-align: center;
    }
    #blocked-screen h1 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: #d32f2f;
    }
    #blocked-screen p {
      font-size: 1.1rem;
      color: #333;
      margin-bottom: 1rem;
    }
    #blocked-screen a {
      color: #007bff;
      text-decoration: underline;
      font-weight: 500;
    }
  `;

  // inject CSS
  const s = document.createElement('style');
  s.textContent = style;
  document.head.appendChild(s);

  // overlay
  const overlay = document.createElement('div');
  overlay.id = 'blocked-screen';
  overlay.innerHTML = `
    <div>
      <h1>Access Blocked</h1>
      <p>You have been blocked. Please contact support.</p>
      <a href="mailto:support@yourdomain.com">support@yourdomain.com</a>
    </div>
  `;

  // disable interaction with rest of the page
  document.body.style.overflow = 'hidden';
  document.body.style.pointerEvents = 'none';
  overlay.style.pointerEvents = 'auto';

  document.body.appendChild(overlay);
})();
