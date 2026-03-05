// ── PAYMENT PAGE ──

function loadOrderSummary() {
  const idx = parseInt(sessionStorage.getItem('selectedCourse') || '0');
  const c = courses[idx];

  document.getElementById('oc-name').textContent = c.title;
  document.getElementById('oc-meta').textContent = c.meta;
  document.getElementById('oc-orig').textContent = c.orig;
  document.getElementById('oc-disc').textContent = c.disc;
  document.getElementById('oc-total').textContent = c.price;
  document.getElementById('oc-thumb').textContent = c.emoji;
  document.getElementById('oc-thumb').style.background = c.bg;
  document.getElementById('pay-amt').textContent = c.price;
}

function selPM(el) {
  document.querySelectorAll('.pm-opt').forEach(b => b.classList.remove('sel'));
  el.classList.add('sel');
}

function applyPromo() {
  const val = document.getElementById('promo-code').value.trim().toUpperCase();
  const msg = document.getElementById('promo-msg');
  if (val === 'CODE10') {
    msg.style.color = 'var(--success)';
    msg.textContent = '✅ Code applied — 10% off!';
  } else {
    msg.style.color = '#dc2626';
    msg.textContent = '❌ Invalid code. Try CODE10!';
  }
}

function processPayment() {
  sessionStorage.setItem('paymentSuccess', 'true');
  window.location.href = 'dashboard.html';
}

// Card number formatting
document.addEventListener('input', e => {
  if (e.target.id === 'cnum') {
    let v = e.target.value.replace(/\D/g, '').substring(0, 16);
    e.target.value = v.replace(/(.{4})/g, '$1  ').trim();
  }
});

// Run on load
loadOrderSummary();
