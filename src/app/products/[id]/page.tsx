// app/products/[id]/page.tsx
import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";

interface ScrapedLink {
  text: string;
  href: string;
}

export default async function ProductDetailPage() {
  const filePath = path.join(process.cwd(), "public", "scraped.json");
  const file = await fs.readFile(filePath, "utf-8");
  const data: { links: ScrapedLink[] } = JSON.parse(file);

  const currentProduct = data.links.find((link) => {
    return link.href === `/products/`;
  });

  if (!currentProduct) {
    notFound(); // built-in Next.js 404
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{currentProduct.text}</h1>
      <a
        href={currentProduct.href}
        className="text-blue-600 hover:underline block mt-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        Go to original link →
      </a>
    </div>
  );
}
