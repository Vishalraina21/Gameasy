import React, { useRef } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const states = [
    "Maharashtra", "Haryana", "West Bengal", "Telangana",
    "Madhya Pradesh", "Uttar Pradesh",
    "Andhra Pradesh", "Arunachal Pradesh", "Assam",
    "Bihar", "Chhattisgarh", "Goa",
    "Gujarat", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala"
];

const sources = ["GEM", "IREPS", "CPWD"];

const Tenders = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollBy({
            left: direction === "left" ? -300 : 300,
            behavior: "smooth",
        });
    };

    return (
        <section className="w-full bg-[#f4f4f6] py-12">

            <div className="max-w-[1500px] mx-auto px-8">

                {/* ================= Tender by State ================= */}
                <div className="mb-14">
                    <h2 className="text-[26px] font-bold text-[#5e46e0] mb-6">
                        Tender by State
                    </h2>

                    <div className="relative">

                        {/* Left Arrow */}
                        <button
                            onClick={() => scroll("left")}
                            className="absolute -left-5 top-1/2 -translate-y-1/2 text-[#5e46e0]"
                        >
                            <ChevronLeftIcon sx={{ fontSize: 28 }} />
                        </button>

                        {/* Right Arrow */}
                        <button
                            onClick={() => scroll("right")}
                            className="absolute -right-5 top-1/2 -translate-y-1/2 text-[#5e46e0]"
                        >
                            <ChevronRightIcon sx={{ fontSize: 28 }} />
                        </button>

                        {/* Scroll Row */}
                        <div
                            ref={scrollRef}
                            className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar"
                        >
                            {states.map((state, index) => (
                                <div
                                    key={index}
                                    className="min-w-[220px] h-[105px] bg-white
                  border border-gray-200 rounded-xl
                  flex items-center justify-center text-center
                  text-[#5e46e0] font-semibold text-[17px]
                  cursor-pointer transition-all duration-300
                  hover:border-[#5e46e0]"
                                >
                                    {state}
                                    <br />
                                    Tenders
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ================= Tender by Source ================= */}
                <div>
                    <h2 className="text-[26px] font-bold text-[#5e46e0] mb-6">
                        Tender by Source
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {sources.map((source, index) => (
                            <div
                                key={index}
                                className="h-[110px] bg-white
                border border-gray-200 rounded-xl
                flex items-center justify-center text-center
                text-[#5e46e0] font-semibold text-[18px]
                cursor-pointer transition-all duration-300
                hover:border-[#5e46e0]"
                            >
                                {source}
                                <br />
                                Tenders
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Tenders;