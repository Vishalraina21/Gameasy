import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import TenderPage from "./pages/Tenderpage";
import Gmeregestration from "./pages/Gmeregestration";
import Productspage from "./pages/Productspage";
import Tenderbidding from "./pages/Tenderbidding";
import Msme from "./pages/Msme";
import Vendorassesment from "./pages/Vendorassesment";
import Other from "./pages/Other";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">

        <Header />

        {/* Page Content */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tenders" element={<TenderPage />} />
            <Route path="/gmeregestration" element={<Gmeregestration />} />
            <Route path="/products" element={<Productspage />} />
            <Route path="/tenderbidding" element={<Tenderbidding />} />
            <Route path="/msme" element={<Msme />} />
            <Route path="/vendor-assessment" element={<Vendorassesment />} />
            <Route path="/authorized-registration" element={<Other />} />

          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}

export default App;