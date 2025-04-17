import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import CopyIdButton from "@/components/ui/copy-id-button";

interface ScrapedLink {
  text: string;
  href: string;
  price?: string;
  rating?: number;
  description?: string;
  image?: string;
}

interface ProductPageProps {
  params: {
    id: string;
  };
}

const BASE_PATH = "/products/";

const RatingDisplay = ({ rating }: { rating?: number }) => {
  if (!rating) return null;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-5 w-5",
              i < Math.floor(rating)
                ? "fill-yellow-400 stroke-yellow-400"
                : "fill-muted stroke-muted"
            )}
          />
        ))}
      </div>
      <span className="text-sm font-medium">({rating.toFixed(1)})</span>
    </div>
  );
};

export default async function ProductDetailPage({ params }: ProductPageProps) {
  try {
    const filePath = path.join(process.cwd(), "public", "scraped.json");
    const file = await fs.readFile(filePath, "utf-8");
    const data: { links: ScrapedLink[] } = JSON.parse(file);

    const currentProduct = data.links.find((link) => {
      const urlSegments = link.href.replace(/^\/+|\/+$/g, "").split("/");
      return urlSegments[urlSegments.length - 1] === params.id;
    });

    if (!currentProduct) notFound();

    const productHref = BASE_PATH;
    const productPrice = currentProduct.price?.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );

    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="mb-6">
          <Button asChild variant="ghost" className="gap-2 group">
            <Link href="/products" className="transition-all duration-200">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="group-hover:underline">All Products</span>
            </Link>
          </Button>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image Section */}
          <div className="aspect-square bg-muted rounded-xl overflow-hidden shadow-lg">
            {currentProduct.image ? (
              <Image
                src={currentProduct.image}
                alt={currentProduct.text}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <Skeleton className="w-full h-full rounded-xl" />
            )}
          </div>

          {/* Product Details */}
          <section className="space-y-6">
            <header className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tight scroll-m-20">
                {currentProduct.text}
              </h1>

              <div className="flex flex-wrap items-center gap-4">
                {productPrice && (
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">
                      ${productPrice}
                    </span>
                    <Badge variant="outline" className="text-sm">
                      Tax Included
                    </Badge>
                  </div>
                )}
                <RatingDisplay rating={currentProduct.rating} />
              </div>
            </header>

            {currentProduct.description && (
              <article className="prose prose-lg text-muted-foreground max-w-none">
                {currentProduct.description.split("\n").map((para, i) => (
                  <p key={i} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </article>
            )}

            <footer className="space-y-4">
              <Button
                asChild
                className="gap-2 w-full md:w-auto hover:gap-3 transition-all"
              >
                <a
                  href={productHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shadow-md hover:shadow-lg transition-shadow"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>View on Official Store</span>
                </a>
              </Button>

              <div className="p-4 bg-secondary rounded-lg border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Product Identifier</h3>
                  <CopyIdButton id={params.id} />
                </div>
                <code className="text-sm bg-background p-2 rounded w-full block font-mono break-all">
                  {params.id}
                </code>
              </div>
            </footer>
          </section>
        </div>
      </div>
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to load product details";

    return (
      <div className="max-w-6xl mx-auto px-4 py-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">Product Unavailable</h2>
        <p className="text-muted-foreground">
          {errorMessage} (Error Code: 404-PD)
        </p>
        <div className="flex justify-center gap-3">
          <Button asChild variant="secondary">
            <Link href="/products">Browse Products</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }
}
