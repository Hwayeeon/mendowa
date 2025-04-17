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
  avatar: string;
  rating: number;
}

export interface Testimonials {
  display: boolean;
  items: TestimonialItem[];
}

export interface SocialItem {
  name: string;
  url: string;
  icon: string; 
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
  title: string;
  description: string;
  items: PricingItem[];
  popular: number; 
  price: number; 
  buttonText: string;
  benefitList: string[];
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
      avatar: "https://static.wikia.nocookie.net/gensin-impact/images/6/60/Raiden_Shogun_Card.png/revision/latest/scale-to-width-down/1000?cb=20241007221517",
      title: "CEO, Acme Inc.",
      testimonial:
        "Mendowa has transformed the way we work. We are more productive and organized than ever.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      avatar: "https://static.wikia.nocookie.net/gensin-impact/images/6/60/Raiden_Shogun_Card.png/revision/latest/scale-to-width-down/1000?cb=20241007221517",
      title: "CTO, Tech Corp.",
      testimonial:
        "Mendowa is the best tool we have ever used. It has everything we need in one place.",
      rating: 4,
    },
    {
      name: "Bob Johnson",
      avatar: "https://static.wikia.nocookie.net/gensin-impact/images/6/60/Raiden_Shogun_Card.png/revision/latest/scale-to-width-down/1000?cb=20241007221517",
      title: "Product Manager, Startup Co.",
      testimonial:
        "Mendowa has made our team more efficient and effective. We love it!",
      rating: 5,
    },
    {
      name: "Alice Brown",
      avatar: "https://static.wikia.nocookie.net/gensin-impact/images/6/60/Raiden_Shogun_Card.png/revision/latest/scale-to-width-down/1000?cb=20241007221517",
      title: "Designer, Creative Agency.",
      testimonial:
        "Mendowa is a game changer. It has simplified our workflow and improved collaboration.",
      rating: 4,
    },
    {
      name: "Charlie Green",
      avatar: "https://static.wikia.nocookie.net/gensin-impact/images/6/60/Raiden_Shogun_Card.png/revision/latest/scale-to-width-down/1000?cb=20241007221517",
      title: "Marketing Director, Global Corp.",
      testimonial:
        "Mendowa has helped us streamline our processes and improve communication. Highly recommend!",
      rating: 5,
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
  title: "Simple pricing",
  description: "Choose the plan that suits your team.",
  popular: 1,
  price: 0, // bisa jadi default atau diambil dari plan pertama
  buttonText: "Get Started Free",
  benefitList: ["Flexible plans", "Cancel anytime", "30-day refund policy"],
  items: [
    {
      name: "Free",
      price: "$0",
      features: [
        "1 team member",
        "1 GB storage",
        "Up to 2 pages",
        "Community support",
        "Basic AI assistance",
      ],
    },
    {
      name: "Premium",
      price: "$45",
      features: [
        "Up to 4 team members",
        "8 GB storage",
        "Up to 6 pages",
        "Priority email support",
        "Advanced AI assistance",
        "Sticker Jomok Premium",
      ],
    },
    {
      name: "Enterprise",
      price: "$120",
      features: [
        "Up to 10 team members",
        "20 GB storage",
        "Up to 10 pages",
        "Phone & email support",
        "Custom AI solutions",
      ],
    },
  ],
};
