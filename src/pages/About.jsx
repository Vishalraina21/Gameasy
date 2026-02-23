import React from "react";
import { motion } from "framer-motion";
import { Target, Users, TrendingUp, Award } from "lucide-react";

const About = () => {
    return (
        <div className="bg-gradient-to-b from-blue-50 to-white">

            {/* HERO SECTION */}
            <section className="py-20 px-6 max-w-7xl mx-auto text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900"
                >
                    About <span className="text-indigo-600">Gemeasy</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed"
                >
                    Gemeasy was established in 2021 to create a bridge between OEMs and
                    resellers working on GeM for government tenders, making the
                    experience seamless and hassle-free for both.
                </motion.p>
            </section>

            {/* WHY + WHO SECTION */}
            <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

                {/* WHY GEMEASY */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white shadow-lg rounded-2xl p-8"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <Target className="text-indigo-600" />
                        <h3 className="text-2xl font-semibold text-gray-900">
                            Why Gemeasy
                        </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                        Removing complexity and delays from the GeM process so our
                        partners can focus on growth and success.
                    </p>
                </motion.div>

                {/* WHO WE WORK WITH */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white shadow-lg rounded-2xl p-8"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <Users className="text-indigo-600" />
                        <h3 className="text-2xl font-semibold text-gray-900">
                            Who We Work With
                        </h3>
                    </div>

                    <ul className="space-y-3 text-gray-600">
                        <li>• Original Equipment Manufacturers (OEMs)</li>
                        <li>• Authorized Resellers & Channel Partners</li>
                        <li>• Startups entering the GeM ecosystem</li>
                        <li>• Established Enterprises expanding GeM presence</li>
                    </ul>
                </motion.div>
            </section>

            {/* STATS SECTION */}
            <section className="py-20 px-6 bg-indigo-600 text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

                    {[
                        { icon: <Award />, number: "2021", label: "Founded" },
                        { icon: <TrendingUp />, number: "6+ Years", label: "Experience" },
                        { icon: <Target />, number: "₹200+ Cr", label: "Tenders Executed" },
                        { icon: <Users />, number: "20+ OEMs", label: "Onboarded" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="space-y-3"
                        >
                            <div className="flex justify-center">{item.icon}</div>
                            <h4 className="text-2xl md:text-3xl font-bold">
                                {item.number}
                            </h4>
                            <p className="text-sm md:text-base opacity-90">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default About;