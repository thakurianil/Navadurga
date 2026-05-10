import { Bath, Droplets, Pipette, Wrench, Paintbrush, Sun, Hammer, Layers, ShieldCheck, Settings } from 'lucide-react';
import React from 'react';

export const categoriesData = [
    {
        id: "pipes-fittings",
        name: "Pipes & Fittings",
        icon: <Pipette size={40} />,
        desc: "Durable CPVC, UPVC, and PPR pipes for all construction needs.",
        coverImg: "https://images.unsplash.com/photo-1542013936693-884638332954?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        images: ["https://images.unsplash.com/photo-1504307651254-35680f356f12?ixlib=rb-4.0.3"],
        details: "Top-quality pipes and fittings ensuring smooth plumbing operations.",
        features: ["Leak-proof", "High Durability", "Heat Resistant", "Standard Sizes"]
    },
    {
        id: "bathroom-sanitaryware",
        name: "Bathroom & Sanitaryware",
        icon: <Bath size={40} />,
        desc: "Luxurious sanitaryware and complete bathroom solutions.",
        coverImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        images: ["https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3"],
        details: "We provide high-end vanity units, commodes, bathtubs, and washbasins.",
        features: ["Classic designs", "Water efficient", "Stain-resistant", "Easy to clean"]
    },
    {
        id: "faucets-showers",
        name: "Faucets & Showers",
        icon: <Droplets size={40} />,
        desc: "Premium designer faucets and modern shower systems.",
        coverImg: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        images: ["https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3"],
        details: "Extensive range of showerheads, faucets, hand showers and bath mixers.",
        features: ["Anti-rust", "Optimal water flow", "Sleek look", "Drip-free"]
    },
    {
        id: "tiles-surfaces",
        name: "Tiles & Surface Solutions",
        icon: <Layers size={40} />,
        desc: "High-quality Laminam, ANI tiles, and surface coverings.",
        coverImg: "https://images.unsplash.com/photo-1563851586523-289544eb1c28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        images: ["https://images.unsplash.com/photo-1563851586523-289544eb1c28?ixlib=rb-4.0.3"],
        details: "Available in varied sizes, gloss levels, and striking textures to elevate your spaces.",
        features: ["Anti-slip", "Scratch-resistant", "Premium finishes", "Weather resistant"]
    },
    {
        id: "kitchen-solutions",
        name: "Kitchen Solutions",
        icon: <Settings size={40} />,
        desc: "Elegant sinks, fittings, and accessories for modern kitchens.",
        coverImg: "https://images.unsplash.com/photo-1556910103-1c02745a872f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        images: ["https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-4.0.3"],
        details: "Double/single bowl sinks, kitchen faucets, and other utilities.",
        features: ["Stainless steel", "Heat resistant", "Deep bowls", "Sound deadening"]
    },
    {
        id: "water-heating-solar",
        name: "Water Heating & Solar",
        icon: <Sun size={40} />,
        desc: "Geysers, solar water heaters, and thermal solutions.",
        coverImg: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        images: ["https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixlib=rb-4.0.3"],
        details: "Energy-efficient choices to provide hot water safely throughout the year.",
        features: ["Energy efficient", "Smart thermostat", "Safety valves", "Corrosion protection"]
    },
    {
        id: "paints-chemicals",
        name: "Paints & Chemical Solutions",
        icon: <Paintbrush size={40} />,
        desc: "Quality Berger Paints, primers, waterproofing and more.",
        coverImg: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        images: ["https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3"],
        details: "Paints for interior and exterior works, texturing, and foundational weather-sealing.",
        features: ["Long-lasting shine", "Fungus-free", "Eco-friendly", "Quick dry"]
    },
    {
        id: "hardware-tools",
        name: "Hardware & Tools",
        icon: <Wrench size={40} />,
        desc: "Professional-grade tools, fasteners, and heavy hardware.",
        coverImg: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        images: ["https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3"],
        details: "Drills, hand tools, nails, screws, hinges, handles, locks.",
        features: ["Durable metal", "Precision tools", "High strength", "Rustproof"]
    },
    {
        id: "water-management",
        name: "Water Management",
        icon: <ShieldCheck size={40} />,
        desc: "Pumps, tanks, purifiers, and comprehensive water management.",
        coverImg: "https://images.unsplash.com/photo-1520694178556-9a2c13cb0aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        images: ["https://images.unsplash.com/photo-1520694178556-9a2c13cb0aa8?ixlib=rb-4.0.3"],
        details: "Solutions to pump, store, and purify water reliably at scale.",
        features: ["Food-grade material", "High-capacity tanks", "Low-noise pumps", "RO systems"]
    },
    {
        id: "construction-materials",
        name: "Construction Materials",
        icon: <Hammer size={40} />,
        desc: "Essential raw materials covering bricks, cement, rods, etc.",
        coverImg: "https://images.unsplash.com/photo-1504307651254-35680f356f12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        images: ["https://images.unsplash.com/photo-1504307651254-35680f356f12?ixlib=rb-4.0.3"],
        details: "We stock bulk foundational components that define structure and long-term safety.",
        features: ["TMT Bars", "Premium Cement", "ISO Certified", "High Load-bearing"]
    }
];
