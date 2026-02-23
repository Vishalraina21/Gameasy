import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

const RegisterModal = ({ open, setOpen }) => {
    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-black/50 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                    />

                    {/* Modal */}
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center px-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl relative">

                            {/* Close Button */}
                            <IconButton
                                onClick={() => setOpen(false)}
                                className="!absolute top-3 right-3"
                            >
                                <CloseIcon />
                            </IconButton>

                            <div className="grid md:grid-cols-2">

                                {/* Left Side */}
                                <div className="bg-gray-100 p-8">
                                    <h2 className="text-3xl font-bold mb-4">
                                        GeM & Tender Information
                                    </h2>

                                    <p className="text-indigo-600 text-2xl font-bold mb-6">
                                        Services starting @ ₹499
                                    </p>

                                    <ul className="space-y-3 text-gray-700 text-sm">
                                        <li>• Tender Alerts from GeM, eProc, IREPS</li>
                                        <li>• Advanced filters and 3 Daily Alerts</li>
                                        <li>• GeM Registration & Product Listing</li>
                                        <li>• Tender Bidding Support</li>
                                        <li>• Vendor Assessment, MSME & more</li>
                                    </ul>

                                    <p className="mt-6 font-semibold">
                                        Register Now – Get 7 days Trial{" "}
                                        <span className="text-indigo-600">FREE!</span>
                                    </p>
                                </div>

                                {/* Right Side */}
                                <div className="p-8">
                                    <h3 className="text-xl font-semibold mb-6">
                                        Register with your <span className="text-indigo-600">Mobile Number</span>
                                    </h3>

                                    <div className="flex items-center border rounded-lg overflow-hidden mb-6">
                                        <span className="px-3 bg-gray-100">+91</span>
                                        <input
                                            type="tel"
                                            placeholder="70xxxx"
                                            className="flex-1 p-3 outline-none"
                                        />
                                    </div>

                                    <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold">
                                        Submit
                                    </button>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default RegisterModal;