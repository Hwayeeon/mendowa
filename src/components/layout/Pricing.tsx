"use client";

import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { pricing } from "@/resources/content";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  useEffect(() => {}, [billingCycle]);

  const getYearlyPrice = (price: string) => {
    const numericPrice = Number.parseFloat(price.replace("$", ""));
    if (numericPrice === 0) return "$0";
    const yearlyPrice = numericPrice * 12 * 0.8;
    return `$${yearlyPrice}`;
  };

  return (
    <section className="py-20 px-4 bg-accent overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-bold tracking-tight mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {pricing.title}
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {pricing.description}
          </motion.p>

          <motion.div
            className="flex items-center justify-center mt-8 mb-8 space-x-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Label
              htmlFor="billing-toggle"
              className={`${
                billingCycle === "monthly"
                  ? "font-medium"
                  : "text-muted-foreground"
              }`}
            >
              Monthly
            </Label>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Switch
                id="billing-toggle"
                checked={billingCycle === "yearly"}
                onCheckedChange={(checked) =>
                  setBillingCycle(checked ? "yearly" : "monthly")
                }
              />
            </motion.div>
            <Label
              htmlFor="billing-toggle"
              className={`${
                billingCycle === "yearly"
                  ? "font-medium"
                  : "text-muted-foreground"
              }`}
            >
              Yearly{" "}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <Badge
                  variant="outline"
                  className="ml-1 text-emerald-600 bg-emerald-50"
                >
                  Save 20%
                </Badge>
              </motion.div>
            </Label>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {pricing.benefitList.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center text-sm text-muted-foreground"
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              >
                <Check className="h-4 w-4 mr-1 text-emerald-500" />
                <span>{benefit}</span>
                {index < pricing.benefitList.length - 1 && (
                  <span className="mx-2">•</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <Card
                className={`relative flex flex-col h-full ${
                  index === pricing.popular
                    ? "border-primary shadow-lg"
                    : "border-border"
                }`}
              >
                {index === pricing.popular && (
                  <motion.div
                    className="absolute -top-3 left-0 right-0 flex justify-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0px 0px 0px rgba(0,0,0,0)",
                          "0px 0px 8px rgba(147, 51, 234, 0.5)",
                          "0px 0px 0px rgba(0,0,0,0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                      }}
                    >
                      <Badge className="bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    </motion.div>
                  </motion.div>
                )}
                <CardHeader className="pb-8 pt-6">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <motion.div
                    className="mt-2"
                    key={billingCycle} // This forces re-animation when billing cycle changes
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="text-3xl font-bold">
                      {billingCycle === "monthly"
                        ? item.price
                        : getYearlyPrice(item.price)}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      /{billingCycle === "monthly" ? "month" : "year"}
                    </span>
                  </motion.div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {item.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.4 + index * 0.1 + featureIndex * 0.05,
                        }}
                      >
                        <Check className="h-5 w-5 mr-2 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4 pb-6">
                  <motion.div
                    className="w-full"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      className={`w-full ${
                        index === pricing.popular
                          ? "bg-primary hover:bg-primary/90"
                          : "bg-primary/10 text-primary hover:bg-primary/20"
                      }`}
                      variant={
                        index === pricing.popular ? "default" : "outline"
                      }
                    >
                      {pricing.buttonText}
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
