"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Zap, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: CheckCircle,
    title: "Task Management",
    description:
      "Organize and prioritize tasks with ease. Create custom workflows that adapt to your team's unique processes.",
    color: "from-blue-500/20 to-cyan-500/20",
    shadowColor: "shadow-blue-500/10",
  },
  {
    icon: Zap,
    title: "Real-time Collaboration",
    description:
      "Work together seamlessly in real-time. Changes sync instantly across all devices for maximum productivity.",
    color: "from-amber-500/20 to-yellow-500/20",
    shadowColor: "shadow-amber-500/10",
  },
  {
    icon: Users,
    title: "Team Communication",
    description:
      "Stay connected with built-in messaging. Integrated chat, comments, and @mentions keep everyone aligned.",
    color: "from-green-500/20 to-emerald-500/20",
    shadowColor: "shadow-green-500/10",
  },
  {
    icon: TrendingUp,
    title: "Analytics Dashboard",
    description:
      "Track progress and gain insights with powerful analytics. Visualize performance metrics and identify trends.",
    color: "from-purple-500/20 to-violet-500/20",
    shadowColor: "shadow-purple-500/10",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <section
      id="features"
      ref={ref}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-background to-background/80"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Platform Capabilities
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-foreground">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-muted-foreground text-lg">
            Our comprehensive platform provides all the tools your team needs to
            collaborate effectively, manage projects efficiently, and drive
            results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const gridClasses = [
              "md:col-span-7",
              "md:col-span-5",
              "md:col-span-5",
              "md:col-span-7",
            ];

            return (
              <motion.div
                key={index}
                className={`${gridClasses[index]} h-full`}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Card
                  className={`h-full overflow-hidden border bg-gradient-to-br ${feature.color} backdrop-blur-sm ${feature.shadowColor} shadow-xl hover:shadow-2xl transition-all duration-300`}
                >
                  <CardContent className="p-0">
                    <div className="p-6 md:p-8 h-full flex flex-col">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-background/80 backdrop-blur flex items-center justify-center shrink-0">
                          <feature.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-auto pt-4">
                        <motion.button
                          className="text-sm font-medium text-primary flex items-center gap-1 hover:gap-2 transition-all duration-300"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Learn more
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-right"
                          >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </motion.button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
