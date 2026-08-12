(function () {
  'use strict';

  var LESSONS = window.LESSONS || [];
  var GAMES = window.GAMES || [];
  var ART = window.ART || {};
  var KEY = 'mc-econ-v1';

  /* ── 進度：只存在這台裝置 ───────────────────────── */
  var state = { done: {}, games: {}, level: 'easy', font: 'm' };
  try {
    var raw = localStorage.getItem(KEY);
    if (raw) {
      var s = JSON.parse(raw);
      if (s && typeof s === 'object') {
        state.done = s.done || {};
        state.games = s.games || {};
        state.level = s.level === 'hard' ? 'hard' : 'easy';
        state.font = /^[sml]$/.test(s.font) ? s.font : 'm';
      }
    }
  } catch (e) {}

  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }

  /* ── 小工具 ─────────────────────────────────── */
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  /* 內容只用 **粗體** 一種標記，先跳脫再轉，避免內文的角括號變成標籤 */
  function md(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
  }
  function $(id) { return document.getElementById(id); }
  function zy(el) { if (window.reZhuyin) window.reZhuyin(el); }

  /* ── 課程卡 ─────────────────────────────────── */
  var lessonList = $('lessonList');

  function drawLessons() {
    lessonList.innerHTML = '';
    LESSONS.forEach(function (L) {
      var li = document.createElement('li');
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'card' + (state.done[L.id] ? ' done' : '');
      b.style.borderLeftColor = L.color;
      b.innerHTML =
        '<span class="emo">' + L.emoji + '</span>' +
        '<span class="no">第 ' + L.no + ' 課</span>' +
        '<span class="ttl">' + esc(L.title) + '</span>' +
        '<span class="sb">' + esc(L.subtitle) + '</span>';
      b.addEventListener('click', function () { openLesson(L); });
      li.appendChild(b);
      lessonList.appendChild(li);
    });
    zy(lessonList);
  }

  /* ── 遊戲卡 ─────────────────────────────────── */
  var gameList = $('gameList');

  function drawGames() {
    gameList.innerHTML = '';
    GAMES.forEach(function (G) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'card' + (state.games[G.id] ? ' done' : '');
      b.style.borderLeftColor = '#e0a92c';
      b.innerHTML =
        '<span class="emo">' + G.emoji + '</span>' +
        '<span class="no">小遊戲</span>' +
        '<span class="ttl">' + esc(G.title) + '</span>' +
        '<span class="sb">' + esc(G.desc) + '</span>' +
        '<span class="goal">目標：' + esc(G.goal) + '</span>';
      b.addEventListener('click', function () { openGame(G); });
      gameList.appendChild(b);
    });
    zy(gameList);
  }

  /* ── 獎章牆 ─────────────────────────────────── */
  var badgeWall = $('badgeWall');

  function drawBadges() {
    badgeWall.innerHTML = '';
    LESSONS.forEach(function (L) {
      var d = document.createElement('div');
      d.className = 'badge' + (state.done[L.id] ? ' got' : '');
      d.innerHTML = '<span class="e">' + L.emoji + '</span><span class="t">' + esc(L.title) + '</span>';
      badgeWall.appendChild(d);
    });
    GAMES.forEach(function (G) {
      var d = document.createElement('div');
      d.className = 'badge' + (state.games[G.id] ? ' got' : '');
      d.innerHTML = '<span class="e">' + G.emoji + '</span><span class="t">' + esc(G.title) + '</span>';
      badgeWall.appendChild(d);
    });
    zy(badgeWall);

    var nl = LESSONS.filter(function (L) { return state.done[L.id]; }).length;
    var ng = GAMES.filter(function (G) { return state.games[G.id]; }).length;
    $('statLesson').textContent = nl;
    $('statGame').textContent = ng;
    $('statBadge').textContent = nl + ng;
  }

  /* ── 閱讀器 ─────────────────────────────────── */
  var reader = $('reader'), rdBody = $('rdBody'), rdTitle = $('rdTitle'),
      rdCount = $('rdCount'), rdBar = $('rdBar'),
      rdPrev = $('rdPrev'), rdNext = $('rdNext');

  var cur = null, page = 0, lastFocus = null;

  function openReader(title) {
    lastFocus = document.activeElement;
    rdTitle.textContent = title;
    reader.hidden = false;
    document.body.style.overflow = 'hidden';
    $('rdClose').focus();
  }

  function closeReader() {
    reader.hidden = true;
    cur = null;
    document.body.style.overflow = '';
    rdBody.innerHTML = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  $('rdClose').addEventListener('click', closeReader);
  document.addEventListener('keydown', function (e) {
    if (reader.hidden) return;
    if (e.key === 'Escape') closeReader();
    else if (e.key === 'ArrowRight' && !rdNext.disabled) rdNext.click();
    else if (e.key === 'ArrowLeft' && !rdPrev.disabled) rdPrev.click();
  });

  function openLesson(L) {
    cur = L; page = 0;
    openReader('第 ' + L.no + ' 課　' + L.title);
    drawPage();
  }

  function drawPage() {
    var L = cur, total = L.steps.length + 1;
    rdCount.textContent = (page + 1) + ' / ' + total;
    rdBar.style.width = ((page + 1) / total * 100) + '%';
    rdPrev.disabled = page === 0;
    rdNext.hidden = false;
    rdNext.textContent = page === total - 1 ? '回課程列表' : (page === total - 2 ? '來考一題 →' : '下一頁 →');

    var inner = document.createElement('div');
    inner.className = 'rd-inner';

    if (page < L.steps.length) {
      var st = L.steps[page];
      var html = '<h2 class="rd-h">' + esc(st.title) + '</h2>';
      if (st.art && ART[st.art]) html += '<div class="rd-art">' + ART[st.art] + '</div>';
      (st[state.level] || st.easy).forEach(function (p) {
        html += '<p class="rd-p">' + md(p) + '</p>';
      });
      if (st.tip) html += '<p class="rd-tip">' + md(st.tip) + '</p>';
      inner.innerHTML = html;
    } else {
      drawQuiz(inner, L);
    }

    rdBody.innerHTML = '';
    rdBody.appendChild(inner);
    rdBody.scrollTop = 0;
    zy(inner);
  }

  function drawQuiz(inner, L) {
    var Q = L.quiz;
    inner.innerHTML = '<h2 class="rd-h">' + L.emoji + '　考一題</h2>' +
      '<p class="quiz-q">' + md(Q.q) + '</p><div class="quiz-opts"></div><div class="quiz-after"></div>';
    var opts = inner.querySelector('.quiz-opts');
    var after = inner.querySelector('.quiz-after');

    Q.opts.forEach(function (o, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'quiz-opt';
      b.innerHTML = md(o);
      b.addEventListener('click', function () { answer(i); });
      opts.appendChild(b);
    });

    function answer(i) {
      var right = i === Q.a;
      var all = opts.querySelectorAll('.quiz-opt');
      all.forEach(function (b, j) {
        b.disabled = true;
        if (j === Q.a) b.classList.add('right');
        else if (j === i) b.classList.add('wrong');
      });

      var html = '<p class="quiz-why' + (right ? '' : ' no') + '">' +
        (right ? '答對了！' : '再想一次——正確答案是上面綠色那個。') + '<br>' + md(Q.why) + '</p>';

      if (right && !state.done[L.id]) {
        state.done[L.id] = 1; save();
        html += '<div class="quiz-got"><span class="e">' + L.emoji + '</span>拿到獎章：' + esc(L.title) + '</div>';
        drawLessons(); drawBadges();
      } else if (right) {
        drawLessons(); drawBadges();
      }
      after.innerHTML = html;
      zy(after);
      after.scrollIntoView({ block: 'nearest' });
    }
  }

  rdPrev.addEventListener('click', function () {
    if (page > 0) { page--; drawPage(); }
  });
  rdNext.addEventListener('click', function () {
    if (!cur) return;
    if (cur.steps) {
      if (page < cur.steps.length) { page++; drawPage(); }
      else closeReader();
    } else closeReader();
  });

  /* ── 遊戲畫面 ───────────────────────────────── */
  function openGame(G) {
    cur = { game: G };
    openReader(G.emoji + '　' + G.title);
    rdCount.textContent = '';
    rdBar.style.width = '100%';
    rdPrev.disabled = true;
    rdNext.textContent = '回列表';

    var inner = document.createElement('div');
    inner.className = 'rd-inner';
    rdBody.innerHTML = '';
    rdBody.appendChild(inner);
    rdBody.scrollTop = 0;

    G.mount(inner, function () {
      if (!state.games[G.id]) {
        state.games[G.id] = 1; save();
        var got = document.createElement('div');
        got.className = 'quiz-got';
        got.innerHTML = '<span class="e">' + G.emoji + '</span>拿到獎章：' + esc(G.title);
        inner.appendChild(got);
        zy(got);
      }
      drawGames(); drawBadges();
    });
    zy(inner);
  }

  /* ── 工具列 ─────────────────────────────────── */
  function applyLevel() {
    document.querySelectorAll('[data-level]').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-level') === state.level);
    });
    /* 難度換了，正在讀的那一頁要跟著換講法 */
    if (cur && cur.steps && page < cur.steps.length) drawPage();
  }
  function applyFont() {
    document.body.classList.remove('fs-s', 'fs-m', 'fs-l');
    document.body.classList.add('fs-' + state.font);
    document.querySelectorAll('[data-font]').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-font') === state.font);
    });
  }

  document.querySelectorAll('[data-level]').forEach(function (b) {
    b.addEventListener('click', function () {
      state.level = b.getAttribute('data-level'); save(); applyLevel();
    });
  });
  document.querySelectorAll('[data-font]').forEach(function (b) {
    b.addEventListener('click', function () {
      state.font = b.getAttribute('data-font'); save(); applyFont();
    });
  });

  $('resetAll').addEventListener('click', function () {
    if (!confirm('清除所有課程與遊戲的進度？獎章會全部歸零。')) return;
    state.done = {}; state.games = {}; save();
    drawLessons(); drawGames(); drawBadges();
  });

  /* ── 啟動 ───────────────────────────────────── */
  applyLevel();
  applyFont();
  drawLessons();
  drawGames();
  drawBadges();
})();
