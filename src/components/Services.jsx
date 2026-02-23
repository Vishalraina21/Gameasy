import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FileText,
    ClipboardCheck,
    ShieldCheck,
    Award,
} from "lucide-react";

/* ===========================
   SERVICES DATA (From Brochure Page 4)
=========================== */

const servicesData = [
    {
        icon: <FileText size={28} />,
        title: "Bidding Services",
        short: [
            "End-to-end tender support",
            "Technical & Financial bid preparation",
            "GeM compliance management",
            "Strategic pricing & documentation",
        ],
        content: `Expert end-to-end tender support: identify opportunities, prepare technical and financial bids, ensure GeM compliance, and manage EMD/bid security.

Maximized ₹200+ Cr tender wins through strategic pricing and documentation.`,
    },
    {
        icon: <ClipboardCheck size={28} />,
        title: "Vendor Assessment Assistance",
        short: [
            "Complete GeM OEM panel setup",
            "Technical evaluation preparation",
            "Mock assessments",
            "Discrepancy resolution",
        ],
        content: `Complete GeM OEM panel setup including document verification, technical evaluation preparation, mock assessments, and discrepancy resolution with authorities.

Ensures 100% compliance for product listing.`,
    },
    {
        icon: <ShieldCheck size={28} />,
        title: "Company Compliances",
        short: [
            "GST / PAN / MSME Registration",
            "EPF / ESIC Filings",
            "GeM profile maintenance",
            "Category authorizations",
        ],
        content: `Full compliance management covering:

• GST / PAN / MSME registration  
• EPF / ESIC filings  
• GeM profile maintenance  
• Category authorizations  

Ensuring smooth and compliant business operations.`,
    },
    {
        icon: <Award size={28} />,
        title: "All Types of Certifications",
        short: [
            "NABL Certification",
            "ISO 9001 / 14001 / 27001",
            "BIS Certification",
            "Third-party audits & maintenance",
        ],
        content: `NABL, ISO 9001 / 14001 / 27001, BIS certification support including:

• Gap analysis  
• Documentation  
• Third-party audits  
• Maintenance  

Ensuring your business meets the highest quality standards.`,
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
        <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4 md:px-10">

            {/* Section Title */}
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-gray-900"
                >
                    Our <span className="text-indigo-600">Services</span>
                </motion.h2>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {servicesData.map((service, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="cursor-pointer"
                        onClick={() => handleClick(index)}
                    >
                        <div
                            className={`rounded-2xl border p-8 transition-all duration-400 h-full shadow-sm
              ${activeIndex === index
                                    ? "bg-indigo-600 border-indigo-600 shadow-xl"
                                    : "bg-white border-gray-200 hover:border-indigo-400 hover:shadow-lg"
                                }`}
                        >
                            <div
                                className={`mb-6 ${activeIndex === index ? "text-white" : "text-indigo-600"
                                    }`}
                            >
                                {service.icon}
                            </div>

                            <h3
                                className={`text-lg font-semibold mb-5 ${activeIndex === index ? "text-white" : "text-gray-800"
                                    }`}
                            >
                                {service.title}
                            </h3>

                            <ul className="space-y-2 text-sm">
                                {service.short.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className={`${activeIndex === index
                                                ? "text-white/90"
                                                : "text-gray-600"
                                            }`}
                                    >
                                        • {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
                {activeIndex !== null && (
                    <motion.div
                        ref={contentRef}
                        key={activeIndex}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-5xl mx-auto mt-16 bg-white rounded-2xl shadow-lg p-10"
                    >
                        <h3 className="text-2xl font-bold text-indigo-600 mb-6">
                            {servicesData[activeIndex].title}
                        </h3>

                        <div className="text-gray-700 leading-8 text-[16px] whitespace-pre-line">
                            {servicesData[activeIndex].content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default Services;