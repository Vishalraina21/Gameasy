import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    KeyboardArrowDown,
    Menu,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"
import RegisterModal from "./RegisterModal";
const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const location = useLocation();
    const navItems = [
        { name: "Tenders", path: "/tenders" },
        { name: "GeM Registration", path: "/gmeregestration" },
        { name: "Product & Services", path: "/products" },
        { name: "Tender Bidding", path: "/tenderbidding" },
        {
            name: "Other Services",
            dropdown: [
                { name: "MSME", path: "/msme" },
                { name: "Vendor Assessment", path: "/vendor-assessment" },
                { name: "Authorized Registration", path: "/authorized-registration" },
            ],
        },
    ];

    return (
        <header className="w-full shadow-sm bg-white">

            {/* ================= Top Bar ================= */}
            <div className="hidden md:flex justify-end items-center px-6 py-2 text-sm text-gray-700">
                <div className="flex items-center gap-3">
                    <Phone sx={{ fontSize: 18 }} />
                    <span>91 8972171685 | +91 7970463729</span>
                    <span>|</span>
                    <Mail sx={{ fontSize: 18 }} />
                    <span>gemeasy25@gmail.com</span>

                    <Link to="/">
                        <Button
                            onClick={() => setOpenModal(true)}
                            variant="contained"
                            className="!ml-4 !bg-indigo-600 hover:!bg-indigo-700 !rounded-md !px-4 !py-1"
                        >
                            REGISTER NOW
                        </Button>
                    </Link>
                </div>
            </div>

            {/* ================= Main Navbar ================= */}


            <Link to="/" className="flex items-center absolute top-0 z-20 pl-2">
                <img
                    className="w-28 lg:w-32 h-auto object-contain"
                    src={logo}
                    alt="Gemeasy logo"
                />
            </Link>
            <div className="relative flex items-center justify-end px-6">

                {/* Logo */}


                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8 font-medium">
                    {navItems.map((item, index) => (
                        <div key={index} className="relative">
                            {/* Normal Nav Items */}
                            {!item.dropdown && (
                                <Link to={item.path}>
                                    <motion.div
                                        whileHover={{ y: -2 }}
                                        className={`cursor-pointer transition-colors duration-200 m-5
                        ${location.pathname === item.path
                                                ? "text-indigo-600"
                                                : "text-gray-800 hover:text-indigo-600"
                                            }`}
                                    >
                                        {item.name}
                                    </motion.div>
                                </Link>
                            )}

                            {/* Dropdown Nav Item */}
                            {item.dropdown && (
                                <div
                                    className="relative m-5 cursor-pointer"
                                    onMouseEnter={() => setDropdownOpen(true)}
                                    onMouseLeave={() => setDropdownOpen(false)}
                                >
                                    <div className="flex items-center text-gray-800 hover:text-indigo-600">
                                        {item.name}
                                        <KeyboardArrowDown sx={{ fontSize: 18 }} />
                                    </div>

                                    {dropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute -left-14 mt-3 w-52 bg-white shadow-lg rounded-md py-2 z-50"
                                        >
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <Link key={subIndex} to={subItem.path}>
                                                    <div className="px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600 transition">
                                                        {subItem.name}
                                                    </div>
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <div className="lg:hidden m-7 ">
                    <IconButton onClick={() => setMobileOpen(!mobileOpen)}>
                        <Menu />
                    </IconButton>
                </div>

            </div>

            {/* ================= Mobile Dropdown ================= */}
            {mobileOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="lg:hidden px-6 pb-4 space-y-3 font-medium "
                >
                    {navItems.map((item, index) => (
                        <div key={index}>
                            {!item.dropdown && (
                                <Link to={item.path} onClick={() => setMobileOpen(false)}>
                                    <div className="py-2 border-b">
                                        {item.name}
                                    </div>
                                </Link>
                            )}

                            {item.dropdown && (
                                <>
                                    <div
                                        className="flex justify-between items-center py-2 border-b cursor-pointer"
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                    >
                                        {item.name}
                                        <KeyboardArrowDown sx={{ fontSize: 18 }} />
                                    </div>

                                    {dropdownOpen && (
                                        <div className="pl-4 space-y-2">
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    to={subItem.path}
                                                    onClick={() => {
                                                        setMobileOpen(false);
                                                        setDropdownOpen(false);
                                                    }}
                                                >
                                                    <div className="py-1 text-gray-600 hover:text-indigo-600">
                                                        {subItem.name}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                    <Link to="/">
                        <Button
                            variant="contained"
                            fullWidth
                            className="!mt-3 !bg-indigo-600 hover:!bg-indigo-700"
                        >
                            REGISTER NOW
                        </Button>
                    </Link>
                </motion.div>
            )}

            <RegisterModal open={openModal} setOpen={setOpenModal} />

        </header>
    );
};

export default Header;