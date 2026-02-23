import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@mui/material";

/* ===========================
   SERVICES DATA
=========================== */
const servicesData = [
    {
        title: "GeM Registration",
        short: [
            "Register as a Seller on the GeM Portal",
            "GeM login ID & Password Creation",
            "Profile Update and Management",
            "Register as MSME & Start-up on the GeM Portal",
        ],
        content: `GeM (Government e-Marketplace) is an innovative platform facilitating seamless eprocurement for government entities.

Sellers keen on tapping into this vast market can initiate the process by registering on the GeM Portal. This involves creating a GeM login ID and password.

GeM's user-friendly interface ensures that the registration process is smooth and efficient.

Moreover, GeM Portal encourages the inclusion of MSMEs and Start-ups in the procurement ecosystem.`,
    },
    {
        title: "GeM Products",
        short: [
            "GeM Product List & Information update",
            "Product Mapping to GeM categories",
            "Service Listing as required",
            "Stock Updation & Catalogue Management",
        ],
        content: `GeM (Government e-Marketplace) is an innovative platform facilitating seamless eprocurement for government entities. The GeM Portal (Government e-Marketplace) achieves a groundbreaking GMV of 600,000+ Crores, surpassing 200,000 Crores this fiscal year with an impressive 50% CAGR, and sees MSMEs securing 49.1% of orders, highlighting its commitment to inclusivity and economic empowerment.

Sellers keen on tapping into this vast market can initiate the process by registering on the GeM Portal. This involves creating a GeM login ID and password, the gateway to unlocking a plethora of business opportunities. The first step is the GeM registration for sellers, where individuals or businesses interested in offering products or services to government departments can establish their presence. The GeM login credentials play a pivotal role in providing access to the platform's features and functionalities.

GeM's user-friendly interface ensures that the registration process is smooth and efficient. Once registered, sellers get access to update and manage their profiles. This includes providing detailed information about the products or services offered and ensuring visibility and credibility on the platform.

Moreover, GeM Portal encourages the inclusion of Micro, Small, and Medium Enterprises (MSMEs) and Start-ups in the procurement ecosystem. Registering as an MSME or Start-up on the GeM Portal opens avenues for specialized benefits and considerations. This feature reflects a commitment to supporting and promoting the growth of these enterprises, Startups as well as Make in India initiative. The registration process empowers these entities to participate in government procurement, fostering economic development and innovation in our country. For detailed information, click on GeM Registration.`,
    },
    {
        title: "Tender Bidding",
        short: [
            "Tender Bidding on GeM Portal",
            "Tender Checklist Preparation",
            "Technical Documentation Support",
            "Financial Evaluation Updates",
        ],
        content: `Listing products on the GeM (Government e-Marketplace) portal is important for businesses seeking numerous advantages. Firstly, it enhances visibility, exposing offerings to all government buyers and departments, thereby increasing the probability of attracting potential customers.

GeM Portal serves as the official platform for government eprocurement, providing businesses access to rewarding opportunities, including tenders, contracts, and procurement processes. GeM Product Listing ensures compliance with government guidelines and standards, instilling confidence in potential buyers. GeM Portal opens avenues for procuring direct orders under Rs.25,000, emphasizing listed products with comprehensive features, aligning with buyer requirements, and offering an additional window for business growth.

Moreover, GeM streamlines the procurement process, reducing paperwork and delays for both sellers and buyers. GeM Portal products facilitate market expansion by providing access to a diverse customer base across various government departments and agencies. Additionally, it promotes transparency in transactions, contributing to a more accountable procurement process.

GeM products facilitate direct interaction between sellers and government buyers, enabling businesses to understand needs and tailor offerings. This strategic move enhances market reach and participation in transparent and efficient procurement processes. Elevate your business by listing on the GeM portal for government engagement and expanded opportunities. For detailed information, click on GeM Product Listing.`,
    },
    {
        title: "Other Services",
        short: [
            "MSME Registration / Udyam Certificate",
            "GeM Vendor Assessment",
            "IREPS, CPPP Registration",
            "OEM & Reseller Panel Activation",
        ],
        content: `GeM Vendor Assessment:- validates seller quality, follows registration, and ensures compliance. Different categories like OEMs, Brand Owners, and Deemed OEMs undergo specific assessment stages. QCI India facilitates online assessment in 2 stages – Desktop Assessment and Video Assessment and covers legal, product, order history, compliance, process, efficiency, quality assurance, logistics, supplier management, customer service, safety standards, warranty, R&D, intellectual property aspects and more. Key points include payment, 15-day completion, and a three-year validity. Exemptions are granted based on turnover, PSU status, small-scale sellers, specialized products, government representation, specific organizations, and more. Understanding the Gem Vendor Assessment process is crucial for sellers participating in government tenders through the GeM portal. For detailed information, click GeM Vendor Assessment.

MSME Registration:- Micro, Small, and Medium Enterprises (MSMEs) are vital for India's economic growth, fostering innovation and inclusivity. Government recognition, determined by turnover and investment, is essential for accessing incentives and support. The Udyam MSME Registration portal, catering to new and existing entrepreneurs, streamlines the process with a user-friendly platform. The Ministry of MSME issues the MSME Registration Certificate, unlocking benefits like financial support, market access, and tender exemptions. This fosters an environment conducive to MSME growth, providing global access, capacity-building, research support, and technology initiatives. Robust government measures highlight a commitment to formalization, expansion, and inclusive economic development through MSME registration in India. For detailed information, click MSME Registration.`,
    },
];

/* ===========================
   COMPONENT
=========================== */
const Services = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const contentRef = useRef(null);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    useEffect(() => {
        if (activeIndex !== null && contentRef.current) {
            contentRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [activeIndex]);

    return (
        <section className="w-full bg-gray-100 py-20 px-4 md:px-10">

            {/* Title */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
                    <span className="text-indigo-600 font-bold">Gemeasy</span> Services
                </h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
                {servicesData.map((service, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -10, scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 260, damping: 18 }}
                        className="cursor-pointer"
                        onClick={() => handleClick(index)}
                    >
                        <Card
                            elevation={0}
                            className={`!rounded-2xl !border transition-all duration-500 h-full
                ${activeIndex === index
                                    ? "!bg-indigo-600 !border-indigo-600 shadow-xl"
                                    : "bg-white !border-indigo-200 hover:!border-indigo-400 hover:shadow-lg"
                                }`}
                        >
                            <CardContent className="p-7">
                                <h3
                                    className={`text-lg font-semibold mb-5 transition-colors duration-300
                    ${activeIndex === index
                                            ? "text-white"
                                            : "text-indigo-600"
                                        }`}
                                >
                                    {service.title}
                                </h3>

                                <ul className="space-y-2 text-sm leading-6">
                                    {service.short.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className={`transition-colors duration-300
                        ${activeIndex === index
                                                    ? "text-white/90"
                                                    : "text-gray-600"
                                                }`}
                                        >
                                            • {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Detailed Content */}
            <AnimatePresence>
                {activeIndex !== null && (
                    <motion.div
                        ref={contentRef}
                        key={activeIndex}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-7xl mx-auto mt-20 bg-white p-4"
                    >
                        <h3 className="text-3xl font-bold text-indigo-600 mb-8">
                            {servicesData[activeIndex].title}
                        </h3>

                        <div className="text-gray-700 leading-8 text-[16px] space-y-6">
                            {servicesData[activeIndex].content
                                .split("\n\n")
                                .map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default Services;