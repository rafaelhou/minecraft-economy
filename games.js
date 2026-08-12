/* 三個小遊戲。每個都對應課程裡的一個觀念，
   而且要「玩錯會有感覺」——只是點一點就過關的遊戲教不會任何事。
   mount(box, win) 由 app.js 呼叫；過關時呼叫 win()。 */
window.GAMES = [

/* ── 遊戲 1：農場規劃師（第 1、8 課） ─────────────────────────── */
{
  id: 'farm', emoji: '🌾', title: '農場規劃師',
  desc: '20 顆綠寶石，你要買會生產的東西，還是買用完就沒的東西？',
  goal: '十年後累積 100 顆綠寶石',
  mount: function (box, win) {
    var ITEMS = [
      { n: '鑽石劍',     e: '⚔️', cost: 5,  yr: 0, kind: '用完就沒' },
      { n: '蛋糕',       e: '🎂', cost: 2,  yr: 0, kind: '用完就沒' },
      { n: '附魔金蘋果', e: '🍎', cost: 10, yr: 0, kind: '用完就沒' },
      { n: '南瓜田',     e: '🎃', cost: 3,  yr: 2, kind: '會生產' },
      { n: '小麥田',     e: '🌾', cost: 4,  yr: 3, kind: '會生產' },
      { n: '甘蔗田',     e: '🎋', cost: 5,  yr: 4, kind: '會生產' },
      { n: '鐵巨人塔',   e: '🗿', cost: 8,  yr: 7, kind: '會生產' }
    ];
    var BUDGET = 20, TARGET = 100;
    var picked = [];

    box.innerHTML =
      '<p class="g-lead">你有 <b>' + BUDGET + ' 顆綠寶石</b>。點下面的東西把它買下來，' +
      '買完按「跑十年」看看你會剩多少。</p>' +
      '<div class="g-shop"></div>' +
      '<div class="g-bar"><span class="g-left"></span>' +
      '<button type="button" class="g-run">跑十年 ▶</button>' +
      '<button type="button" class="g-reset">重來</button></div>' +
      '<div class="g-out" hidden></div>';

    var shop = box.querySelector('.g-shop');
    var left = box.querySelector('.g-left');
    var out = box.querySelector('.g-out');

    ITEMS.forEach(function (it, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'g-item ' + (it.yr ? 'is-asset' : 'is-spend');
      b.innerHTML = '<span class="g-e">' + it.e + '</span>' +
        '<span class="g-n">' + it.n + '</span>' +
        '<span class="g-c">' + it.cost + ' 綠寶石</span>' +
        '<span class="g-y">' + (it.yr ? '每年產 ' + it.yr : it.kind) + '</span>';
      b.addEventListener('click', function () { buy(i); });
      shop.appendChild(b);
    });

    function spent() { return picked.reduce(function (s, i) { return s + ITEMS[i].cost; }, 0); }

    function buy(i) {
      if (spent() + ITEMS[i].cost > BUDGET) { flash('綠寶石不夠了'); return; }
      picked.push(i);
      draw();
    }

    function flash(msg) {
      left.classList.add('g-warn');
      left.textContent = msg;
      setTimeout(draw, 900);
    }

    function draw() {
      left.classList.remove('g-warn');
      left.textContent = '還剩 ' + (BUDGET - spent()) + ' 顆綠寶石' +
        (picked.length ? '｜已買：' + picked.map(function (i) { return ITEMS[i].e; }).join('') : '');
    }

    box.querySelector('.g-reset').addEventListener('click', function () {
      picked = []; out.hidden = true; draw();
    });

    box.querySelector('.g-run').addEventListener('click', function () {
      if (!picked.length) { flash('先買點東西'); return; }
      var perYear = picked.reduce(function (s, i) { return s + ITEMS[i].yr; }, 0);
      var rows = '', total = 0;
      for (var y = 1; y <= 10; y++) {
        total += perYear;
        rows += '<div class="g-yr"><span>第 ' + y + ' 年</span>' +
          '<span class="g-track"><i style="width:' + Math.min(100, total) + '%"></i></span>' +
          '<b>' + total + '</b></div>';
      }
      var okay = total >= TARGET;
      out.hidden = false;
      out.innerHTML =
        '<p class="g-sum">你的東西每年產出 <b>' + perYear + '</b> 顆綠寶石。</p>' + rows +
        '<p class="g-verdict ' + (okay ? 'ok' : 'no') + '">' +
        (okay
          ? '過關！十年拿到 ' + total + ' 顆。你把錢放在<b>會自己生產的東西</b>上面了。'
          : '十年只有 ' + total + ' 顆，還沒到 ' + TARGET + '。想一想：你買的東西裡，有幾樣是<b>會自己長出來</b>的？') +
        '</p>';
      out.scrollIntoView({ block: 'nearest' });
      if (okay) win();
    });

    draw();
  }
},

/* ── 遊戲 2：分散挖礦（第 6 課） ───────────────────────────── */
{
  id: 'mine', emoji: '⛏️', title: '分散挖礦',
  desc: '12 把鎬子，你要全部押同一個礦坑，還是分開挖？',
  goal: '五輪下來，最慘的一輪也要挖到 8 個以上',
  mount: function (box, win) {
    var PITS = [
      { n: '一號坑', e: '🟫' }, { n: '二號坑', e: '🟦' },
      { n: '三號坑', e: '🟩' }, { n: '四號坑', e: '🟪' }
    ];
    var TOTAL = 12, ROUNDS = 5, TARGET = 8;
    var alloc = [0, 0, 0, 0];
    var seed = (Date.now() ^ 0x5f3a) & 0x7fffffff;
    function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }

    /* 每一輪的運氣是「同一組倍率隨機換位子」，不是每個坑各擲一次。
       這樣四個坑平均分配時，每輪總收成永遠是 12 × 4.5 ÷ 4 = 13 個左右；
       全押一個坑時，同樣的期望值卻可能整輪掛零。
       ——這正是「分散」真正的作用：期望值一樣，但不會歸零。 */
    var LUCK = [0, 0.5, 1.5, 2.5];
    function shuffled() {
      var a = LUCK.slice();
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(rnd() * (i + 1));
        var t = a[i]; a[i] = a[j]; a[j] = t;
      }
      return a;
    }

    box.innerHTML =
      '<p class="g-lead">每個礦坑每輪的運氣都不一樣：可能塌方一個都沒有，也可能挖到大礦脈。' +
      '把 <b>12 把鎬子</b>分配下去，然後開挖五輪。</p>' +
      '<div class="g-pits"></div>' +
      '<div class="g-bar"><span class="g-left"></span>' +
      '<button type="button" class="g-run">開挖五輪 ▶</button>' +
      '<button type="button" class="g-reset">重新分配</button></div>' +
      '<div class="g-out" hidden></div>';

    var pits = box.querySelector('.g-pits');
    var left = box.querySelector('.g-left');
    var out = box.querySelector('.g-out');

    PITS.forEach(function (p, i) {
      var d = document.createElement('div');
      d.className = 'g-pit';
      d.innerHTML = '<span class="g-e">' + p.e + '</span><span class="g-n">' + p.n + '</span>' +
        '<span class="g-stepper"><button type="button" data-d="-1" aria-label="減少">−</button>' +
        '<b class="g-num">0</b>' +
        '<button type="button" data-d="1" aria-label="增加">＋</button></span>';
      d.addEventListener('click', function (ev) {
        var b = ev.target.closest('button'); if (!b) return;
        var d2 = +b.getAttribute('data-d');
        var used = alloc.reduce(function (s, v) { return s + v; }, 0);
        if (d2 > 0 && used >= TOTAL) return;
        if (d2 < 0 && alloc[i] <= 0) return;
        alloc[i] += d2;
        draw();
      });
      pits.appendChild(d);
    });

    function draw() {
      var used = alloc.reduce(function (s, v) { return s + v; }, 0);
      left.textContent = '已分配 ' + used + ' / ' + TOTAL + ' 把鎬子';
      pits.querySelectorAll('.g-num').forEach(function (n, i) { n.textContent = alloc[i]; });
      pits.querySelectorAll('.g-pit').forEach(function (d, i) {
        d.classList.toggle('is-on', alloc[i] > 0);
      });
    }

    box.querySelector('.g-reset').addEventListener('click', function () {
      alloc = [0, 0, 0, 0];
      out.hidden = true;
      draw();
    });

    box.querySelector('.g-run').addEventListener('click', function () {
      var used = alloc.reduce(function (s, v) { return s + v; }, 0);
      if (used !== TOTAL) { left.textContent = '把 12 把鎬子全部分配完再開挖'; return; }

      var rows = '', worst = Infinity, sum = 0;
      for (var r = 1; r <= ROUNDS; r++) {
        var luck = shuffled();
        var got = 0, cells = '';
        for (var i = 0; i < 4; i++) {
          var m = luck[i];
          var g = Math.round(alloc[i] * m);
          got += g;
          cells += '<span class="g-cell' + (alloc[i] === 0 ? ' off' : (m === 0 ? ' bad' : (m >= 2.5 ? ' great' : ''))) +
            '">' + (alloc[i] === 0 ? '—' : (m === 0 ? '塌方' : g)) + '</span>';
        }
        worst = Math.min(worst, got); sum += got;
        rows += '<div class="g-round"><span>第 ' + r + ' 輪</span>' + cells + '<b>' + got + '</b></div>';
      }

      var okay = worst >= TARGET;
      out.hidden = false;
      out.innerHTML =
        '<div class="g-round g-head"><span></span>' +
        PITS.map(function (p) { return '<span class="g-cell">' + p.e + '</span>'; }).join('') +
        '<b>合計</b></div>' + rows +
        '<p class="g-sum">五輪總共 <b>' + sum + '</b> 個｜最慘的一輪 <b>' + worst + '</b> 個</p>' +
        '<p class="g-verdict ' + (okay ? 'ok' : 'no') + '">' +
        (okay
          ? '過關！最慘的一輪也有 ' + worst + ' 個。<b>分開挖</b>不會讓你賺最多，但會讓你不會有哪一輪是零。'
          : '最慘的一輪只有 ' + worst + ' 個。' +
            (Math.max.apply(null, alloc) >= 9
              ? '你幾乎全押在同一個坑——那個坑一塌方，你就整輪掛零。'
              : alloc.filter(function (v) { return v > 0; }).length <= 2
                ? '你只挖兩個坑。塌方的剛好是你押最重的那個，整輪就毀了。'
                : '再試一次：四個坑各放 3 把，看看最慘的一輪會不會變好。')) +
        '</p>';
      out.scrollIntoView({ block: 'nearest' });
      if (okay) win();
    });

    draw();
  }
},

/* ── 遊戲 3：綠寶石殺價（第 7 課） ─────────────────────────── */
{
  id: 'trade', emoji: '💎', title: '綠寶石殺價',
  desc: '同一把鑽石鎬，每個村民開的價都不一樣。你要現在買，還是再等等？',
  goal: '買到 4 把鑽石鎬，而且總共花不超過 60 顆綠寶石',
  mount: function (box, win) {
    var NEED = 4, MAXSPEND = 60;
    var seed = (Date.now() ^ 0x2c91) & 0x7fffffff;
    function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }

    /* 不用純亂數擲價錢——那樣可能整場都沒出現便宜貨，玩對了照樣輸。
       改成固定的一副「牌」洗過再發：便宜的一定有五個，只是不知道什麼時候出現。
       這樣輸的原因就只剩一個：沒忍住。 */
    var DECK = [9, 10, 11, 12, 14, 16, 18, 21, 24, 27];
    var ROUNDS = DECK.length;
    var deck = [];
    function shuffle() {
      deck = DECK.slice();
      for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(rnd() * (i + 1));
        var t = deck[i]; deck[i] = deck[j]; deck[j] = t;
      }
    }

    var r = 0, bought = 0, spent = 0, price = 0, done = false;

    box.innerHTML =
      '<p class="g-lead">一把鑽石鎬<b>本來就值 15 顆綠寶石</b>左右。' +
      '有的村民開得很高，有的開得很低——但機會只有 ' + ROUNDS + ' 次。</p>' +
      '<div class="g-offer"></div>' +
      '<div class="g-bar"><button type="button" class="g-buy">買下來</button>' +
      '<button type="button" class="g-skip">再等等</button>' +
      '<button type="button" class="g-reset" hidden>重來</button></div>' +
      '<div class="g-log"></div>' +
      '<div class="g-out" hidden></div>';

    var offer = box.querySelector('.g-offer');
    var log = box.querySelector('.g-log');
    var out = box.querySelector('.g-out');
    var bBuy = box.querySelector('.g-buy');
    var bSkip = box.querySelector('.g-skip');
    var bReset = box.querySelector('.g-reset');

    function next() {
      r++;
      if (r > ROUNDS || bought >= NEED) { finish(); return; }
      price = deck[r - 1];
      offer.innerHTML =
        '<div class="g-vil">🧑‍🌾</div>' +
        '<div class="g-ask"><span>第 ' + r + ' / ' + ROUNDS + ' 位村民</span>' +
        '<b class="' + (price <= 12 ? 'cheap' : price >= 20 ? 'dear' : '') + '">' + price + ' 顆綠寶石</b>' +
        '<span>換一把 ⛏️ 鑽石鎬</span></div>' +
        '<div class="g-status">已買 ' + bought + ' / ' + NEED + ' 把　已花 ' + spent + ' / ' + MAXSPEND + ' 顆</div>';
    }

    function note(txt, cls) {
      var d = document.createElement('div');
      d.className = 'g-note ' + (cls || '');
      d.textContent = txt;
      log.appendChild(d);
      log.scrollTop = log.scrollHeight;
    }

    function finish() {
      done = true;
      bBuy.hidden = true; bSkip.hidden = true; bReset.hidden = false;
      var okay = bought >= NEED && spent <= MAXSPEND;
      if (okay) win();
      offer.innerHTML = '';
      out.hidden = false;
      out.innerHTML = '<p class="g-verdict ' + (okay ? 'ok' : 'no') + '">' +
        (okay
          ? '過關！買到 ' + bought + ' 把，只花了 ' + spent + ' 顆，平均一把 ' +
            (spent / bought).toFixed(1) + ' 顆。<b>好東西還要好價錢</b>——你等到了。'
          : (bought < NEED
              ? '只買到 ' + bought + ' 把。等太久也會出事：機會用完了，鎬子沒買到。'
              : '買到 ' + bought + ' 把，但花了 ' + spent + ' 顆，超過 ' + MAXSPEND + '。' +
                '看到 20 幾顆就別出手——同一把鎬子，等一下就有 10 顆的。')) +
        '</p>';
    }

    bBuy.addEventListener('click', function () {
      if (done) return;
      bought++; spent += price;
      note('第 ' + r + ' 位：花 ' + price + ' 顆買下（' + (price <= 12 ? '划算' : price >= 20 ? '買貴了' : '普通') + '）',
        price <= 12 ? 'ok' : price >= 20 ? 'no' : '');
      next();
    });

    bSkip.addEventListener('click', function () {
      if (done) return;
      note('第 ' + r + ' 位：' + price + ' 顆，跳過');
      next();
    });

    bReset.addEventListener('click', function () {
      r = 0; bought = 0; spent = 0; done = false;
      shuffle();
      log.innerHTML = ''; out.hidden = true;
      bBuy.hidden = false; bSkip.hidden = false; bReset.hidden = true;
      next();
    });

    shuffle();
    next();
  }
}

];
