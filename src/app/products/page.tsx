import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import { scrape } from "@/lib/scraping";

interface ScrapedLink {
  text: string;
  href: string;
}

export default async function ProductsPage() {
  await scrape();

  const filePath = path.join(process.cwd(), "public", "scraped.json");
  const file = await fs.readFile(filePath, "utf-8");
  const data: { scrapedAt: string; links: ScrapedLink[] } = JSON.parse(file);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <p className="text-sm text-gray-500 mb-2">
        Last scraped: {new Date(data.scrapedAt).toLocaleString()}
      </p>
      <ul className="space-y-2">
        {data.links.map((link, idx) => (
          <li key={idx}>
            <Link href={link.href} className="text-blue-600 hover:underline">
              {link.text || link.href}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
