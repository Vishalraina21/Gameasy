import React from "react";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArticleIcon from "@mui/icons-material/Article";
import logo from "../assets/logo1.png"
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#061539] text-white pt-10 pb-6 px-6 md:px-12">

      <div className="max-w-7xl mx-auto space-y-6">

        {/* Tenders By State */}
        <div>
          <h3 className="font-semibold text-base mb-2">Tenders By State</h3>
          <p className="text-xs text-gray-300 leading-6">
            Maha Tenders | Haryana Tenders | WB Tenders | AP Tenders | TN Tenders |
            MP Tenders | UP Tenders | Rajasthan Tenders | Odisha Tenders |
            Delhi Tenders | Karnataka Tenders | Gujarat Tenders | Goa Tenders |
            Assam Tenders | Uttarakhand Tenders | Kerala Tenders |
            Chhattisgarh Tenders | Tripura Tenders | Punjab Tenders |
            Jharkhand Tenders | JK Tenders | Bihar Tenders |
            Chandigarh Tenders | Lakshadweep Tenders | HP Tenders |
            Mizoram Tenders | Nagaland Tenders | Arunachal Tenders |
            Meghalaya Tenders | Puducherry Tenders | Manipur Tenders |
            Sikkim Tenders | DNH Tenders | DD Tenders |
            Ladakh Tenders | Andaman Tenders
          </p>
        </div>

        {/* Tenders By Source */}
        <div>
          <h3 className="font-semibold text-base mb-2">Tenders By Source</h3>
          <p className="text-xs text-gray-300">
            GEM Tenders | IREPS Tenders | CPWD Tenders
          </p>
        </div>

        {/* Middle Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-6">

          {/* Logo + Social */}
          <div>
            <Link to="/">
              <img className="w-28 h-28" src={logo} alt="" />
            </Link>

            <div className="flex gap-2">
              <IconButton sx={{ color: "white", padding: "6px" }}>
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton sx={{ color: "white", padding: "6px" }}>
                <XIcon fontSize="small" />
              </IconButton>
              <IconButton sx={{ color: "white", padding: "6px" }}>
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton sx={{ color: "white", padding: "6px" }}>
                <ArticleIcon fontSize="small" />
              </IconButton>
            </div>
          </div>

          {/* GeM Services */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">GeM Services</h4>
            <ul className="space-y-1 text-gray-300 text-xs">
              <li>Gem Tenders</li>
              <li>Gem Registration</li>
              <li>Product & Services</li>
              <li>Vendor Assessment</li>
              <li>Tender Bidding</li>
            </ul>
          </div>

          {/* Other Services */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Other Services</h4>
            <ul className="space-y-1 text-gray-300 text-xs">
              <li>Tender Services</li>
              <li>Ireps Tenders</li>
              <li>CPWD Tenders</li>
              <li>MSME</li>
              <li>Other Authorities</li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Info</h4>
            <ul className="space-y-1 text-gray-300 text-xs">
              {/* <li>About Us</li> */}
              <Link to="/about" >About Us</Link>
              <li>FAQ's</li>
              <li>News</li>
              <li>Blogs</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Contact Us</h4>
            <ul className="space-y-1 text-gray-300 text-xs">
              <li>Sales : +91 8972171685 | +91 7970463729</li>
              <li>gemeasy25@gmail.com</li>
              <li>Ground Floor, Adison Arcade LG-11 Fraser Road, opp. Doordarshan Patna, Bihar 800001, India</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mt-8 pt-4 text-gray-400 text-xs">
          <p className="mb-2">
            Copyright © 2026 Gemeasy Business Consulting Private Limited
            All rights reserved.
          </p>
          <p className="leading-5">
            Disclaimer : This website is a property of Gemeasy, providing
            Consultancy services. We declare that we are private consultants and
            have no relation or do not represent any government official or any
            government department. We are Owned & Operated by a Private
            Organization and provide services and assistance for Business
            Benefits of Traders, Manufacturers or Service sectors who require
            consultation on various services.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;