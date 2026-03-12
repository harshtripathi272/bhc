import type { Metadata } from "next"
import { categories } from "@/lib/products-data"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    return { title: "Products" }
  }

  const isTrending = slug === "trending"
  const title = isTrending ? "Most Trending Products" : `${category.label} — Wholesale Supply`
  const description = isTrending
    ? "Our most popular dialysis products right now — hemodialysis machines, dialyzers, AV needles, and more. Wholesale pricing with pan-India delivery."
    : `Wholesale ${category.label.toLowerCase()} for dialysis centers — ${category.description} OEM-certified, competitive pricing, pan-India delivery.`

  return {
    title,
    description,
    keywords: [
      `${category.label} wholesale India`,
      `${category.label} dialysis supplier`,
      "wholesale medical equipment Indore",
      "dialysis consumables bulk",
      "Balaji Health Care products",
    ],
    openGraph: {
      title: `${title} — Balaji Health Care`,
      description,
      url: `https://bhcmp.in/products/${slug}`,
    },
  }
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
