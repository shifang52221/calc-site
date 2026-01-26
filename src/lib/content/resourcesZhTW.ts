import type { ResourceArticle } from "@/lib/content/resourcesEn";

// NOTE: Only the 30 articles currently included in the live sitemap are localized here.
export const RESOURCE_ARTICLES_ZH_TW: ResourceArticle[] = [
  {
    slug: "asphalt-driveway-tons-guide",
    title: "瀝青車道噸數指南（厚度與車次）",
    description:
      "實用估算筆記：為什麼厚度決定噸數，以及「加鋪」與「重做」在材料與壽命上的差異。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "厚度決定噸數",
        paragraphs: [
          "瀝青多半以重量（噸）採購。面積與「壓實後厚度」決定用量；同一條車道 2\" 與 3\" 的差距可能很大。",
        ],
      },
      {
        heading: "常見壓實厚度（規劃用）",
        table: {
          columns: ["工程類型", "常見壓實厚度", "提醒"],
          rows: [
            ["加鋪/覆蓋（基層良好）", "1.5–2 in", "基層問題仍會反映到面層"],
            ["一般住宅車道", "2–3 in", "氣候與車流可能需要更厚"],
            ["重車/地基較弱", "3–4+ in", "通常也需要更強的基層"],
          ],
        },
      },
      {
        heading: "加鋪 vs 重做",
        bullets: [
          "加鋪可以較薄，但無法修復鬆軟或積水的基層。",
          "重做常需要另外估算碎石基層；基層費用有時比瀝青本身更關鍵。",
          "排水與整坡通常比微調 0.5\" 厚度更影響耐用度。",
        ],
      },
      {
        heading: "噸數快速驗算（概算）",
        paragraphs: [
          "先算體積：立方英尺 = 面積（平方英尺）× 厚度（英吋/12）。再用合理密度換算成噸數（密度會因配方、含水率與壓實而變）。",
          "例：600 ft²、3\" → 600 × (3/12) = 150 ft³。若以 ~145 lb/ft³ 當參考：150 × 145 = 21,750 lb ≈ 10.9 噸（再加備用量並以供應商換算確認）。",
        ],
      },
      {
        heading: "採購檢查清單",
        bullets: [
          "確認目標是壓實後厚度（不是「大概幾吋」）。",
          "確認計價單位（短噸/公噸）、配方與最小訂量。",
          "規劃卡車卸料點、攤鋪與碾壓節奏，避免材料冷卻影響壓實。",
          "為邊緣、銜接與手工區域預留備用量。",
        ],
      },
    ],
    related: [
      {
        label: "瀝青車道計算器",
        href: "/calculators/home-improvement/asphalt-driveway",
      },
      { label: "碎石計算器（基層）", href: "/calculators/home-improvement/gravel" },
      { label: "方法論", href: "/methodology" },
    ],
  },
  {
    slug: "baseboard-trim-waste-tips",
    title: "踢腳線與飾條耗損技巧（切角、轉角與料長）",
    description:
      "轉角與 45° 切角如何放大耗損、為什麼單支料長很重要，以及如何用簡單方法規劃採購。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "為什麼料長很重要",
        paragraphs: [
          "踢腳線/飾條通常以固定長度販售。即使總線性長度算對了，如果沒有規劃「每一支料」如何分配到門洞與轉角，你仍可能缺料或接縫太多。",
        ],
      },
      {
        heading: "線性長度換算支數（簡單做法）",
        paragraphs: [
          "支數 ≈（總線性長度 ÷ 單支料長）×（1 + 耗損）。再向上取整到整支。轉角多、短牆多時耗損更高。",
          "例：需要 180 ft、單支 16 ft → 180/16 = 11.25 → 12 支。若切角多，可抓 10–15%：12 × 1.15 = 13.8 → 14 支。",
        ],
        bullets: [
          "先確認該造型實際供貨長度（8/12/16 ft）。",
          "數內角/外角與短牆段，這些會產生不可用的短料。",
          "若要同色同批次（染色或木紋對齊），更應一次買齊並留備用。",
        ],
      },
      {
        heading: "常見耗損來源",
        bullets: [
          "內外角切角後的餘料（多數無法重用）。",
          "短牆段與門洞周邊導致碎料增加。",
          "牆角不方正，需要反覆試切與修整。",
        ],
      },
      {
        heading: "耗損區間（起始參考）",
        table: {
          columns: ["空間複雜度", "常見耗損", "原因"],
          rows: [
            ["長直牆、轉角少", "5–10%", "餘料較容易重用"],
            ["一般房間", "10–15%", "轉角與門洞增加短料"],
            ["格局破碎/轉折多", "15–25%", "短牆、衣櫃、轉角密集"],
          ],
        },
      },
      {
        heading: "採購檢查清單",
        bullets: [
          "確認造型與料長供貨，避免臨時找不到同款。",
          "規劃門框、壁爐、樓梯等轉折處的收邊與接縫位置。",
          "為瑕疵、端頭損傷與日後修補多買少量備料。",
        ],
      },
    ],
    related: [
      { label: "踢腳線與飾條計算器", href: "/calculators/home-improvement/baseboard-trim" },
      { label: "地板計算器（常一起規劃）", href: "/calculators/home-improvement/flooring" },
    ],
  },
  {
    slug: "board-feet-explained",
    title: "板英尺（Board Feet）怎麼算（公式與例子）",
    description: "用最簡單的方式理解板英尺：公式、名義尺寸與常見錯誤。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "板英尺公式",
        paragraphs: [
          "板英尺是體積單位：板英尺 =（厚度英吋 × 寬度英吋 × 長度英尺）÷ 12。",
        ],
      },
      {
        heading: "快速例子",
        paragraphs: [
          "一塊 2×6、長 8 ft： (2 × 6 × 8) / 12 = 8 板英尺（以名義尺寸計）。若是刨光後材料，實際尺寸通常更小。",
        ],
      },
      {
        heading: "名義尺寸 vs 實際尺寸",
        paragraphs: [
          "軟木結構材常用名義尺寸（2×4、2×6），但刨光後實際厚度/寬度會變小。若你用板英尺比較價格，務必確認使用的是名義還是實際尺寸。",
        ],
        table: {
          columns: ["名義尺寸", "常見實際尺寸（約）", "備註"],
          rows: [
            ["2×4", "1.5×3.5 in", "常見結構材"],
            ["2×6", "1.5×5.5 in", "結構材/露台（視地區）"],
            ["4×4", "3.5×3.5 in", "立柱可能有粗鋸/刨光差異"],
          ],
        },
      },
      {
        heading: "常見錯誤",
        bullets: [
          "把名義尺寸與實際尺寸混用，導致估算偏差。",
          "英吋/英尺單位混用，或忘了 ÷12。",
          "不留缺陷與挑選耗損（結疤、彎曲、顏色/紋理匹配）。",
        ],
      },
      {
        heading: "簡單估算流程",
        bullets: [
          "列出零件清單（厚 × 寬 × 長）與數量。",
          "逐項換算板英尺後加總。",
          "依用途加入耗損：家具/可見面通常比粗裝結構更保守。",
        ],
      },
    ],
    related: [
      { label: "板英尺計算器", href: "/calculators/home-improvement/board-feet" },
      { label: "露台計算器", href: "/calculators/home-improvement/deck" },
    ],
  },
  {
    slug: "concrete-bag-yield-guide",
    title: "袋裝混凝土產出指南（袋數怎麼估）",
    description:
      "如何估算混凝土袋數：為什麼要看每袋產出（yield）、常見袋重，以及何時該考慮叫小車 ready‑mix。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "關鍵是每袋產出（Yield）",
        paragraphs: [
          "袋裝混凝土按重量賣，但你需要的是體積。每袋產出（立方英尺/袋）會因品牌與配方不同而差很多，因此比通用表更可靠。",
        ],
      },
      {
        heading: "每 100 ft² 的體積（常見厚度）",
        table: {
          columns: ["厚度", "每 100 ft² 體積", "備註"],
          rows: [
            ["3\" (0.25 ft)", "0.93 yd³", "較薄，先確認用途與規範"],
            ["4\" (0.33 ft)", "1.23 yd³", "常見於墊塊/車道"],
            ["5\" (0.42 ft)", "1.54 yd³", "較重荷重"],
            ["6\" (0.50 ft)", "1.85 yd³", "常見於更耐用用途"],
          ],
        },
      },
      {
        heading: "快速參考（仍以包裝標示為準）",
        bullets: [
          "80 lb 袋常見約 ~0.60 ft³（依產品而異）。",
          "60 lb 袋常見約 ~0.45 ft³（依產品而異）。",
          "50 lb 袋常見約 ~0.375 ft³（依產品而異）。",
        ],
      },
      {
        heading: "別忘了加厚邊（最常低估）",
        paragraphs: [
          "很多板面包含加厚邊或基腳。忽略它們，即使板面體積算對也可能不夠。把加厚邊當成獨立體積項目估算更可靠。",
        ],
        bullets: [
          "板面體積 = 面積 × 板厚。",
          "加厚邊體積 = 邊長 × 加厚寬 ×（加厚深度 − 板厚）。",
          "多個加厚區分別計算後加總。",
        ],
      },
      {
        heading: "袋數怎麼算（步驟）",
        paragraphs: [
          "1）先算總體積（立方英尺）。2）用總體積 ÷ 每袋產出。3）向上取整並加備用量。",
          "例：需要 40 ft³、每袋 0.60 ft³ → 40/0.60 = 66.7 → 67 袋（再加備用量）。",
        ],
      },
    ],
    related: [
      { label: "混凝土袋數計算器", href: "/calculators/home-improvement/concrete-bags" },
      { label: "混凝土體積計算器", href: "/calculators/home-improvement/concrete" },
    ],
  },
  {
    slug: "concrete-cure-vs-dry-time",
    title: "混凝土「養護」vs「乾燥」時間（施工排程清單）",
    description: "養護不是乾燥：強度、含水率與後續施工時間點的實用整理。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "養護 vs 乾燥",
        paragraphs: [
          "養護是強度增長的化學反應過程；乾燥是水分離開板面的過程。表面摸起來乾，不代表強度已到位；對某些地坪/塗層來說，含水率更是關鍵。",
        ],
      },
      {
        heading: "常見養護里程碑（概略）",
        table: {
          columns: ["澆置後時間（常見）", "通常狀態", "提醒"],
          rows: [
            ["24–48 小時", "可輕度行走（視工程）", "保護邊緣，避免拖拉工具"],
            ["3–7 天", "早期強度提升", "重物/集中荷重仍可能損傷"],
            ["28 天", "常見「設計強度」參考點", "之後仍會持續增強"],
          ],
        },
      },
      {
        heading: "乾燥對地板/塗層更敏感（不要用手摸猜）",
        paragraphs: [
          "環氧、封閉劑、黏著劑與部分地板系統對含水率很敏感，通常需要按產品要求做測試，而不是靠觸感判斷。",
        ],
        bullets: [
          "厚板、低溫/高濕會讓乾燥更慢。",
          "養護劑、封閉劑與防潮層會改變乾燥行為。",
          "需要測試的工程請提早安排，避免卡住排程。",
        ],
      },
      {
        heading: "常見錯誤",
        bullets: [
          "過早移除保護，讓日曬/風乾太快增加裂縫風險。",
          "收面時加水「好收光」，但會削弱表面品質。",
          "含水率未達標就上塗層/鋪地板，導致起泡或脫黏。",
        ],
      },
    ],
    related: [
      { label: "混凝土計算器", href: "/calculators/home-improvement/concrete" },
      { label: "混凝土指南", href: "/guides/home-improvement/concrete" },
    ],
  },
  {
    slug: "concrete-psi-and-mix-choice",
    title: "混凝土 PSI 與配方選擇（訂料備忘）",
    description:
      "ready‑mix 下單前的實用清單：強度（PSI/MPa）、坍度、纖維與外加劑如何影響成本、施工性與耐久。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "供應商通常會問什麼",
        bullets: [
          "目標強度（PSI/MPa）與骨材尺寸。",
          "坍度（施工性）以及是否要加纖維。",
          "外加劑（促凝/緩凝）與是否需要抗凍等配置（視氣候）。",
        ],
      },
      {
        heading: "強度（PSI/MPa）：先釐清需求",
        paragraphs: [
          "強度不只是數字：它會影響價格、收面時間窗，有時也關係到配方中的水泥量下限。聽到某個 PSI 目標時，最好先確認它是法規要求、承包商習慣，還是特定用途必須。",
          "不確定時可以讓供應商建議常見配方，但涉及結構性工程（基腳、柱墩等）仍應以當地規範/設計為準。",
        ],
        bullets: [
          "先確認是否屬結構性（板、基腳、柱墩等）。",
          "若有凍融環境，詢問是否建議引氣（air‑entrained）。",
          "鋼筋間距很密或模板很小時，確認最大骨材尺寸。",
        ],
      },
      {
        heading: "坍度（Slump）：別靠現場加水解決",
        paragraphs: [
          "坍度描述混凝土的工作性。現場加水雖然好施工，但通常會降低強度並提高收縮裂縫風險。若需要更好流動性，應在出車前就討論外加劑與配方。",
        ],
      },
      {
        heading: "纖維、鋼筋與裂縫控制",
        paragraphs: [
          "纖維可幫助塑性收縮裂縫，但不等於自動取代鋼筋/網。裂縫控制更依賴：板厚、基底、伸縮縫布局、養護與鋼筋策略。",
        ],
        bullets: [
          "澆置前先規劃伸縮縫位置與間距（布局很關鍵）。",
          "炎熱/大風/乾燥時，養護方式與時間點更重要。",
          "鋼筋需求與做法會因地區與用途不同（視規範/承包商）。",
        ],
      },
      {
        heading: "常見強度範圍（僅供討論）",
        table: {
          columns: ["用途（常見）", "常見範圍", "備註"],
          rows: [
            ["露台與步道", "3000–3500 PSI", "板厚、基底與養護仍決定耐用度"],
            ["車道", "3500–4500 PSI", "凍融區常需引氣"],
            ["基腳/柱墩", "3000–4000 PSI", "鋼筋與骨材尺寸可能更重要"],
          ],
        },
      },
    ],
    related: [
      { label: "混凝土計算器", href: "/calculators/home-improvement/concrete" },
      { label: "混凝土指南", href: "/guides/home-improvement/concrete" },
    ],
  },
  {
    slug: "deck-mud-coverage-chart",
    title: "乾鋪砂漿（Deck Mud）覆蓋量表（Dry Pack）",
    description:
      "快速覆蓋表、配比與施工要點：用面積與平均厚度估算 dry pack mortar 用量。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "快速覆蓋表",
        paragraphs: [
          "Deck mud（dry pack）通常以體積估算：面積 × 平均厚度。下表是常見厚度的快速參考。",
        ],
        table: {
          columns: ["覆蓋面積", "厚度 1\"", "厚度 1.5\"", "厚度 2\""],
          rows: [
            ["50 ft²", "4.17 ft³", "6.25 ft³", "8.33 ft³"],
            ["100 ft²", "8.33 ft³", "12.5 ft³", "16.67 ft³"],
            ["150 ft²", "12.5 ft³", "18.75 ft³", "25 ft³"],
          ],
        },
      },
      {
        heading: "心算規則（快速估）",
        paragraphs: [
          "常用心算：100 ft²、厚 1\" ≈ 8.33 ft³。再按面積比例與厚度倍數縮放。例：80 ft²、厚 1.5\" → 8.33 × 0.8 × 1.5 ≈ 10 ft³。",
        ],
      },
      {
        heading: "配比與施工手感（重點）",
        paragraphs: [
          "dry pack 的水量偏低，目標是能夯實、可刮平/做坡度的穩定砂漿床。常見起點是 5:1（砂：水泥，體積比），但關鍵工程請依防水系統/產品指引。",
        ],
        bullets: [
          "體積比用同一容器量，水量每批一致。",
          "握拳測試：能成團但不滲水。",
          "有坡度時用平均厚度估算體積，避免低估。",
        ],
      },
    ],
    related: [
      { label: "Deck mud 計算器", href: "/calculators/home-improvement/deck-mud" },
      { label: "批土與紙帶計算器", href: "/calculators/home-improvement/drywall-mud-tape" },
    ],
  },
  {
    slug: "deck-planning-materials-and-layout-guide",
    title: "露台（Deck）規劃指南（方向、縫隙、樓梯與材料清單）",
    description:
      "實用規劃重點：鋪板方向與縫隙、斜鋪耗損、樓梯/平台，以及最常被漏掉的結構與五金項目。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "鋪板方向與邊框會改變耗損",
        paragraphs: [
          "簡單矩形直鋪通常耗損較低；斜鋪、picture‑frame 邊框、樓梯與平台會增加角切與短料，耗損往往更高。",
        ],
      },
      {
        heading: "縫隙與實際板寬決定覆蓋率",
        paragraphs: [
          "計算覆蓋率要用實際板寬（不是名義尺寸）與你預留的縫隙。木材與塑木/複合材的伸縮與縫隙規則不同，請以產品指引為準。",
        ],
      },
      {
        heading: "斜鋪與邊框的耗損參考",
        table: {
          columns: ["布局", "常見耗損", "備註"],
          rows: [
            ["直鋪", "5–10%", "角切較少"],
            ["斜鋪", "10–15%", "短料與角切增加"],
            ["邊框 + 斜鋪", "12–20%", "切角與對接耗損累積"],
          ],
        },
      },
      {
        heading: "別只算鋪板：結構與五金清單",
        bullets: [
          "樑條/梁/立柱配置取決於跨度、柱距與規範。",
          "五金：吊件、釘/螺絲、柱腳、錨栓與連接件。",
          "貼牆式（ledger）或自立式會影響防水板金與固定件。",
          "欄杆與樓梯通常需要額外 blocking 與連接五金。",
        ],
      },
    ],
    related: [
      { label: "露台計算器", href: "/calculators/home-improvement/deck" },
      { label: "露台指南", href: "/guides/home-improvement/deck" },
    ],
  },
  {
    slug: "drywall-materials-and-finishing-guide",
    title: "石膏板材料與收面指南（板材、接縫、批土與紙帶）",
    description:
      "實用規劃：怎麼選板材尺寸與種類、了解收面等級，以及如何更貼近現場地估算接縫、紙帶與批土。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "板材尺寸：少接縫 vs 搬運施工",
        paragraphs: [
          "板越大接縫越少，後續收面通常更省工，但搬運與天花施工的安全性也更重要。請選擇你能安全運輸與安裝的尺寸。",
        ],
        table: {
          columns: ["尺寸", "覆蓋面積", "取捨"],
          rows: [
            ["4×8", "32 ft²", "較好搬運，但接縫較多"],
            ["4×10", "40 ft²", "接縫較少，需要更多空間"],
            ["4×12", "48 ft²", "接縫最少，但更重更難搬"],
          ],
        },
      },
      {
        heading: "收面等級會改變材料用量",
        paragraphs: [
          "等級越高通常代表更多道批土、更大範圍的羽化與更多打磨。若目標是平滑上漆（Level 4/5），材料與工時通常比基本空間高很多。",
        ],
      },
      {
        heading: "快速提醒（常被低估的地方）",
        bullets: [
          "防潮板不是防水系統；淋浴間仍需完整防水做法。",
          "24\" 柱距的天花常需要更抗下垂的板材（常見 5/8\"，仍以規範/產品為準）。",
          "端縫（butt joints）通常更耗批土，排版規劃能省很多返工。",
        ],
      },
    ],
    related: [
      { label: "石膏板計算器", href: "/calculators/home-improvement/drywall" },
      { label: "批土與紙帶計算器", href: "/calculators/home-improvement/drywall-mud-tape" },
    ],
  },
  {
    slug: "fence-post-hole-concrete-guide",
    title: "圍欄柱洞混凝土指南（深度、直徑與配置）",
    description:
      "如何規劃圍欄柱：為何轉角/門柱會增加柱數、哪些因素會放大孔洞尺寸，以及混凝土體積怎麼累加。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "柱數不是只看長度 ÷ 柱距",
        bullets: [
          "轉角、端點與門會額外增加柱子。",
          "門柱通常需要更強的柱材與更多混凝土。",
          "坡地與階梯式面板會改變布局與柱距。",
        ],
      },
      {
        heading: "孔洞尺寸沒有唯一答案",
        paragraphs: [
          "深度通常受霜凍線、圍欄高度、風載與土質影響；直徑則受柱尺寸與基礎做法影響。關鍵工程請先確認當地做法/規範。",
        ],
      },
      {
        heading: "體積快速估（圓柱近似）",
        paragraphs: [
          "柱洞可先用圓柱近似：體積 = π × 半徑² × 深度。換算成立方英尺後再用袋裝產出換算袋數。",
          "例：直徑 12\"、深 36\" → 半徑 0.5 ft、深 3 ft → 體積 ≈ 3.14 × (0.5²) × 3 ≈ 2.36 ft³/洞（未含碎石底與喇叭口）。",
        ],
        bullets: [
          "若有碎石底，混凝土深度要扣掉碎石厚度。",
          "喇叭口（bell）會比圓柱估算用量更大。",
          "向上取整並留備用量，避免中途缺料。",
        ],
      },
      {
        heading: "施工流程（簡要）",
        bullets: [
          "先定位：轉角/端點/門柱 → 拉線確認直線段。",
          "下洞後先乾裝確認高度與垂直，再開始拌料。",
          "兩方向固定校正，避免凝固前移位。",
          "頂部做斜帽排水，避免水聚在木柱周邊。",
        ],
      },
    ],
    related: [
      { label: "圍欄計算器", href: "/calculators/home-improvement/fence" },
      { label: "圍欄指南", href: "/guides/home-improvement/fence" },
      { label: "混凝土袋數計算器", href: "/calculators/home-improvement/concrete-bags" },
    ],
  },
  {
    slug: "mulch-bag-coverage-guide",
    title: "木屑（Mulch）袋裝覆蓋指南（要買幾袋？）",
    description:
      "袋裝木屑怎麼估：袋子體積、厚度如何改變覆蓋率，以及沉降為何會讓你低估用量。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "先看袋子體積（不是重量）",
        paragraphs: [
          "袋裝木屑按體積販售（常見 2 ft³ 或 3 ft³）。先把花圃體積換算成 ft³，再用總體積 ÷ 每袋體積，向上取整到整袋。",
        ],
      },
      {
        heading: "快速表（每 100 ft² 需要幾袋）",
        paragraphs: [
          "袋數 =（面積 × 厚度（英尺））÷（每袋 ft³）。厚度換算：1\" = 1/12 ft。",
        ],
        table: {
          columns: ["厚度", "2 ft³ 袋", "3 ft³ 袋"],
          rows: [
            ["1\" (0.083 ft)", "約 5 袋", "約 3–4 袋"],
            ["2\" (0.167 ft)", "約 9 袋", "約 6 袋"],
            ["3\" (0.25 ft)", "約 13 袋", "約 9 袋"],
          ],
        },
      },
      {
        heading: "厚度怎麼選（1\"/2\"/3\"）",
        table: {
          columns: ["厚度", "常見用途", "提醒"],
          rows: [
            ["1\"", "補鋪/翻新", "抑草效果通常有限"],
            ["2\"", "一般花圃", "常見的效果與成本平衡"],
            ["3\"+", "更厚外觀/防沖刷（視情況）", "避免堆到樹幹；注意排水"],
          ],
        },
      },
      {
        heading: "例子",
        paragraphs: [
          "300 ft²、厚 2\" → 體積 = 300 × (2/12) = 50 ft³。用 2 ft³ 袋：50/2 = 25 袋（再加少量備用量）。",
        ],
      },
      {
        heading: "散裝 vs 袋裝",
        bullets: [
          "1 yd³ = 27 ft³：面積一大，袋裝的成本與搬運時間會快速上升。",
          "散裝通常更便宜，但需要卸貨空間與搬運動線。",
          "顏色一致在意時，盡量同批次一次買齊。",
        ],
      },
    ],
    related: [
      { label: "木屑計算器", href: "/calculators/home-improvement/mulch" },
      { label: "木屑厚度指南", href: "/guides/home-improvement/mulch-depth" },
    ],
  },
  {
    slug: "gravel-yards-to-tons-guide",
    title: "碎石立方碼轉噸指南（為何換算會變）",
    description:
      "為什麼 yards→tons 的換算不固定、密度代表什麼，以及如何跟供應商拿到可靠換算值。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "為什麼換算會不同",
        paragraphs: [
          "碎石規劃多用體積（yd³），但販售常用重量（噸）。換算取決於密度，而密度會受材料種類、含水率與壓實程度影響。",
        ],
      },
      {
        heading: "常見範圍（僅概略）",
        table: {
          columns: ["材料", "常見 tons/yd³", "備註"],
          rows: [
            ["碎石（crushed stone）", "1.2–1.5", "最常見的家用估算"],
            ["豌豆石（pea gravel）", "1.2–1.4", "通常略輕"],
            ["路基料（road base）", "1.3–1.6", "含細料與含水率影響大"],
          ],
        },
      },
      {
        heading: "ton vs tonne（單位別搞混）",
        paragraphs: [
          "“ton” 可能是美制短噸（2000 lb），也可能是公噸（2204.62 lb）。混用會讓數字差約 10%。",
        ],
        table: {
          columns: ["單位", "等於", "備註"],
          rows: [
            ["短噸（US short ton）", "2000 lb", "美國常用"],
            ["公噸（metric tonne）", "2204.62 lb", "多數其他地區常用"],
          ],
        },
      },
      {
        heading: "最佳做法",
        bullets: [
          "向供應商索取該產品的換算（同一供應商不同料也可能不同）。",
          "有分層（底層+面層）就分開估算，不要混用材料。",
          "預留厚度誤差與夯實/整平耗損備用量。",
        ],
      },
      {
        heading: "快速公式",
        paragraphs: [
          "若知道密度：短噸 = yd³ ×（lb/yd³）÷ 2000。例：5 yd³、2800 lb/yd³ → 5×2800/2000 = 7.0 噸。",
        ],
      },
    ],
    related: [
      { label: "碎石體積計算器", href: "/calculators/home-improvement/gravel" },
      { label: "碎石噸數計算器", href: "/calculators/home-improvement/gravel-tons" },
    ],
  },
  {
    slug: "sand-density-and-weight-guide",
    title: "砂的密度與重量指南（立方碼、噸與夯實）",
    description:
      "為什麼砂的密度會變、如何把體積換算成重量，以及跟供應商確認哪些資訊最有效。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "為什麼密度會變",
        paragraphs: [
          "砂的密度受含水率、砂種（砌築砂/混凝土砂/遊戲砂）與夯實影響，因此用一個通用換算很容易失準。",
        ],
      },
      {
        heading: "常見範圍（鬆鋪狀態）",
        table: {
          columns: ["材料", "lb/yd³（約）", "備註"],
          rows: [
            ["乾砂", "2400–2800", "受級配與含水影響"],
            ["濕砂", "2700–3200", "含水提高重量"],
          ],
        },
      },
      {
        heading: "立方碼換算噸數（快速）",
        paragraphs: [
          "重量（lb）= yd³ ×（lb/yd³）。短噸 = lb ÷ 2000。例：3 yd³、3000 lb/yd³ → 9000 lb → 4.5 噸。",
        ],
      },
      {
        heading: "常見砂種（用途差很多）",
        table: {
          columns: ["類型（常見名稱）", "用途", "要確認的點"],
          rows: [
            ["砌築砂（masonry sand）", "砂漿、鋪砂、一般用途", "細料比例與級配"],
            ["混凝土砂（concrete sand）", "混凝土/基層", "通常更粗"],
            ["遊戲砂（play sand）", "沙坑", "多為洗砂，非基層材料"],
            ["聚合砂/填縫砂", "鋪磚縫隙", "依廠商指示施工"],
          ],
        },
      },
      {
        heading: "夯實與厚度",
        bullets: [
          "交付時是鬆砂，成品層會整平與夯實。",
          "重要工程請以夯實後厚度為準（視工法）。",
          "預留整平與清理用量，並注意最小配送量。",
        ],
      },
    ],
    related: [
      { label: "砂計算器", href: "/calculators/home-improvement/sand" },
      { label: "鋪磚基層深度指南", href: "/resources/paver-base-depth-guide" },
    ],
  },
  {
    slug: "paver-base-depth-guide",
    title: "鋪磚基層厚度指南（基層要多厚？）",
    description:
      "實用規劃：常見厚度範圍、夯實要點，以及為何排水與土質比精算更重要。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "常見厚度（概略）",
        table: {
          columns: ["用途", "常見壓實基層厚度", "備註"],
          rows: [
            ["庭院/步道（輕度）", "4–6 in", "土質與霜凍可能更厚"],
            ["車道（車輛）", "8–12 in", "凍融區或弱土常需更深"],
          ],
        },
      },
      {
        heading: "土質與排水為何關鍵",
        paragraphs: [
          "基層厚度取決於地基強度與含水狀態。地基鬆軟或積水會下陷。拿不準時，先把排水、必要的隔離布（geotextile）與分層夯實做好，通常比精算更有效。",
        ],
      },
      {
        heading: "鋪砂層不是用來大幅找平",
        table: {
          columns: ["層", "常見厚度", "備註"],
          rows: [
            ["壓實基層", "4–12 in", "依用途與土質調整"],
            ["鋪砂（bedding sand）", "約 1 in", "不是厚找平層"],
          ],
        },
      },
      {
        heading: "常見錯誤（容易下陷）",
        bullets: [
          "用厚砂去修坡度，而不是先把基層做對。",
          "沒有分層夯實（或只夯表層）。",
          "忽略排水，讓基層長期飽水。",
          "沒有邊緣固定（edge restraint），鋪磚會外移、縫隙變大。",
        ],
      },
    ],
    related: [
      { label: "鋪磚基層計算器", href: "/calculators/home-improvement/paver-base" },
      { label: "砂計算器", href: "/calculators/home-improvement/sand" },
    ],
  },
  {
    slug: "topsoil-coverage-chart",
    title: "表土覆蓋量表（依面積與厚度換算立方碼）",
    description:
      "表土覆蓋量速查與常見厚度換算表，並附上整平與袋裝換算小技巧。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "快速覆蓋表（每 100 ft²）",
        table: {
          columns: ["厚度", "表土體積", "備註"],
          rows: [
            ["1 in", "0.31 yd³", "輕度鋪土"],
            ["2 in", "0.62 yd³", "常見整平厚度"],
            ["3 in", "0.93 yd³", "較厚整平/回填"],
            ["4 in", "1.23 yd³", "明顯回填（先確認排水）"],
            ["6 in", "1.85 yd³", "大量回填（要考慮沉降/夯實）"],
          ],
        },
      },
      {
        heading: "心算規則",
        paragraphs: [
          "常用捷徑：100 ft²、厚 1\" ≈ 0.31 yd³。按厚度倍數縮放。例：250 ft²、厚 2\" → 0.62 yd³/100 ft² × 2.5 ≈ 1.55 yd³。",
          "實際訂料請留備用量：草坪不會完全平，材料也會沉降。",
        ],
      },
      {
        heading: "避免超買的小技巧",
        paragraphs: [
          "不要只從最低點量厚度。多點測量後用平均厚度估算；單一低窪會讓你嚴重高估。",
        ],
      },
      {
        heading: "袋裝換算（ft³ / 公升）",
        paragraphs: [
          "先換算體積：1 yd³ = 27 ft³；1 ft³ ≈ 28.3 L。再用總 ft³ ÷ 每袋 ft³ 向上取整。",
        ],
        table: {
          columns: ["公升", "ft³（約）", "備註"],
          rows: [
            ["25 L", "0.88 ft³", "小袋"],
            ["40 L", "1.41 ft³", "常見袋型"],
            ["50 L", "1.77 ft³", "常見袋型"],
            ["60 L", "2.12 ft³", "大袋"],
          ],
        },
      },
    ],
    related: [
      { label: "表土計算器", href: "/calculators/home-improvement/topsoil" },
      { label: "表土整平指南", href: "/guides/home-improvement/topsoil-leveling" },
    ],
  },
  {
    slug: "roofing-materials-checklist-and-estimate",
    title: "屋頂材料清單（估算時最常漏掉的項目）",
    description:
      "實用下單清單：squares、bundles、耗損，以及很多基本估算常漏掉的配件材料。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "Squares 與 bundles：一定要看包裝標示",
        paragraphs: [
          "1 square = 100 ft² 的屋頂表面面積。很多屋瓦會標示「幾包 bundles = 1 square」，但不同產品可能不同；務必以包裝或規格表為準。",
        ],
      },
      {
        heading: "耗損（起始參考）",
        table: {
          columns: ["屋頂複雜度", "常見耗損", "原因"],
          rows: [
            ["簡單人字（gable）", "10–15%", "切割與谷口較少"],
            ["一般混合屋頂", "15–20%", "穿孔、邊緣更多"],
            ["複雜屋頂", "20–25%+", "谷口、老虎窗、切割多"],
          ],
        },
      },
      {
        heading: "常被漏掉的配件",
        bullets: [
          "起始瓦（starter strips）",
          "屋脊瓦（ridge cap）或屋脊系統",
          "底層防水毯（underlayment：毛氈/合成）",
          "冰水毯（ice & water shield，視地區/規範）",
          "滴水條（drip edge）",
          "泛水（step flashing / chimney / valley，視工程）",
          "通風（屋頂通風口、ridge vent 配件）",
          "釘子與密封膠",
        ],
      },
      {
        heading: "坡度：平面面積不是屋面面積",
        paragraphs: [
          "有坡度的屋頂，屋面面積會比平面 footprint 大。可用坡度係數做概算，或直接量每一個屋面。最大錯誤通常是把平面尺寸當成屋面尺寸。",
        ],
      },
      {
        heading: "快速例子（square → bundle）",
        paragraphs: [
          "例：屋頂 22 squares（2200 ft²），產品是 3 bundles/ square → 22 × 3 = 66 bundles；再套用耗損比例並向上取整。",
        ],
      },
    ],
    related: [
      { label: "屋頂計算器", href: "/calculators/home-improvement/roofing" },
      { label: "屋頂指南", href: "/guides/home-improvement/roofing" },
    ],
  },
  {
    slug: "flooring-installation-planning-and-moisture",
    title: "地板施工規劃（含水率、適應期與墊層）",
    description:
      "實用規劃：耗損、含水率檢查、材料適應期、墊層選擇，以及最常導致延誤的非面積項目。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "地板失敗通常不是因為算錯面積",
        paragraphs: [
          "很多問題來自含水率、基底平整度與轉接條/收邊規劃不足。面積換算重要，但往往不是成本與工期的唯一決定因素。",
        ],
      },
      {
        heading: "適應期與含水率檢查",
        paragraphs: [
          "不少產品要求先做環境適應（acclimation）並達到含水率/濕度限制才可施工。跳過這一步容易造成翹曲、縫隙或黏著失敗。請以產品說明與安裝規範為準。",
        ],
      },
      {
        heading: "墊層（underlayment）要配系統",
        bullets: [
          "混凝土板：防潮/隔汽常是第一優先（視產品）。",
          "木底：平整度與異音控制可能更關鍵。",
          "公寓：隔音規範可能決定墊層厚度與種類。",
          "地暖：確認溫度上限與核准材料。",
        ],
      },
      {
        heading: "常被漏掉的項目",
        bullets: [
          "墊層或防潮膜（依產品與基底）。",
          "門口收邊條、轉接條、踢踏鼻條（樓梯）。",
          "踢腳線/收邊條（shoe molding、quarter round 等）。",
          "找平材料（自流平/修補，通常需另估）。",
        ],
      },
      {
        heading: "箱數換算（例）",
        paragraphs: [
          "面積 ×（1 + 耗損）÷ 每箱覆蓋面積 → 向上取整。例：420 ft²、耗損 10% → 462 ft²；每箱 20 ft² → 462/20 = 23.1 → 24 箱。",
        ],
      },
    ],
    related: [
      { label: "地板計算器", href: "/calculators/home-improvement/flooring" },
      { label: "地板指南", href: "/guides/home-improvement/flooring" },
      { label: "地板箱數指南", href: "/guides/home-improvement/flooring-boxes" },
      { label: "踢腳線計算器", href: "/calculators/home-improvement/baseboard-trim" },
    ],
  },
  {
    slug: "gravel-driveway-layering-and-compaction",
    title: "碎石車道分層與夯實（基層 vs 面層）",
    description:
      "按分層估算碎石：基層/面層的差異、夯實造成的厚度變化、排水與供應商噸數換算。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "用分層思維估算（基層與面層不同）",
        paragraphs: [
          "很多碎石工程失敗是因為只用「單一厚度」估整條路。車道常見做法是基層與面層分開（厚度目標不同，甚至材料也不同）。分層估算能避免買錯料。",
        ],
      },
      {
        heading: "夯實：鬆鋪厚度 ≠ 成品厚度",
        paragraphs: [
          "夯實會降低鬆鋪厚度。若目標是壓實後 4\"，通常需要鋪超過 4\" 的鬆料。係數依材料與夯實程度而不同，備用量通常比第二趟配送更划算。",
        ],
      },
      {
        heading: "體積與噸數換算（概略）",
        paragraphs: [
          "先用面積 × 平均厚度算體積；若供應商按噸賣，再用該產品的密度/換算表換算。通用表只能當起點。",
        ],
        table: {
          columns: ["材料類型", "常見 ton/yd³", "提醒"],
          rows: [
            ["碎石/基層料", "1.3–1.6", "含水率會改變密度"],
            ["豌豆石", "1.2–1.4", "圓石的行為不同"],
            ["路基料", "1.3–1.6", "通常夯實效果好"],
          ],
        },
      },
      {
        heading: "基層 vs 面層（選材重點）",
        table: {
          columns: ["層", "常見材料", "為何重要"],
          rows: [
            ["基層", "含細料的碎石/路基料", "能鎖結、夯實、承載"],
            ["面層", "較乾淨碎石或豌豆石（視情況）", "外觀、抓地與輪胎表現"],
            ["隔離（可選）", "土工布（視情況）", "降低弱土混入"],
          ],
        },
      },
      {
        heading: "下單清單",
        bullets: [
          "多點測厚後用平均厚度估算。",
          "基層與面層分開估算（常是不同料）。",
          "向供應商索取該材料的 yd³↔tons 換算。",
          "加上夯實與邊緣不齊的備用量。",
        ],
      },
    ],
    related: [
      { label: "碎石計算器", href: "/calculators/home-improvement/gravel" },
      { label: "立方碼轉噸指南", href: "/resources/gravel-yards-to-tons-guide" },
    ],
  },
  {
    slug: "soil-mix-ratio-for-raised-beds",
    title: "高架床土壤配比（起始方案）",
    description: "高架床常用配比與調整方向：排水、結構與肥力如何平衡。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "常見起始配方（體積比）",
        table: {
          columns: ["配方（體積比）", "適合", "備註"],
          rows: [
            ["50% 堆肥 + 50% 表土", "一般用途", "最簡單起點"],
            ["40% 表土 + 40% 堆肥 + 20% 通氣材料", "排水更好", "依氣候調整"],
          ],
        },
      },
      {
        heading: "簡單調整規則",
        bullets: [
          "若總是偏濕或排水差，增加結構/通氣材料（不只是加堆肥）。",
          "若太快乾，提升保水策略並搭配覆蓋（mulch）。",
          "若堆肥太細或不夠熟，比例可降低，避免床體塌陷變密。",
        ],
      },
      {
        heading: "通氣材料是什麼（常見選項）",
        table: {
          columns: ["材料", "用途", "注意"],
          rows: [
            ["粗顆粒樹皮堆肥", "結構 + 排水", "會逐漸分解"],
            ["浮石/珍珠岩", "輕量孔隙", "粉塵與成本"],
            ["粗砂", "增加重量與排水", "太細會讓土變密"],
            ["稻殼/生物炭", "結構與含水管理", "品質差異大"],
          ],
        },
      },
      {
        heading: "材料體積怎麼算",
        paragraphs: [
          "1）先算床體體積（長 × 寬 × 深）。2）換算成 ft³/yd³。3）按配比拆分每種材料的體積。",
        ],
      },
    ],
    related: [
      { label: "土壤混合計算器", href: "/calculators/home-improvement/soil-mix" },
      { label: "表土覆蓋量表", href: "/resources/topsoil-coverage-chart" },
    ],
  },
  {
    slug: "topsoil-leveling-step-by-step-guide",
    title: "表土整平步驟（避免超買的做法）",
    description:
      "一步一步做整平：用平均厚度估算、做 feather 邊緣、沉降與二次補點的規劃。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "為什麼整平估算常出錯",
        paragraphs: [
          "最大錯誤是用最低點當整片草坪的厚度。更好的做法是：先用全區平均厚度估算，再把真正的低窪區當成「獨立加量」去估算。",
        ],
      },
      {
        heading: "步驟 1：標出高低點",
        bullets: [
          "用拉線、長直尺或水平尺找出高點與低點。",
          "把低窪區獨立標記，避免把同厚度鋪滿全區。",
        ],
      },
      {
        heading: "步驟 2：選擇全區平均鋪土厚度",
        paragraphs: [
          "例如全區 1\" 薄鋪（topdressing），再把低窪區用自己的平均厚度分區估算。",
        ],
      },
      {
        heading: "步驟 3：feather 收邊會吃料",
        paragraphs: [
          "feather 是把厚度逐漸變薄的過渡，避免形成凸起或台階。feather 也會增加用量，因此整平工程幾乎都需要比純平均厚度多一點的備用量。",
        ],
      },
      {
        heading: "步驟 4：沉降與補點",
        bullets: [
          "輕灑水後讓其沉降，再檢查是否需要二次薄補。",
          "保留少量表土，雨後或第一次澆水後補低處更方便。",
          "若低窪深達數英吋，通常要分次施工或配合補播/鋪草皮（視情況）。",
        ],
      },
    ],
    related: [
      { label: "表土計算器", href: "/calculators/home-improvement/topsoil" },
      { label: "表土覆蓋量表", href: "/resources/topsoil-coverage-chart" },
    ],
  },
  {
    slug: "paint-planning-complete-guide",
    title: "油漆規劃完整指南（遍數、底漆、光澤與施工準備）",
    description:
      "實用估算與選擇：如何決定遍數與底漆、挑選光澤，以及用正確的測量方法把採購算準。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "量牆面面積（不是地板面積）",
        paragraphs: [
          "油漆用量主要由牆面（以及天花/飾條）表面積決定。量每面牆寬×高後加總；想更精準可扣除大窗/大門，但很多人把它當作備用量。",
        ],
      },
      {
        heading: "遍數怎麼決定",
        bullets: [
          "改色幅度大：更容易透底，需要更多遍或底漆。",
          "新石膏板/修補區：底漆能降低色差與閃光（flashing）。",
          "粗紋理會降低覆蓋率，用量上升。",
          "高光澤更挑表面，清潔與打磨很關鍵。",
        ],
      },
      {
        heading: "把底漆當成獨立材料項目",
        paragraphs: [
          "底漆能提升附著與均勻吸水，但它是額外一道工序與材料。如果需要底漆卻只預算面漆，最容易買少。",
        ],
      },
      {
        heading: "採購清單",
        bullets: [
          "牆/天花/飾條若用不同產品，分項估算更不易買錯。",
          "用保守覆蓋率與遍數做預算，向上取整到整桶。",
          "顏色一致很重要就同批次一次買齊。",
          "保留少量同款同光澤做未來補漆。",
        ],
      },
    ],
    related: [
      { label: "油漆計算器", href: "/calculators/home-improvement/paint" },
      { label: "底漆 vs 面漆指南", href: "/resources/primer-vs-paint-when-to-prime" },
    ],
  },
  {
    slug: "primer-vs-paint-when-to-prime",
    title: "底漆 vs 面漆（什麼時候需要上底漆）",
    description:
      "實用提醒：底漆能改善遮蓋與附著，但它是獨立材料與獨立工序。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "什麼情況底漆特別有用",
        bullets: [
          "新石膏板與修補區（降低 flashing）。",
          "污漬/問題表面（需要防污底漆）。",
          "大改色（可降低面漆遍數）。",
          "亮面/光滑表面（配合清潔與打磨提升附著）。",
          "裸露或高吸水表面（均勻吸水）。",
        ],
      },
      {
        heading: "底漆 vs 多刷一遍（怎麼選）",
        paragraphs: [
          "若問題是吸水或附著，底漆通常是更乾淨的解法；若只是遮蓋困難，可能是多一遍面漆也能解，但底漆往往仍能降低風險。",
        ],
        table: {
          columns: ["情境", "常見做法", "原因"],
          rows: [
            ["修補/新石膏板", "底漆 + 2 遍", "降低光澤不均與透底"],
            ["水漬/煙漬/單寧", "防污底漆 + 面漆", "防止滲色回來"],
            ["亮面飾條", "打磨 + 附著底漆", "提升附著力"],
            ["同色重刷", "1–2 遍面漆", "通常不一定要底漆"],
          ],
        },
      },
      {
        heading: "估算提醒",
        paragraphs: [
          "底漆有自己的覆蓋率與遍數。底漆不是「免費覆蓋」，要分開估算才準。",
        ],
      },
    ],
    related: [
      { label: "油漆計算器", href: "/calculators/home-improvement/paint" },
      { label: "飾條油漆指南", href: "/resources/paint-trim-enamel-selection-and-prep" },
    ],
  },
  {
    slug: "paint-trim-enamel-selection-and-prep",
    title: "飾條油漆指南（琺瑯漆選擇、前處理與耐用度）",
    description:
      "實用整理：飾條為何要用琺瑯漆、亮面飾條的前處理、遍數規劃與長期補修策略。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "飾條漆和牆面漆不同",
        paragraphs: [
          "飾條常用琺瑯漆，主打硬度、耐擦洗與抗黏連。它比牆面漆更吃前處理；油汙或亮面沒處理好，剝落風險很高。",
        ],
      },
      {
        heading: "前處理清單（耐不耐用的分水嶺）",
        bullets: [
          "清潔去油污（廚房/浴室尤其重要）。",
          "輕打磨/去光（亮面表面必做）。",
          "需要處點上底漆（修補、污漬、裸露木材）。",
          "選擇光澤（常見 satin / semi‑gloss）。",
        ],
      },
      {
        heading: "用線性長度估算飾條面積（簡法）",
        paragraphs: [
          "飾條有立體剖面，單看線性長度容易低估。簡法：面積（ft²）= 總長（ft）× 平均可見面寬（ft）。例：踢腳線 300 ft、可見面 3.5\" → 300 × (3.5/12) ≈ 87.5 ft²/遍。",
        ],
      },
      {
        heading: "琺瑯漆類型（概覽）",
        table: {
          columns: ["類型", "優點", "取捨"],
          rows: [
            ["水性壓克力琺瑯", "乾得快、味道低、好清理", "硬度可能略低"],
            ["水性醇酸/聚氨酯琺瑯", "更平滑、更硬的固化（視產品）", "固化較久、價格較高"],
            ["油性琺瑯（部分地區）", "硬度與流平佳", "味道/VOC、黃變、乾燥慢"],
          ],
        },
      },
    ],
    related: [
      { label: "油漆計算器", href: "/calculators/home-improvement/paint" },
      { label: "底漆指南", href: "/resources/primer-vs-paint-when-to-prime" },
    ],
  },
  {
    slug: "tile-project-planning-guide",
    title: "貼磚工程規劃指南（排版、備料與材料清單）",
    description:
      "實用規劃：怎麼選 overage（備料比例）、避免箱數/覆蓋率誤判，以及把材料清單補齊。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "先做排版（排版決定耗損）",
        paragraphs: [
          "貼磚耗損多半來自切割與排版。直鋪、空間簡單通常耗損較低；斜鋪、人字、轉角多、壁龕與管線穿孔多的工程耗損會上升。",
        ],
        table: {
          columns: ["安裝類型", "常見 overage", "備註"],
          rows: [
            ["直鋪地磚", "10%", "轉角多要提高"],
            ["斜鋪/花樣", "15–20%", "切割更耗"],
            ["有壁龕/穿孔的牆面", "15–25%", "小片難重用"],
            ["大板磚", "10–15%", "破損風險更重要"],
          ],
        },
      },
      {
        heading: "箱數覆蓋率以標籤為準",
        paragraphs: [
          "不要只用磚尺寸推算每箱覆蓋率。每箱片數、厚度與產品規格不同；請以包裝標示的 ft²/m² 覆蓋率換算並向上取整。",
        ],
      },
      {
        heading: "完整材料清單（避免只買磚）",
        bullets: [
          "薄貼膠/砂漿（依磚種、基底與環境選擇）",
          "填縫材料（類型與縫寬影響用量）",
          "濕區防水與/或脫耦膜（視工程）",
          "背板與基底處理材料（視需要）",
          "收邊條、轉接條與伸縮縫材料",
          "十字架、找平系統與轉角處矽利康（變平面處）",
        ],
      },
    ],
    related: [
      { label: "磁磚計算器", href: "/calculators/home-improvement/tile" },
      { label: "填縫指南", href: "/resources/tile-grout-selection-and-coverage-guide" },
    ],
  },
  {
    slug: "tile-waterproofing-and-membranes-guide",
    title: "貼磚防水與膜材（哪些必做、哪些可選）",
    description:
      "實用整理：淋浴間/濕區的防水選擇、膜材種類，以及為什麼基底與細節決定長期耐用。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "防水是一個系統，不是一個產品",
        paragraphs: [
          "多數貼磚失敗是水管理失敗：水滲到磚後面並碰到不耐水材料。防水要當成系統（基底 + 膜材 + 接縫 + 穿孔細節）來設計。",
        ],
      },
      {
        heading: "常見膜材類型（概略）",
        table: {
          columns: ["類型", "常見用途", "備註"],
          rows: [
            ["片材膜（sheet）", "淋浴/濕區", "厚度一致；接縫需正確處理"],
            ["液態膜（liquid）", "濕區牆/地", "厚度決定效果；需養護時間"],
            ["脫耦膜（uncoupling）", "地坪", "處理位移；不一定自帶防水"],
          ],
        },
      },
      {
        heading: "採購前檢查清單",
        bullets: [
          "先定義濕度等級（淋浴間 vs 只有濺水）。",
          "確認允許的基底（水泥板/泡棉板/可用時的石膏板）。",
          "列出穿孔（混水閥、壁龕、座椅）並規劃密封做法。",
          "選擇與膜材/磚相容的薄貼膠（thinset）。",
        ],
      },
      {
        heading: "為什麼填縫與矽利康不是防水方案",
        paragraphs: [
          "填縫與矽利康能處理表面與伸縮，但不能取代濕區的防水膜與基底處理。",
        ],
      },
      {
        heading: "常見失敗點：液態膜塗太薄",
        bullets: [
          "依廠商覆蓋率與塗佈道數達到乾膜厚度。",
          "遵守養護時間（溫度/濕度會影響）。",
          "該加強的角落與接縫依系統使用補強布/膠帶。",
        ],
      },
    ],
    related: [
      { label: "磁磚計算器", href: "/calculators/home-improvement/tile" },
      { label: "貼磚規劃指南", href: "/resources/tile-project-planning-guide" },
    ],
  },
  {
    slug: "studs-corners-and-openings-guide",
    title: "立柱：轉角與開口（為何單靠柱距會失準）",
    description:
      "實用框架筆記：轉角、T 字交接與門窗開口會讓立柱數量超出「牆長÷柱距」的基礎估算。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "額外立柱從哪裡來",
        bullets: [
          "轉角（2 柱角或 3 柱角等不同做法）。",
          "T 字交接與飾面需要的 backing/blocking。",
          "門窗開口的 king/jack 與過樑支撐。",
        ],
      },
      {
        heading: "計算器能給什麼（也不能給什麼）",
        paragraphs: [
          "柱距計算很適合估「直線牆段的基礎立柱」。但實際框架還要加上載重傳遞、石膏板支撐與開口結構需求，這些會因排版與工法差異而變動。",
        ],
      },
      {
        heading: "簡單加量法（好落地）",
        bullets: [
          "每個轉角加一個「轉角額外量」（依你的轉角做法）。",
          "每個門窗加一個「開口額外量」（king/jack、過樑、可能的 cripples）。",
          "若有吊櫃/扶手等需求，另外加 blocking/backing 的材料量。",
        ],
      },
      {
        heading: "別忘了頂/底板（plates）",
        paragraphs: [
          "牆通常有底板與（常見）雙頂板，且要用標準料長拼接。建議把 plates 當成獨立項目：總牆長 × 板材跑數（常見 3 跑：1 底 + 2 頂，視工法），再換算支數並留拼接耗損。",
        ],
      },
    ],
    related: [
      { label: "立柱計算器", href: "/calculators/home-improvement/studs" },
      { label: "石膏板計算器", href: "/calculators/home-improvement/drywall" },
      { label: "方法論", href: "/methodology" },
    ],
  },
  {
    slug: "fence-planning-posts-gates-and-materials-guide",
    title: "圍欄規劃指南（柱、門與材料清單）",
    description:
      "實用規劃：預製板（panel）vs 柵條（picket）、柱距、門與轉角，以及最常被漏掉的材料項目。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "先決定是 panel 還是 picket",
        paragraphs: [
          "panel 圍欄通常按段數（6/8 ft 一片）估算；picket 圍欄則按柵條數與橫樑長度估算。兩者的數學與採購清單不同，先選系統再估算。",
        ],
      },
      {
        heading: "panel vs picket（估算差異）",
        table: {
          columns: ["樣式", "主要數量", "常見漏項"],
          rows: [
            ["panel 圍欄", "板片/段數", "固定件、必要橫樑、坡地 step/rack 調整"],
            ["picket 圍欄", "柵條數 + 橫樑長度", "螺絲、間距治具、備用柵條"],
          ],
        },
        bullets: [
          "門與轉角幾乎都需要額外柱子與更強的支撐。",
          "坡地的 step/rack 做法會改變布局與耗損。",
        ],
      },
      {
        heading: "柱子不是只算長度÷柱距",
        paragraphs: [
          "轉角、端點與門柱會增加柱數與混凝土用量。柱洞深度通常受圍欄高度與霜凍線影響，會連帶影響柱材長度與混凝土量。",
        ],
      },
      {
        heading: "門：五金與淨空",
        bullets: [
          "門柱通常要更強或更深的基礎（視情況）。",
          "鉸鏈、門閂等五金是獨立採購項目。",
          "坡度會影響門扇離地間隙與開啟方向規劃。",
        ],
      },
      {
        heading: "快速檢查清單",
        bullets: [
          "先列出特殊柱：轉角、端點、門柱。",
          "混凝土獨立估算並向上取整，避免中途缺料。",
          "把五金、固定件、螺絲與（需要時）防腐材料一起列入。",
          "土質與排水會影響基礎做法，關鍵工程先確認當地做法。",
        ],
      },
    ],
    related: [
      { label: "圍欄計算器", href: "/calculators/home-improvement/fence" },
      { label: "柱洞與混凝土指南", href: "/resources/fence-post-hole-concrete-guide" },
    ],
  },
  {
    slug: "tile-grout-selection-and-coverage-guide",
    title: "磁磚填縫指南（含砂/無砂、縫寬與覆蓋率）",
    description:
      "實用整理：如何選 grout 類型、設定縫寬，以及為什麼覆蓋率會隨磚尺寸與縫寬大幅變動。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "grout 類型：含砂 vs 無砂 vs 特殊（環氧等）",
        paragraphs: [
          "選擇取決於縫寬、磚種與環境。傳統水泥基 grout 很常見，但在高汙染或濕區，特殊 grout（例如環氧）可能更值得。",
        ],
        table: {
          columns: ["類型", "常見用途", "取捨"],
          rows: [
            ["無砂（unsanded）", "較窄縫與部分拋光磚", "較細緻，但不適用所有縫寬"],
            ["含砂（sanded）", "較寬縫/多數地坪", "較耐寬縫，表面質感較粗"],
            ["環氧/特殊", "濕區/抗汙需求", "價格高、可用時間不同"],
          ],
        },
      },
      {
        heading: "為什麼覆蓋率差很多",
        paragraphs: [
          "用量由縫隙總體積決定，而不是磚面積。磚越小、縫線越多；縫越寬或縫越深，用量就越高。想估得準，請用產品 coverage 表或計算器，並固定輸入（磚尺寸、縫寬、平均縫深）。",
        ],
      },
      {
        heading: "實用規則",
        bullets: [
          "用實際會施工的縫寬與磚尺寸估算，不要用「希望值」。",
          "馬賽克要單獨估算：縫線長度會爆增。",
          "向上取整到整袋，並保留少量做補縫與修補。",
          "伸縮縫用矽利康/密封膠，不用 grout。",
        ],
      },
    ],
    related: [
      { label: "填縫計算器", href: "/calculators/home-improvement/tile-grout" },
      { label: "磁磚計算器", href: "/calculators/home-improvement/tile" },
    ],
  },
  {
    slug: "topsoil-vs-compost-blends-for-lawns-and-beds",
    title: "表土 vs 堆肥混合（土地整平、草坪與花圃）",
    description:
      "何時用純表土、何時用混合更好，以及如何規劃配比避免有機質過量導致沉降或過軟。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "表土與堆肥的角色不同",
        paragraphs: [
          "表土常用於回填與整平；堆肥用於提升有機質與結構。混合很有用，但草坪與花圃的最佳配比通常不同。",
        ],
      },
      {
        heading: "草坪 vs 花圃（快速對照）",
        table: {
          columns: ["工程", "常見做法", "提醒"],
          rows: [
            ["草坪薄鋪（topdressing）", "以表土為主 + 少量堆肥", "堆肥太多容易過軟/沉降"],
            ["整平", "表土回填 + 需要處再加堆肥", "平均厚度估算並留 feather 備用量"],
            ["花圃/菜園", "表土 + 堆肥混合", "依植物與原土調整"],
          ],
        },
      },
      {
        heading: "簡單配比（起始參考）",
        table: {
          columns: ["用途", "堆肥比例（體積）", "原因"],
          rows: [
            ["草坪薄鋪", "10–25%", "增加有機質但不致過軟"],
            ["新草坪表層", "10–30%", "有利初期生根（視情況）"],
            ["蔬菜花圃", "25–50%", "肥力與結構（視材料品質）"],
          ],
        },
      },
      {
        heading: "下單清單",
        bullets: [
          "多點測量取平均厚度，不要只看最低點。",
          "混合時把表土與堆肥分開估算體積（方便現場微調）。",
          "預留沉降與收邊 feather 的備用量。",
          "材料品質比標籤更重要：確認表土篩選與堆肥成熟度。",
        ],
      },
    ],
    related: [
      { label: "表土覆蓋量表", href: "/resources/topsoil-coverage-chart" },
      { label: "土壤混合計算器", href: "/calculators/home-improvement/soil-mix" },
    ],
  },
  {
    slug: "wallpaper-rolls-by-wall-height",
    title: "壁紙捲數與牆高（為何牆越高越需要更多捲）",
    description: "牆高如何影響每捲可裁條數，以及圖案循環（repeat）如何放大耗損。",
    lastUpdated: "最後更新：2026年1月",
    sections: [
      {
        heading: "牆高為何會改變捲數",
        paragraphs: [
          "壁紙會裁成「全高」條。牆越高，每捲能裁出的條數越少；再加上修邊與對花，就更容易需要多買。",
        ],
      },
      {
        heading: "圖案循環有時比牆高更關鍵",
        paragraphs: [
          "有 repeat 時要對齊圖案，會在每條上產生不可用的裁切長度；repeat 越大，耗損越高。最可靠的是用廠商提供的「依牆高與 repeat 計算的每捲條數」。",
        ],
      },
      {
        heading: "什麼情況要多買",
        bullets: [
          "repeat 很大（對花裁切多）。",
          "門窗多、轉角多（需要更多獨立條）。",
          "希望未來可補修且要同批次（顏色/印刷一致）。",
        ],
      },
      {
        heading: "實用測量法：先算條數再算捲數",
        bullets: [
          "逐牆量寬度，算需要幾條（牆寬 ÷ 捲寬，向上取整）。",
          "用牆高 + 修邊量 + repeat 推算每捲能出幾條。",
          "向上取整到整捲，且批次一致時多買少量備用。",
        ],
      },
    ],
    related: [
      { label: "壁紙捲數計算器", href: "/calculators/home-improvement/wallpaper-rolls" },
      { label: "油漆計算器（替代）", href: "/calculators/home-improvement/paint" },
    ],
  },
];
