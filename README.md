# stitch_instant_website_generator

這個資料夾已可直接作為一個靜態網站使用。

## 檔案結構

- `index.html`：網站主入口（建議使用這個檔案）
- `code.html`：原始頁面檔（已修正可正常渲染）
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

## 注意事項

- 這是純前端靜態網站，不需要安裝 npm 套件。
- 目前使用 Tailwind CDN，需有網路才能正常載入樣式與字體。
