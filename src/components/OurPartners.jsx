import React from "react";
import { motion } from "framer-motion";

const partners = [
    {
        name: "HP",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Samsung_old_logo_before_year_2015.svg",
    },
    {
        name: "Samsung",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
    },
    {
        name: "Acer",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Acer_Logo.svg",
    },
    {
        name: "Voltas",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Voltas_logo.svg",
    },
    {
        name: "Godrej",
        logo: "https://upload.wikimedia.org/wikipedia/en/1/1d/Godrej_Enterprises_Group.svg",
    },
    // Add local logos here after downloading
    { name: "SANRIAN", logo: "/sarangi.png" },
    { name: "SAI SHREE ENTERPRISES", logo: "/sai.png" },
    { name: "GreenEnviro", logo: "/green.png" },
    { name: "ADSUN", logo: "/adsun.png" },
    { name: "HOP Motors", logo: "/hop.png" },
    { name: "Asian Enterprises", logo: "/asian.png" },
    { name: "Climatrol", logo: "/clim.png" },
    { name: "Bhumiti", logo: "/bhumi.png" },
    { name: "New Vishal Steels", logo: "/steel.png" },
    { name: "Fabtech", logo: "/fab.png" },
];

const OurPartners = () => (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-24 px-6">
        <div className="text-center mb-16">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-gray-900"
            >
                Our <span className="text-indigo-600">Partners</span>
            </motion.h2>

            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                Trusted partners who collaborate with Gemeasy to deliver excellence.
            </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex items-center justify-center"
                >
                    <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-12 object-contain transition-all"
                    />
                </motion.div>
            ))}
        </div>
    </section>
);

export default OurPartners;