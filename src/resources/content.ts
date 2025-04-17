export interface Company {
  logo: string;
  name: string;
  description: string;
  tagline: string;
  role: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface Features {
  display: boolean;
  items: FeatureItem[];
}

export interface TestimonialItem {
  name: string;
  title: string;
  testimonial: string;
}

export interface Testimonials {
  display: boolean;
  items: TestimonialItem[];
}

export interface SocialItem {
  name: string;
  url: string;
  icon: string; // optionally you could restrict this to specific icon names
}

export interface Social {
  display: boolean;
  items: SocialItem[];
}

export interface PricingItem {
  name: string;
  price: string;
  features: string[];
}

export interface Pricing {
  display: boolean;
  items: PricingItem[];
}

// Data

export const company: Company = {
  name: "Mendowa",
  description: "Replace Jira, Slack, and Notion with a single app.",
  tagline: "The all-in-one app for your team.",
  role: "Technology company",
  logo: "/logo.png",
};

export const features: Features = {
  display: true,
  items: [
    {
      title: "All-in-one app",
      description: "Mendowa replaces Jira, Slack, and Notion with a single app.",
    },
    {
      title: "Easy to use",
      description: "Mendowa is designed to be easy to use for everyone.",
    },
    {
      title: "Powerful features",
      description: "Mendowa has powerful features that help you get work done.",
    },
    {
      title: "Customizable",
      description: "Mendowa is customizable to fit your team's needs.",
    },
    {
      title: "Integrations",
      description: "Mendowa integrates with your favorite tools.",
    },
  ],
};

export const testimonials: Testimonials = {
  display: true,
  items: [
    {
      name: "John Doe",
      title: "CEO, Acme Inc.",
      testimonial:
        "Mendowa has transformed the way we work. We are more productive and organized than ever.",
    },
    {
      name: "Jane Smith",
      title: "CTO, Tech Corp.",
      testimonial:
        "Mendowa is the best tool we have ever used. It has everything we need in one place.",
    },
    {
      name: "Bob Johnson",
      title: "Product Manager, Startup Co.",
      testimonial:
        "Mendowa has made our team more efficient and effective. We love it!",
    },
    {
      name: "Alice Brown",
      title: "Designer, Creative Agency.",
      testimonial:
        "Mendowa is a game changer. It has simplified our workflow and improved collaboration.",
    },
    {
      name: "Charlie Green",
      title: "Marketing Director, Global Corp.",
      testimonial:
        "Mendowa has helped us streamline our processes and improve communication. Highly recommend!",
    },
  ],
};

export const social: Social = {
  display: true,
  items: [
    {
      name: "Twitter",
      url: "https://twitter.com/mendowa",
      icon: "twitter",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/mendowa",
      icon: "linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/mendowa",
      icon: "github",
    },
  ],
};

export const pricing: Pricing = {
  display: true,
  items: [
    {
      name: "Free",
      price: "$0",
      features: [
        "Up to 5 users",
        "Basic features",
        "Community support",
        "Limited integrations",
      ],
    },
    {
      name: "Pro",
      price: "$10/user/month",
      features: [
        "Up to 50 users",
        "All features",
        "Priority support",
        "Unlimited integrations",
      ],
    },
    {
      name: "Enterprise",
      price: "Contact us",
      features: [
        "Unlimited users",
        "All features",
        "Dedicated support",
        "Custom integrations",
      ],
    },
  ],
};
