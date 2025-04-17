"use client";

import { motion } from "framer-motion";
import { Shield, Target, BarChart3, Lightbulb } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Build Brand Trust",
      description:
        "Establish credibility with your audience through consistent messaging, quality content, and a professional online presence.",
    },
    {
      icon: Target,
      title: "More Leads",
      description:
        "Attract more potential customers with targeted strategies, optimized campaigns, and engaging content.",
    },
    {
      icon: BarChart3,
      title: "Higher Conversions",
      description:
        "Turn visitors into loyal customers with clear CTAs, persuasive design, and seamless user experiences.",
    },
    {
      icon: Lightbulb,
      title: "Test Marketing Ideas",
      description:
        "Experiment with innovative campaigns and strategies to see what resonates best with your audience.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
      },
    },
  };

  return (
    <section className="flex w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/50 min-h-screen relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center space-y-4 mb-12 md:mb-16"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
            Platform Benefits
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            Accelerate Your Business Growth
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our platform provides everything you need to grow your business,
            reach more customers, and achieve your goals with less effort and
            better results. Experience the difference with our comprehensive
            solution.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              className="h-full"
            >
              <Card className="h-full border bg-card">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
