import React from "react";
import { useLocation } from "react-router-dom";

const pageContent = {
    "/gmeregestration": {
        title: "GeM Registration Process",
        intro:
            "Start your GeM registration process easily with TendersPlus. Our expert GeM consultancy service team streamlines the process, ensuring your account is set up and ready within one day!",
        steps: [
            "Register on Tenders Plus: One-stop solution for all GeM Tenders and Services.",
            "Business Info: Submit the contact details and basic information about your business.",
            "Service team: Our GeM Consultancy Service Experts will connect to explain the process and documents required.",
            "Package Selection: Select the services that best suit your business needs.",
            "GeM Login: Your GeM login will be ready within 1 business day after documentation completion.",
            "Profile Updation: Our experts will guide you after GeM Login process.",
            "Product Listing: Next step will be Product listing on GeM Portal for Tender Bidding.",
            "TendersPlus: Reach out to our team anytime at contact@tendersplus.com.",
        ],
    },

    "/products": {
        title: "GeM Products Listing Process",
        intro:
            "GeM Portal Products requires uploading detailed product information aligned with the relevant GeM Products category.",
        steps: [
            "Login GeM Portal: Access seller account and add new products.",
            "GeM Category Mapping: Search matching category and map product.",
            "Brand Mapping: Select brand or request to add one.",
            "Catalogue Information: Add description, material & certifications.",
            "Clone Catalogue: Duplicate similar catalogue using Catalogue ID.",
            "Sales Info: Enter quantity, MRP, offer price & delivery details.",
            "Product Images: Upload 3 images as per GeM guidelines.",
            "Review and Submit: Review and publish product catalogue.",
            "TendersPlus Team: Connect with our team for support.",
        ],
    },
    "/msme": {
        title: "MSME Registration Online Process",
        intro:
            "Start your MSME registration process easily with TendersPlus. Our expert consultancy service team streamlines the process, ensuring your account is ready!",

        steps: [
            "Udyam Registration Portal: Visit the official Udyam Registration portal for MSME Registration and click on For New Entrepreneurs who are not Registered yet as MSME or those with EM-II.",
            "Aadhar Number Verification: Aadhar number and Name of Entrepreneur along with OTP verification.",
            "PAN verification: Enter the Pan number along with Type of Organization and validate the details.",
            "Business Details: Basic information like Name of Entrepreneur, Mobile Number, Email and details of the enterprise.",
            "Financial Details: investment in plant and machinery, Turnover details and complete the verification through OTP.",
            "Udyam Registration Certificate: After successful verification, the system generates a 19-digit unique Udyam Registration Number in the format UDYAM-XX-00-0000000.",
            "MSME Registration Fees: Registration Process is totally free.",
            "TendersPlus Team: Reach out to our team anytime at contact@tendersplus.com or chat with us.",
            "Udyam Registration Certificate: Udyam Registration Certificate or the MSME Certificate download can be done after the successful completion of the registration process. The Certificate includes a QR Code for convenient access to enterprise details."
        ]
    },

    "/vendor-assessment": {
        title: "GeM Vendor Assessment Process",
        intro:
            "The GeM Vendor Assessment process ensures seller eligibility and involves a series of steps to ensure correct information and updated documentation.",

        steps: [
            "Initiate Request on GeM: Log in to your GeM account, navigate to \"My Account,\" and access the \"Vendor Assessment\" section. Sellers falling under exemption categories must upload exemption documents; others proceed with the assessment process.",
            "Complete Profile Details: Update vendor profile with contact details, production capacity, sales data, invoices for raw materials & sales from the past 3 years.",
            "Financial and Bank Details: Review and submit financial and bank details.",
            "Submit VA Application: The application details are forwarded to RITES, and the seller receives RITES Vendor Login credentials via email and SMS.",
            "Desktop Assessment: Using RITES login, sellers upload documents and complete the online assessment.",
            "Vendor Assessment fees: Fees are paid online based on category and turnover.",
            "Non-Compliance Resolution: Address any discrepancies within two days if notified.",
            "Video Assessment: Install the \"RITES-GEM VA\" Android app for the video assessment. A meeting is scheduled with an assessor to validate the information.",
            "Approval: Upon successful completion of desktop & video assessment, the VA is approved, enabling sellers to participate in government procurement."
        ]
    },

    "/tenderbidding": {
        title: "Tender Bidding Process",
        intro:
            "TendersPlus experts simplify tender bidding on GeM, eProcurement, IREPS, Nprocure and more by offering tender identification, documentation and guidance to ensure compliance.",
        steps: [
            "Register on Tenders Plus platform.",
            "Business Details: Provide contact and business information.",
            "Service Experts: Our team connects and understands requirements.",
            "Registration Process: Fulfill registration requirements.",
            "Product Listing: Ensure listing requirement before bidding.",
            "Services Required: Confirm necessary services.",
            "Bid Tenders: Provide tender details to bid.",
            "Tender Checklist: Prepare documents and agreement terms.",
            "TendersPlus Team: Consultancy in documentation & analytics.",
        ],
        extraSection: true,
    },

    default: {
        title: "Our Services",
        intro: "Explore our professional government procurement solutions.",
        steps: ["End-to-end support for GeM registration and bidding."],
    },
};

const ServiceDetails = () => {
    const location = useLocation();
    const content =
        pageContent[location.pathname] || pageContent.default;

    return (
        <section className="w-full bg-gray-100 py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* LEFT CONTENT */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">
                        {content.title}
                    </h2>

                    <p className="text-gray-700 leading-7 mb-6">
                        {content.intro}
                    </p>

                    <ul className="space-y-4">
                        {content.steps.map((step, index) => (
                            <li key={index} className="flex gap-3">
                                <span className="text-indigo-600 mt-1">•</span>
                                <span className="text-gray-700 leading-7">
                                    {step}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT FORM */}
                <div className="bg-white rounded-2xl shadow-md p-8 h-fit">
                    <h3 className="text-indigo-600 text-xl font-semibold mb-6">
                        Register Now
                    </h3>

                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full border rounded-xl px-4 py-3"
                        />
                        <input
                            type="email"
                            placeholder="Email id"
                            className="w-full border rounded-xl px-4 py-3"
                        />
                        <input
                            type="text"
                            placeholder="Example :- 702759xxxx"
                            className="w-full border rounded-xl px-4 py-3"
                        />
                        <input
                            type="text"
                            placeholder="Enter your company name"
                            className="w-full border rounded-xl px-4 py-3"
                        />
                        <input
                            type="text"
                            placeholder="GST Number (Optional)"
                            className="w-full border rounded-xl px-4 py-3"
                        />

                        <p className="text-gray-600">Choose the free service</p>

                        <div className="flex gap-3 flex-wrap">
                            <button className="px-4 py-2 border rounded-lg">
                                GeM Registration
                            </button>
                            <button className="px-4 py-2 border rounded-lg">
                                Product Listing
                            </button>
                            <button className="px-4 py-2 border rounded-lg">
                                Tender Bidding
                            </button>
                        </div>

                        <button className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg">
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            {/* EXTRA SECTION FOR TENDER BIDDING PAGE */}
            {content.extraSection && (
                <div className="max-w-7xl mx-auto mt-20">

                    <h3 className="text-2xl font-bold text-indigo-600 mb-6">
                        Documents required for GeM Tender Bidding
                    </h3>
                    <p className="text-gray-700 leading-7 mb-10">
                        TendersPlus experts assist in identifying essential documents such as OEM authorization, declaration forms, PAN, GSTIN and more. Simplify compliance and streamline submission.
                    </p>

                    <h3 className="text-2xl font-bold text-indigo-600 mb-6">
                        GeM Tenders
                    </h3>
                    <p className="text-gray-700 leading-7 mb-10">
                        Explore active government tender opportunities across construction, civil, defence, railways, manpower, telecom, IT and more.
                    </p>

                    <h3 className="text-2xl font-bold text-indigo-600 mb-6">
                        Frequently Asked Questions
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                        <li>• What are the various types of tenders?</li>
                        <li>• What is full form of EMD in tender?</li>
                        <li>• Is tender fee refundable?</li>
                        <li>• How can sellers participate in GeM bidding?</li>
                        <li>• What is technical & financial bid evaluation?</li>
                    </ul>

                </div>
            )}
        </section>
    );
};

export default ServiceDetails;