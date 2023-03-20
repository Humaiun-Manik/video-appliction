import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/shared/footer/Footer";
import Navbar from "./components/shared/navbar/Navbar";
import Home from "./pages/home/Home";
import Videos from "./pages/videos/Videos";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<Videos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
