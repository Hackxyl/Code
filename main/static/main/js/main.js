// ── HOME PAGE — render course cards ──

function renderCourses() {
  const grid = document.getElementById('courses-grid');
  if (!grid) return;

  grid.innerHTML = courses.map((c, i) => `
    <div class="ccard" onclick="goToCourse(${i})">
      <div class="cthumb" style="background:${c.bg}">
        <div class="cthumb-emoji">${c.emoji}</div>
        <span class="clevel">${c.level}</span>
        ${c.badge ? `<span class="cbadge ${c.badge}">${c.badgeText}</span>` : ''}
      </div>
      <div class="cbody">
        <div class="ctitle">${c.title}</div>
        <div class="cdesc">${c.desc}</div>
        <div class="ctags">${c.tags.map(t => `<span class="ctag">${t}</span>`).join('')}</div>
        <div class="cmeta">
          <span>📚 ${c.les}</span>
          <span>⏱ ${c.hrs}</span>
          <span class="cstars">${c.stars}</span>
        </div>
        <div class="cfooter">
          <div class="cprice"><small>${c.orig}</small> ${c.price}</div>
          <button class="cenroll" onclick="event.stopPropagation();goToCourse(${i})">View →</button>
        </div>
      </div>
    </div>
  `).join('');
}

function goToCourse(index) {
  // Save selected course index to sessionStorage
  sessionStorage.setItem('selectedCourse', index);
  window.location.href = 'pages/curriculum.html';
}

// Run on page load
renderCourses();
