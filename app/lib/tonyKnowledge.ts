

export type TonyKnowledge = {
  greeting: string;
  shortDescription: string;
  about: string;
  services: string[];
  contact: {
    website: string;
    contactPage: string;
    whatsapp: string;
    email: string;
    shortContactAnchor: string;
    shortPricingAnchor?: string;
  };
  quickButtons: string[];
  rules: {
    revealFounderOnlyIfAsked: boolean;
    noInvent: string;
  };
};

const tonyKnowledge: TonyKnowledge = {
  greeting: "Hi, I’m Tony from Brave Moor. How can I help you today?",
  shortDescription: "We help brands grow with clean design, smart marketing and practical AI.",
  about:
    "Brave Moor blends data, design and human-first thinking to help brands grow meaningfully.",
  services: [
    "Website Development",
    "SEO Optimization",
    "Social Media Marketing",
    "Performance Marketing",
    "Content Marketing",
    "Brand Strategy",
    "UI/UX Design",
    "E-commerce Development",
    "WordPress Development",
    "AI Solutions"
  ],
  contact: {
    website: "https://www.bravemoor.com",
    contactPage: "https://www.bravemoor.com/contact",
    whatsapp: "+919911522986",
    email: "tony.support.bm@gmail.com",
    shortContactAnchor: "/contact",
    shortPricingAnchor: "/pricing"
  },
  quickButtons: [
    "Website Development",
    "Social Media Marketing",
    "SEO Help",
    "Pricing",
    "Start a Project"
  ],
  rules: {
    revealFounderOnlyIfAsked: true,
    noInvent: "Do not invent personal/private details."
  }
};

export default tonyKnowledge;
