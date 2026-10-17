/* ============================================================
   무료로 배우는 AI — 인터랙션
   ============================================================ */
(function () {
  "use strict";

  const stageById = Object.fromEntries(STAGES.map(s => [s.id, s]));

  /* ---------- HERO STATS ---------- */
  const counts = { ok: 0, moved: 0, dead: 0 };
  RESOURCES.forEach(r => counts[r.status]++);
  const totalHours = "24주";
  const stageCount = STAGES.length;

  document.getElementById("stats").innerHTML = [
    `<div class="stat"><b>${RESOURCES.length}</b><span>검증한 리소스 (32 + 추가 25)</span></div>`,
    `<div class="stat s-ok"><b>${counts.ok}</b><span>링크 정상</span></div>`,
    `<div class="stat s-moved"><b>${counts.moved}</b><span>주소 변경됨</span></div>`,
    `<div class="stat s-dead"><b>${counts.dead}</b><span>링크 사망</span></div>`
  ].join("");

  const eyebrow = document.getElementById("eyebrowStat");
  if (eyebrow) eyebrow.textContent = `${RESOURCES.length}개 리소스 · ${STAGES.length}단계 · 전부 실제 접속 검증`;

  const resTitle = document.getElementById("resTitle");
  if (resTitle) resTitle.textContent = `무료 AI 학습 리소스 ${RESOURCES.length}개 (검증 완료)`;

  const navRes = document.getElementById("navResCount");
  if (navRes) navRes.textContent = `리소스 ${RESOURCES.length}`;

  const ctaRes = document.getElementById("ctaResCount");
  if (ctaRes) ctaRes.textContent = `리소스 ${RESOURCES.length}개 확인`;

  /* ---------- STAGE TIMELINE ---------- */
  document.getElementById("stageTimeline").innerHTML = STAGES.map(s => {
    const n = RESOURCES.filter(r => r.stage === s.id).length;
    return `
      <div class="stage-card" style="--c:${s.color}">
        <div class="stage-no">${s.no}</div>
        <div class="stage-body">
          <h3>${s.name} <span style="color:var(--muted-2);font-weight:500;font-size:.85rem">· 리소스 ${n}개</span></h3>
          <p class="goal">${s.goal}</p>
          <p class="exit">✔ 통과 기준 · <b>${s.exit}</b></p>
        </div>
        <div class="stage-weeks">${s.weeks}</div>
      </div>`;
  }).join("");

  /* ---------- SCHEDULE TABLE ---------- */
  document.querySelector(".sched-table tbody").innerHTML = SCHEDULE.map(w => {
    const st = stageById[w.stage];
    return `
      <tr>
        <td class="wk">${w.week}주</td>
        <td><span class="pill-mini" style="--c:${st.color}">${st.no} ${st.name}</span></td>
        <td><span class="sched-title">${w.title}</span></td>
        <td class="hrs">${w.hours}</td>
        <td><ul class="sched-tasks">${w.tasks.map(t => `<li>${linkify(t)}</li>`).join("")}</ul></td>
      </tr>`;
  }).join("");

  // 주차 텍스트 안의 "#12" 같은 리소스 번호를 해당 카드 앵커로 링크
  function linkify(text) {
    const safe = escapeHtml(text);
    return safe.replace(/#(\d{1,2})/g, (m, id) => {
      const r = RESOURCES.find(x => String(x.id) === id);
      return r
        ? `<a href="#res-${r.id}" class="reflink" title="${escapeHtml(r.title)}">${m}</a>`
        : m;
    });
  }

  /* ---------- RESOURCE FILTERS ---------- */
  const stageFilterEl = document.getElementById("stageFilter");
  const levelFilterEl = document.getElementById("levelFilter");
  const searchEl = document.getElementById("search");
  const gridEl = document.getElementById("resGrid");
  const countEl = document.getElementById("count");

  const state = { stage: "all", level: "전체", q: "" };

  stageFilterEl.innerHTML = `<button class="chip active" data-stage="all">전체 단계</button>` +
    STAGES.map(s => `<button class="chip" data-stage="${s.id}">${s.no} ${s.name}</button>`).join("");

  levelFilterEl.innerHTML = LEVELS.map(l => {
    // 데이터의 레벨 표기는 "입문~중급"처럼 범위가 있으므로 포함 여부로 매칭
    return l === "전체"
      ? `<button class="chip active" data-level="전체">전체 난이도</button>`
      : `<button class="chip" data-level="${l}">${l}</button>`;
  }).join("");

  stageFilterEl.addEventListener("click", e => {
    const b = e.target.closest("[data-stage]"); if (!b) return;
    stageFilterEl.querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c === b));
    state.stage = b.dataset.stage; render();
  });
  levelFilterEl.addEventListener("click", e => {
    const b = e.target.closest("[data-level]"); if (!b) return;
    levelFilterEl.querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c === b));
    state.level = b.dataset.level; render();
  });
  searchEl.addEventListener("input", () => { state.q = searchEl.value.trim().toLowerCase(); render(); });

  function matchLevel(r) {
    if (state.level === "전체") return true;
    const map = { "입문": "입문", "초급": "초급", "중급": "중급", "고급": "고급" };
    return r.level.includes(map[state.level]);
  }

  function render() {
    const list = RESOURCES.filter(r =>
      (state.stage === "all" || r.stage === state.stage) &&
      matchLevel(r) &&
      (!state.q || (r.title + r.provider + r.key + r.modules.join(" ")).toLowerCase().includes(state.q))
    );
    countEl.textContent = `${list.length}개 표시 중 · 전체 ${RESOURCES.length}개`;

    if (!list.length) {
      gridEl.innerHTML = `<div class="empty">조건에 맞는 과정이 없습니다. 검색어나 필터를 조정해 보세요.</div>`;
      return;
    }

    gridEl.innerHTML = list.map(r => {
      const st = stageById[r.stage];
      const stt = STATUS_LABEL[r.status];
      const mods = r.modules.slice(0, 6).map(m => `<li>${escapeHtml(m)}</li>`).join("");
      const more = r.modules.length > 6 ? `<li class="more">… 외 ${r.modules.length - 6}개</li>` : "";
      return `
        <article class="res-card ${r.status === "dead" ? "is-dead" : ""}" id="res-${r.id}" style="--c:${st.color}">
          <div class="bar"></div>
          <div class="res-top">
            <span class="res-key" style="--c:${st.color}">${st.no} · ${escapeHtml(r.key)}</span>
            <span class="badges">
              <span class="badge ${stt.cls}">${stt.text}</span>
              <span class="badge lvl">${escapeHtml(r.level)}</span>
            </span>
          </div>
          <h3>${escapeHtml(r.title)}</h3>
          <p class="res-prov">${escapeHtml(r.provider)}</p>
          <div class="meta">
            <div><span>시간</span><span>${escapeHtml(r.hours)}</span></div>
            <div><span>언어</span><span>${escapeHtml(r.lang)}</span></div>
            <div><span>비용</span><span>${escapeHtml(r.cost)}</span></div>
            <div><span>수료</span><span>${escapeHtml(r.cert)}</span></div>
          </div>
          <ul class="modules">${mods}${more}</ul>
          <p class="res-note" style="--c:${st.color}">${escapeHtml(r.note)}</p>
          <a class="res-link" href="${r.url}" target="_blank" rel="noopener noreferrer">사이트 열기 <span>↗</span><span style="color:var(--muted-2);font-weight:400">${escapeHtml(shortUrl(r.url))}</span></a>
        </article>`;
    }).join("");
  }

  /* ---------- TOC ---------- */
  const tocEl = document.getElementById("tocTree");
  tocEl.innerHTML = STAGES.map((s, i) => {
    const items = RESOURCES.filter(r => r.stage === s.id);
    return `
      <div class="toc-stage ${i < 2 ? "open" : ""}" style="--c:${s.color}">
        <div class="toc-head">
          <span class="toc-num">${s.no}</span>
          <span class="toc-name">${s.name}</span>
          <span class="toc-wk">${s.weeks}</span>
          <span class="toc-arrow">▶</span>
        </div>
        <div class="toc-items">
          ${items.map(r => `
            <div class="toc-item">
              <span class="tkey">${escapeHtml(r.key)}</span>
              <span class="tmod"><b>${escapeHtml(r.title)}</b> — ${escapeHtml(r.modules.slice(0, 4).join(" · "))}${r.modules.length > 4 ? " …" : ""}</span>
              <a href="#res-${r.id}">카드 보기 →</a>
            </div>`).join("")}
        </div>
      </div>`;
  }).join("");

  tocEl.addEventListener("click", e => {
    const head = e.target.closest(".toc-head");
    if (head) head.parentElement.classList.toggle("open");
  });

  /* ---------- NAV / SCROLL ---------- */
  const nav = document.getElementById("nav");
  const toTop = document.getElementById("toTop");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelector(".nav-links");

  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.addEventListener("click", e => { if (e.target.tagName === "A") navLinks.classList.remove("open"); });

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 10);
    toTop.classList.toggle("show", y > 600);
  }, { passive: true });
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- helpers ---------- */
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function shortUrl(u) {
    try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return u; }
  }

  render();
})();
