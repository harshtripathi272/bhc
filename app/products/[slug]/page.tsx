import { notFound } from "next/navigation"
import CategoryPageClient from "./category-page-client"
import { categories, slugToValue } from "@/lib/products-data"

export const dynamicParams = false

export function generateStaticParams() {
  return categories
    .filter((category) => category.slug)
    .map((category) => ({ slug: category.slug }))
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const categoryValue = slugToValue(slug)

  if (!categoryValue) {
    notFound()
  }

  return <CategoryPageClient slug={slug} />
}
