export interface Product {
  id: string
  name: string
  category: string
  trending: boolean
  image: string
  description: string
  longDescription: string
  specs: string[]
  features: string[]
}

export const categories = [
  { label: "All Products", value: "all" },
  { label: "Most Trending", value: "trending" },
  { label: "Dialysis Machines", value: "Dialysis Machines" },
  { label: "Water Treatment", value: "Water Treatment" },
  { label: "Equipment", value: "Equipment" },
  { label: "Consumables", value: "Consumables" },
  { label: "Spare Parts", value: "Spare Parts" },
]

export const products: Product[] = [
  {
    id: "fresenius-4008s",
    name: "Fresenius 4008S Classic",
    category: "Dialysis Machines",
    trending: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCskD9NLOqMFXm36dmtNhUvmCJg9l_B3aj7ji1wefFsnO5tvT527ZbB7x73jSnW_Jdzywvm0DlmHs7G06mOvBFnOOFh4anUuJCJqdpsZtErdol6MYlstUF-pwlhLsPJ1q7Y3eUpntxGLDvsQiVEgpogHhtajyD7D_Fsh-7qHzCUc6cqFD3yqvDDMhFHFRzunxGuBNSEc46r4YosdMN5_hBhINEA_UI3e88UqPwHPy7g_KGbMb1OrM_57E8U9qAZZqwEUjKEdXN_vL0",
    description:
      "Industry-standard hemodialysis machine with single-needle and double-needle modes. Fully refurbished with 6-month warranty.",
    longDescription:
      "The Fresenius 4008S Classic is one of the most widely trusted hemodialysis machines globally. This refurbished unit has been thoroughly tested and calibrated to meet factory specifications. It supports both single-needle and double-needle dialysis modes, automatic self-test on startup, UF control, and integrated blood pressure monitoring. Ideal for hospitals and dialysis centers seeking reliable, cost-effective equipment with full after-sales support.",
    specs: ["220V AC", "85 kg", "Refurbished"],
    features: [
      "Single & double needle modes",
      "Automatic UF control",
      "Integrated BP monitoring",
      "6-month warranty included",
      "Factory-tested calibration",
    ],
  },
  {
    id: "bbraun-dialog-plus",
    name: "B.Braun Dialog+",
    category: "Dialysis Machines",
    trending: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1bDaeEODkPjd-Olb54JxhHpK_G-h3eqjJGp6PT2NQ3ZbyqMMqSP_GdN4ViWF4wj-DP_2G0KNs4iyHRPhJOFg9fjlIBTeqfJynAR5udk11qIltK-w8IxGx1tKuoXt97WVxIjYLdcb-4B-Ol81EYz9o-ykmajl_aMVvpeZY-p5QMIygkOZYp8tzTfA2Muhd0b3g-nLmKXTY4XVaxD4aehlf0gNxDImkKTUphpYWv5vAwuYPBy-XHK3Q1CF0-PkkjH-I1eRnlbw1gFQ",
    description:
      "Advanced dialysis system with integrated touch-screen interface, auto self-test, and online clearance monitoring.",
    longDescription:
      "The B.Braun Dialog+ is a premium hemodialysis system designed for high-throughput dialysis centers. It features an intuitive touch-screen interface for streamlined operation, automatic self-test capabilities for reduced setup time, and online clearance monitoring (OCM) for real-time treatment quality assessment. The Dialog+ supports HDF (hemodiafiltration) mode and delivers precise fluid management for optimal patient outcomes.",
    specs: ["230V AC", "Touch Screen", "Auto-Test"],
    features: [
      "Touch-screen interface",
      "Online clearance monitoring",
      "HDF mode support",
      "Automatic self-test",
      "Precise UF control",
    ],
  },
  {
    id: "medical-ro-system",
    name: "Medical RO Water System",
    category: "Water Treatment",
    trending: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDuKoVmDljO73ZXbkWiNh4zK0xXjEsT-SSIXFG5cZ-jJjud8PC2AwOtchsLo_3I_eJDV-vfTfocADUaOOfCOtxr-ML7DY5kOpU8tCWv2Vxnk4bD5t_s0aV-hXs37axA4aY1t54ZQ3zRSbGyB_ykPP7zaB2eG9VayckrCiM73RLb0UDzT2OcM3OpfQ4FUpl-F1tjXkTLBAMILl2lSkq1wvVD1IoYj_rYZYB8s_4160hFQkSCGCkK8K4HtDXt5-VmnqJ9PVc2ezNhCHc",
    description:
      "Medical-grade RO system meeting AAMI water quality standards for safe hemodialysis. Includes pre-treatment and auto-flush.",
    longDescription:
      "Our medical-grade reverse osmosis water treatment system is engineered specifically for hemodialysis applications. It meets AAMI (Association for the Advancement of Medical Instrumentation) water quality standards, ensuring patient safety. The system includes multi-stage pre-treatment filtration, automatic flush cycles, TDS monitoring, and UV disinfection. Available in 250 L/hr to 1000 L/hr capacities to suit clinics of all sizes.",
    specs: ["500 L/hr", "AAMI Std", "Auto Flush"],
    features: [
      "AAMI-compliant water quality",
      "Multi-stage pre-treatment",
      "Automatic flush cycles",
      "TDS & conductivity monitoring",
      "UV disinfection module",
    ],
  },
  {
    id: "dialysis-chair",
    name: "Motorized Dialysis Chair",
    category: "Equipment",
    trending: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjSDXV1nw3pi7yVhE3O0Cqeiz4PlSyetueOOl3-TV-_VQmQ7pMckY4ifNxcsNIPMh_lfdL5O-wJ2g57bexYTo9wE6vStFy8F4Kpz6KEiAdIiTutViTJivyPnsPF83a-0URj9NJveWWC_KpTl6BjVSjt4QiyihyJkWFyjQG47faqRqPyOGbNTqh061SfEJAT6jquw7oVz-bdYO-ykvvKs7CNdErqeIdPysjuXGUPddgGvWdax-oHHFXGUGEdDA73LPypKiCQd5myRA",
    description:
      "Electrically adjustable 3-motor dialysis chair with Trendelenburg, adjustable armrests, and easy-clean PU leather.",
    longDescription:
      "This motorized dialysis chair is built for patient comfort during long treatment sessions. It features three independent electric motors for backrest, legrest, and height adjustment, plus Trendelenburg position for emergencies. The chair supports up to 200 kg, has adjustable armrests with vascular access cutouts, and is upholstered in medical-grade PU leather for easy cleaning and infection control.",
    specs: ["3 Motors", "200 kg Load", "PU Leather"],
    features: [
      "3 independent electric motors",
      "Trendelenburg emergency position",
      "200 kg load capacity",
      "Adjustable armrests with cutouts",
      "Medical-grade PU leather",
    ],
  },
  {
    id: "high-flux-dialyzers",
    name: "High Flux Dialyzers",
    category: "Consumables",
    trending: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEJTxvyJ3j1HMZquR3CLP5xZcY_K8Oiahjmk5IK11BTB57Lk68TN3TDZ4EJdHIyjJTEdTz6irjyh0QF7VpoAMe0MEGxZEUxpST-yNLSxljedPBZFeOIM-vJ_KuKyOcSvZU6iL8nsWZv9AOhnqomVNtzOzFR3s0EAlneOqH0w0tovWPsLQ3ybi0REyicc0H5eOKlVecjZh9CRUlEhgXodX0ciWaCprn_yUk_lAGyf7rVup19xBeYAZCSLdTykASvSZolOX3wljewbw",
    description:
      "High-performance polysulfone dialyzers for single-use. Available in multiple surface areas for varied patient needs.",
    longDescription:
      "Our high-flux polysulfone dialyzers deliver excellent middle-molecule clearance for optimal dialysis outcomes. Available in multiple surface areas (1.3 m², 1.5 m², 1.8 m², 2.1 m²) to cater to diverse patient profiles. These single-use dialyzers feature biocompatible membranes, low thrombogenicity, and consistent performance throughout the treatment session. Supplied in boxes of 24 units with full traceability.",
    specs: ["High Flux", "Box of 24", "Polysulfone"],
    features: [
      "Multiple surface areas available",
      "Biocompatible polysulfone membrane",
      "Low thrombogenicity",
      "Single-use for safety",
      "Full lot traceability",
    ],
  },
  {
    id: "av-fistula-needles",
    name: "AV Fistula Needles",
    category: "Consumables",
    trending: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1fQJmuOt4eBtwmYgdtmNRsMWBSERVQKPWj8vnmkphLGXTYRMMbaJnqcuI2lwqCzrRMQpqJbkzmcwgiI9pNJyys3q7IFm9aDLaY01ohr6RL_NVeoG7HuzzVQGfJJnCsvNeilaTLiEa6bYBFIg3xCTPUmWLdRIT-Ah8LfsPyVo-3SRn5Hn6nkZIp9dygOa4JWFf_W9v29gGocLxJ6WS2VTQOjhKej-CnQ7-gnIMvkt0tkxDBAjxk_KTYqaJFVSeEreuuPH4QXdkSX0",
    description:
      "Safety-type AV fistula needles with rotating wings and back-eye design. Available in 16G and 17G gauges.",
    longDescription:
      "These safety-type arteriovenous fistula needles are designed for secure, comfortable vascular access during hemodialysis. Available in 16G and 17G gauges, they feature rotating wing design for flexible positioning, a back-eye for improved flow, and an integrated safety mechanism to prevent needle-stick injuries. Supplied in boxes of 100 units, suitable for all standard dialysis machine bloodline connections.",
    specs: ["16G / 17G", "Safety Type", "Box of 100"],
    features: [
      "Rotating wing design",
      "Back-eye for improved flow",
      "Integrated safety mechanism",
      "16G and 17G available",
      "Universal connection compatibility",
    ],
  },
  {
    id: "bloodlines-set",
    name: "Bloodline Tubing Sets",
    category: "Consumables",
    trending: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEJTxvyJ3j1HMZquR3CLP5xZcY_K8Oiahjmk5IK11BTB57Lk68TN3TDZ4EJdHIyjJTEdTz6irjyh0QF7VpoAMe0MEGxZEUxpST-yNLSxljedPBZFeOIM-vJ_KuKyOcSvZU6iL8nsWZv9AOhnqomVNtzOzFR3s0EAlneOqH0w0tovWPsLQ3ybi0REyicc0H5eOKlVecjZh9CRUlEhgXodX0ciWaCprn_yUk_lAGyf7rVup19xBeYAZCSLdTykASvSZolOX3wljewbw",
    description:
      "Complete arterial and venous bloodline sets compatible with Fresenius, B.Braun, and Nipro machines.",
    longDescription:
      "Our bloodline tubing sets include both arterial and venous lines, compatible with major dialysis machine brands including Fresenius, B.Braun, and Nipro. Manufactured from medical-grade PVC with DEHP-free options available. Each set includes drip chambers, clamps, and connectors. Individually packed and EO-sterilized for single use.",
    specs: ["Arterial + Venous", "EO Sterilized", "Single Use"],
    features: [
      "Compatible with major brands",
      "Medical-grade PVC",
      "DEHP-free options",
      "EO sterilized",
      "Complete set included",
    ],
  },
  {
    id: "bicarbonate-cartridge",
    name: "Bicarbonate Concentrate",
    category: "Consumables",
    trending: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEJTxvyJ3j1HMZquR3CLP5xZcY_K8Oiahjmk5IK11BTB57Lk68TN3TDZ4EJdHIyjJTEdTz6irjyh0QF7VpoAMe0MEGxZEUxpST-yNLSxljedPBZFeOIM-vJ_KuKyOcSvZU6iL8nsWZv9AOhnqomVNtzOzFR3s0EAlneOqH0w0tovWPsLQ3ybi0REyicc0H5eOKlVecjZh9CRUlEhgXodX0ciWaCprn_yUk_lAGyf7rVup19xBeYAZCSLdTykASvSZolOX3wljewbw",
    description:
      "Medical-grade bicarbonate cartridges and powder concentrate for dialysis fluid preparation.",
    longDescription:
      "High-purity bicarbonate concentrate for dialysis fluid preparation, available in both cartridge and powder form. Our bicarbonate meets pharmacopeial standards for hemodialysis use. Each batch is tested for endotoxin levels, microbial contamination, and chemical purity. Compatible with standard proportioning systems from all major machine manufacturers.",
    specs: ["Medical Grade", "Cartridge/Powder", "Batch Tested"],
    features: [
      "Pharmacopeial purity standards",
      "Endotoxin tested",
      "Cartridge and powder forms",
      "Compatible with all machines",
      "Full batch traceability",
    ],
  },
  {
    id: "pump-segment-tubing",
    name: "Pump Segment Tubing",
    category: "Spare Parts",
    trending: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1fQJmuOt4eBtwmYgdtmNRsMWBSERVQKPWj8vnmkphLGXTYRMMbaJnqcuI2lwqCzrRMQpqJbkzmcwgiI9pNJyys3q7IFm9aDLaY01ohr6RL_NVeoG7HuzzVQGfJJnCsvNeilaTLiEa6bYBFIg3xCTPUmWLdRIT-Ah8LfsPyVo-3SRn5Hn6nkZIp9dygOa4JWFf_W9v29gGocLxJ6WS2VTQOjhKej-CnQ7-gnIMvkt0tkxDBAjxk_KTYqaJFVSeEreuuPH4QXdkSX0",
    description:
      "OEM-quality pump segment tubing for Fresenius and B.Braun blood pump modules.",
    longDescription:
      "Replacement pump segment tubing designed for Fresenius 4008 series and B.Braun Dialog blood pump modules. Made from high-elasticity silicone that maintains consistent occlusion pressure over its service life. These OEM-quality parts ensure accurate blood flow rates and pump performance. Available individually or in bulk packs.",
    specs: ["Silicone", "OEM Quality", "Fresenius/B.Braun"],
    features: [
      "High-elasticity silicone",
      "Maintains occlusion pressure",
      "Fresenius 4008 compatible",
      "B.Braun Dialog compatible",
      "Bulk pricing available",
    ],
  },
  {
    id: "pressure-transducers",
    name: "Pressure Transducers",
    category: "Spare Parts",
    trending: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1fQJmuOt4eBtwmYgdtmNRsMWBSERVQKPWj8vnmkphLGXTYRMMbaJnqcuI2lwqCzrRMQpqJbkzmcwgiI9pNJyys3q7IFm9aDLaY01ohr6RL_NVeoG7HuzzVQGfJJnCsvNeilaTLiEa6bYBFIg3xCTPUmWLdRIT-Ah8LfsPyVo-3SRn5Hn6nkZIp9dygOa4JWFf_W9v29gGocLxJ6WS2VTQOjhKej-CnQ7-gnIMvkt0tkxDBAjxk_KTYqaJFVSeEreuuPH4QXdkSX0",
    description:
      "Replacement pressure transducer protectors and filters for all major dialysis machine models.",
    longDescription:
      "Essential replacement pressure transducer protectors and filters for maintaining accurate pressure readings during dialysis treatments. Compatible with Fresenius, B.Braun, and Nipro machines. These components should be replaced regularly as part of preventive maintenance to ensure patient safety and measurement accuracy. Sold in packs of 10/50.",
    specs: ["Multi-brand", "Filters Included", "Pack of 10/50"],
    features: [
      "Compatible with all major brands",
      "Includes protective filters",
      "Essential for PM schedules",
      "Accurate pressure readings",
      "Available in bulk",
    ],
  },
]
