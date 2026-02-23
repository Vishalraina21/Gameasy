import React from "react";
import { motion } from "framer-motion";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsIcon from "@mui/icons-material/Settings";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Tags = () => {
    return (
        <section className="w-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-12">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-center text-3xl md:text-4xl font-semibold mb-10">
                    Grow your Business with GeM : Join Now!
                </h2>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 text-center border-b border-white/30 pb-8 mb-8">

                    {[
                        {
                            number: "428,197 Crores",
                            label: "GMV on GeM in Current FY",
                        },
                        {
                            number: "1,216,302 Crores",
                            label: "GMV on GeM till date",
                        },
                        {
                            number: "11,223",
                            label: "Product & Service Categories",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`px-6 ${index !== 2 ? "md:border-r md:border-white/30" : ""}`}
                        >
                            <h3 className="text-2xl md:text-3xl font-bold">
                                {item.number}
                            </h3>
                            <p className="text-white/80 mt-2 text-sm md:text-base">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Features Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 text-center">

                    {[
                        {
                            icon: <PaymentIcon sx={{ fontSize: 36 }} />,
                            label: "Online Payments",
                        },
                        {
                            icon: <SettingsIcon sx={{ fontSize: 36 }} />,
                            label: "Multiple Procurement Process – Bid/ RA/ Direct buying",
                        },
                        {
                            icon: <AccessTimeIcon sx={{ fontSize: 36 }} />,
                            label: "Quick and Transparent process",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center gap-4 px-6 py-6 
                ${index !== 2 ? "md:border-r md:border-white/30" : ""}`}
                        >
                            {item.icon}
                            <p className="text-base md:text-lg font-medium text-white/90 max-w-xs">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Tags;