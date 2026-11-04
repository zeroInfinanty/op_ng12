# op_ng12 專案建置紀錄

本文件逐步紀錄 `op_ng12`（復刻自 `opproject`）的環境配置與建置重點。

---

## 1. 開發環境與版本規範

由於 Angular v12 與較新版本的 Node.js（Node 17+ 的 OpenSSL 3）不相容，本專案固定使用 **Node.js `v16.20.2` (LTS / gallium)**：

- **Node.js**: `v16.20.2`（支援 Apple Silicon `darwin-arm64` 原生架構）
- **npm**: `v8.19.4`
- **Angular CLI / Core**: `12.2.13`
- **TypeScript**: `~4.3.5`
- **樣式與路由**: 啟用 `SCSS` 與 `Angular Routing`

### 快速切換環境
專案根目錄已配置 `.nvmrc`，每次開啟新終端機進入專案目錄時，請先執行：

```bash
# 自動讀取 .nvmrc 並切換至 Node v16.20.2
nvm use
```

---

## 2. 專案設定檔說明

- **`.nvmrc`**：指定 `16.20.2`，供 `nvm use` 快速切換 Node 版本。
- **`.npmrc`**：設定 `legacy-peer-deps=true`。因部分舊版第三方套件（如 `ng2-flatpickr`、`ngx-perfect-scrollbar`）宣告的 Peer Dependencies 為較舊的 Angular 版本，開啟此設定可避免 npm v8 在安裝時發生 `ERESOLVE` 衝突。
- **`package.json`**：將 `@angular/*` 核心套件與 `@angular/cli`、`@angular-devkit/build-angular` 鎖定為 `12.2.13`。

---

## 3. 已安裝之復刻套件清單

### Dependencies
| 類別 | 套件名稱與版本 |
| :--- | :--- |
| **Angular 核心與 UI** | `@angular/animations@12.2.13`, `@angular/cdk@12.2.13`, `@angular/common@12.2.13`, `@angular/compiler@12.2.13`, `@angular/core@12.2.13`, `@angular/forms@12.2.13`, `@angular/material@12.2.13`, `@angular/platform-browser@12.2.13`, `@angular/platform-browser-dynamic@12.2.13`, `@angular/router@12.2.13` |
| **UI 元件與樣式** | `bootstrap@5.1.3`, `jquery@3.6.0`, `popper.js@1.16.1`, `sweetalert2@11.3.6`, `ngx-toastr@13.2.1`, `ngx-perfect-scrollbar@10.1.1` |
| **圖表與日期選擇器** | `apexcharts@3.25.0`, `ng-apexcharts@1.5.8`, `flatpickr@4.6.9`, `ng2-flatpickr@9.0.0` |
| **資料轉換與 Polyfills** | `class-transformer@0.5.1`, `reflect-metadata@0.1.13`, `core-js@3.20.3`, `classlist.js@1.1.20150312`, `es7-object-polyfill@1.0.1`, `polyfill-array-includes@2.0.0`, `rxjs@~6.6.0`, `tslib@^2.3.0`, `zone.js@~0.11.4` |
| **伺服器與打包工具** | `express@4.17.2`, `nodemon@2.0.15`, `webpack@5.67.0`, `webpack-dev-server@4.7.3` |

### DevDependencies
- `@angular-devkit/build-angular@12.2.13`, `@angular/cli@12.2.13`, `@angular/compiler-cli@12.2.13`
- `@types/lodash@4.14.178`, `@types/jasmine@~3.8.0`, `@types/node@^12.11.1`
- `codelyzer@6.0.2`, `typescript@~4.3.5`
- `jasmine-core@~3.8.0`, `karma@~6.3.0` 及相關測試套件

---

## 4. 專案目錄架構建立 (`src/`)

依據 [`structure.txt`](structure.txt) 建立 `src/` 下的完整目錄與空白檔案結構（暫不包含 `src/assets` 靜態資源）：

- **`src/app/`**：
  - 頁面與版型模組：`admin-setting`、`blank-page`、`content-layout`、`dashboard`、`dashboard-un-auth`、`header`、`timeout`、`main.*`
  - 彈窗模組 (`dialog/`)：`dialog-wrapper`、`dialog-config`、`dialog-registry` 及 `second-model/` 下各業務區塊元件與服務
  - 共用模組 (`shared/`)：`components/`（`admin-form`、`block`、`common`、`email-tpl`、`shared-icon`）與 `shared-twinkling/`
  - 資料模型與枚舉：`models/`（`adminPage`、`common`、`second`、`token` 及各 API Request/Response 模型）、`enums/`
  - 共用服務、管道與驗證：`services/`（含 `itemService/`）、`pipe/`、`directives/`、`validation/`、`module/shared-material.module.ts`、`dummy/`
- **`src/mock/`**：各 API 對應之本地端 Mock JSON 結構
- **`src/` 根目錄環境檔**：`env.js`、`env.service.ts`、`env.service.provider.ts`、`typings.d.ts` 等

---

## 5. 常用指令

```bash
# 1. 切換 Node 版本
nvm use

# 2. 安裝相依套件
npm install

# 3. 啟動開發伺服器 (http://localhost:4200/)
npm start

# 4. 建置專案 (輸出至 dist/)
npm run build
```
