import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import SettingsIcon from "@mui/icons-material/Settings";
import PaidIcon from "@mui/icons-material/Paid";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import VerifiedIcon from "@mui/icons-material/Verified";

const pageCards = {
    "/tenders": {
        title: "Advantages of Tender Services",
        cards: [
            {
                title: "Live Tender Alerts",
                description: "Get instant notifications for new tenders.",
                icon: <SettingsIcon sx={{ fontSize: 22 }} />,
            },
            {
                title: "Advanced Filters",
                description: "Search tenders by state, department & category.",
                icon: <PaidIcon sx={{ fontSize: 22 }} />,
            },
            {
                title: "Expert Support",
                description: "Professional assistance for bid preparation.",
                icon: <SupportAgentIcon sx={{ fontSize: 22 }} />,
            },
        ],
    },

    "/gmeregestration": {
        title: "Benefits of GeM Registration",
        cards: [
            {
                title: "Free Registration",
                description: "List products & services at no cost.",
                icon: <SettingsIcon sx={{ fontSize: 22 }} />,
            },
            {
                title: "Verified Buyers",
                description: "Connect directly with government buyers.",
                icon: <VerifiedIcon sx={{ fontSize: 22 }} />,
            },
            {
                title: "Nationwide Exposure",
                description: "Sell across India through GeM Portal.",
                icon: <AllInclusiveIcon sx={{ fontSize: 22 }} />,
            },
        ],
    },

    "/products": {
        title: "Advantages of GeM Products",
        cards: [
            {
                title: "Product Listing",
                description: "Accurate category mapping & approval support.",
                icon: <SettingsIcon sx={{ fontSize: 22 }} />,
            },
            {
                title: "Catalogue Management",
                description: "Maintain updated & verified listings.",
                icon: <AllInclusiveIcon sx={{ fontSize: 22 }} />,
            },
            {
                title: "Direct Purchase",
                description: "Participate in direct orders & tenders.",
                icon: <VerifiedIcon sx={{ fontSize: 22 }} />,
            },
        ],
    },

    "/tenderbidding": {
        title: "Why Choose Our Bidding Support",
        cards: [
            {
                title: "Technical Documentation",
                description: "Complete bid document preparation.",
                icon: <SettingsIcon sx={{ fontSize: 22 }} />,
            },
            {
                title: "Financial Evaluation",
                description: "Accurate pricing & compliance checks.",
                icon: <PaidIcon sx={{ fontSize: 22 }} />,
            },
            {
                title: "Higher Success Rate",
                description: "Maximize chances of winning tenders.",
                icon: <VerifiedIcon sx={{ fontSize: 22 }} />,
            },
        ],
    },

    "/otherservices": {
        title: "Other Professional Services",
        cards: [
            {
                title: "MSME Registration",
                description: "Udyam certificate & tender exemptions.",
                icon: <AllInclusiveIcon sx={{ fontSize: 22 }} />,
            },
            {
                title: "Vendor Assessment",
                description: "Complete GeM vendor assessment support.",
                icon: <SupportAgentIcon sx={{ fontSize: 22 }} />,
            },
            {
                title: "OEM Panel",
                description: "Activation & reseller panel support.",
                icon: <VerifiedIcon sx={{ fontSize: 22 }} />,
            },
        ],
    },

    default: {
        title: "Advantages with Gemeasy",
        cards: [
            {
                title: "Free Trial Offer",
                description: "Experience the 1st service FREE.",
                icon: <SettingsIcon sx={{ fontSize: 22 }} />,
            },
            {
                title: "Pay per Services",
                description: "No fixed or monthly charges.",
                icon: <PaidIcon sx={{ fontSize: 22 }} />,
            },
            {
                title: "Expert Guidance",
                description: "Experienced team for advice and support.",
                icon: <SupportAgentIcon sx={{ fontSize: 22 }} />,
            },
            {
                title: "Comprehensive Services",
                description: "Covers entire tendering process.",
                icon: <AllInclusiveIcon sx={{ fontSize: 22 }} />,
            },
            {
                title: "Money Back Guarantee",
                description: "Customer satisfaction is a priority.",
                icon: <VerifiedIcon sx={{ fontSize: 22 }} />,
            },
        ],
    },
};

const Cards = () => {
    const location = useLocation();
    const pageContent =
        pageCards[location.pathname] || pageCards.default;

    return (
        <section className="w-full bg-[#f3f4f6] py-14 px-4">

            {/* Dynamic Title */}
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    <span className="text-indigo-600 font-bold">
                        {pageContent.title}
                    </span>
                </h2>
            </div>

            {/* Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {pageContent.cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white rounded-xl border border-indigo-200/70 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col items-center text-center py-8 px-6">

                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-600 text-white mb-4">
                                {card.icon}
                            </div>

                            <h3 className="text-base font-semibold text-gray-800 mb-1">
                                {card.title}
                            </h3>

                            <p className="text-gray-600 text-sm">
                                {card.description}
                            </p>

                        </div>
                    </motion.div>
                ))}

            </div>
        </section>
    );
};

export default Cards;