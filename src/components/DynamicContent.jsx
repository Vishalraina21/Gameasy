import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// ==========================================
// 1. TENDER BIDDING SECTION (/tenderbidding)
// ==========================================
const TenderBidding = () => {
    const docs = [
        { t: "OEM Authorization Letter (Bid Specific)", d: "Bid-specific authorization from the Original Equipment Manufacturer." },
        { t: "Format 1: Vendor Basic Info (Form-C)", d: "Vendor's basic details like name, address, and contact." },
        { t: "Format 2: Bank Details (Annexure-H)", d: "RTGS/NEFT details with a cancelled cheque copy for Payment." },
        { t: "Format 3: Declaration of T&C (FORM-A)", d: "Acceptance of all terms and conditions declaration." },
        { t: "Format 4: Make in India Certificate", d: "Compliance declaration of adherence to Make in India guidelines." },
        { t: "Format 5: Letter of Bid (Annexure-G)", d: "Confirmation letter for participation in the bid." },
        { t: "Format 6: Notarized Affidavit for Dealers", d: "Affidavit on non-judicial stamp paper for Authorized dealers." },
        { t: "Format 7: GoI Compliance Certificate", d: "Certificate ensuring compliance with procurement guidelines." },
        { t: "Format 8: Debarment/Ban Declaration", d: "Statement of bidder's debarment or ban status." },
        { t: "10. Format 9: Annexure-Z", d: "Tender-specific details as per required format." },
        { t: "Format 10: Power of Attorney (Annexure-J)", d: "Authorization document for designated representative, if needed." },
        { t: "PAN & GSTIN Documents", d: "Copies of PAN and GSTIN for tax compliance." },
        { t: "MSME/MSE Certificates", d: "Proof of Micro, Small, or Medium Enterprise status." },
        { t: "Signed Specification Sheet", d: "Acknowledgement of tender specifications by the bidder." },
        { t: "Signed GeM ATC", d: "Acceptance of GeM's terms and conditions." },
        { t: "Price Reasonability Certificate", d: "Declaration of fair pricing with supporting purchase orders." },
        { t: "Proprietary Article Certificate", d: "Certificate for proprietary items, if applicable." },
    ];

    return (
        <div className="py-16 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Documents required for <span className="text-[#5e46e0]">GeM Tender Bidding</span></h2>
                <p className="text-gray-500 text-[14px] max-w-5xl mx-auto leading-relaxed">
                    TendersPlus experts assist in identifying essential documents for GeM tender bidding, such as OEM authorization, declaration forms, PAN, GSTIN, and more. Simplify compliance with government regulations and streamline your tender submission process with accurate documentation for successful bidding outcomes.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
                {docs.map((doc, i) => (
                    <div key={i} className="flex gap-4 items-start">
                        <div className="w-10 h-10 bg-[#5e46e0] rounded-lg shrink-0 flex items-center justify-center text-white shadow-md">
                            <span className="text-sm">📄</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-[15px] text-gray-800 leading-tight mb-1">{doc.t}</h4>
                            <p className="text-[12px] text-gray-600 leading-normal">{doc.d}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};





const MSMEDocuments = () => {
    const docs = [
        {
            t: "Business PAN Card",
            d: "PAN of Business entity & Authorized Signatory"
        },
        {
            t: "Aadhaar Card",
            d: "Id proof of the business owner or authorized signatory"
        },
        {
            t: "Type of Organization",
            d: "Proprietorship, Partnership or Private"
        },
        {
            t: "Contact Details",
            d: "E-mail ID and Mobile No. of Enterprise"
        },
        {
            t: "Plant and Office Address",
            d: "Utility bills or rental agreements"
        },
        {
            t: "Bank Details",
            d: "Business Bank Account details"
        },
        {
            t: "GSTIN Details",
            d: "GSTIN Details if applicable"
        },
        {
            t: "Additional Info",
            d: "Social Category, Business Activity code, Number of employees"
        },
    ];

    return (
        <div className="py-16 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                    Documents required for <span className="text-[#5e46e0]">MSME Registration</span>
                </h2>
                <p className="text-gray-500 text-[14px] max-w-5xl mx-auto leading-relaxed">
                    Accurate documentation and online registration streamline the MSME registration process, unlocking access to government benefits. This ensures a seamless experience for businesses, fostering growth and development with tailored government support.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
                {docs.map((doc, i) => (
                    <div key={i} className="flex gap-4 items-start">
                        <div className="w-10 h-10 bg-[#5e46e0] rounded-lg shrink-0 flex items-center justify-center text-white shadow-md">
                            <span className="text-sm">📄</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-[15px] text-gray-800 leading-tight mb-1">
                                {doc.t}
                            </h4>
                            <p className="text-[12px] text-gray-600 leading-normal">
                                {doc.d}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// ==========================================
// 2. PRODUCT & SERVICES SECTION (/products)
// ==========================================
const ProductServices = () => {
    const categories = [
        { t: "Human Resources Outsourcing", items: ["Security", "Housekeeping", "Manpower Services"], icon: "👥" },
        { t: "Vehicle Hiring", items: ["Taxi Hiring", "Bus", "Utility Vehicles"], icon: "🚐" },
        { t: "Logistics Services", items: ["Ambulance", "Goods", "Transport"], icon: "📦" },
        { t: "Maintenance Services", items: ["Building", "Repair", "Servicing"], icon: "🛠️" },
        { t: "Consultancy Services", items: ["Audit", "Financial", "Legal"], icon: "🤝" },
        { t: "Training Services", items: ["Vocational", "Skill building", "IT training"], icon: "🎓" },
    ];

    return (
        <div className="py-16 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">GeM Portal <span className="text-[#5e46e0]">Services Categories</span></h2>
                <p className="text-gray-500 mt-4 text-[14px] max-w-5xl mx-auto">
                    GeM Service Categories encompass a diverse range of service offerings, providing a comprehensive platform for government organizations to procure various services efficiently. Explore and leverage these categories for streamlined procurement processes on GeM Portal.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categories.map((cat, i) => (
                    <div key={i} className="border border-gray-200 p-8 rounded-xl relative bg-white shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-[#5e46e0] font-bold text-[19px] mb-5">{cat.t}</h3>
                        <ul className="space-y-3 text-gray-600 text-[15px] font-medium">
                            {cat.items.map(item => <li key={item}>{item}</li>)}
                        </ul>
                        <div className="absolute bottom-6 right-6 text-4xl opacity-20">{cat.icon}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// ==========================================
// 3. GeM REGISTRATION SECTION (/gmeregestration)
// ==========================================
const GeMRegistration = () => {
    const benefits = [
        { t: "Transparency & Ease of Buying", d: "Government e-Marketplace ensures transparency and simplifies the purchasing process for government entities at the central, state, PSU, and other levels." },
        { t: "User-Friendly Dashboard", d: "The GeM buyer login streamlines procurement with efficient stock management, payment tracking, direct purchase and tendering processes." },
        { t: "Multiple Purchase Options", d: "GeM Bid procurement process offers various purchase options, including direct purchase, L1, bid, reverse auction, forward auction, and push-button procurement, catering to diverse procurement needs." },
        { t: "Customization Features", d: "GeM Buyer Login enjoys multiple options for quantity, locations, consignees, bid duration, and more, allowing for a customized procurement approach." },
        { t: "Competitive Analysis", d: "GeM Buyer Login provides tools for competitive analysis, enabling buyers to assess and compare offerings from multiple suppliers to make informed procurement decisions." },
        { t: "Product Listing", d: "GeM portal offers a comprehensive product listing for individual categories of goods and services, providing a vast range of options to buyers." },
        { t: "Online Notifications", d: "Sellers receive online notifications for status updates, ensuring effective communication and keeping all stakeholders informed throughout the procurement process." },
        { t: "Integrated Payment System", d: "GeM Portal features an integrated payment system, allowing buyers to make secure and convenient online payments, contributing to a seamless financial transaction process." }
    ];

    return (
        <div className="py-16 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Buyer Benefits on <span className="text-[#5e46e0]">GeM Portal Registration</span></h2>
                <p className="text-gray-500 mt-4 text-[14px] max-w-6xl mx-auto leading-relaxed">
                    Buyers on the GeM portal enjoy several benefits, enhancing the procurement process for government departments, PSU’s, and other government organizations. GeM Buyer login ensures a streamlined and optimized process for acquiring goods and services on the portal.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {benefits.map((ben, i) => (
                    <div key={i} className="border border-indigo-50 p-6 rounded-lg bg-white shadow-sm hover:border-indigo-200 transition-colors">
                        <h4 className="text-[#5e46e0] font-bold text-[17px] mb-3 leading-tight">{ben.t}</h4>
                        <p className="text-[12px] text-gray-500 leading-relaxed">{ben.d}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};



const VendorAssessmentChecklist = () => {

    const docs = [
        { t: "GSTIN", d: "GSTIN Certificate" },
        { t: "Incorporation", d: "Certification of Incorporation" },
        { t: "Regular product", d: "List/ Catalogue of Regular product" },
        { t: "Customized product", d: "List/ Catalogue of customized product" },
        { t: "Quality", d: "All Quality Certificates" },
        { t: "License Number", d: "BIS / other License Number (if applicable) with validity date" },
        { t: "Test reports", d: "Test reports of the products for which you want to get the vendor assessment" },
        { t: "OEM Authorization", d: "OEM Authorization letter to sell products in open market" },
        { t: "Date of incorporation", d: "Work orders/ letter of order completion of the first government order from the date of incorporation" },
        { t: "Value Wise", d: "Work orders/ letter of order completion of (Value Wise) government and private organisation orders in the last 3 years" },
        { t: "Debarring /Blacklisting", d: "Undertaking on company letter head against Debarring /Blacklisting by any Govt. organisation" },
        { t: "GSTIN Certificate", d: "Document for GSTIN of the manufacturing site (GSTIN Certificate)" },
        { t: "Process flow diagrams", d: "Process flow diagrams: From receiving work order to customer delivery" },
        { t: "Raw material", d: "Process Flow diagrams: All the value adding processes from Input Raw material to Finished good (For each product category)" },
        { t: "Document showing", d: "Document showing firm’s daily and monthly production Capacity. (For each product applied for Vendor Assessment)" },
        { t: "Operating efficiency", d: "Upload self-declaration showing percentage utilization (Operating efficiency) on company letterhead" },
        { t: "Quality Assurance", d: "Documents to show Quality Assurance process of the products (QA SOP)" },
        { t: "Inspection process", d: "Document of part wise inspection process" },
        { t: "Invoices", d: "Invoices for different locations to show the firm’s territory of operation" },
        { t: "SOP for transportation", d: "SOP for transportation to deliver defect free products" },
        { t: "List of suppliers", d: "List of suppliers (Name and Address) along with last quantity of supplied" },
        { t: "Performance monitoring system", d: "Document to show Suppliers’ performance monitoring system" },
        { t: "Rejected material", d: "Rejected material handling procedure" },
        { t: "Customer complaint", d: "Customer complaint logs and SOP" },
        { t: "Safety Standard", d: "Safety Standard and Operating Procedures manual" },
        { t: "Sample Warranty", d: "Sample Warranty document" },
        { t: "Warranty", d: "Document for terms and condition for warranty" },
        { t: "R&D center", d: "Document showing that the R&D center is a recognised or approved center" },
        { t: "Improvement", d: "Document showing collaboration with premium R&D institutes for product development/new product/quality improvement" },
        { t: "Copyrights and trademarks", d: "Document of patents, copyrights and trademarks" },
        { t: "Prototype developed", d: "List and picture of prototype developed in house" },
    ];

    return (
        <div className="py-16 px-6 max-w-7xl mx-auto">

            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                    GeM Vendor Assessment <span className="text-[#5e46e0]">Checklist</span>
                </h2>

                <p className="text-gray-500 text-[14px] max-w-5xl mx-auto leading-relaxed">
                    GeM Vendor Assessment checklist cover various aspects, including legal documentation, product information, quality assurance, production capacity, supplier management, customer service, safety standards, and more. Each item serves as a crucial component for evaluating and assessing a vendor on the GeM Portal.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
                {docs.map((doc, i) => (
                    <div key={i} className="flex gap-4 items-start">
                        <div className="w-10 h-10 bg-[#5e46e0] rounded-lg shrink-0 flex items-center justify-center text-white shadow-md">
                            <span className="text-sm">📄</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-[15px] text-gray-800 mb-1">
                                {doc.t}
                            </h4>
                            <p className="text-[12px] text-gray-600">
                                {doc.d}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Fees Section */}

            <div className="mt-16">
                <h3 className="text-2xl font-bold mb-6 text-center">
                    GeM Vendor Assessment Fees
                </h3>

                <div className="space-y-4 text-sm text-gray-700 max-w-3xl mx-auto">

                    <p>
                        Sellers are required to pay the GeM Vendor Assessment Fees online directly to RITES. These non-refundable fees vary based on the seller's category and turnover.
                    </p>

                    <div>
                        <h4 className="font-semibold mt-4">Vendor Assessment Fees - OEM’s</h4>
                        <p>Turnover upto 20 Lacs: Rs. 871.61 + GST</p>
                        <p>Turnover from 20 Lacs to 1 Cr: Rs. 1743.22 + GST</p>
                        <p>Turnover above 1 Cr: Rs. 3486.44 + GST</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mt-4">Vendor Assessment Fees - Reseller’s</h4>
                        <p>Turnover upto 20 Lacs: Rs. 217.90 + GST</p>
                        <p>Turnover from 20 Lacs to 1 Cr: Rs. 435.81 + GST</p>
                        <p>Turnover above 1 Cr: Rs. 871.61 + GST</p>
                    </div>

                    <p className="mt-4">
                        Vendor Assessment exemption process - In case of exemption, the charges for process is Free of cost.
                    </p>
                </div>
            </div>

        </div>
    );
};

// ==========================================
// MAIN CONTENT RENDERER
// ==========================================
const DynamicContent = () => {
    const location = useLocation();
    const path = location.pathname;

    const renderContent = () => {
        switch (path) {
            case "/gmeregestration":
                return <GeMRegistration />;

            case "/products":
                return <ProductServices />;

            case "/tenderbidding":
                return <TenderBidding />;

            case "/tenders":
                return <TenderBidding />;

            case "/msme":
                return <MSMEDocuments />;
            case "/vendor-assessment":
                return <VendorAssessmentChecklist />


            case "/otherservices":
                return (
                    <div className="py-20 text-center">
                        <h2 className="text-3xl font-bold text-indigo-600">
                            Other Services
                        </h2>
                        <p className="text-gray-600 mt-4">
                            Explore additional consultancy and procurement services.
                        </p>
                    </div>
                );

            default:
                return <GeMRegistration />; // fallback
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {renderContent()}

            {/* Sticky WhatsApp Button */}

        </div>
    );
};

export default DynamicContent;

