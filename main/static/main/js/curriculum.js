// ── CURRICULUM PAGE ──

const ico = { video: '▶️', quiz: '❓', project: '🛠️', live: '🔴' };

function loadCourseDetails() {
  const idx = parseInt(sessionStorage.getItem('selectedCourse') || '0');
  const c = courses[idx];

  document.getElementById('cur-tag').textContent = c.tag;
  document.getElementById('cur-title').textContent = c.title;
  document.getElementById('cur-desc').textContent = c.desc;
  document.getElementById('cur-les').textContent = '📚 ' + c.les;
  document.getElementById('cur-hrs').textContent = '⏱ ' + c.hrs;
  document.getElementById('ec-orig').textContent = c.orig;
  document.getElementById('ec-price').textContent = c.price;
}

function renderModules() {
  const container = document.getElementById('mods-container');
  container.innerHTML = modules.map((m, mi) => `
    <div class="mod-block${mi === 0 ? ' open' : ''}">
      <div class="mod-hdr" onclick="this.parentElement.classList.toggle('open')">
        <div class="mod-num">${mi + 1}</div>
        <div class="mod-info">
          <div class="mod-title">${m.title}</div>
          <div class="mod-meta">${m.lessons.length} lessons</div>
        </div>
        <span class="mod-arr">▼</span>
      </div>
      <div class="mod-lessons">
        ${m.lessons.map(l => `
          <div class="l-row">
            <div class="l-ico ${l.t}">${ico[l.t]}</div>
            <div class="l-name">${l.n}</div>
            ${l.f ? '<span class="l-free">FREE</span>' : ''}
            <div class="l-dur">${l.d}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Run on load
loadCourseDetails();
renderModules();
