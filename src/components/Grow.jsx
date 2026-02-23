import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const contentData = {
    "/tenders": {
        title: "Grow with Tender Services",
        text: [
            "Explore thousands of active government tenders across India.",
            "Get real-time alerts, advanced filters, and expert assistance.",
            "Participate confidently with professional bidding support.",
        ],
        image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    },

    "/gmeregestration": {
        title: "GeM Portal Registration",
        text: [
            "The Government E-Marketplace, commonly referred to as the GeM Portal, is one of the key pillars for the government sector's growth. Initiated by the Government of India in 2016, GeM Portal has been a groundbreaking change leading the digital transformation of the Eprocurement. This platform revolutionizes procurement processes, simplifying the online acquisition of goods and services for government entities and public sector undertakings, thus reshaping the procurement landscape.",
            "With a free GeM Registration, sellers can list their products or services and connect directly with verified government buyers, gaining nationwide exposure and credible business opportunities. Explore the possibilities by creating a GeM login for your seller account today and taking your business to new heights!",
        ],
        image:
            "https://images.unsplash.com/photo-1521791055366-0d553872125f",
    },

    "/products": {
        title: "GeM Portal Products",
        text: [
            "GeM Portal transformed eprocurement, providing an efficient platform for government departments and sellers alike. Sellers keen on tapping into this marketplace must kickstart their journey with GeM portal products, a pivotal step to growing business and directly engage with government entities.",
            "Post Registration, sellers can seamlessly initiate the GeM Portal Product Listing process. The comprehensive product information and relevant GeM product category mapping are important for product listing. Sellers must cross-reference the Gem portal products list during the process to ensure accurate categorization. The GeM Product team verifies and approves the uploaded information, granting sellers eligibility for GeM's direct purchase process and tender participation.",
            "catalogue management. The platform prioritizes cleaning up product listings to ensure accuracy and ease of use. This effort enhances transparency, simplifies procurement, and strengthens the overall efficiency of the government eMarketplace, benefiting buyers and sellers alike.",
        ],
        image:
            "https://images.unsplash.com/photo-1556157382-97eda2d62296",
    },

    "/tenderbidding": {
        title: "Professional Tender Bidding",
        text: [
            "The tender bidding process can be complex and challenging, especially with the constantly evolving guidelines and documentation requirements set by government entities. Without proper guidance, creating a winning bid can be a difficult task.",
            "At TendersPlus, we provide end-to-end support to make your tender bidding journey seamless and effective. Our team of expert advisors meticulously analyzes tender documents to ensure compliance with every requirement. Whether it’s Government E-Marketplace (GeM), Central Public Procurement Portal (CPPP), Indian Railways E-Procurement System (IREPS), or other government platforms, we cater to your unique needs with precision and expertise.",
            "Our experts not only guide you through the bidding process but also take the responsibility of preparing and submitting tender documents on your behalf. We also provide Tender Analytics, offering insights into archived tender trends, helping you strategize and optimize your bid preparation for better success rates. Accuracy, compliance, and customized support are at the core of our services, ensuring your bid stands out in the competitive marketplace.",
            "Partner with TendersPlus and experience seamless tender bidding with our expert and dedicated team. Let us handle the complexities while you focus on growing your business."
        ],
        image:
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    },

    "/msme": {
        title: "MSME Registration",
        text: [
            "The Micro, Small, and Medium Enterprises (MSME) sector plays a crucial role in driving India's economic growth by fostering innovation, creating employment, and promoting entrepreneurship. To streamline business registration and ensure easy access to benefits, the Ministry of Micro, Small & Medium Enterprises introduced Udyog Aadhaar, now upgraded to the Udyam Registration portal. This user-friendly platform allows businesses to register effortlessly and unlock various growth opportunities and support with just a few clicks.",

            "The government has implemented a comprehensive framework for MSME registration, providing formal recognition and extensive benefits. The Udyam Registration process requires basic details such as Aadhaar, PAN, and business information, ensuring simplicity and accessibility. Once registered, businesses receive an MSME certificate, which grants access to benefits including tax exemptions, EMD (Earnest Money Deposit) waivers for government tenders, protection against delayed payments, lower interest rates on loans, and eligibility for subsidies.",

            "TendersPlus simplifies the MSME registration journey by providing expert guidance and end-to-end support. From understanding the eligibility criteria to obtaining your Udyam MSME certificate, TendersPlus ensures a seamless registration experience. With our assistance, businesses can maximize the advantages of MSME registration and unlock new opportunities for growth and success."
        ],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
    },

    "/vendor-assessment": {
        title: "GeM Vendor Assessment",
        text: [
            "Vendor Assessment on the GeM portal evaluates vendors across predefined parameters, focusing on product quality, authenticity, and operational practices. The Vendor Assessment for OEMs is based on three broad parameters: Vendor Profile (Physical presence), Financial Profile, and Production Capability. This process ensures the reliability of OEMs and suppliers, establishing a transparent and trustworthy procurement ecosystem characterized by regular supply and financial stability.",

            "Vendor Assessment is mandatory for OEMs participating in Q1 and Q2 categories or managing resellers through the OEM panel, except for exempted categories. For others, it remains optional, enabling sellers, OEMs, and service providers to validate their organizational and financial credentials. By verifying professional track records, the process simplifies complex buying decisions and offers buyers confidence in the reliability of sellers.",

            "The assessment is conducted by RITES (Rail India Technical and Economic Service), the designated Vendor Assessment agency. The process involves Desktop Assessment and Video Assessment stages. Successful Vendor Assessment ensures credibility and boosts the seller’s reputation on the GeM marketplace, enhancing opportunities in government procurement."
        ],
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72"
    },


    "/authorized-registration": {
        title: "Central Public Procurement Portal (CPPP)",
        text: [
            "Central Public Procurement portal has been established by The Government of India and is an online platform for all government organizations, state governments, PSUs to publish their tender requirements, corrigendum/Addendum, declare result and publish AOC. It is also known as the eProcurement System of India.",

            "Every day, government organizations publish thousands of tenders, inviting applications from eligible suppliers for quality products and services. All tender notices are published on the CPPP, making it possible for registered users to find the latest tenders and apply to relevant opportunities.",

            "TendersPlus provides expert assistance in CPPP registration and tender participation. Our team ensures complete compliance with documentation requirements and submission guidelines, helping businesses successfully participate in government procurement opportunities."
        ],
        image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
    },

    default: {
        title: "Grow with Gemeasy",
        text: [
            "Grow your business with Gemeasy, a dedicated team of industry professionals offering comprehensive services. Specializing in GeM Portal Registration, Product Listing, Tender Bidding, Udyam MSME Registration, GeM Vendor Assessment, OEM Panel, and more for Government Tenders, Gemeasy adapts to the evolving landscape of government e-procurement, providing adept solutions for online bidding.",
            "Our experienced advisors streamline bidding, meticulously analyzing Tender documents for all government authorities. Gemeasy goes beyond consultation, ensuring document submissions on behalf of clients across various tender portals. Seize the opportunity with Free expert consultation and our introductory offer – the first service, valued at Rs.1999, is complimentary.",
            "Register on our website to explore Active Tenders Information, Tender Results, and Contracts from the GeM Portal with Gemeasy. Your go-to partner for end-to-end tender-related services, offering a seamless and efficient tendering experience.",
        ],
        image:
            "https://iai-files.s3.ap-south-1.amazonaws.com/assets/images/culture/actuary/image1.png",
    },
};

const Grow = () => {
    const location = useLocation();
    const pageContent =
        contentData[location.pathname] || contentData.default;

    return (
        <section className="w-full bg-gray-100 py-14 px-6">

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    key={pageContent.title}
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center lg:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">
                        {pageContent.title}
                    </h2>

                    <div className="space-y-5 text-gray-700 leading-8 text-base">
                        {pageContent.text.map((para, index) => (
                            <p key={index}>{para}</p>
                        ))}
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    key={pageContent.image}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center"
                >
                    <img
                        src={pageContent.image}
                        alt="Service Illustration"
                        className="w-[80%] md:w-[70%] lg:w-full max-w-md object-contain"
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default Grow;