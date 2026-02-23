import React from "react";

const TenderPage = () => {
    return (
        <section className="w-full bg-gray-50 py-10">

            <div className="max-w-[1400px] mx-auto px-6 flex gap-8">

                {/* ================= LEFT CONTENT ================= */}
                <div className="flex-1">

                    {/* Page Title */}
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">
                        Active Tenders (207681)
                    </h1>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm">
                            My Filters
                        </button>
                        <button className="px-4 py-2 border rounded-lg text-sm">
                            Keyword
                        </button>
                        <button className="px-4 py-2 border rounded-lg text-sm">
                            Category
                        </button>
                        <button className="px-4 py-2 border rounded-lg text-sm">
                            State
                        </button>
                    </div>

                    {/* Tender Cards */}
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div
                            key={item}
                            className="bg-white rounded-xl border border-gray-200 p-5 mb-5"
                        >
                            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                                Public Health Engineering Division Tender
                            </h3>

                            <div className="flex justify-between items-center text-sm text-gray-600">
                                <div>
                                    <p>Opening Date: 01 Feb 2025</p>
                                    <p>Location: Haryana</p>
                                </div>

                                <div className="flex gap-3">
                                    <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-xs">
                                        Tender Details
                                    </button>
                                    <button className="px-3 py-1 bg-indigo-500 text-white rounded-md text-xs">
                                        Bidding Support
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                {/* ================= RIGHT SIDEBAR ================= */}
                <div className="w-[320px] hidden lg:block">

                    {/* Trial Offer */}
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-6 rounded-xl mb-6 text-center">
                        <h3 className="text-xl font-bold">30 Days Trial</h3>
                        <button className="mt-4 px-4 py-2 bg-white text-indigo-600 rounded-md font-semibold">
                            Try Now
                        </button>
                    </div>

                    {/* Tenders by State */}
                    <div className="bg-white border rounded-xl p-5 mb-6">
                        <h4 className="font-semibold text-indigo-600 mb-3">
                            Tenders by State
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>Maharashtra</li>
                            <li>West Bengal</li>
                            <li>Rajasthan</li>
                            <li>Telangana</li>
                        </ul>
                    </div>

                    {/* Tenders by Source */}
                    <div className="bg-white border rounded-xl p-5">
                        <h4 className="font-semibold text-indigo-600 mb-3">
                            Tenders by Source
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>GEM</li>
                            <li>CPWD</li>
                            <li>IREPS</li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default TenderPage;