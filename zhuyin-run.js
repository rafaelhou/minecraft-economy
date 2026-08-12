/* 注音標注 —— 沿用 grade3-toolbox 的作法，只有開關改接工具列的按鈕。
   必須在 app.js 把課程卡畫出來之後才執行，否則那些字不會被標到。 */
(function () {
  'use strict';

  if (!window.ZHUYIN) return;

  var PHRASES = window.ZHUYIN.PHRASES;
  var CHARS   = window.ZHUYIN.CHARS;
  var HAN     = /[一-鿿]/;

  /* 這些節點不標：內容會被程式改寫，或本來就不是給人讀的內文 */
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, RUBY: 1, RT: 1, SVG: 1, PRE: 1, CODE: 1, NOSCRIPT: 1 };

  function shouldSkip(node) {
    var el = node.parentElement;
    while (el) {
      /* SVG 元素的 tagName 是小寫（'svg'、'text'），不像 HTML 會轉大寫，
         不轉大寫就比對不到略過清單，插圖裡的中文會被換成 <ruby> 而整個消失。 */
      if (SKIP_TAGS[el.tagName.toUpperCase()]) return true;
      if (el.hasAttribute && el.hasAttribute('data-no-zhuyin')) return true;
      el = el.parentElement;
    }
    return false;
  }

  function annotate(text) {
    var frag = document.createDocumentFragment();
    var buf = '';
    function flush() { if (buf) { frag.appendChild(document.createTextNode(buf)); buf = ''; } }

    for (var i = 0; i < text.length; ) {
      var two = text.substr(i, 2);
      if (two.length === 2 && PHRASES[two]) {          // 詞組優先，處理破音字
        flush();
        for (var j = 0; j < 2; j++) frag.appendChild(ruby(two[j], PHRASES[two][j]));
        i += 2;
        continue;
      }
      var ch = text[i];
      if (HAN.test(ch) && CHARS[ch]) { flush(); frag.appendChild(ruby(ch, CHARS[ch])); }
      else buf += ch;
      i++;
    }
    flush();
    return frag;
  }

  /* 注音符號與聲調分開，聲調才放得到直式的右側（輕聲置頂） */
  function ruby(ch, zy) {
    var r = document.createElement('ruby');
    r.appendChild(document.createTextNode(ch));

    var rt = document.createElement('rt');
    var m = zy.match(/^(.*?)([ˊˇˋ˙]?)$/);
    var s = document.createElement('span');
    s.className = 'zy-s';
    s.textContent = m[1] || zy;
    rt.appendChild(s);

    var tone = m[2] || '';
    if (tone) {
      var t = document.createElement('span');
      t.className = tone === '˙' ? 'zy-t zy-t-light' : 'zy-t';
      t.textContent = tone;
      rt.appendChild(t);
    }
    r.appendChild(rt);
    return r;
  }

  function walk(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var nodes = [], n;
    while ((n = walker.nextNode())) {
      if (HAN.test(n.nodeValue) && !shouldSkip(n)) nodes.push(n);
    }
    nodes.forEach(function (node) {
      node.parentNode.replaceChild(annotate(node.nodeValue), node);
    });
  }

  ['header', 'nav', 'main', 'footer'].forEach(function (sel) {
    var el = document.querySelector(sel);
    if (el) walk(el);
  });

  /* 給 app.js 用：課程頁與遊戲畫面是動態畫出來的，畫完要重新標注。
     重複呼叫是安全的——ruby/rt 已在略過清單裡。 */
  window.reZhuyin = function (el) { if (el) walk(el); };

  /* ── 開關 ───────────────────────────── */
  var KEY = 'mc-econ-zhuyin';
  var on = true;
  try {
    var saved = localStorage.getItem(KEY);
    if (saved !== null) on = saved === '1';
  } catch (e) {}

  var btn = document.getElementById('zyBtn');

  function render() {
    document.body.classList.toggle('zhuyin-off', !on);
    if (!btn) return;
    btn.textContent = on ? 'ㄅㄆㄇ 關注音' : 'ㄅㄆㄇ 開注音';
    btn.setAttribute('aria-pressed', String(on));
  }

  if (btn) {
    btn.addEventListener('click', function () {
      on = !on;
      try { localStorage.setItem(KEY, on ? '1' : '0'); } catch (e) {}
      render();
    });
  }
  render();
})();
