import {
    FiZap,
    FiCode,
    FiLayers,
    FiTrendingUp,
    FiSettings,
    FiBox,
} from "react-icons/fi";

// Navigation Links
export const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
];

// About Section Items
export const aboutItems = [
    {
        id: "01",
        title: "New Businesses",
        description:
            "Launch with impact. We build digital foundations that scale with your vision.",
        className: "md:col-span-2 md:row-span-2 min-h-[200px]",
        theme: "dark",
    },
    {
        id: "02",
        title: "Professionals",
        description:
            "Portfolios that match your expertise. Stand out in a crowded market.",
        className: "md:col-span-2 md:row-span-1 min-h-[200px]",
        theme: "gradient",
    },
    {
        id: "03",
        title: "Startups & Ventures",
        description: "MVP to IPO. High-performance architecture for rapid growth.",
        className: "md:col-span-2 md:row-span-1 min-h-[200px]",
        theme: "dark",
    },
];

// Services Section Features
export const wordpressFeatures = [
    { icon: FiZap, text: "Launch in weeks, not months" },
    { icon: FiSettings, text: "Easy content management" },
    { icon: FiLayers, text: "Thousands of themes & plugins" },
];

export const customFeatures = [
    { icon: FiCode, text: "Custom React/Next.js architecture" },
    { icon: FiTrendingUp, text: "Blazing fast performance" },
    { icon: FiBox, text: "Unlimited scalability" },
];
