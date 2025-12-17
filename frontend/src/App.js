import React from "react";
import NotFound from "@/pages/NotFound";
import ReferenceViewer from "@/pages/ReferenceViewer";
import ZodiacDetail from "@/pages/ZodiacDetail";



import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SiteLayout } from "@/components/SiteLayout";
import Home from "@/pages/Home";
import {
  AboutPage,
  AstrologyPage,
  ContactPage,
  GalleryPage,
  ServicesPage,
  StorePage,
} from "@/pages/InnerPages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/astrology" element={<AstrologyPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/zodiac/:rasi" element={<ZodiacDetail />} />

            <Route path="/reference/:doc" element={<ReferenceViewer />} />

            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
