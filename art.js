/* 課程插圖：全部用直角方塊畫，不用任何曲線——麥塊的識別就是方塊。
   沒有對應 key 的段落不會顯示插圖，這是刻意的：只有真正需要圖的概念才配圖。 */
window.ART = {

/* 第 1 課：挖完就沒了 vs 會自己長回來 */
'coal-wheat':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#bfe4f7"/>' +
 '<rect x="0" y="72" width="200" height="24" fill="#6d5233"/>' +
 '<rect x="0" y="72" width="200" height="6" fill="#7cb46b"/>' +
 // 煤礦（左）
 '<rect x="16" y="30" width="42" height="42" fill="#8a8f98"/>' +
 '<rect x="22" y="36" width="10" height="10" fill="#2b2b2b"/>' +
 '<rect x="40" y="42" width="12" height="12" fill="#2b2b2b"/>' +
 '<rect x="26" y="56" width="10" height="10" fill="#2b2b2b"/>' +
 '<text x="37" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">挖完就沒了</text>' +
 // 箭頭
 '<rect x="70" y="48" width="26" height="5" fill="#3d3128"/>' +
 '<rect x="90" y="43" width="6" height="15" fill="#3d3128"/>' +
 '<rect x="96" y="46" width="5" height="9" fill="#3d3128"/>' +
 // 小麥（右）
 '<g fill="#e0c05a">' +
 '<rect x="120" y="34" width="7" height="38"/><rect x="113" y="40" width="7" height="7"/><rect x="127" y="40" width="7" height="7"/>' +
 '<rect x="145" y="28" width="7" height="44"/><rect x="138" y="34" width="7" height="7"/><rect x="152" y="34" width="7" height="7"/>' +
 '<rect x="170" y="36" width="7" height="36"/><rect x="163" y="42" width="7" height="7"/><rect x="177" y="42" width="7" height="7"/>' +
 '</g>' +
 '<text x="150" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">會自己長回來</text>' +
 '</svg>',

/* 第 3 課：箱子滿了，漏斗塞住 */
'hopper-full':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#d8cfc0"/>' +
 // 卡在半路的物品
 '<g fill="#e0c05a">' +
 '<rect x="52" y="8" width="10" height="10"/><rect x="72" y="4" width="10" height="10"/>' +
 '<rect x="92" y="10" width="10" height="10"/><rect x="112" y="6" width="10" height="10"/>' +
 '<rect x="132" y="12" width="10" height="10"/>' +
 '</g>' +
 // 漏斗
 '<rect x="60" y="28" width="80" height="12" fill="#5a5a62"/>' +
 '<rect x="72" y="40" width="56" height="10" fill="#4a4a52"/>' +
 '<rect x="88" y="50" width="24" height="12" fill="#4a4a52"/>' +
 // 紅色叉叉：塞住
 '<g stroke="#c4453a" stroke-width="7" stroke-linecap="square">' +
 '<line x1="86" y1="34" x2="114" y2="56"/><line x1="114" y1="34" x2="86" y2="56"/>' +
 '</g>' +
 // 滿出來的箱子
 '<rect x="66" y="64" width="68" height="32" fill="#a8763f"/>' +
 '<rect x="66" y="64" width="68" height="7" fill="#8a5f30"/>' +
 '<rect x="94" y="74" width="12" height="10" fill="#5a5a62"/>' +
 '<g fill="#e0c05a"><rect x="70" y="56" width="9" height="9"/><rect x="84" y="54" width="9" height="9"/>' +
 '<rect x="110" y="55" width="9" height="9"/><rect x="122" y="57" width="9" height="9"/></g>' +
 '<text x="100" y="92" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">箱子滿了＝拿不到</text>' +
 '</svg>',

/* 第 5 課：改版把機器砍掉了 */
'patch':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#e8e2d6"/>' +
 // 舊機器（壞掉）
 '<rect x="18" y="26" width="56" height="46" fill="#8a8f98"/>' +
 '<rect x="28" y="36" width="14" height="14" fill="#c4453a"/>' +
 '<rect x="50" y="50" width="14" height="14" fill="#c4453a"/>' +
 '<g stroke="#c4453a" stroke-width="8" stroke-linecap="square">' +
 '<line x1="22" y1="30" x2="70" y2="68"/><line x1="70" y1="30" x2="22" y2="68"/></g>' +
 '<text x="46" y="88" text-anchor="middle" font-size="10.5" font-weight="700" fill="#8a3c34">bug 做的</text>' +
 // 版本標籤
 '<rect x="84" y="38" width="32" height="22" fill="#3d3128"/>' +
 '<text x="100" y="53" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">更新</text>' +
 // 新機器（還活著）
 '<rect x="126" y="26" width="56" height="46" fill="#7cb46b"/>' +
 '<g fill="#e0c05a"><rect x="136" y="36" width="10" height="26"/><rect x="152" y="32" width="10" height="30"/>' +
 '<rect x="168" y="38" width="10" height="24"/></g>' +
 '<text x="154" y="88" text-anchor="middle" font-size="10.5" font-weight="700" fill="#3f7a35">十年沒變的</text>' +
 '</svg>',

/* 第 6 課：分散 */
'many-farms':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#bfe4f7"/>' +
 '<g>' +
 // 四小塊農場，其中一塊壞了
 '<rect x="10" y="20" width="40" height="40" fill="#7cb46b"/><rect x="10" y="20" width="40" height="8" fill="#5f9c4c"/>' +
 '<g fill="#e0c05a"><rect x="16" y="32" width="6" height="22"/><rect x="27" y="30" width="6" height="24"/><rect x="38" y="34" width="6" height="20"/></g>' +
 '<text x="30" y="74" text-anchor="middle" font-size="10" font-weight="700" fill="#3d3128">小麥</text>' +

 '<rect x="60" y="20" width="40" height="40" fill="#8a8f98"/>' +
 '<g stroke="#c4453a" stroke-width="6" stroke-linecap="square">' +
 '<line x1="66" y1="26" x2="94" y2="54"/><line x1="94" y1="26" x2="66" y2="54"/></g>' +
 '<text x="80" y="74" text-anchor="middle" font-size="10" font-weight="700" fill="#8a3c34">壞掉了</text>' +

 '<rect x="110" y="20" width="40" height="40" fill="#7cb46b"/><rect x="110" y="20" width="40" height="8" fill="#5f9c4c"/>' +
 '<g fill="#5aa844"><rect x="116" y="30" width="7" height="24"/><rect x="128" y="30" width="7" height="24"/><rect x="140" y="30" width="7" height="24"/></g>' +
 '<text x="130" y="74" text-anchor="middle" font-size="10" font-weight="700" fill="#3d3128">甘蔗</text>' +

 '<rect x="160" y="20" width="30" height="40" fill="#c98b45"/><rect x="160" y="20" width="30" height="8" fill="#a8763f"/>' +
 '<rect x="167" y="32" width="16" height="16" fill="#e08a2c"/>' +
 '<text x="175" y="74" text-anchor="middle" font-size="10" font-weight="700" fill="#3d3128">南瓜</text>' +
 '</g>' +
 '<text x="100" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="#2f4a5c">壞一座，還有三座在跑</text>' +
 '</svg>',

/* 第 7 課：村民交易，同物不同價 */
'villager':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#e8e2d6"/>' +
 // 村民 A
 '<rect x="18" y="18" width="34" height="34" fill="#c9a882"/>' +
 '<rect x="28" y="30" width="14" height="20" fill="#b08b5f"/>' +
 '<rect x="22" y="28" width="7" height="7" fill="#3d3128"/><rect x="41" y="28" width="7" height="7" fill="#3d3128"/>' +
 '<rect x="14" y="52" width="42" height="26" fill="#7a6a52"/>' +
 '<rect x="14" y="52" width="42" height="7" fill="#5f5340"/>' +
 '<text x="35" y="92" text-anchor="middle" font-size="12" font-weight="700" fill="#c4453a">30 綠寶石</text>' +
 // 中間：同一把鎬
 '<g><rect x="88" y="26" width="24" height="8" fill="#4fd0d8"/><rect x="96" y="34" width="8" height="26" fill="#8a6a44"/></g>' +
 '<text x="100" y="76" text-anchor="middle" font-size="10" font-weight="700" fill="#3d3128">同一把</text>' +
 // 村民 B
 '<rect x="148" y="18" width="34" height="34" fill="#c9a882"/>' +
 '<rect x="158" y="30" width="14" height="20" fill="#b08b5f"/>' +
 '<rect x="152" y="28" width="7" height="7" fill="#3d3128"/><rect x="171" y="28" width="7" height="7" fill="#3d3128"/>' +
 '<rect x="144" y="52" width="42" height="26" fill="#4f7fc4"/>' +
 '<rect x="144" y="52" width="42" height="7" fill="#3a63a0"/>' +
 '<text x="165" y="92" text-anchor="middle" font-size="12" font-weight="700" fill="#3fa34d">8 綠寶石</text>' +
 '</svg>',

/* 第 8 課：產能高但會壞 vs 產能低但耐久 */
'two-farms':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#e8e2d6"/>' +
 '<rect x="12" y="14" width="78" height="52" fill="#e8a5a0"/>' +
 '<rect x="12" y="14" width="78" height="10" fill="#c4453a"/>' +
 '<text x="51" y="22" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">A 農場</text>' +
 '<text x="51" y="42" text-anchor="middle" font-size="15" font-weight="700" fill="#8a3c34">每小時 100</text>' +
 '<text x="51" y="58" text-anchor="middle" font-size="10.5" fill="#8a3c34">3 個月後壞掉</text>' +

 '<rect x="110" y="14" width="78" height="52" fill="#b8e0a8"/>' +
 '<rect x="110" y="14" width="78" height="10" fill="#3f8130"/>' +
 '<text x="149" y="22" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">B 農場</text>' +
 '<text x="149" y="42" text-anchor="middle" font-size="15" font-weight="700" fill="#2f6b26">每小時 40</text>' +
 '<text x="149" y="58" text-anchor="middle" font-size="10.5" fill="#2f6b26">永遠不會壞</text>' +

 '<text x="100" y="84" text-anchor="middle" font-size="12" font-weight="700" fill="#3d3128">一年後：B 早就超過 A 了</text>' +
 '</svg>',

/* 第 9 課：雷雨天 */
'storm':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#5c6b7d"/>' +
 '<rect x="0" y="76" width="200" height="20" fill="#3f5240"/>' +
 // 雲
 '<g fill="#8a95a5">' +
 '<rect x="24" y="10" width="72" height="16"/><rect x="40" y="4" width="44" height="8"/>' +
 '<rect x="112" y="14" width="60" height="14"/><rect x="126" y="8" width="34" height="8"/>' +
 '</g>' +
 // 閃電
 '<g fill="#ffe45c">' +
 '<rect x="66" y="26" width="10" height="18"/><rect x="58" y="44" width="10" height="16"/>' +
 '<rect x="66" y="60" width="10" height="14"/>' +
 '</g>' +
 // 充能苦力怕
 '<rect x="112" y="44" width="34" height="32" fill="#5aa844"/>' +
 '<rect x="118" y="52" width="8" height="8" fill="#1f2b1a"/><rect x="132" y="52" width="8" height="8" fill="#1f2b1a"/>' +
 '<rect x="124" y="60" width="10" height="12" fill="#1f2b1a"/>' +
 '<rect x="108" y="40" width="42" height="4" fill="#a8e0ff"/>' +
 '<text x="100" y="92" text-anchor="middle" font-size="11" font-weight="700" fill="#dfe8f2">天氣會變，做法也要跟著變</text>' +
 '</svg>',

/* 第 11 課：礦層深度，原理帶得走 */
'ylevel':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#bfe4f7"/>' +
 '<rect x="0" y="16" width="200" height="12" fill="#7cb46b"/>' +
 '<rect x="0" y="28" width="200" height="14" fill="#6d5233"/>' +
 '<rect x="0" y="42" width="200" height="34" fill="#8a8f98"/>' +
 '<rect x="0" y="76" width="200" height="20" fill="#5f6570"/>' +
 // 深度標示
 '<text x="196" y="26" text-anchor="end" font-size="9" font-weight="700" fill="#2f4a5c">Y = 60</text>' +
 '<text x="196" y="72" text-anchor="end" font-size="9" font-weight="700" fill="#dfe8f2">Y = −59</text>' +
 // 鑽石
 '<g fill="#4fd0d8">' +
 '<rect x="24" y="62" width="9" height="9"/><rect x="70" y="66" width="9" height="9"/>' +
 '<rect x="112" y="64" width="9" height="9"/><rect x="150" y="68" width="9" height="9"/>' +
 '<rect x="46" y="80" width="9" height="9"/><rect x="128" y="82" width="9" height="9"/>' +
 '</g>' +
 // 上層沒有鑽石
 '<text x="100" y="38" text-anchor="middle" font-size="10" font-weight="700" fill="#e8dcc8">這裡挖不到</text>' +
 '<text x="100" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">鑽石集中在很深的地方</text>' +
 '</svg>',

/* 第 1 課：股票＝公司切成很多小塊 */
'shares':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#e8e2d6"/>' +
 '<text x="100" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#3d3128">一座鐵巨人塔，切成 24 塊</text>' +
 '<g>' +
 (function () {
   var s = '';
   for (var r = 0; r < 3; r++) for (var c = 0; c < 8; c++) {
     var x = 24 + c * 19, y = 26 + r * 19;
     var mine = (r === 1 && c === 3);
     s += '<rect x="' + x + '" y="' + y + '" width="17" height="17" fill="' +
          (mine ? '#17a55e' : '#8a8f98') + '"/>';
   }
   return s;
 })() +
 '</g>' +
 '<rect x="79" y="45" width="19" height="19" fill="none" stroke="#e0a92c" stroke-width="3"/>' +
 '<text x="100" y="92" text-anchor="middle" font-size="11" font-weight="700" fill="#17a55e">你買的是這一塊，不是一個號碼</text>' +
 '</svg>',

/* 第 1 課：投入少、產出多 */
'compare-farm':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#e8e2d6"/>' +
 '<text x="8" y="22" font-size="10.5" font-weight="700" fill="#3d3128">你放進去的</text>' +
 '<g fill="#c98b45"><rect x="86" y="12" width="14" height="14"/><rect x="104" y="12" width="14" height="14"/>' +
 '<rect x="122" y="12" width="14" height="14"/></g>' +
 '<text x="8" y="58" font-size="10.5" font-weight="700" fill="#3d3128">它產出來的</text>' +
 '<g fill="#17a55e"><rect x="86" y="48" width="14" height="14"/><rect x="104" y="48" width="14" height="14"/>' +
 '<rect x="122" y="48" width="14" height="14"/><rect x="140" y="48" width="14" height="14"/>' +
 '<rect x="158" y="48" width="14" height="14"/><rect x="176" y="48" width="14" height="14"/>' +
 '<rect x="86" y="66" width="14" height="14"/><rect x="104" y="66" width="14" height="14"/>' +
 '<rect x="122" y="66" width="14" height="14"/></g>' +
 '<text x="100" y="93" text-anchor="middle" font-size="11" font-weight="700" fill="#3d3128">放 3 塊、拿回 9 塊——這才叫好農場</text>' +
 '</svg>',

/* 第 2 課：檢查表 */
'clipboard':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#e8e2d6"/>' +
 '<rect x="52" y="8" width="96" height="82" fill="#f4ead2"/>' +
 '<rect x="52" y="8" width="96" height="6" fill="#c9b487"/>' +
 '<rect x="86" y="4" width="28" height="10" fill="#8a8f98"/>' +
 (function () {
   var s = '';
   for (var i = 0; i < 6; i++) {
     var y = 22 + i * 11;
     s += '<rect x="60" y="' + y + '" width="9" height="9" fill="none" stroke="#8a7a5a" stroke-width="2"/>' +
          '<rect x="74" y="' + (y + 3) + '" width="' + (44 + (i % 3) * 10) + '" height="4" fill="#c2b394"/>';
   }
   return s;
 })() +
 '<text x="100" y="93" text-anchor="middle" font-size="11" font-weight="700" fill="#3d3128">動工之前，先把六點問過一遍</text>' +
 '</svg>',

/* 第 2 課：前三點 */
'check-3':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#e8e2d6"/>' +
 (function () {
   var t = ['產能夠不夠', '要不要一直補', '東西拿不拿得到'];
   var s = '';
   for (var i = 0; i < 3; i++) {
     var y = 10 + i * 28;
     s += '<rect x="12" y="' + y + '" width="176" height="22" fill="#fffdf7"/>' +
          '<rect x="12" y="' + y + '" width="6" height="22" fill="#17a55e"/>' +
          '<text x="26" y="' + (y + 16) + '" font-size="12" font-weight="700" fill="#17a55e">✓</text>' +
          '<text x="44" y="' + (y + 16) + '" font-size="11.5" fill="#3d3128">' + t[i] + '</text>';
   }
   return s;
 })() +
 '</svg>',

/* 第 2 課：六點全過 */
'check-6':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#e8e2d6"/>' +
 (function () {
   var t = ['產能', '不用補', '拿得到', '不會壞', '有需求', '別人搶不走'];
   var s = '';
   for (var i = 0; i < 6; i++) {
     var x = 8 + (i % 3) * 62, y = 12 + Math.floor(i / 3) * 34;
     s += '<rect x="' + x + '" y="' + y + '" width="56" height="26" fill="#fffdf7" stroke="#17a55e" stroke-width="3"/>' +
          '<text x="' + (x + 8) + '" y="' + (y + 18) + '" font-size="12" font-weight="700" fill="#17a55e">✓</text>' +
          '<text x="' + (x + 22) + '" y="' + (y + 18) + '" font-size="9.5" fill="#3d3128">' + t[i] + '</text>';
   }
   return s;
 })() +
 '<text x="100" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="#3f8130">六格全綠才動工</text>' +
 '</svg>',

/* 第 3 課：告示牌寫的 vs 箱子裡真的有的 */
'chest-compare':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#e8e2d6"/>' +
 // 告示牌
 '<rect x="14" y="14" width="72" height="34" fill="#c9a15a"/>' +
 '<rect x="44" y="48" width="12" height="22" fill="#8a6a44"/>' +
 '<text x="50" y="30" text-anchor="middle" font-size="9.5" fill="#4a3a1e">牌子上寫</text>' +
 '<text x="50" y="43" text-anchor="middle" font-size="14" font-weight="700" fill="#4a3a1e">100</text>' +
 '<text x="50" y="86" text-anchor="middle" font-size="10" fill="#8a7a5a">說的</text>' +
 // 箱子
 '<rect x="114" y="26" width="72" height="44" fill="#a8763f"/>' +
 '<rect x="114" y="26" width="72" height="8" fill="#8a5f30"/>' +
 '<rect x="144" y="40" width="12" height="10" fill="#5a5a62"/>' +
 '<text x="150" y="64" text-anchor="middle" font-size="14" font-weight="700" fill="#fff">12</text>' +
 '<text x="150" y="86" text-anchor="middle" font-size="10" font-weight="700" fill="#3d3128">真的收到的</text>' +
 '<text x="100" y="52" text-anchor="middle" font-size="14" font-weight="700" fill="#c4453a">≠</text>' +
 '</svg>',

/* 第 4 課：一分鐘乘六十 */
'trap-number':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#fdf0ee"/>' +
 '<text x="12" y="24" font-size="12" fill="#3d3128">第一分鐘挖到</text>' +
 '<text x="126" y="26" font-size="18" font-weight="700" fill="#3d3128">3 個</text>' +
 '<rect x="12" y="34" width="176" height="3" fill="#e0c8c4"/>' +
 '<text x="12" y="56" font-size="12" fill="#c4453a">所以一小時有</text>' +
 '<text x="126" y="58" font-size="18" font-weight="700" fill="#c4453a">180 個</text>' +
 '<rect x="112" y="42" width="76" height="22" fill="none" stroke="#c4453a" stroke-width="3"/>' +
 '<text x="100" y="82" text-anchor="middle" font-size="11.5" font-weight="700" fill="#8a3c34">——礦脈只有那一條，後面 59 分鐘是零</text>' +
 '</svg>',

/* 第 4 課：看五年不看一年 */
'five-years':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#e8e2d6"/>' +
 '<rect x="10" y="14" width="180" height="58" fill="#fffdf7"/>' +
 // 鋸齒（真實），下面一條平均線
 '<polyline points="14,58 32,30 50,64 68,40 86,68 104,34 122,60 140,26 158,56 176,36" ' +
   'fill="none" stroke="#c4453a" stroke-width="3"/>' +
 '<line x1="14" y1="47" x2="176" y2="47" stroke="#17a55e" stroke-width="4" stroke-dasharray="8 5"/>' +
 '<text x="16" y="26" font-size="9.5" font-weight="700" fill="#c4453a">每天在跳的</text>' +
 '<text x="120" y="82" font-size="9.5" font-weight="700" fill="#17a55e">五年下來的平均</text>' +
 '<text x="14" y="82" font-size="9.5" fill="#6b6255">一年　三年　五年</text>' +
 '</svg>',

/* 第 5 課：「這次不一樣」 */
'hype':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#2b2b2b"/>' +
 '<rect x="16" y="24" width="168" height="34" fill="#c4453a"/>' +
 '<text x="100" y="48" text-anchor="middle" font-size="19" font-weight="700" fill="#fff">這次不一樣</text>' +
 '<text x="100" y="16" text-anchor="middle" font-size="10" fill="#e8b0aa">每一次泡沫都會聽到這句話</text>' +
 '<g fill="#e0a92c">' +
 '<rect x="24" y="66" width="12" height="12"/><rect x="54" y="66" width="12" height="12"/>' +
 '<rect x="84" y="66" width="12" height="12"/><rect x="114" y="66" width="12" height="12"/>' +
 '<rect x="144" y="66" width="12" height="12"/></g>' +
 '<text x="100" y="92" text-anchor="middle" font-size="10.5" font-weight="700" fill="#e0a92c">投資裡最貴的四個字</text>' +
 '</svg>',

/* 第 6 課：先篩選再分散 */
'sort-chest':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#e8e2d6"/>' +
 // 上面一堆混雜的東西
 '<g><rect x="20" y="8" width="12" height="12" fill="#17a55e"/><rect x="40" y="8" width="12" height="12" fill="#8a8f98"/>' +
 '<rect x="60" y="8" width="12" height="12" fill="#17a55e"/><rect x="80" y="8" width="12" height="12" fill="#c4453a"/>' +
 '<rect x="100" y="8" width="12" height="12" fill="#8a8f98"/><rect x="120" y="8" width="12" height="12" fill="#17a55e"/>' +
 '<rect x="140" y="8" width="12" height="12" fill="#c4453a"/><rect x="160" y="8" width="12" height="12" fill="#17a55e"/></g>' +
 // 篩子
 '<rect x="34" y="30" width="132" height="10" fill="#8a6a44"/>' +
 (function () { var s = ''; for (var i = 0; i < 12; i++) s += '<rect x="' + (40 + i * 11) + '" y="30" width="5" height="10" fill="#e8e2d6"/>'; return s; })() +
 '<text x="176" y="39" font-size="9.5" font-weight="700" fill="#8a6a44">篩</text>' +
 // 通過的才進箱子
 '<rect x="52" y="52" width="96" height="30" fill="#a8763f"/>' +
 '<rect x="52" y="52" width="96" height="7" fill="#8a5f30"/>' +
 '<g fill="#17a55e"><rect x="62" y="64" width="12" height="12"/><rect x="82" y="64" width="12" height="12"/>' +
 '<rect x="102" y="64" width="12" height="12"/><rect x="122" y="64" width="12" height="12"/></g>' +
 '<text x="100" y="93" text-anchor="middle" font-size="10.5" font-weight="700" fill="#3d3128">先篩選，再分散——順序不能反</text>' +
 '</svg>',

/* 第 7 課：大家都在搶的時候最貴 */
'crowd':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#e8e2d6"/>' +
 '<g font-size="20">' +
 '<text x="14" y="46">🧍</text><text x="34" y="50">🧍</text><text x="54" y="44">🧍</text>' +
 '<text x="74" y="50">🧍</text><text x="94" y="46">🧍</text><text x="114" y="50">🧍</text>' +
 '</g>' +
 '<rect x="140" y="12" width="52" height="52" fill="#c4453a"/>' +
 '<text x="166" y="34" text-anchor="middle" font-size="10" fill="#fff">價格</text>' +
 '<text x="166" y="52" text-anchor="middle" font-size="17" font-weight="700" fill="#fff">↑↑</text>' +
 '<text x="100" y="82" text-anchor="middle" font-size="11.5" font-weight="700" fill="#8a3c34">大家都在排隊的時候，你付的是最高價</text>' +
 '</svg>',

/* 第 8 課：配得多 vs 會長大 */
'growth':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#e8e2d6"/>' +
 '<text x="10" y="16" font-size="10" font-weight="700" fill="#8a7a5a">每年配一樣多</text>' +
 '<g fill="#8a8f98">' +
 '<rect x="10" y="20" width="16" height="16"/><rect x="30" y="20" width="16" height="16"/>' +
 '<rect x="50" y="20" width="16" height="16"/><rect x="70" y="20" width="16" height="16"/></g>' +
 '<text x="10" y="58" font-size="10" font-weight="700" fill="#3f8130">每年會長大一點</text>' +
 '<g fill="#17a55e">' +
 '<rect x="10" y="76" width="16" height="10"/><rect x="30" y="70" width="16" height="16"/>' +
 '<rect x="50" y="62" width="16" height="24"/><rect x="70" y="52" width="16" height="34"/>' +
 '<rect x="90" y="40" width="16" height="46"/><rect x="110" y="26" width="16" height="60"/>' +
 '<rect x="130" y="10" width="16" height="76"/></g>' +
 '<text x="176" y="52" text-anchor="middle" font-size="10.5" font-weight="700" fill="#17a55e">時間<tspan x="176" dy="13">站在</tspan><tspan x="176" dy="13">你這邊</tspan></text>' +
 '</svg>',

/* 第 9 課：暴風雨裡先躲好 */
'shelter':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#4a5666"/>' +
 '<rect x="0" y="80" width="200" height="16" fill="#3f5240"/>' +
 // 外面：雨與雷
 (function () { var s = ''; for (var i = 0; i < 14; i++) s += '<rect x="' + (6 + i * 14) + '" y="' + (8 + (i % 4) * 9) + '" width="3" height="10" fill="#8fa8c4"/>'; return s; })() +
 '<g fill="#ffe45c"><rect x="30" y="18" width="7" height="14"/><rect x="24" y="32" width="7" height="12"/><rect x="30" y="44" width="7" height="12"/></g>' +
 // 房子（安全）
 '<rect x="104" y="34" width="76" height="46" fill="#a8763f"/>' +
 '<rect x="96" y="26" width="92" height="10" fill="#8a5f30"/>' +
 '<rect x="132" y="52" width="20" height="28" fill="#6d4a26"/>' +
 '<rect x="112" y="44" width="14" height="14" fill="#ffe45c"/>' +
 '<text x="60" y="76" text-anchor="middle" font-size="10.5" font-weight="700" fill="#e8b0aa">衝出去＝掛掉</text>' +
 '<text x="142" y="92" text-anchor="middle" font-size="10.5" font-weight="700" fill="#cfe0a8">待著＝天亮就沒事</text>' +
 '</svg>',

/* 第 10 課：跟著人群跑 */
'rush':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#e8e2d6"/>' +
 '<g font-size="19">' +
 '<text x="10" y="42">🏃</text><text x="34" y="46">🏃</text><text x="58" y="40">🏃</text>' +
 '<text x="82" y="46">🏃</text><text x="106" y="42">🏃</text></g>' +
 '<rect x="140" y="18" width="50" height="46" fill="#8a8f98"/>' +
 '<rect x="152" y="30" width="26" height="26" fill="#5f6570"/>' +
 '<text x="165" y="48" text-anchor="middle" font-size="12" font-weight="700" fill="#e8e2d6">空</text>' +
 '<text x="100" y="82" text-anchor="middle" font-size="11.5" font-weight="700" fill="#8a3c34">你跑到的時候，礦已經被挖光了</text>' +
 '</svg>',

/* 第 10 課：作弊指令 */
'cheat':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#2b2b2b"/>' +
 '<rect x="12" y="18" width="176" height="22" fill="#000"/>' +
 '<text x="20" y="34" font-size="12" fill="#8ef08e" font-family="monospace">/give @s diamond 64</text>' +
 '<g fill="#4fd0d8">' +
 '<rect x="20" y="52" width="14" height="14"/><rect x="40" y="52" width="14" height="14"/>' +
 '<rect x="60" y="52" width="14" height="14"/><rect x="80" y="52" width="14" height="14"/>' +
 '<rect x="100" y="52" width="14" height="14"/><rect x="120" y="52" width="14" height="14"/>' +
 '<rect x="140" y="52" width="14" height="14"/><rect x="160" y="52" width="14" height="14"/></g>' +
 '<text x="100" y="86" text-anchor="middle" font-size="11.5" font-weight="700" fill="#c4a4a0">拿到了，但你已經不想玩了</text>' +
 '</svg>',

/* 第 11 課：每個種子碼的地形都不一樣 */
'seed':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#e8e2d6"/>' +
 // 世界 A
 '<rect x="10" y="14" width="84" height="52" fill="#bfe4f7"/>' +
 '<polygon points="10,66 30,40 46,54 62,28 80,50 94,38 94,66" fill="#5f9c4c"/>' +
 '<text x="52" y="82" text-anchor="middle" font-size="10" font-weight="700" fill="#3d3128">你朋友的世界</text>' +
 // 世界 B
 '<rect x="106" y="14" width="84" height="52" fill="#bfe4f7"/>' +
 '<rect x="106" y="48" width="84" height="18" fill="#5f9c4c"/>' +
 '<rect x="128" y="30" width="20" height="18" fill="#8a8f98"/>' +
 '<rect x="160" y="38" width="14" height="10" fill="#8a8f98"/>' +
 '<text x="148" y="82" text-anchor="middle" font-size="10" font-weight="700" fill="#3d3128">你的世界</text>' +
 '<text x="100" y="94" text-anchor="middle" font-size="11" font-weight="700" fill="#c4453a">抄他的座標，你只會挖到石頭</text>' +
 '</svg>',

/* 第 12 課：自己蓋的才守得住 */
'build':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#bfe4f7"/>' +
 '<rect x="0" y="76" width="200" height="20" fill="#5f9c4c"/>' +
 '<rect x="52" y="34" width="96" height="42" fill="#c9a15a"/>' +
 '<rect x="44" y="24" width="112" height="12" fill="#8a5f30"/>' +
 '<rect x="88" y="52" width="24" height="24" fill="#8a6a44"/>' +
 '<rect x="62" y="44" width="16" height="16" fill="#a8e0ff"/>' +
 '<rect x="122" y="44" width="16" height="16" fill="#a8e0ff"/>' +
 '<g><rect x="20" y="48" width="16" height="18" fill="#4f7fc4"/><rect x="22" y="34" width="12" height="12" fill="#c9a882"/>' +
 '<rect x="20" y="66" width="16" height="10" fill="#3a63a0"/></g>' +
 '<text x="100" y="93" text-anchor="middle" font-size="11" font-weight="700" fill="#2f4a5c">沒有人比你更在乎你自己蓋的東西</text>' +
 '</svg>',

/* 第 12 課：兩條路 */
'two-paths':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#e8e2d6"/>' +
 '<rect x="92" y="70" width="16" height="26" fill="#8a6a44"/>' +
 '<polygon points="100,70 20,26 20,40 100,84" fill="#4a7c3f"/>' +
 '<polygon points="100,70 180,26 180,40 100,84" fill="#4f7fc4"/>' +
 '<rect x="6" y="8" width="76" height="26" fill="#4a7c3f"/>' +
 '<text x="44" y="19" text-anchor="middle" font-size="9.5" fill="#fff">這一站</text>' +
 '<text x="44" y="30" text-anchor="middle" font-size="10.5" font-weight="700" fill="#fff">自己挑幾家</text>' +
 '<rect x="118" y="8" width="76" height="26" fill="#4f7fc4"/>' +
 '<text x="156" y="19" text-anchor="middle" font-size="9.5" fill="#fff">另一站</text>' +
 '<text x="156" y="30" text-anchor="middle" font-size="10.5" font-weight="700" fill="#fff">全部都買一點</text>' +
 '</svg>',

/* 第 12 課：從今天開始的三件事 */
'checklist-final':
 '<svg viewBox="0 0 200 96">' +
 '<rect width="200" height="96" fill="#4a7c3f"/>' +
 (function () {
   var t = ['把零用錢分成兩堆', '挑一家你每天用的公司', '記下來，五年後再看'];
   var s = '';
   for (var i = 0; i < 3; i++) {
     var y = 10 + i * 27;
     s += '<rect x="10" y="' + y + '" width="180" height="22" fill="#fffdf7"/>' +
          '<rect x="10" y="' + y + '" width="22" height="22" fill="#e0a92c"/>' +
          '<text x="21" y="' + (y + 16) + '" text-anchor="middle" font-size="12" font-weight="700" fill="#3a2c05">' + (i + 1) + '</text>' +
          '<text x="40" y="' + (y + 16) + '" font-size="11.5" fill="#3d3128">' + t[i] + '</text>';
   }
   return s;
 })() +
 '<text x="100" y="92" text-anchor="middle" font-size="11" font-weight="700" fill="#dfeed6">你最大的優勢是年輕——複利需要的就是時間</text>' +
 '</svg>'

};
