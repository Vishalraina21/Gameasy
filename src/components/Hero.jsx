import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RegisterModal from "./RegisterModal";
// ... slides array remains the same ...


const slides = [
    {
        title: "Get GeM Services upto Rs.1999 Free of Cost!",
        description:
            "Register Now & try our services as part of Launch offer",
        image:
            "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
        primaryBtn: "REGISTER",
        secondaryBtn: "CHAT NOW!",
    },
    {
        title: "GeM Registration",
        description:
            "Create your GeM Login & Seller Account with complete Seller Profile Management",
        image:
            "https://images.unsplash.com/photo-1521791055366-0d553872125f",
        primaryBtn: "REGISTER",
        secondaryBtn: "CHAT NOW!",
    },
    {
        title: "MSME Registration",
        description:
            "MSME Registration: benefits, EMD exemption, certificate details, fees, and Udyam Aadhaar download.",
        image:
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
        primaryBtn: "REGISTER",
        secondaryBtn: "CHAT NOW!",
    },
    {
        title: "GeM Products",
        description:
            "Boost your business by leveraging GeM Portal Products & actively participate in tenders and direct purchase.",
        image:
            "https://images.unsplash.com/photo-1556157382-97eda2d62296",
        primaryBtn: "REGISTER",
        secondaryBtn: "CHAT NOW!",
    },
    {
        title: "Tender Bidding Services",
        description:
            "Grow your business by participating in Tenders on GeM Portal, CPPP, IREPS & Other Authorities.",
        image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
        primaryBtn: "REGISTER",
        secondaryBtn: "CHAT NOW!",
    },
    {
        title: "GeM Vendor Assessment",
        description:
            "Complete GeM vendor assessment via RITES Vendor login to participate in Q1 & Q2 Category Products.",
        image:
            "https://images.unsplash.com/photo-1581090700227-1e8a5f9e9c1b",
        primaryBtn: "REGISTER",
        secondaryBtn: "CHAT NOW!",
    },
];

const Hero = () => {
    const [index, setIndex] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        /* FIX 1: Ensure relative positioning and strictly hidden overflow */
        <section className="relative w-full h-[85vh] overflow-hidden bg-gray-900">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    /* FIX 2: Use w-full and h-full instead of inset-0 to prevent layout shifts */
                    className="absolute top-0 left-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* FIX 3: Object-cover ensures the image fills the space without stretching the container */}
                    <img
                        src={slides[index].image}
                        alt={slides[index].title}
                        className="w-full h-full object-cover block"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60" />

                    {/* Content Container */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight"
                        >
                            {slides[index].title}
                        </motion.h2>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl mb-8 max-w-2xl text-gray-200"
                        >
                            {slides[index].description}
                        </motion.p>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex gap-4 flex-wrap justify-center"
                        >
                            <Button
                                variant="contained"
                                onClick={() => setOpenModal(true)}
                                sx={{
                                    bgcolor: '#4f46e5',
                                    px: 4, py: 1.5,
                                    '&:hover': { bgcolor: '#4338ca' }
                                }}
                            >
                                {slides[index].primaryBtn}
                            </Button>

                            <Button
                                variant="outlined"
                                sx={{
                                    color: 'white',
                                    borderColor: 'white',
                                    px: 4, py: 1.5,
                                    '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' }
                                }}
                            >
                                {slides[index].secondaryBtn}
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation UI - Positioned absolute relative to the section */}
            <div className="absolute inset-0 flex items-center justify-between px-4 md:px-6 pointer-events-none">
                <IconButton
                    onClick={prevSlide}
                    sx={{ color: "white", pointerEvents: "auto", bgcolor: 'rgba(0,0,0,0.2)', '&:hover': { bgcolor: 'rgba(0,0,0,0.4)' } }}
                >
                    <ArrowBackIosNewIcon />
                </IconButton>
                <IconButton
                    onClick={nextSlide}
                    sx={{ color: "white", pointerEvents: "auto", bgcolor: 'rgba(0,0,0,0.2)', '&:hover': { bgcolor: 'rgba(0,0,0,0.4)' } }}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === index ? "bg-white w-8" : "bg-white/40"
                            }`}
                    />
                ))}
            </div>
            <RegisterModal open={openModal} setOpen={setOpenModal} />
        </section>
    );
};

export default Hero;