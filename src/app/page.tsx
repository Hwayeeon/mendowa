import Hero from "@/components/layout/Hero";
// import Features from "@/components/layout/Features";
import { company } from "@/resources/content";
import { baseURL } from "@/resources/config";

export const revalidate = 86400;

export async function generateMetadata() {
  const title = company.name;
  const description = company.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {
  return (
    <div className="relative z-10">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: company.name,
            description: company.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(company.name)}`,
            publisher: {
              "@type": "company",
              name: company.name,
              image: {
                "@type": "ImageObject",
                // url: `${baseURL}${company.logo}`,
              },
            },
          }),
        }}
      />
      <Hero />
      {/* <Features /> */}
    </div>
  );
}
