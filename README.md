# stitch_instant_website_generator

這個資料夾已可直接作為一個靜態網站使用。

## 檔案結構

- `index.html`：網站主入口
- `assets/tailwind.min.css`：由建置產生的 Tailwind CSS（部署前請執行 `npm run build`）
- `assets/img/*.webp`：由建置產生的圖片（同上）
- `tailwind.config.js`、`src/input.css`：Tailwind 設定與來源樣式
- `scripts/build-images.mjs`：下載來源圖並輸出 WebP
- `robots.txt`、`_headers`：SEO／快取標頭（Cloudflare Pages）
- `DESIGN.md`：設計系統規格文件
- `fixbug.md`：修復紀錄

## 如何開啟網站

### 方法 1：直接雙擊
直接在 Finder 雙擊 `index.html`，就可以在瀏覽器看到網站。

### 方法 2：本機伺服器（建議）
在此資料夾執行：

```bash
python3 -m http.server 8080
```

然後打開：

- [http://localhost:8080](http://localhost:8080)

## 表單真實提交（Email）

網站目前改用 `FormSubmit` 直接將表單內容寄到：

- `ycf.calvin@gmail.com`

### 注意

- 第一次提交後，FormSubmit 會寄一封「啟用確認信」到你的 Gmail。
- 你需要先在信箱內按一次啟用連結，之後表單提交才會正式轉寄到你。
- 現時表單欄位包括：
  - Full Name
  - Stable Name
  - Email Address
  - WhatsApp Number (Optional)
  - Number of Horses

## 建置（Tailwind + WebP 圖片）

首次或更新樣式／圖片後，在專案根目錄執行：

```bash
npm install
npm run build
```

- `npm run build:css`：從 `src/input.css` 產出 `assets/tailwind.min.css`（已 minify，取代 CDN）。
- `npm run build:images`：自 Google 來源圖下載並輸出 `assets/img/*.webp`（需可連外網）。
- `npm run build`：以上兩者皆執行。

部署到 Cloudflare Pages 前請確認已提交最新的 `assets/tailwind.min.css` 與 `assets/img/`，或在 CI 加入 `npm ci && npm run build`。

## 注意事項

- 這是純前端靜態網站；樣式已改為**預先建置的 CSS**，不再使用 Tailwind CDN。
- Google Fonts 仍須連網載入（已合併為單一請求並使用 `display=swap`）。
