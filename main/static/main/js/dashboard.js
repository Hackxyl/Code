// ── DASHBOARD PAGE ──

function initDashboard() {
  // Show success banner if coming from payment
  if (sessionStorage.getItem('paymentSuccess') === 'true') {
    document.getElementById('success-banner').style.display = 'block';
    sessionStorage.removeItem('paymentSuccess');
  }

  // Load course name if available
  const idx = parseInt(sessionStorage.getItem('selectedCourse') || '0');
  if (typeof courses !== 'undefined') {
    const c = courses[idx];
    document.getElementById('wb-course').textContent = c.title + ' · Started 3 days ago';
    document.getElementById('dash-cn').textContent = c.title;
  }

  // Animate progress bar
  setTimeout(() => {
    const fill = document.getElementById('prog-fill');
    if (fill) fill.style.width = '8%';
  }, 400);
}

function swTab(btn, id) {
  document.querySelectorAll('.dtab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('[id^="t-"]').forEach(t => t.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

const replies = [
  "Great question! We'll cover that in detail in your next session 😊",
  "Love the curiosity — that's the mindset of a great developer 🚀",
  "I'll send you a quick reference doc for that right now 📄",
  "Don't worry, that confused me too when I started. Let me explain 👇"
];

function sendMsg() {
  const inp = document.getElementById('chat-in');
  const text = inp.value.trim();
  if (!text) return;

  const msgs = document.getElementById('chat-msgs');
  const now = new Date().toLocaleTimeString('en-KE', { hour: '2-digit', minute: '2-digit' });
  msgs.innerHTML += `
    <div class="msg me">
      <div class="bubble">${text}</div>
      <div class="mtime">Just now · ${now}</div>
    </div>`;
  inp.value = '';
  msgs.scrollTop = msgs.scrollHeight;

  setTimeout(() => {
    const reply = replies[Math.floor(Math.random() * replies.length)];
    msgs.innerHTML += `
      <div class="msg fi">
        <div class="bubble">${reply}</div>
        <div class="mtime">Just now</div>
      </div>`;
    msgs.scrollTop = msgs.scrollHeight;
  }, 1400);
}

// Allow Enter key to send message
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.activeElement.id === 'chat-in') {
    sendMsg();
  }
});

// Run on load
initDashboard();
