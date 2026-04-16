# Fix Bug 紀錄

## 2026-04-16 13:52:37

### 問題 1：`code.html` 尾端有 Markdown 語法殘留
- **問題描述**：檔案最後一行是 ```` ```</body></html> ````，會造成 HTML 結構異常。
- **嘗試方法**：移除多餘的三個反引號，只保留 `</body></html>`。
- **結果**：**成功修改**

### 問題 2：資料夾缺少網站入口檔
- **問題描述**：只有 `code.html`，缺少常見入口 `index.html`，不利部署與預覽。
- **嘗試方法**：以修正後的 `code.html` 建立 `index.html`。
- **結果**：**成功修改**

### 問題 3：缺少使用說明
- **問題描述**：沒有 `README.md`，使用者不易快速啟動網站。
- **嘗試方法**：新增 `README.md`，提供開啟方式與本機預覽指令。
- **結果**：**成功修改**

## 2026-04-16

### 問題 4：表單提交後顯示 `Submission failed. Please try again later.`
- **問題描述**：Cloudflare Pages Function 使用 MailChannels 寄信時回傳 `401 Authorization Required`，導致表單提交失敗。
- **嘗試方法**：先加入 `WhatsApp Number (Optional)` 欄位，然後改用 `FormSubmit` AJAX endpoint 直接把表單轉寄到 `ycf.calvin@gmail.com`。
- **結果**：**成功修改**

### 問題 5：缺少 WhatsApp 欄位
- **問題描述**：表單未包含 WhatsApp 聯絡方式。
- **嘗試方法**：新增英文欄位 `WhatsApp Number (Optional)`，設為選填。
- **結果**：**成功修改**

## 2026-04-16（Lighthouse／效能與 SEO）

### 問題 6：LCP 慢、Tailwind CDN render-blocking、字體重複請求、表單無 label 關聯、缺 meta description／robots.txt
- **問題描述**：Hero 等圖片為遠端大圖；Tailwind 以 CDN runtime 載入；Material Symbols 字體連結重複；表單控件未以 `for`／`id` 綁定；SEO 缺少 description；Lighthouse 對 `robots.txt` 報錯。
- **嘗試方法**：新增 `npm run build`（Tailwind 靜態 CSS + sharp 產生 WebP）；`index.html` 改用 `<picture>`、`srcset`、`width`/`height`、`fetchpriority`／`loading`；合併 Google Fonts 為單一連結並 `display=swap`；表單補 `label for` 與 `id`；`<select>` 選項補 `value`；新增 `robots.txt`、meta／OG／Twitter、canonical；`_headers` 為 `/assets/*` 長快取。
- **結果**：**成功修改**（若 `build:images` 因來源 URL 403 失敗，需檢查網路或以本機圖替換 URL 後重跑）
