import { Bath, Droplets, Pipette, Wrench } from 'lucide-react';
import React from 'react';

export const categoriesData = [
    {
        id: "bathroom-fittings",
        name: "Bathroom Fittings",
        icon: <Bath size={40} />,
        desc: "Premium showers, faucets, and sanitaryware from global brands.",
        coverImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        images: [
            "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ],
        details: "Our Bathroom Fittings collection includes high-end ceramic washbasins, luxurious shower panels, elegant faucets, bathtubs, and modern commodes. Designed for durability and aesthetics, these products elevate your bathroom experience. We stock products from top brands like Jaquar, Hindware, and Cera.",
        features: ["Corrosion-resistant finishes", "Water-saving technology", "Sleek and modern designs", "Long-lasting warranty"]
    },
    {
        id: "kitchen-fixtures",
        name: "Kitchen Fixtures",
        icon: <Droplets size={40} />,
        desc: "Elegant sinks and kitchen plumbing solutions for the modern home.",
        coverImg: "https://images.unsplash.com/photo-1556910103-1c02745a872f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        images: [
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1581404476143-fb31df681e64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1541604193435-22287d32c2c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ],
        details: "Transform your kitchen into a highly functional workspace with our premium kitchen fixtures. We offer single and double bowl stainless steel sinks, pull-out faucets, water purifiers, and under-sink plumbing systems. Built for heavy-duty daily use while keeping a sleek, minimalist aesthetic.",
        features: ["Scratch-resistant quartz and steel sinks", "Pull-down and touch-sensitive faucets", "Space-saving plumbing traps", "Easy-to-clean surfaces"]
    },
    {
        id: "pipes-fittings",
        name: "Pipes & Fittings",
        icon: <Pipette size={40} />,
        desc: "Durable CPVC, UPVC, and PPR pipes for all construction needs.",
        coverImg: "https://images.unsplash.com/photo-1542013936693-884638332954?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        images: [
            "https://images.unsplash.com/photo-1504307651254-35680f356f12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1585434606263-6379abfcf5da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1623055417926-dca8e58a5fbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ],
        details: "The backbone of any building starts with reliable plumbing. We supply high-grade CPVC, UPVC, PVC, and PPR pipes along with complete fitting assortments (elbows, tees, reducers, valves). Trusted by top contractors for hot and cold water distribution as well as drainage systems.",
        features: ["High pressure and temperature tolerance", "Leak-proof joint systems", "Authorized Panchakanya products", "UV resistant for outdoor use"]
    },
    {
        id: "hardware-tools",
        name: "Hardware Tools",
        icon: <Wrench size={40} />,
        desc: "High-quality tools and construction materials.",
        coverImg: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        images: [
            "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1581147036324-c10842211f42?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ],
        details: "Equip your professionals with tools that don't let them down. From hand tools like wrenches, hammers, and screwdrivers to power tools, door handles, hinges, and basic construction materials, we offer robust hardware for carpenters, electricians, and plumbers.",
        features: ["Heavy-duty forging", "Ergonomic grips and safety features", "Corrosion-resistant alloys", "Comprehensive tool kits available"]
    }
];
