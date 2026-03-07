import productsJson from "./products.json"

/* ────────────────────────────────────────────────────────────────
   Types
   ──────────────────────────────────────────────────────────────── */

export interface Product {
  id: string
  name: string
  category: string
  hsn?: string
  trending: boolean
  image: string
  description: string
  longDescription: string
  specs: string[]
  features: string[]
}

export interface Category {
  label: string
  value: string
  slug: string
  description: string
  icon: string
}

/* ────────────────────────────────────────────────────────────────
   Category-level fallback images (royalty-free / illustrative)
   ──────────────────────────────────────────────────────────────── */

const categoryImages: Record<string, string> = {
  "Spare Parts":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD1fQJmuOt4eBtwmYgdtmNRsMWBSERVQKPWj8vnmkphLGXTYRMMbaJnqcuI2lwqCzrRMQpqJbkzmcwgiI9pNJyys3q7IFm9aDLaY01ohr6RL_NVeoG7HuzzVQGfJJnCsvNeilaTLiEa6bYBFIg3xCTPUmWLdRIT-Ah8LfsPyVo-3SRn5Hn6nkZIp9dygOa4JWFf_W9v29gGocLxJ6WS2VTQOjhKej-CnQ7-gnIMvkt0tkxDBAjxk_KTYqaJFVSeEreuuPH4QXdkSX0",
  Surgical:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAEJTxvyJ3j1HMZquR3CLP5xZcY_K8Oiahjmk5IK11BTB57Lk68TN3TDZ4EJdHIyjJTEdTz6irjyh0QF7VpoAMe0MEGxZEUxpST-yNLSxljedPBZFeOIM-vJ_KuKyOcSvZU6iL8nsWZv9AOhnqomVNtzOzFR3s0EAlneOqH0w0tovWPsLQ3ybi0REyicc0H5eOKlVecjZh9CRUlEhgXodX0ciWaCprn_yUk_lAGyf7rVup19xBeYAZCSLdTykASvSZolOX3wljewbw",
  "Blood Tubings":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAEJTxvyJ3j1HMZquR3CLP5xZcY_K8Oiahjmk5IK11BTB57Lk68TN3TDZ4EJdHIyjJTEdTz6irjyh0QF7VpoAMe0MEGxZEUxpST-yNLSxljedPBZFeOIM-vJ_KuKyOcSvZU6iL8nsWZv9AOhnqomVNtzOzFR3s0EAlneOqH0w0tovWPsLQ3ybi0REyicc0H5eOKlVecjZh9CRUlEhgXodX0ciWaCprn_yUk_lAGyf7rVup19xBeYAZCSLdTykASvSZolOX3wljewbw",
  Chemical:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDuKoVmDljO73ZXbkWiNh4zK0xXjEsT-SSIXFG5cZ-jJjud8PC2AwOtchsLo_3I_eJDV-vfTfocADUaOOfCOtxr-ML7DY5kOpU8tCWv2Vxnk4bD5t_s0aV-hXs37axA4aY1t54ZQ3zRSbGyB_ykPP7zaB2eG9VayckrCiM73RLb0UDzT2OcM3OpfQ4FUpl-F1tjXkTLBAMILl2lSkq1wvVD1IoYj_rYZYB8s_4160hFQkSCGCkK8K4HtDXt5-VmnqJ9PVc2ezNhCHc",
  Citos:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDuKoVmDljO73ZXbkWiNh4zK0xXjEsT-SSIXFG5cZ-jJjud8PC2AwOtchsLo_3I_eJDV-vfTfocADUaOOfCOtxr-ML7DY5kOpU8tCWv2Vxnk4bD5t_s0aV-hXs37axA4aY1t54ZQ3zRSbGyB_ykPP7zaB2eG9VayckrCiM73RLb0UDzT2OcM3OpfQ4FUpl-F1tjXkTLBAMILl2lSkq1wvVD1IoYj_rYZYB8s_4160hFQkSCGCkK8K4HtDXt5-VmnqJ9PVc2ezNhCHc",
  Machines:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCskD9NLOqMFXm36dmtNhUvmCJg9l_B3aj7ji1wefFsnO5tvT527ZbB7x73jSnW_Jdzywvm0DlmHs7G06mOvBFnOOFh4anUuJCJqdpsZtErdol6MYlstUF-pwlhLsPJ1q7Y3eUpntxGLDvsQiVEgpogHhtajyD7D_Fsh-7qHzCUc6cqFD3yqvDDMhFHFRzunxGuBNSEc46r4YosdMN5_hBhINEA_UI3e88UqPwHPy7g_KGbMb1OrM_57E8U9qAZZqwEUjKEdXN_vL0",
  Needles:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD1fQJmuOt4eBtwmYgdtmNRsMWBSERVQKPWj8vnmkphLGXTYRMMbaJnqcuI2lwqCzrRMQpqJbkzmcwgiI9pNJyys3q7IFm9aDLaY01ohr6RL_NVeoG7HuzzVQGfJJnCsvNeilaTLiEa6bYBFIg3xCTPUmWLdRIT-Ah8LfsPyVo-3SRn5Hn6nkZIp9dygOa4JWFf_W9v29gGocLxJ6WS2VTQOjhKej-CnQ7-gnIMvkt0tkxDBAjxk_KTYqaJFVSeEreuuPH4QXdkSX0",
  Syringes:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD1fQJmuOt4eBtwmYgdtmNRsMWBSERVQKPWj8vnmkphLGXTYRMMbaJnqcuI2lwqCzrRMQpqJbkzmcwgiI9pNJyys3q7IFm9aDLaY01ohr6RL_NVeoG7HuzzVQGfJJnCsvNeilaTLiEa6bYBFIg3xCTPUmWLdRIT-Ah8LfsPyVo-3SRn5Hn6nkZIp9dygOa4JWFf_W9v29gGocLxJ6WS2VTQOjhKej-CnQ7-gnIMvkt0tkxDBAjxk_KTYqaJFVSeEreuuPH4QXdkSX0",
  Dialysers:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAEJTxvyJ3j1HMZquR3CLP5xZcY_K8Oiahjmk5IK11BTB57Lk68TN3TDZ4EJdHIyjJTEdTz6irjyh0QF7VpoAMe0MEGxZEUxpST-yNLSxljedPBZFeOIM-vJ_KuKyOcSvZU6iL8nsWZv9AOhnqomVNtzOzFR3s0EAlneOqH0w0tovWPsLQ3ybi0REyicc0H5eOKlVecjZh9CRUlEhgXodX0ciWaCprn_yUk_lAGyf7rVup19xBeYAZCSLdTykASvSZolOX3wljewbw",
}

/* ────────────────────────────────────────────────────────────────
   Items to feature as "trending" on the home page
   ──────────────────────────────────────────────────────────────── */

const trendingNames = new Set([
  "Haemodialysis Machine 4008S",
  "Haemodialysis Machine 4008S with BPM",
  "FX60 Dialyser",
  "FX80 Dialyser",
  "AV Fistula Needle 16G",
  "AV Set E Blood Tubing",
  "Diasafe Plus Filter",
  "Concentrate Haemodialysis Solution BP 10L",
])

/* ────────────────────────────────────────────────────────────────
   Categories (exported)
   ──────────────────────────────────────────────────────────────── */

export const categories: Category[] = [
  {
    label: "All Products",
    value: "all",
    slug: "",
    description: "Browse our full catalogue of dialysis equipment and supplies.",
    icon: "Package",
  },
  {
    label: "Most Trending",
    value: "trending",
    slug: "trending",
    description: "Our most popular products right now.",
    icon: "Zap",
  },
  ...productsJson.categories,
]

/* ────────────────────────────────────────────────────────────────
   Helpers
   ──────────────────────────────────────────────────────────────── */

/** Turn a product name into a URL-safe id */
function toId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

/** Resolve a URL slug to a category value (or null) */
export function slugToValue(slug: string): string | null {
  const match = categories.find((c) => c.slug === slug)
  return match ? match.value : null
}

/** Get the fallback image url for a category */
export function categoryImage(category: string): string {
  return categoryImages[category] ?? categoryImages["Spare Parts"]
}

/* ────────────────────────────────────────────────────────────────
   Products (exported)
   Build the full array from the JSON, adding computed fields.
   ──────────────────────────────────────────────────────────────── */

export const products: Product[] = productsJson.products.map((item) => {
  const isTrending = trendingNames.has(item.name)
  const img = categoryImages[item.category] ?? categoryImages["Spare Parts"]
  const hsn = (item as Record<string, string>).hsn

  return {
    id: toId(item.name),
    name: item.name,
    category: item.category,
    hsn: hsn ?? undefined,
    trending: isTrending,
    image: img,
    description: `${item.name} — wholesale supply with competitive pricing. Contact us for a quote.`,
    longDescription: `${item.name} is available for immediate or bulk order. As an authorised wholesale supplier, Balaji Health Care provides this product with quality assurance, competitive pricing, and reliable delivery across India.${
      hsn ? `\n\nHSN Code: ${hsn}` : ""
    }`,
    specs: hsn ? [`HSN ${hsn}`] : [],
    features: [
      "Quality tested & assured",
      "Competitive wholesale pricing",
      "Pan-India delivery",
      "Bulk orders welcome",
    ],
  }
})