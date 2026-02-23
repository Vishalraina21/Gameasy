import React from "react";

const Offer = () => {
    return (
        <div className="w-full bg-white  py-14 px-4 md:px-8">
            <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center overflow-hidden rounded-xl border-2 border-indigo-600 bg-white">

                {/* Left Section */}
                <div className="flex-1 text-center md:text-left py-5 px-6 md:px-10">
                    <h3 className="text-sm md:text-base font-semibold tracking-wide">
                        LAUNCH OFFER – GET SERVICES WORTH
                    </h3>

                    <h2 className="text-2xl md:text-4xl font-bold text-indigo-600 mt-1">
                        Rs.1000 FREE!
                    </h2>
                </div>

                {/* Right Section */}
                <div className="relative w-full md:w-[260px] bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center py-5">

                    {/* Small Curve Cut Effect */}
                    <div className="hidden md:block absolute -left-3 top-0 w-6 h-6 bg-white rounded-full"></div>
                    <div className="hidden md:block absolute -left-3 bottom-0 w-6 h-6 bg-white rounded-full"></div>

                    <button className="text-base md:text-xl font-semibold">
                        Register Now
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Offer;