import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

import Disclaimer from "./components/Disclaimer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import People from "./pages/People";
import Practice from "./pages/Practice";
import Awareness from "./pages/Awareness";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";

function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  return (
    <div>
      {showDisclaimer && <Disclaimer onAgree={() => setShowDisclaimer(false)} />}

      {!showDisclaimer && (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Navbar />
                <About />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/people" element={<People />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/media" element={<Media />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </div>
  );
}

export default App;

