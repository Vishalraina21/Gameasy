import React from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom"; // Removed BrowserRouter
import { Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// ==========================================
// FAQ DATA OBJECT (Exact Text Match)
// ==========================================
const faqData = {
    "/gmeregestration": {
        title: "GeM Registration FAQs",
        questions: [
            {
                q: "What is the Government E Marketplace Portal (GeM Portal)?",
                a: "The Government e-Marketplace (GeM) is a dedicated online portal for the procurement of common-use goods and services required by various government departments, organizations, and PSUs."
            },
            {
                q: "How to create a GeM login for a seller account on the Government e-Marketplace?",
                a: "To create a seller account, visit the GeM portal, click on 'Sign Up', select 'Seller', and provide the required details including Aadhaar/PAN, organization type, and bank details."
            },
            {
                q: "Why is GeM Portal important for the government's eprocurement process?",
                a: "It enhances transparency, efficiency, and speed in public procurement while providing a platform for MSMEs and other sellers to reach a vast government market."
            },
            {
                q: "How to Register on the GeM Portal as an MSE/MSME?",
                a: "During GeM registration, sellers can specify their organization type as an MSE. To complete the process, provide your UAM (Udyog Aadhaar Memorandum), Udyam Registration, or MSME registration details, along with the mobile number or Aadhaar number linked to the UAM."
            },
            {
                q: "What are the benefits of registering as an MSME on the GeM Portal?",
                a: "MSMEs enjoy benefits like EMD exemptions, reserved categories for procurement, and easier access to government tenders."
            }
        ]
    },
    "/msme": {
        title: "Frequently Asked Questions",
        questions: [
            {
                q: "What is MSME Registration and Udyam Registration?",
                a: "MSME Registration is the process of registering a Micro, Small, or Medium Enterprise under the Ministry of Micro, Small & Medium Enterprises. Udyam Registration is the official online registration system introduced by the Government of India to replace Udyog Aadhaar. It provides a unique Udyam Registration Number (URN) and officially recognizes businesses as MSMEs to avail government benefits."
            },
            {
                q: "What are the documents required for MSME registration?",
                a: "The basic documents required for MSME registration include Aadhaar Number of the business owner or authorized signatory, PAN Card of the business entity, GSTIN (if applicable), business address details, bank account details, and information regarding investment in plant & machinery and annual turnover."
            },
            {
                q: "What is MSME Registration fees?",
                a: "The MSME Registration (Udyam Registration) process on the official government portal is completely free of cost. No registration fees are charged by the government for obtaining the Udyam Registration Certificate."
            },
            {
                q: "What is MSME Certificate and how to download it?",
                a: "The MSME Certificate, also known as the Udyam Registration Certificate, is an official document issued after successful registration. It contains a unique 19-digit Udyam Registration Number and a QR code for verification. The certificate can be downloaded directly from the Udyam Registration portal after completing the registration process."
            },
            {
                q: "How to Apply for MSME Registration on Udyam Registration Portal?",
                a: "To apply for MSME Registration, visit the official Udyam Registration portal, enter your Aadhaar number and verify it through OTP. Provide PAN details, business information, investment and turnover details, and complete the verification process. Once submitted successfully, the Udyam Registration Number and Certificate will be generated."
            }
        ]
    },
    "/products": {
        title: "Product & Services FAQs",
        questions: [
            {
                q: "How to upload product on GeM Portal through the seller account?",
                a: `For GeM Portal Products List, the seller needs to follow these steps:
                1. Login with your GeM account and go to the Catalogue section.
                2. Search relevant category.
                3. Enter General Information (Size, weight, certifications).
                4. Enter Sales Info (Quantity, MRP, Offered price).
                5. Upload 3 images adhering to guidelines.
                6. Click Proceed to complete Listing.`
            },
            {
                q: "How can a seller view the Gem portal products price list?",
                a: "Sellers can view price lists by navigating to the marketplace section and filtering by categories or specific product names."
            },
            {
                q: "What process needs to be followed if the seller is not able to find a relevant category?",
                a: "You can request a new category creation through the GeM helpdesk or the 'Request a New Category' feature in the catalogue dashboard."
            },
            {
                q: "What are the proper guidelines for uploading images for GeM Portal Products list?",
                a: "Images must be clear, on a white background, without watermarks, and must adhere to the specific resolution requirements (e.g., 500x500 pixels)."
            }
        ]
    },
    "/vendor-assessment": {
        title: "Frequently Asked Questions",
        questions: [
            {
                q: "What is Vendor Assessment?",
                a: "Vendor Assessment is a structured evaluation process conducted on the GeM Portal to verify the credibility, financial stability, production capability, and quality standards of sellers, especially OEMs. It ensures that vendors meet predefined parameters and comply with government procurement guidelines."
            },
            {
                q: "Is Vendor Assessment mandatory for all the sellers?",
                a: "Vendor Assessment is mandatory for OEMs participating in Q1 and Q2 categories or those managing resellers through the OEM panel, except for exempted categories. For other sellers and service providers, the assessment may remain optional depending on the product category and procurement requirements."
            },
            {
                q: "Who conducts the vendor assessment?",
                a: "Vendor Assessment on the GeM Portal is conducted by RITES (Rail India Technical and Economic Service), which is the designated assessment agency authorized to verify documents, conduct desktop reviews, and perform video assessments."
            },
            {
                q: "Which Vendors are exempted from Vendor Assessment?",
                a: "Certain categories of sellers may be exempted from Vendor Assessment as per GeM guidelines. These typically include specific government organizations, certified entities, or sellers falling under exemption criteria defined by the GeM Portal. Sellers must upload valid exemption documents during the application process."
            },
            {
                q: "What is the validity of Vendor Assessment on GeM?",
                a: "The Vendor Assessment on GeM is generally valid for a specific period as defined by GeM guidelines. Sellers must ensure timely renewal before expiry to continue participating in relevant categories and maintain eligibility for government procurement."
            }
        ]
    },
    "/tenderbidding": {
        title: "Frequently Asked Questions",
        questions: [
            {
                q: "What are the various types of tenders in which sellers can participate?",
                a: "Sellers can participate in Open Tenders, Limited Tenders, Proprietary Tenders, and Global Tenders depending on eligibility."
            },
            {
                q: "What is full form of EMD in tender?",
                a: "EMD stands for Earnest Money Deposit. It is a security deposit submitted by bidders to ensure they are serious about the contract."
            },
            {
                q: "Is the tender document fee refundable if the bid is unsuccessful?",
                a: "Generally, the tender document fee is non-refundable, whereas the EMD (Earnest Money Deposit) is refunded to unsuccessful bidders."
            },
            {
                q: "How can sellers participate in GeM Bidding Process?",
                a: "Sellers must be registered on GeM. They can then search for active bids/RA, participate by submitting technical and financial details, and upload required documents."
            },
            {
                q: "What is technical bid evaluation and financial bid evaluation in Tenders?",
                a: "Technical evaluation checks if the bidder meets specifications/eligibility. Financial evaluation compares the price bids of technically qualified bidders."
            }
        ]
    }
};

// ==========================================
// UNIFIED FAQ COMPONENT
// ==========================================
const FAQSection = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    // Safety check: find the data for current path or default to bidding
    const currentData = faqData[currentPath] || faqData["/tenderbidding"];

    return (
        <div className="bg-gray-50 py-16 px-6 ">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">{currentData.title}</h2>
                    <Button variant="text" className="!text-indigo-600 !font-bold">VIEW ALL</Button>
                </div>

                {currentData.questions.map((faq, index) => (
                    <Accordion key={index} className="!mb-4 !shadow-none !border !border-gray-200 !rounded-lg before:hidden">
                        <AccordionSummary expandIcon={<ExpandMoreIcon className="text-indigo-600" />}>
                            <h4 className="font-semibold text-gray-700 text-[15px]">{faq.q}</h4>
                        </AccordionSummary>
                        <AccordionDetails className="border-t bg-white">
                            <p className="text-gray-600 text-[14px] leading-relaxed whitespace-pre-line">
                                {faq.a}
                            </p>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    );
};

// ==========================================
// MAIN APP COMPONENT
// ==========================================
const Portal = () => {
    return (
        // REMOVED <Router> TAG FROM HERE
        <div className="min-h-screen flex flex-col">

            <div className="flex-grow">
                <Routes>
                    <Route path="/gmeregestration" element={<div className="p-8 text-center text-2xl font-bold text-[#5e46e0]">GeM Registration Content</div>} />
                    <Route path="/products" element={<div className="p-8 text-center text-2xl font-bold text-[#5e46e0]">Product & Services Content</div>} />
                    <Route path="/tenderbidding" element={<div className="p-8 text-center text-2xl font-bold text-[#5e46e0]">Tender Bidding Content</div>} />
                    <Route
                        path="/msme"
                        element={
                            <div className="p-8 text-center text-2xl font-bold text-[#5e46e0]">
                                MSME Registration Content
                            </div>
                        }
                    />

                    <Route
                        path="/vendor-assessment"
                        element={
                            <div className="p-8 text-center text-2xl font-bold text-[#5e46e0]">
                                Vendor Assessment Content
                            </div>
                        }
                    />
                    {/* Fallback */}
                </Routes>
            </div>

            {/* The FAQ section stays outside Routes so it's always visible, but location-aware */}
            <FAQSection />
        </div>
    );
};

export default Portal;