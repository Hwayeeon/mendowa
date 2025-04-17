"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "@/resources/content";
import { QuoteIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  if (!testimonials.display) return null;

  return (
    <section className="py-12 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What People Say</h2>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-4xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            loop: true,
            dragFree: true,
          }}
        >
          <CarouselContent className="-ml-2">
            {testimonials.items.map((item, index) => (
              <CarouselItem key={index} className="pl-2 md:basis-1/2">
                <div className="p-2">
                  <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={item.avatar} />
                        <AvatarFallback>{item.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.title}
                        </p>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                      <QuoteIcon className="w-8 h-8 text-muted-foreground mb-4" />
                      <p className="text-lg text-center text-foreground/90 leading-relaxed">
                        `{item.testimonial}`
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-center mt-4">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`w-5 h-5 ${
                              i < item.rating
                                ? "text-yellow-400 fill-current"
                                : "text-muted-foreground/30"
                            }`}
                          />
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="relative mt-8">
            <CarouselPrevious className="absolute left-4 -top-14 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 bg-background hover:bg-muted" />
            <CarouselNext className="absolute right-4 -top-14 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 bg-background hover:bg-muted" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

// Add to your icons library or import from another source
function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}
