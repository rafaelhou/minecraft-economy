# 麥塊生存經濟學

用 Minecraft 的自動農場、村民交易和礦坑，把巴菲特挑公司的方法講給小學生聽。

- **12 堂課**，每一堂都有兩種寫法：低年級（7–9 歲，只用具體數量，不出現百分比）和中高年級（10–12 歲，用百分比，並把麥塊比喻接回真實世界的名詞）。工具列一鍵切換，同一頁就換講法。
- **每課一題測驗**，答對拿獎章。
- **3 個小遊戲**：農場規劃師、分散挖礦、綠寶石殺價。三個都是「玩錯會有感覺」的設計，不是點一點就過關。
- **15 枚獎章**（12 課 + 3 遊戲），進度存在瀏覽器 localStorage，換裝置要重來。
- **全站注音**可開關，字級三段可調。

架構參考 [小小巴菲特](https://buffett-kids.pages.dev/)。

## 兩站的關係

這站講的是**巴菲特那一派**：自己挑會賺錢的東西。
另一派「不挑，全部都買一點」在 [錢會自己長大嗎？](https://kids-investing.pages.dev/)。
第 12 課會把兩派放在一起講，並說明巴菲特本人也推薦大多數人買指數。

## 檔案

| 檔案 | 作用 |
| --- | --- |
| `data/lessons.js` | 第 1–6 課 |
| `data/lessons2.js` | 第 7–12 課（接在 `window.LESSONS` 後面） |
| `art.js` | 27 張插圖，全部用直角方塊畫，不用曲線 |
| `games.js` | 3 個小遊戲 |
| `app.js` | 課程卡、閱讀器、測驗、獎章、難度與字級 |
| `zhuyin.js` / `zhuyin-extra.js` / `zhuyin-mc.js` | 注音字庫（三層，後者補前者蓋不到的字） |
| `zhuyin-run.js` | 注音標注與開關 |
| `counter.js` | Supabase 瀏覽計數 |

### 加內容時要注意

1. **注音字庫要同步補。** 半標半不標比完全不標更難讀。改完內容跑一次覆蓋率檢查，把缺的字補進 `zhuyin-mc.js`。
2. **插圖裡的中文不會被標注音**——`zhuyin-run.js` 會略過 SVG。SVG 元素的 `tagName` 是小寫，略過清單比對前要 `toUpperCase()`，漏掉這步插圖裡的字會整個消失。
3. **面板／閱讀器用 `hidden` 控制顯示時，CSS 要寫 `[hidden] { display: none }`**。作者樣式的 `display: flex` 會蓋掉瀏覽器預設那條規則。
4. `--grass` 和 `--gold` 是色塊的顏色，壓在淺色底上當文字對比只有 2.1～2.7。內文重點字要用 `--grass-ink` / `--gold-ink`。

## 計數器

要讓 `counter.js` 有數字，得先在 Supabase 建一列：

```sql
insert into public.counters (id, count) values ('mc-econ', 0)
on conflict (id) do nothing;
```

沒建也不會壞——連不上就整塊藏起來。

## 授權與聲明

Minecraft 是 Mojang 的商標，本站與 Mojang、Microsoft 無關，只是拿它當比喻。
內容為家長自製的教材，不是投資建議。
