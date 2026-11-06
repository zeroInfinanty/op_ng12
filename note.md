ai:

當您將程式碼寫入 op_ng12 後，我可以直接掃描並分析整個工作區的所有檔案，為您撰寫完整的開發技術文件，內容可以涵蓋：

系統總體架構圖與模組關聯（使用 Mermaid 繪製 Module 依賴圖、Component 階層圖、Routing 路由表）
核心流程與資料流（例如 Token 驗證流程、EIP 登入檢查、客戶視圖資料載入、Signal Light 燈號邏輯、Timeout 機制等序列圖）
API 規格與資料模型對照表（整理 src/app/models/ 下的 Request / Response 結構、對應的 src/mock/ 測試資料與 http.service.ts 呼叫端點）
共用元件與服務手冊（整理 shared/、dialog/second-model/、pipe/、services/ 的用途、Input/Output 參數與使用方式）

-----

2026/11/5 Start
第三階段：
env.service.ts
shared/
    - components (X)
    - enums (v)
    - models (WIP)
        - adminPage (v)
        - common (v)
        - second (WIP)
        - token (V)
    - module (?)
    - pipe (v)
    - rules (v)