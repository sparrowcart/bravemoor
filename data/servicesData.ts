// // src/data/servicesData.ts

// export interface ServiceType {
//   slug: string;
//   title: string;
//   shortDescription: string;
//   image: string;
//   content: string;
//   seoTitle?: string;
//   seoDescription?: string;
// }

// export const servicesData: ServiceType[] = [
//   {
//     slug: "brand-strategy",
//     title: "Brand Strategy",
//     shortDescription: "We help define your brand’s identity and long-term vision.",
//     image: "/images/services/brand-strategy.jpg",
//     content: `
//       <h2>Innovative Brand Strategy</h2>
//       <p>Your brand is your story. We craft strategies that connect emotionally and perform commercially.</p>
//     `,
//     seoTitle: "Brand Strategy Services | Brave Moor",
//     seoDescription: "Brave Moor's brand strategy services help your business build an authentic, growth-focused identity."
//   },
//   {
//     slug: "web-design",
//     title: "Web Design & Development",
//     shortDescription: "We design high-performing, visually stunning websites.",
//     image: "/images/services/web-design.jpg",
//     content: `
//       <h2>Website Design & Development</h2>
//       <p>Built for performance, clarity, and conversion — your site becomes your strongest salesperson.</p>
//     `,
//     seoTitle: "Web Design & Development | Brave Moor",
//     seoDescription: "We create websites that drive engagement and deliver measurable results."
//   },
//   {
//     slug: "social-media-marketing",
//     title: "Social Media Marketing",
//     shortDescription: "We grow your audience and brand presence across platforms.",
//     image: "/images/services/social-media.jpg",
//     content: `
//       <h2>Social Media Marketing</h2>
//       <p>Our data-driven campaigns help you build trust, engagement, and visibility.</p>
//     `,
//   }
// ];


// src/data/servicesData.ts
// export interface Service {
//   title: string;
//   slug: string;
//   shortDescription: string;
//   image: string;
//   category?: string;
//   details: {
//     subtitle2: string;
//     description2: string;
//     image2: string;
//     features: string[];
//   };
// }

// export const servicesData: Service[] = [



  

// //   // comment out
// //   {
// //     title: "Brand Strategy & Identity",
// //     slug: "brand-strategy-identity",
// //     shortDescription:
// //       "We craft bold brand identities that tell your story and connect emotionally with your audience.",
// //     image: "/assets/img/service/brand-strategy.jpg",
// //     details: {
// //       subtitle2: "Building Brands That Matter",
// //       description2:
// //         "Our brand strategy process uncovers your unique voice, tone, and visual language to create an identity that inspires trust and loyalty.",
// //       image2: "/assets/img/service/brand-strategy-2.jpg",
// //       features: [
// //         "Logo and visual identity design",
// //         "Brand tone and voice development",
// //         "Competitor and market analysis",
// //         "Brand guidelines and storytelling",
// //       ],
// //     },
// //   },
// //   {
// //     title: "Website Design & Development",
// //     slug: "website-design-development",
// //     shortDescription:
// //       "We design and develop high-performing websites that blend creativity with technology.",
// //     image: "/assets/img/service/web-design.jpg",
// //     details: {
// //       subtitle2: "Modern, Responsive, and Scalable",
// //       description2:
// //         "From design to deployment, our team ensures your website not only looks great but also performs flawlessly across devices and search engines.",
// //       image2: "/assets/img/service/web-design-2.jpg",
// //       features: [
// //         "Custom website design",
// //         "Next.js / React development",
// //         "SEO & performance optimization",
// //         "CMS integration (WordPress / Headless)",
// //       ],
// //     },
    
// //   },
// //   {
// //     title: "Search Engine Optimization (SEO)",
// //     slug: "search-engine-optimization",
// //     shortDescription:
// //       "Increase your visibility and rank higher on Google with our proven SEO strategies.",
// //     image: "/assets/img/service/seo.jpg",
// //     details: {
// //       subtitle2: "Organic Growth That Lasts",
// //       description2:
// //         "We combine technical SEO, content optimization, and backlink strategies to drive sustainable organic traffic.",
// //       image2: "/assets/img/service/seo-2.jpg",
// //       features: [
// //         "Keyword research & competitor analysis",
// //         "On-page & off-page SEO",
// //         "Technical audits & fixes",
// //         "Local SEO optimization",
// //       ],
// //     },
// //   },
// //   {
// //     title: "Social Media Marketing",
// //     slug: "social-media-marketing",
// //     shortDescription:
// //       "We help brands build authentic relationships and grow through impactful social media strategies.",
// //     image: "/assets/img/service/social-media.jpg",
// //     details: {
// //       subtitle2: "Engagement That Converts",
// //       description2:
// //         "Our creative social media campaigns boost brand presence, engagement, and conversions across all major platforms.",
// //       image2: "/assets/img/service/social-media-2.jpg",
// //       features: [
// //         "Instagram & LinkedIn marketing",
// //         "Content planning & calendar creation",
// //         "Community engagement & management",
// //         "Ad campaigns and analytics reporting",
// //       ],
// //     },
// //   },
// //   {
// //     title: "Performance Marketing (Ads)",
// //     slug: "performance-marketing",
// //     shortDescription:
// //       "Data-driven paid campaigns that deliver measurable results and ROI for your business.",
// //     image: "/assets/img/service/ads.jpg",
// //     details: {
// //       subtitle2: "Smart Spending, Big Impact",
// //       description2:
// //         "We design conversion-focused ad campaigns across Google, Meta, and LinkedIn to maximize your marketing budget.",
// //       image2: "/assets/img/service/ads-2.jpg",
// //       features: [
// //         "Google & Meta Ads management",
// //         "Landing page optimization",
// //         "A/B testing & performance tracking",
// //         "Funnel strategy and retargeting",
// //       ],
// //     },
// //   },
// //   {
// //     title: "Content Marketing",
// //     slug: "content-marketing",
// //     shortDescription:
// //       "We create powerful, SEO-optimized content that builds trust and drives engagement.",
// //     image: "/assets/img/service/content.jpg",
// //     details: {
// //       subtitle2: "Words That Sell and Inspire",
// //       description2:
// //         "Our team crafts blogs, web copy, and brand stories that position you as a thought leader in your industry.",
// //       image2: "/assets/img/service/content-2.jpg",
// //       features: [
// //         "Blog writing & keyword optimization",
// //         "Website and landing page copywriting",
// //         "Email marketing campaigns",
// //         "Content calendars & distribution strategy",
// //       ],
// //     },
// //   },
// //   {
// //     title: "UI/UX Design",
// //     slug: "ui-ux-design",
// //     shortDescription:
// //       "We design intuitive interfaces that deliver seamless user experiences across all devices.",
// //     image: "/assets/img/service/uiux.jpg",
// //     details: {
// //       subtitle2: "Design That Feels Effortless",
// //       description2:
// //         "Our design team creates data-informed, conversion-focused user interfaces that elevate digital experiences.",
// //       image2: "/assets/img/service/uiux-2.jpg",
// //       features: [
// //         "Wireframing & prototyping",
// //         "User journey mapping",
// //         "Interactive prototypes (Figma)",
// //         "Design systems & accessibility",
// //       ],
// //     },
// //   },
// //   {
// //     title: "Reputation & Review Management",
// //     slug: "reputation-review-management",
// //     shortDescription:
// //       "Protect and grow your online reputation with proactive review and feedback strategies.",
// //     image: "/assets/img/service/reputation.jpg",
// //     details: {
// //       subtitle2: "Trust That Converts",
// //       description2:
// //         "We monitor, manage, and respond to online reviews across Google, Facebook, and directories to maintain your brand image.",
// //       image2: "/assets/img/service/reputation-2.jpg",
// //       features: [
// //         "Review tracking and responses",
// //         "Reputation repair strategies",
// //         "Customer feedback automation",
// //         "Brand sentiment analysis",
// //       ],
// //     },
// //   },
// //   {
// //     title: "Analytics & Conversion Optimization",
// //     slug: "analytics-conversion-optimization",
// //     shortDescription:
// //       "We use data insights to improve your funnel performance and turn visitors into loyal customers.",
// //     image: "/assets/img/service/analytics.jpg",
// //     details: {
// //       subtitle2: "Data That Drives Growth",
// //       description2:
// //         "We set up tracking systems, heatmaps, and analytics dashboards to improve conversions and marketing ROI.",
// //       image2: "/assets/img/service/analytics-2.jpg",
// //       features: [
// //         "Google Analytics & Tag Manager setup",
// //         "Conversion rate optimization (CRO)",
// //         "Heatmaps & behavior tracking",
// //         "Dashboard reporting & insights",
// //       ],
// //     },
// //   },
// // //comment out

// ];


// export interface Service {
//   title: string;
//   slug: string;
//   shortDescription: string;
//   image: string;
//   category?: string;
//   details: {
//     subtitle: string;
//     subtitle2: string;
//     description2: string;
//     subtitle3: string; // Added for second section
//     description3: string; // Added for second section  
//     image2: string;
//     features: string[];

//   };
// }

// export const servicesData: Service[] = [
//   {
//     title: "Website Development",
//     slug: "website-development",
//     shortDescription: "Beautiful, fast-converting websites that grow your business.",
//     image: "/assets/img/service/web-experience.jpg",
//     details: {
//       subtitle: "Web Experience Engineering:",
//       subtitle2: "Beyond Development: Digital Relationship Building",
//       description2: "At Brave Moor, we believe your website should be your most trusted sales partner. We engineer experiences that don't just look good—they build relationships that last.",
//       subtitle3: "Future-Proof Your Digital Presence",  
//       description3: "While others build for today, we architect for tomorrow. Our Next.js foundations and headless CMS setups ensure your brand stays ahead in the digital race.",
//       image2: "/assets/img/service/web-experience-2.jpg",
//       features: [
//         "Next.js & Headless CMS Architecture",
//         "AI-Personalization Engine Integration", 
//         "Voice Search & Accessibility First Design",
//         "90+ Google PageSpeed Score Guarantee",
//         "Conversion-Focused Micro-Interactions",
//         "Progressive Web App (PWA) Capabilities"
//       ],
//     },
//   },
  
//   ,
//   {
//     title: "Social Media Marketing", 
//     slug: "social-media-marketing",
//     shortDescription: "Let AI handle the repetitive work while we focus on creative strategy. Smart automation that feels surprisingly human.",
//     image: "/assets/img/service/ai-automation.jpg",
//     details: {
//       subtitle: "AI Marketing Automation:",
//       subtitle2: "Where Artificial Intelligence Meets Human Connection",
//       description2: "Brave Moor's AI systems don't just automate—they connect. Our ChatGPT-powered bots understand context, emotion, and business goals to create genuine customer relationships.",
//       subtitle3: "Marketing That Learns and Grows With You",
//       description3: "Unlike rigid automation tools, our AI systems evolve with your business. They learn from every interaction to become smarter, more personalized, and more effective over time.",
//       image2: "/assets/img/service/ai-automation-2.jpg",
//       features: [
//         "ChatGPT-Powered Customer Service",
//         "Predictive Customer Behavior Analysis",
//         "Personalized Content Generation",
//         "Smart Lead Scoring & Nurturing",
//         "Multi-Channel Campaign Management", 
//         "Real-Time Performance Optimization"
//       ],
//     },
//   },
//   {
//   title: "Google/Facebook Ads", 
//   slug: "performance-ads",
//   shortDescription: "Smart advertising that finds your ideal customers across Google, Facebook, and Instagram. We only spend where it makes money.",
//   image: "/assets/img/service/performance-ads.jpg",
//   details: {
//     subtitle: "Performance Advertising That Actually Performs",
//     subtitle2: "Beyond Clicks: Revenue-Focused Ad Strategy",
//     description2: "At Brave Moor, we don't just run ads—we run profit experiments. Every rupee spent is tracked to actual revenue, ensuring your advertising budget works harder than ever before.",
//     subtitle3: "AI-Optimized Bidding & Audience Targeting",
//     description3: "Our systems continuously learn from campaign performance to find your most valuable customers. We automatically shift budgets to highest-converting audiences and platforms in real-time.",
//     image2: "/assets/img/service/performance-ads-2.jpg",
//     features: [
//       "Multi-Platform Ad Management (Google/FB/Instagram)",
//       "AI-Powered Bid Optimization",
//       "Custom Audience Building & Retargeting",
//       "Conversion Tracking & ROI Analysis",
//       "A/B Testing & Creative Optimization",
//       "Real-Time Budget Reallocation"
//     ],
//   },
// },
// {
//   title: "Email Marketing", 
//   slug: "email-marketing",
//   shortDescription: "Turn one-time buyers into lifelong fans. Automated email journeys that feel personal, build trust, and drive repeat sales.",
//   image: "/assets/img/service/email-marketing.jpg",
//   details: {
//     subtitle: "Email Relationship Marketing",
//     subtitle2: "Where Automation Feels Like Personal Attention",
//     description2: "Brave Moor's email systems don't feel automated—they feel attentive. We create email journeys that understand customer behavior and respond with relevant, valuable content at exactly the right time.",
//     subtitle3: "From Welcome Series to Win-Back Campaigns",
//     description3: "We architect complete email ecosystems that nurture relationships from first hello to loyal advocacy. Every email serves a strategic purpose in building trust and driving revenue.",
//     image2: "/assets/img/service/email-marketing-2.jpg",
//     features: [
//       "Automated Welcome & Onboarding Sequences",
//       "Behavior-Triggered Email Campaigns",
//       "Personalized Product Recommendations",
//       "Segmentation & Lifecycle Marketing",
//       "Win-Back & Reactivation Campaigns",
//       "Performance Analytics & Optimization"
//     ],
//   },
// },
// {
//   title: "Social Media Marketing", 
//   slug: "social-media-marketing",
//   shortDescription: "Build engaged communities that drive sales and brand loyalty. We don't just post content—we create conversations that convert.",
//   image: "/assets/img/service/social-media.jpg",
//   details: {
//     subtitle: "Social Media Growth Systems",
//     subtitle2: "Beyond Posts: Building Communities That Sell",
//     description2: "At Brave Moor, we transform social media from broadcasting to relationship building. We create content ecosystems where your customers become your most powerful brand advocates.",
//     subtitle3: "Algorithm Understanding Meets Human Connection",
//     description3: "While we master platform algorithms for maximum reach, we never forget that real connections drive real business. Our approach blends data-driven strategy with genuine human engagement.",
//     image2: "/assets/img/service/social-media-2.jpg",
//     features: [
//       "Content Strategy & Calendar Planning",
//       "Community Management & Engagement",
//       "Social Media Advertising & Retargeting",
//       "Influencer Partnership Programs",
//       "Social Commerce Integration",
//       "Performance Analytics & ROI Tracking"
//     ],
//   },
// },
// {
//   title: "SEO Services", 
//   slug: "seo-services",
//   shortDescription: "Get found when customers search for what you offer. Not just rankings—relevant traffic that converts into revenue.",
//   image: "/assets/img/service/seo-services.jpg",
//   details: {
//     subtitle: "Search Engine Domination",
//     subtitle2: "From Search Results to Sales Conversations",
//     description2: "Brave Moor's SEO approach goes beyond rankings to focus on qualified traffic that actually converts. We optimize for search intent that matches commercial intent.",
//     subtitle3: "Sustainable Organic Growth Strategy",
//     description3: "While others chase quick wins, we build SEO foundations that deliver compounding returns over time. Our technical, content, and authority-building strategies work together for long-term dominance.",
//     image2: "/assets/img/service/seo-services-2.jpg",
//     features: [
//       "Technical SEO Audit & Optimization",
//       "Keyword Research & Content Strategy",
//       "Local SEO & Google Business Profile",
//       "Link Building & Digital PR",
//       "E-commerce SEO Optimization",
//       "Performance Tracking & Reporting"
//     ],
//   },
// }
//   ,
//   {
//     title: "AI Video Generation Studio",
//     slug: "ai-video-generation",
//     shortDescription: "Create stunning video content without cameras, crews, or complexity. AI-powered video that captures attention and converts.",
//     image: "/assets/img/service/ai-video.jpg",
//     details: {
//       subtitle: "AI Video Generation:",
//       subtitle2: "Hollywood-Quality Videos Without Hollywood Budgets",
//       description2: "Brave Moor's AI video studio brings your brand stories to life in ways that were impossible yesterday. From AI avatars to text-to-video magic—we make video creation accessible and effective.",
//       subtitle3: "Personalized Video at Scale",
//       description3: "Imagine sending personalized video messages to thousands of customers. Our AI systems make it possible, creating unique videos that feel one-on-one while reaching millions.",
//       image2: "/assets/img/service/ai-video-2.jpg",
//       features: [
//         "AI Avatar Video Creation",
//         "Text-to-Video Content Generation", 
//         "Personalized Video Messaging",
//         "Social Media Video Optimization",
//         "Voice Synthesis & Dubbing",
//         "Automated Video SEO & Distribution"
//       ],
//     },
//   },
//   {
//     title: "Graphic Design & Visual Storytelling",
//     slug: "graphic-design",
//     shortDescription: "Visuals that don't just decorate—they communicate. Bold designs that tell your brand story and drive action.",
//     image: "/assets/img/service/graphic-design.jpg",
//     details: {
//       subtitle: "Graphic Design:",
//       subtitle2: "Where Art Meets Strategy",
//       description2: "At Brave Moor, we believe great design should do more than look pretty—it should work hard for your business. Every color, font, and layout choice serves a strategic purpose.",
//       subtitle3: "Design Systems That Scale With Your Ambitions", 
//       description3: "We don't just create one-off designs. We build complete visual systems that grow with your brand, maintaining consistency while allowing for creative evolution.",
//       image2: "/assets/img/service/graphic-design-2.jpg",
//       features: [
//         "AI-Assisted Design Creation",
//         "Brand Visual Identity Systems",
//         "Social Media Visual Content",
//         "Motion Graphics & Animation", 
//         "Print & Digital Design Suite",
//         "Design Asset Management"
//       ],
//     },
//   },
//   {
//     title: "Voice AI & Conversational Marketing",
//     slug: "voice-ai",
//     shortDescription: "Prepare your brand for the voice-first revolution. Alexa skills, voice search optimization, and audio branding that speaks volumes.",
//     image: "/assets/img/service/voice-ai.jpg",
//     details: {
//       subtitle: "Voice AI:",
//       subtitle2: "The Future Speaks—Is Your Brand Listening?",
//       description2: "As voice assistants become household staples, Brave Moor helps your brand find its voice—literally. We create audio experiences that build familiarity and trust through sound.",
//       subtitle3: "Conversational Commerce Is Here",
//       description3: "Soon, customers will order products through conversation. We're building the voice commerce infrastructure that will make your brand the easiest choice when they do.",
//       image2: "/assets/img/service/voice-ai-2.jpg",
//       features: [
//         "Voice Search Optimization",
//         "Alexa/Google Assistant Brand Skills", 
//         "Audio Branding & Sonic Identity",
//         "Podcast Production & Strategy",
//         "Voice Commerce Integration",
//         "Multilingual Voice AI Systems"
//       ],
//     },
//   },
//   {
//     title: "Metaverse & Virtual Brand Experiences",
//     slug: "metaverse",
//     shortDescription: "Claim your space in the virtual world. Immersive brand experiences that blur the lines between digital and physical reality.",
//     image: "/assets/img/service/metaverse.jpg",
//     details: {
//       subtitle: "Metaverse:",
//       subtitle2: "Building Brands in Virtual Worlds",
//       description2: "Brave Moor is pioneering the next frontier of digital marketing. We create virtual brand experiences that engage customers in entirely new dimensions of interaction.",
//       subtitle3: "From Virtual Events to Digital Real Estate",
//       description3: "Whether it's hosting virtual product launches or acquiring digital real estate, we help your brand establish presence where tomorrow's customers are already spending time.",
//       image2: "/assets/img/service/metaverse-2.jpg",
//       features: [
//         "Virtual Event Hosting & Management",
//         "NFT-Based Loyalty Programs", 
//         "3D Product Showcases",
//         "Digital Real Estate Strategy",
//         "Avatar-Based Customer Service",
//         "Cross-Platform Virtual Experiences"
//       ],
//     },
//   },
//   {
//     title: "AR/VR Experience Development",
//     slug: "ar-vr",
//     shortDescription: "Bring products to life with augmented and virtual reality. Interactive experiences that turn browsers into believers.",
//     image: "/assets/img/service/ar-vr.jpg",
//     details: {
//       subtitle: "AR/VR:",
//       subtitle2: "Where Digital and Physical Worlds Collide",
//       description2: "Brave Moor creates AR/VR experiences that don't just wow—they convert. From virtual try-ons to interactive brand stories, we make the impossible possible.",
//       subtitle3: "Shopping Reimagined Through Technology",
//       description3: "Imagine customers trying your products in their own space before buying. We're making that reality today, reducing returns and increasing confidence in every purchase.",
//       image2: "/assets/img/service/ar-vr-2.jpg",
//       features: [
//         "Augmented Reality Product Try-Ons",
//         "Virtual Store Tours & Experiences", 
//         "Interactive 3D Brand Presentations",
//         "AR-Based Social Media Filters",
//         "VR Training & Demonstration",
//         "Cross-Platform AR/VR Development"
//       ],
//     },
//   },
//   {
//     title: "Blockchain & Web3 Marketing",
//     slug: "blockchain-web3",
//     shortDescription: "Navigate the decentralized web with confidence. NFT projects, DAO communities, and crypto branding that builds trust in trustless environments.",
//     image: "/assets/img/service/blockchain.jpg",
//     details: {
//       subtitle: "Blockchain Web3:",
//       subtitle2: "Marketing in the Age of Decentralization",
//       description2: "Brave Moor understands that Web3 requires a new marketing playbook. We help blockchain projects build communities that believe in your vision, not just your token price.",
//       subtitle3: "Building Trust in Trustless Systems",
//       description3: "In a world of smart contracts and decentralized autonomy, human connection still matters most. We bridge the gap between cutting-edge tech and relatable storytelling.",
//       image2: "/assets/img/service/blockchain-2.jpg",
//       features: [
//         "NFT Marketing & Community Building",
//         "DAO Governance & Communication", 
//         "Crypto Project Branding",
//         "DeFi Platform User Acquisition",
//         "Blockchain Education Content",
//         "Web3 Social Media Strategy"
//       ],
//     },
//   },
//   {
//     title: "Data Intelligence & BI Dashboards",
//     slug: "data-intelligence",
//     shortDescription: "Turn data overload into profit clarity. Beautiful dashboards and insights that everyone in your team can understand and act upon.",
//     image: "/assets/img/service/data-intelligence.jpg",
//     details: {
//       subtitle: "Data Intelligence:",
//       subtitle2: "From Data Overload to Business Clarity",
//       description2: "At Brave Moor, we believe data should serve humans, not confuse them. We transform complex analytics into simple, actionable insights that drive real business growth.",
//       subtitle3: "Predictive Intelligence for Proactive Decisions",
//       description3: "While others tell you what happened yesterday, we help you predict what will happen tomorrow. Our AI-driven insights give you the confidence to make bold moves.",
//       image2: "/assets/img/service/data-intelligence-2.jpg",
//       features: [
//         "Real-Time Business Intelligence",
//         "Competitor Tracking & Analysis", 
//         "Market Trend Prediction",
//         "Custom Dashboard Development",
//         "Automated Reporting Systems",
//         "Data Visualization & Storytelling"
//       ],
//     },
//   },
//   {
//     title: "Conversion Rate Optimization",
//     slug: "conversion-optimization",
//     shortDescription: "Turn more visitors into customers without spending more on ads. Data-driven optimization that maximizes every rupee of your marketing spend.",
//     image: "/assets/img/service/conversion-optimization.jpg",
//     details: {
//       subtitle: "Conversion Optimization:",
//       subtitle2: "Where Science Meets Shopping Psychology",
//       description2: "Brave Moor's CRO approach combines hard data with deep understanding of human behavior. We don't just guess what works—we know what converts.",
//       subtitle3: "Small Changes, Big Impact on Your Bottom Line",
//       description3: "Sometimes moving a button or changing a headline can increase revenue by 30%. We find those opportunities through rigorous testing and customer journey analysis.",
//       image2: "/assets/img/service/conversion-optimization-2.jpg",
//       features: [
//         "A/B Testing & Multivariate Testing",
//         "User Behavior Analysis & Heatmaps", 
//         "Funnel Optimization & Leak Repair",
//         "Checkout Process Optimization",
//         "Mobile Conversion Optimization",
//         "Personalization & Dynamic Content"
//       ],
//     },
//   },
//   {
//     title: "SEO Services",
//     slug: "seo-services",
//     shortDescription: "Dominate your local market with SEO strategies that put you on the map—literally. Get found when customers nearby are ready to buy.",
//     image: "/assets/img/service/local-seo.jpg",
//     details: {
//       subtitle: "Local SEO:",
//       subtitle2: "Winning the Battle for Local Customers",
//       description2: "Brave Moor specializes in local SEO strategies that make your business the obvious choice when customers search for what you offer in your area.",
//       subtitle3: "From Map Pack to Cash Register",
//       description3: "We don't just get you to the top of local search results—we optimize every touchpoint to turn local searches into loyal, repeat customers.",
//       image2: "/assets/img/service/local-seo-2.jpg",
//       features: [
//         "Google Business Profile Optimization",
//         "Local Citation Building & Cleanup", 
//         "Map Pack Ranking Strategies",
//         "Local Review Management",
//         "Neighborhood-Specific Content",
//         "Local Link Building & Partnerships"
//       ],
//     },
//   },
//   {
//     title: "International Market Expansion",
//     slug: "international-expansion",
//     shortDescription: "Take your brand global without losing local relevance. Multi-language, multi-cultural marketing that resonates across borders.",
//     image: "/assets/img/service/international.jpg",
//     details: {
//       subtitle: "International Expansion:",
//       subtitle2: "Think Global, Act Local—We Make It Possible",
//       description2: "Brave Moor helps brands scale internationally while maintaining the cultural sensitivity and local relevance that builds trust in new markets.",
//       subtitle3: "Borderless Growth With Local Soul",
//       description3: "We handle the complexity of international marketing—from multi-language SEO to cross-border payments—so you can focus on serving new customers worldwide.",
//       image2: "/assets/img/service/international-2.jpg",
//       features: [
//         "Multi-Language SEO & Content",
//         "Global Payment Gateway Setup", 
//         "Cross-Cultural Marketing Strategy",
//         "International Social Media Management",
//         "Localized Customer Service",
//         "Global Shipping & Logistics Integration"
//       ],
//     },
//   },
//   {
//   title: "Community Building & Management",
//   slug: "community-building",
//   shortDescription: "Turn customers into brand advocates. Build engaged communities that grow your business through word-of-mouth and authentic connections.",
//   image: "/assets/img/service/community.jpg",
//   details: {
//     subtitle: "Community Building:",
//     subtitle2: "Where Customers Become Your Biggest Fans",
//     description2: "At Brave Moor, we believe the strongest marketing happens between customers, not to them. We build communities that create their own momentum and growth.",
//     subtitle3: "Brand Advocacy on Autopilot", 
//     description3: "When customers feel like they belong to something bigger, they become your most effective sales team. We create systems that nurture this organic growth daily.",
//     image2: "/assets/img/service/community-2.jpg",
//     features: [
//       "Brand Community Platform Setup",
//       "User-Generated Content Systems", 
//       "Loyalty & Referral Programs",
//       "Moderation & Engagement Strategy",
//       "Community Event Management",
//       "Advocacy & Ambassador Programs"
//     ],
//   },
// },
// {
//   title: "IoT Marketing Integration",
//   slug: "iot-marketing",
//   shortDescription: "Connect your marketing to the physical world. Use smart device data to create hyper-personalized, context-aware customer experiences.",
//   image: "/assets/img/service/iot.jpg",
//   details: {
//     subtitle: "IoT Marketing:",
//     subtitle2: "When Your Products Start Marketing Themselves",
//     description2: "Brave Moor pioneers IoT marketing that turns product usage data into meaningful customer conversations. Your devices become your most insightful marketers.",
//     subtitle3: "Smart Data for Smarter Relationships",
//     description3: "From location-based offers to usage-triggered support, we help your products communicate with customers in ways that feel helpful, not intrusive.",
//     image2: "/assets/img/service/iot-2.jpg",
//     features: [
//       "Smart Device Data Utilization",
//       "Location-Based Marketing", 
//       "Usage-Triggered Communications",
//       "Predictive Maintenance Marketing",
//       "Connected Customer Experiences",
//       "IoT Security & Privacy Compliance"
//     ],
//   },
// },
// {
//   title: "Quantum Computing Prep",
//   slug: "quantum-prep",
//   shortDescription: "Future-proof your business for the quantum era. Build marketing systems ready for the next computing revolution.",
//   image: "/assets/img/service/quantum.jpg",
//   details: {
//     subtitle: "Quantum Prep:",
//     subtitle2: "Preparing for Tomorrow's Technology Today",
//     description2: "While quantum computing might seem distant, Brave Moor is already building marketing infrastructures that will thrive in the post-quantum world.",
//     subtitle3: "Stay Ahead of the Technology Curve",
//     description3: "We ensure your data systems, security protocols, and customer analytics are quantum-ready, giving you first-mover advantage when the revolution comes.",
//     image2: "/assets/img/service/quantum-2.jpg",
//     features: [
//       "Quantum-Resistant Security",
//       "Future-Proof Data Structures", 
//       "Next-Gen Customer Analytics",
//       "Quantum Computing Strategy",
//       "Encryption Migration Planning",
//       "Quantum Marketing Readiness Audit"
//     ],
//   },
// },
// {
//   title: "Marketing Department as a Service",
//   slug: "marketing-department-service",
//   shortDescription: "Get a complete marketing team without the hiring headache. We become your on-demand CMO, strategists, and executors.",
//   image: "/assets/img/service/marketing-department.jpg",
//   details: {
//     subtitle: "Marketing Department Service:",
//     subtitle2: "Your Complete Marketing Team, Without the Overhead",
//     description2: "Brave Moor's MDaaS gives you enterprise-level marketing expertise without enterprise-level costs. We scale with your needs and budget.",
//     subtitle3: "From Strategy to Execution, We're Your Team",
//     description3: "While you focus on running your business, we handle everything marketing—from big-picture strategy to daily campaign management and optimization.",
//     image2: "/assets/img/service/marketing-department-2.jpg",
//     features: [
//       "Dedicated Marketing Team",
//       "Monthly CMO Advisory & Strategy", 
//       "Campaign Management & Execution",
//       "Performance Reporting & Analysis",
//       "Budget Management & Optimization",
//       "Team Training & Process Setup"
//     ],
//   },
// },
// {
//   title: "Business Exit Strategy Prep",
//   slug: "exit-strategy",
//   shortDescription: "Make your business acquisition-ready. Optimize valuation, streamline operations, and position for successful exit or investment.",
//   image: "/assets/img/service/exit-strategy.jpg",
//   details: {
//     subtitle: "Exit Strategy:",
//     subtitle2: "Building Businesses That Investors Fight For",
//     description2: "At Brave Moor, we help founders transform their life's work into attractive investment opportunities. We prepare every aspect of your business for successful transition.",
//     subtitle3: "Your Legacy, Perfectly Packaged",
//     description3: "From financial modeling to brand positioning, we ensure your business tells a compelling story that justifies premium valuation and attracts ideal acquirers.",
//     image2: "/assets/img/service/exit-strategy-2.jpg",
//     features: [
//       "Valuation Optimization",
//       "Investor Pitch Preparation", 
//       "Financial Modeling & Projections",
//       "Due Diligence Preparation",
//       "Brand Positioning for Exit",
//       "Acquisition Readiness Audit"
//     ],
//   },
// },
// {
//   title: "Startup Growth Accelerator",
//   slug: "startup-accelerator",
//   shortDescription: "Go from zero to market dominance. Complete growth systems for startups ready to scale rapidly and sustainably.",
//   image: "/assets/img/service/startup-accelerator.jpg",
//   details: {
//     subtitle: "Startup Accelerator:",
//     subtitle2: "From First Customer to Market Leader",
//     description2: "Brave Moor's startup accelerator provides the strategic foundation and execution firepower that turns ambitious ideas into market-defining companies.",
//     subtitle3: "Growth Engineered for Scale",
//     description3: "We build marketing machines that don't just generate initial traction—they create sustainable growth systems that compound over time.",
//     image2: "/assets/img/service/startup-accelerator-2.jpg",
//     features: [
//       "Go-to-Market Strategy",
//       "Funding Pitch Deck Creation", 
//       "Product-Market Fit Analysis",
//       "Early Adopter Acquisition",
//       "Scale-Ready Marketing Systems",
//       "Investor Relationship Building"
//     ],
//   },
// },
// {
//   title: "Sustainability & Green Marketing",
//   slug: "sustainability-marketing",
//   shortDescription: "Turn your environmental values into competitive advantage. Authentic green marketing that builds trust and attracts conscious consumers.",
//   image: "/assets/img/service/sustainability.jpg",
//   details: {
//     subtitle: "Sustainability Marketing:",
//     subtitle2: "Where Purpose Meets Profit",
//     description2: "Brave Moor helps brands communicate their sustainability efforts in ways that feel genuine and compelling, turning environmental responsibility into business advantage.",
//     subtitle3: "Green is the New Black",
//     description3: "Today's consumers choose brands that align with their values. We help you tell your sustainability story in ways that build loyalty and drive sales.",
//     image2: "/assets/img/service/sustainability-2.jpg",
//     features: [
//       "Eco-Friendly Brand Positioning",
//       "Carbon-Neutral Campaign Planning", 
//       "Green Certification Marketing",
//       "Sustainability Reporting",
//       "Environmental Impact Communication",
//       "Conscious Consumer Engagement"
//     ],
//   },
// },
// {
//   title: "Content Intelligence & Strategy",
//   slug: "content-intelligence",
//   shortDescription: "Create content that search engines love and humans can't resist. AI-powered content strategy that dominates your niche.",
//   image: "/assets/img/service/content-intelligence.jpg",
//   details: {
//     subtitle: "Content Intelligence:",
//     subtitle2: "Content That Ranks, Converts, and Builds Authority",
//     description2: "Brave Moor's content intelligence systems identify exactly what your audience wants to read, then creates it better than anyone else in your space.",
//     subtitle3: "From Content Creation to Conversion Engine",
//     description3: "We don't just create content—we build content ecosystems that work together to educate, engage, and convert your ideal customers at every touchpoint.",
//     image2: "/assets/img/service/content-intelligence-2.jpg",
//     features: [
//       "AI-Powered Content Strategy",
//       "SEO-Optimized Content Creation", 
//       "Content Performance Analytics",
//       "Competitor Content Analysis",
//       "Content Distribution & Amplification",
//       "Conversion-Focused Content Optimization"
//     ],
//   },
// }


// ];


export interface Service {
  title: string;
  slug: string;
  shortDescription: string;
  image: string;
  category?: string;
  details: {
    subtitle: string;
    subtitle2: string;
    description2: string;
    subtitle3: string;
    description3: string;
    image2: string;
    features: string[];
  };
}

// ok ok 

export const servicesData: Service[] = 
[
{
  title: "Human-Centered Strategy",
  slug: "human-centered-strategy",
  shortDescription:
    "We design for emotion, memory, and action — creating experiences that people truly connect with.",
  image: "/assets/img/service/human.jpg",
  category: "philosophy",
  details: {
    subtitle: "Empathy. Design. Purpose.",
    subtitle2: "Understanding People, Not Just Pixels",
    description2:
      "At Brave Moor, every strategy begins with empathy. We study user intent, emotional triggers, and decision psychology — to craft digital journeys that resonate, not just perform. We believe the best design speaks to the heart first, and then to logic.",
    subtitle3: "Building Brands That People Remember",
    description3:
      "From brand voice to UI micro-details, every interaction is shaped to form trust and recall. Because your users aren’t metrics — they’re relationships waiting to grow.",
    image2: "/assets/img/service/human-2.jpg",
    features: [
      "Audience Psychology Mapping",
      "Emotion-Driven Content Strategy",
      "Behavioral Design Frameworks",
      "Empathy-Led UX Research",
      "Brand Recall Enhancement Tactics",
      "User Journey Personalization",
    ],
  },
},
{
  title: "Conversion-Focused Design",
  slug: "conversion-focused-design",
  shortDescription:
    "Every layout, word, and pixel is crafted to guide action and drive measurable results.",
  image: "/assets/img/service/conve.jpg",
  category: "method",
  details: {
    subtitle: "Design. Data. Results.",
    subtitle2: "Turning Attention into Action",
    description2:
      "We merge creativity with data — building designs that do more than look good. Each section is mapped for conversion psychology, visual hierarchy, and clarity, ensuring your brand speaks clearly and converts effortlessly.",
    subtitle3: "Performance Meets Aesthetic",
    description3:
      "Our process aligns storytelling and structure — so your visitors enjoy the experience while you enjoy the results. Design is not decoration; it’s direction.",
    image2: "/assets/img/service/conve-2.jpg",
    features: [
      "Conversion Rate Optimization (CRO) Principles",
      "Heatmap & Scroll-Behavior Testing",
      "A/B Tested Call-to-Actions (CTAs)",
      "Optimized Visual Hierarchy",
      "Copywriting that Converts",
      "Frictionless Mobile Experience",
    ],
  },
},
{
  title: "Built for the Long Run",
  slug: "built-for-the-long-run",
  shortDescription:
    "We don’t disappear after launch. We evolve with your brand to fuel continuous growth.",
  image: "/assets/img/service/built.jpg",
  category: "commitment",
  details: {
    subtitle: "Growth. Trust. Future.",
    subtitle2: "Beyond Launch: The Ongoing Journey",
    description2:
      "At Brave Moor, we see your website and brand as living systems — not one-time deliverables. We stay alongside your growth curve, improving performance, adapting strategy, and scaling with your audience over time.",
    subtitle3: "Sustainable Growth, Modern Foundations",
    description3:
      "We use future-ready frameworks like Next.js and scalable CMS setups to make sure your brand evolves with technology, not against it. Your success is our long-term metric.",
    image2: "/assets/img/service/built-2.jpg",
    features: [
      "Continuous Optimization & Maintenance Plans",
      "Future-Ready Tech Stack (Next.js / Headless CMS)",
      "Real-Time Analytics & Performance Insights",
      "Content Update & SEO Tracking Systems",
      "Ongoing Growth Consultation",
      "Dedicated Support & Partnership Model",
    ],
  },
},


  // home page 3 tile end 


  // CATEGORY 1: FOUNDATION (8)
  {
    title: "Website Development",
    slug: "website-development",
    shortDescription: "Beautiful, fast-converting websites that grow your business.",
    image: "/assets/img/service/web-experience.jpg",
    category: "foundation",
    details: {
      subtitle: "Web Experience Engineering:",
      subtitle2: "Beyond Development: Digital Relationship Building",
      description2: "At Brave Moor, we believe your website should be your most trusted sales partner. We engineer experiences that don’t just look good — they build lasting trust and relationships. that last.",
      subtitle3: "Future-Proof Your Digital Presence",
      description3: "While others build for today, we architect for tomorrow. Our Next.js foundations and headless CMS setups ensure your brand stays ahead in the digital race.",
      image2: "/assets/img/service/web-experience-2.jpg",
      features: [
        "Next.js & Headless CMS Architecture",
        "AI-Personalization Engine Integration",
        "Voice Search & Accessibility First Design",
        "90+ Google PageSpeed Score Guarantee",
        "Conversion-Focused Micro-Interactions",
        "Progressive Web App (PWA) Capabilities"
      ],
    },
  },
  {
    title: "SEO Services",
    slug: "seo-services",
    shortDescription: "Get found when customers search for what you offer. Not just rankings—relevant traffic that converts into revenue.",
    image: "/assets/img/service/seo-services.jpg",
    category: "foundation",
    details: {
      subtitle: "Search Engine Domination",
      subtitle2: "From Search Results to Sales Conversations",
      description2: "Brave Moor's SEO approach goes beyond rankings to focus on qualified traffic that actually converts. We optimize for search intent that matches commercial intent.",
      subtitle3: "Sustainable Organic Growth Strategy",
      description3: "While others chase quick wins, we build SEO foundations that deliver compounding returns over time. Our technical, content, and authority-building strategies work together for long-term dominance.",
      image2: "/assets/img/service/seo-services-2.jpg",
      features: [
        "Technical SEO Audit & Optimization",
        "Keyword Research & Content Strategy",
        "Local SEO & Google Business Profile",
        "Link Building & Digital PR",
        "E-commerce SEO Optimization",
        "Performance Tracking & Reporting"
      ],
    },
  },
  {
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    shortDescription: "Build engaged communities that drive sales and brand loyalty. We don't just post content—we create conversations that convert.",
    image: "/assets/img/service/social-media.jpg",
    category: "foundation",
    details: {
      subtitle: "Social Media Growth Systems",
      subtitle2: "Beyond Posts: Building Communities That Sell",
      description2: "At Brave Moor, we transform social media from broadcasting to relationship building. We create content ecosystems where your customers become your most powerful brand advocates.",
      subtitle3: "Algorithm Understanding Meets Human Connection",
      description3: "While we master platform algorithms for maximum reach, we never forget that real connections drive real business. Our approach blends data-driven strategy with genuine human engagement.",
      image2: "/assets/img/service/social-media-2.jpg",
      features: [
        "Content Strategy & Calendar Planning",
        "Community Management & Engagement",
        "Social Media Advertising & Retargeting",
        "Influencer Partnership Programs",
        "Social Commerce Integration",
        "Performance Analytics & ROI Tracking"
      ],
    },
  },
  {
    title: "Email Marketing",
    slug: "email-marketing",
    shortDescription: "Turn one-time buyers into lifelong fans. Automated email journeys that feel personal, build trust, and drive repeat sales.",
    image: "/assets/img/service/email-marketing.jpg",
    category: "foundation",
    details: {
      subtitle: "Email Relationship Marketing",
      subtitle2: "Where Automation Feels Like Personal Attention",
      description2: "Brave Moor's email systems don't feel automated—they feel attentive. We create email journeys that understand customer behavior and respond with relevant, valuable content at exactly the right time.",
      subtitle3: "From Welcome Series to Win-Back Campaigns",
      description3: "We architect complete email ecosystems that nurture relationships from first hello to loyal advocacy. Every email serves a strategic purpose in building trust and driving revenue.",
      image2: "/assets/img/service/email-marketing-2.jpg",
      features: [
        "Automated Welcome & Onboarding Sequences",
        "Behavior-Triggered Email Campaigns",
        "Personalized Product Recommendations",
        "Segmentation & Lifecycle Marketing",
        "Win-Back & Reactivation Campaigns",
        "Performance Analytics & Optimization"
      ],
    },
  },
  {
    title: "Google/Facebook Ads",
    slug: "google-ads",
    shortDescription: "Smart advertising that finds your ideal customers across Google, Facebook, and Instagram. We only spend where it makes money.",
    image: "/assets/img/service/performance-ads.jpg",
    category: "foundation",
    details: {
      subtitle: "Revenue-Driven Ads",
      subtitle2: "Beyond Clicks: Revenue-Focused Ad Strategy",
      description2: "At Brave Moor, we don't just run ads—we run profit experiments. Every rupee spent is tracked to actual revenue, ensuring your advertising budget works harder than ever before.",
      subtitle3: "AI-Optimized Bidding & Audience Targeting",
      description3: "Our systems continuously learn from campaign performance to find your most valuable customers. We automatically shift budgets to highest-converting audiences and platforms in real-time.",
      image2: "/assets/img/service/performance-ads-2.jpg",
      features: [
        "Multi-Platform Ad Management (Google/FB/Instagram)",
        "AI-Powered Bid Optimization",
        "Custom Audience Building & Retargeting",
        "Conversion Tracking & ROI Analysis",
        "A/B Testing & Creative Optimization",
        "Real-Time Budget Reallocation"
      ],
    },
  },
  {
    title: "Graphic Design & Branding",
    slug: "graphic-design",
    shortDescription: "Visuals that don't just decorate—they communicate. Bold designs that tell your brand story and drive action.",
    image: "/assets/img/service/graphic-design.jpg",
    category: "foundation",
    details: {
      subtitle: "Graphic Design:",
      subtitle2: "Where Art Meets Strategy",
      description2: "At Brave Moor, we believe great design should do more than look pretty—it should work hard for your business. Every color, font, and layout choice serves a strategic purpose.",
      subtitle3: "Design Systems That Scale With Your Ambitions",
      description3: "We don't just create one-off designs. We build complete visual systems that grow with your brand, maintaining consistency while allowing for creative evolution.",
      image2: "/assets/img/service/graphic-design-2.jpg",
      features: [
        "AI-Assisted Design Creation",
        "Brand Visual Identity Systems",
        "Social Media Visual Content",
        "Motion Graphics & Animation",
        "Print & Digital Design Suite",
        "Design Asset Management"
      ],
    },
  },
  {
    title: "Content Marketing",
    slug: "content-marketing",
    shortDescription: "Create content that search engines love and humans can't resist. AI-powered content strategy that dominates your niche.",
    image: "/assets/img/service/content-intelligence.jpg",
    category: "foundation",
    details: {
      subtitle: "Content Intelligence:",
      subtitle2: "Content That Ranks, Converts, and Builds Authority",
      description2: "Brave Moor's content intelligence systems identify exactly what your audience wants to read, then creates it better than anyone else in your space.",
      subtitle3: "From Content Creation to Conversion Engine",
      description3: "We don't just create content—we build content ecosystems that work together to educate, engage, and convert your ideal customers at every touchpoint.",
      image2: "/assets/img/service/content-intelligence-2.jpg",
      features: [
        "AI-Powered Content Strategy",
        "SEO-Optimized Content Creation",
        "Content Performance Analytics",
        "Competitor Content Analysis",
        "Content Distribution & Amplification",
        "Conversion-Focused Content Optimization"
      ],
    },
  },
  {
    title: "E-commerce Solutions",
    slug: "ecommerce-solutions",
    shortDescription: "Complete e-commerce ecosystems that turn browsers into buyers and buyers into brand advocates.",
    image: "/assets/img/service/ecommerce.jpg",
    category: "foundation",
    details: {
      subtitle: "E-commerce Excellence:",
      subtitle2: "Where Shopping Meets Experience",
      description2: "At Brave Moor, we build e-commerce platforms that don't just sell products—they create memorable shopping journeys that keep customers coming back.",
      subtitle3: "From First Click to Loyal Customer",
      description3: "We optimize every touchpoint of the e-commerce experience, from product discovery to post-purchase support, creating seamless journeys that drive lifetime value.",
      image2: "/assets/img/service/ecommerce-2.jpg",
      features: [
        "E-commerce Platform Development",
        "Shopping Cart Optimization",
        "Payment Gateway Integration",
        "Inventory Management Systems",
        "Customer Review & Rating Systems",
        "Mobile-First E-commerce Design"
      ],
    },
  },

  // CATEGORY 2: GROWTH (6)
  {
    title: "Profit-First Marketing",
    slug: "profit-first-marketing",
    shortDescription: "Marketing strategies designed to maximize profitability, not just revenue. Every campaign built with ROI as the primary metric.",
    image: "/assets/img/service/profit-first.jpg",
    category: "growth",
    details: {
      subtitle: "Profit-First Marketing:",
      subtitle2: "Where Every Rupee Works Harder",
      description2: "Brave Moor's profit-first approach ensures that every marketing dollar spent directly contributes to your bottom line, not just top-line revenue.",
      subtitle3: "Sustainable Growth Through Profitability",
      description3: "We focus on customer lifetime value, acquisition cost, and retention metrics to build marketing systems that grow profitably and sustainably.",
      image2: "/assets/img/service/profit-first-2.jpg",
      features: [
        "ROI-Focused Campaign Planning",
        "Customer Lifetime Value Optimization",
        "Cost Per Acquisition Management",
        "Profit Margin Analysis",
        "Budget Allocation Optimization",
        "Performance-Based Pricing Models"
      ],
    },
  },
  {
    title: "Conversion Rate Optimization",
    slug: "conversion-optimization",
    shortDescription: "Turn more visitors into customers without spending more on ads. Data-driven optimization that maximizes every rupee of your marketing spend.",
    image: "/assets/img/service/conversion-optimization.jpg",
    category: "growth",
    details: {
      subtitle: "Conversion Optimization:",
      subtitle2: "Where Science Meets Shopping Psychology",
      description2: "Brave Moor's CRO approach combines hard data with deep understanding of human behavior. We don't just guess what works—we know what converts.",
      subtitle3: "Small Changes, Big Impact on Your Bottom Line",
      description3: "Sometimes moving a button or changing a headline can increase revenue by 30%. We find those opportunities through rigorous testing and customer journey analysis.",
      image2: "/assets/img/service/conversion-optimization-2.jpg",
      features: [
        "A/B Testing & Multivariate Testing",
        "User Behavior Analysis & Heatmaps",
        "Funnel Optimization & Leak Repair",
        "Checkout Process Optimization",
        "Mobile Conversion Optimization",
        "Personalization & Dynamic Content"
      ],
    },
  },
  {
    title: "Marketing Strategy & Planning",
    slug: "marketing-strategy",
    shortDescription: "Comprehensive marketing roadmaps that align with business goals and drive measurable growth quarter after quarter.",
    image: "/assets/img/service/marketing-strategy.jpg",
    category: "growth",
    details: {
      subtitle: "Strategic Marketing Planning:",
      subtitle2: "From Vision to Execution",
      description2: "Brave Moor develops data-driven marketing strategies that transform business objectives into actionable, measurable marketing initiatives.",
      subtitle3: "Integrated Marketing Ecosystems",
      description3: "We create cohesive marketing systems where every channel, campaign, and touchpoint works together to create seamless customer experiences and maximum impact.",
      image2: "/assets/img/service/marketing-strategy-2.jpg",
      features: [
        "Comprehensive Market Analysis",
        "Competitive Intelligence",
        "Channel Strategy Development",
        "Budget Planning & Allocation",
        "KPI Framework & Measurement",
        "Quarterly Planning & Review"
      ],
    },
  },
  {
    title: "Founder Brand Accelerator",
    slug: "founder-brand-accelerator",
    shortDescription: "Amplify your personal brand to open doors, attract opportunities, and become the face of your industry.",
    image: "/assets/img/service/founder-brand.jpg",
    category: "growth",
    details: {
      subtitle: "Founder Brand Building:",
      subtitle2: "Your Story, Your Superpower",
      description2: "At Brave Moor, we help founders transform their unique journeys into powerful brand assets that attract customers, investors, and top talent.",
      subtitle3: "From Founder to Industry Thought Leader",
      description3: "We position you as the go-to expert in your space through strategic content, media opportunities, and speaking engagements that build credibility and trust.",
      image2: "/assets/img/service/founder-brand-2.jpg",
      features: [
        "Personal Brand Strategy",
        "Thought Leadership Content",
        "Media & PR Opportunities",
        "Speaking Engagement Strategy",
        "Social Media Presence Building",
        "Networking & Relationship Building"
      ],
    },
  },
  {
    title: "Local SEO Dominance",
    slug: "local-seo-dominance",
    shortDescription: "Dominate your local market with SEO strategies that put you on the map—literally. Get found when customers nearby are ready to buy.",
    image: "/assets/img/service/local-seo.jpg",
    category: "growth",
    details: {
      subtitle: "Local SEO:",
      subtitle2: "Winning the Battle for Local Customers",
      description2: "Brave Moor specializes in local SEO strategies that make your business the obvious choice when customers search for what you offer in your area.",
      subtitle3: "From Map Pack to Cash Register",
      description3: "We don't just get you to the top of local search results—we optimize every touchpoint to turn local searches into loyal, repeat customers.",
      image2: "/assets/img/service/local-seo-2.jpg",
      features: [
        "Google Business Profile Optimization",
        "Local Citation Building & Cleanup",
        "Map Pack Ranking Strategies",
        "Local Review Management",
        "Neighborhood-Specific Content",
        "Local Link Building & Partnerships"
      ],
    },
  },
  {
    title: "International Expansion",
    slug: "international-expansion",
    shortDescription: "Take your brand global without losing local relevance. Multi-language, multi-cultural marketing that resonates across borders.",
    image: "/assets/img/service/international.jpg",
    category: "growth",
    details: {
      subtitle: "International Expansion:",
      subtitle2: "Think Global, Act Local—We Make It Possible",
      description2: "Brave Moor helps brands scale internationally while maintaining the cultural sensitivity and local relevance that builds trust in new markets.",
      subtitle3: "Borderless Growth With Local Soul",
      description3: "We handle the complexity of international marketing—from multi-language SEO to cross-border payments—so you can focus on serving new customers worldwide.",
      image2: "/assets/img/service/international-2.jpg",
      features: [
        "Multi-Language SEO & Content",
        "Global Payment Gateway Setup",
        "Cross-Cultural Marketing Strategy",
        "International Social Media Management",
        "Localized Customer Service",
        "Global Shipping & Logistics Integration"
      ],
    },
  },

  // CATEGORY 3: INNOVATION (6)
  {
    title: "AI-Powered Marketing Automation",
    slug: "ai-marketing-automation",
    shortDescription: "Let AI handle the repetitive work while we focus on creative strategy. Smart automation that feels surprisingly human.",
    image: "/assets/img/service/ai-automation.jpg",
    category: "innovation",
    details: {
      subtitle: "AI Marketing Automation:",
      subtitle2: "Where Artificial Intelligence Meets Human Connection",
      description2: "Brave Moor's AI systems don't just automate—they connect. Our AI-powered tools understand context, emotion, and business goals to create genuine customer relationships.",
      subtitle3: "Marketing That Learns and Grows With You",
      description3: "Unlike rigid automation tools, our AI systems evolve with your business. They learn from every interaction to become smarter, more personalized, and more effective over time.",
      image2: "/assets/img/service/ai-automation-2.jpg",
      features: [
        "AI-Powered Customer Service",
        "Predictive Customer Behavior Analysis",
        "Personalized Content Generation",
        "Smart Lead Scoring & Nurturing",
        "Multi-Channel Campaign Management",
        "Real-Time Performance Optimization"
      ],
    },
  },
  {
    title: "AI Video Generation Studio",
    slug: "ai-video-generation",
    shortDescription: "Create stunning video content without cameras, crews, or complexity. AI-powered video that captures attention and converts.",
    image: "/assets/img/service/ai-video.jpg",
    category: "innovation",
    details: {
      subtitle: "AI Video Generation:",
      subtitle2: "Hollywood-Quality Videos Without Hollywood Budgets",
      description2: "Brave Moor's AI video studio brings your brand stories to life in ways that were impossible yesterday. From AI avatars to text-to-video magic—we make video creation accessible and effective.",
      subtitle3: "Personalized Video at Scale",
      description3: "Imagine sending personalized video messages to thousands of customers. Our AI systems make it possible, creating unique videos that feel one-on-one while reaching millions.",
      image2: "/assets/img/service/ai-video-2.jpg",
      features: [
        "AI Avatar Video Creation",
        "Text-to-Video Content Generation",
        "Personalized Video Messaging",
        "Social Media Video Optimization",
        "Voice Synthesis & Dubbing",
        "Automated Video SEO & Distribution"
      ],
    },
  },
  {
    title: "Voice AI & Conversational Marketing",
    slug: "voice-ai",
    shortDescription: "Prepare your brand for the voice-first revolution. Alexa skills, voice search optimization, and audio branding that speaks volumes.",
    image: "/assets/img/service/voice-ai.jpg",
    category: "innovation",
    details: {
      subtitle: "Voice AI:",
      subtitle2: "The Future Speaks—Is Your Brand Listening?",
      description2: "As voice assistants become household staples, Brave Moor helps your brand find its voice—literally. We create audio experiences that build familiarity and trust through sound.",
      subtitle3: "Conversational Commerce Is Here",
      description3: "Soon, customers will order products through conversation. We're building the voice commerce infrastructure that will make your brand the easiest choice when they do.",
      image2: "/assets/img/service/voice-ai-2.jpg",
      features: [
        "Voice Search Optimization",
        "Alexa/Google Assistant Brand Skills",
        "Audio Branding & Sonic Identity",
        "Podcast Production & Strategy",
        "Voice Commerce Integration",
        "Multilingual Voice AI Systems"
      ],
    },
  },
  {
    title: "Metaverse Brand Experiences",
    slug: "metaverse",
    shortDescription: "Claim your space in the virtual world. Immersive brand experiences that blur the lines between digital and physical reality.",
    image: "/assets/img/service/metaverse.jpg",
    category: "innovation",
    details: {
      subtitle: "Metaverse:",
      subtitle2: "Building Brands in Virtual Worlds",
      description2: "Brave Moor is pioneering the next frontier of digital marketing. We create virtual brand experiences that engage customers in entirely new dimensions of interaction.",
      subtitle3: "From Virtual Events to Digital Real Estate",
      description3: "Whether it's hosting virtual product launches or acquiring digital real estate, we help your brand establish presence where tomorrow's customers are already spending time.",
      image2: "/assets/img/service/metaverse-2.jpg",
      features: [
        "Virtual Event Hosting & Management",
        "NFT-Based Loyalty Programs",
        "3D Product Showcases",
        "Digital Real Estate Strategy",
        "Avatar-Based Customer Service",
        "Cross-Platform Virtual Experiences"
      ],
    },
  },
  {
    title: "Blockchain & Web3 Marketing",
    slug: "blockchain-web3",
    shortDescription: "Navigate the decentralized web with confidence. NFT projects, DAO communities, and crypto branding that builds trust in trustless environments.",
    image: "/assets/img/service/blockchain.jpg",
    category: "innovation",
    details: {
      subtitle: "Blockchain Web3:",
      subtitle2: "Marketing in the Age of Decentralization",
      description2: "Brave Moor understands that Web3 requires a new marketing playbook. We help blockchain projects build communities that believe in your vision, not just your token price.",
      subtitle3: "Building Trust in Trustless Systems",
      description3: "In a world of smart contracts and decentralized autonomy, human connection still matters most. We bridge the gap between cutting-edge tech and relatable storytelling.",
      image2: "/assets/img/service/blockchain-2.jpg",
      features: [
        "NFT Marketing & Community Building",
        "DAO Governance & Communication",
        "Crypto Project Branding",
        "DeFi Platform User Acquisition",
        "Blockchain Education Content",
        "Web3 Social Media Strategy"
      ],
    },
  },
  {
    title: "Data Intelligence & BI Dashboards",
    slug: "data-intelligence",
    shortDescription: "Turn data overload into profit clarity. Beautiful dashboards and insights that everyone in your team can understand and act upon.",
    image: "/assets/img/service/data-intelligence.jpg",
    category: "innovation",
    details: {
      subtitle: "Data Intelligence:",
      subtitle2: "From Data Overload to Business Clarity",
      description2: "At Brave Moor, we believe data should serve humans, not confuse them. We transform complex analytics into simple, actionable insights that drive real business growth.",
      subtitle3: "Predictive Intelligence for Proactive Decisions",
      description3: "While others tell you what happened yesterday, we help you predict what will happen tomorrow. Our AI-driven insights give you the confidence to make bold moves.",
      image2: "/assets/img/service/data-intelligence-2.jpg",
      features: [
        "Real-Time Business Intelligence",
        "Competitor Tracking & Analysis",
        "Market Trend Prediction",
        "Custom Dashboard Development",
        "Automated Reporting Systems",
        "Data Visualization & Storytelling"
      ],
    },
  }
];