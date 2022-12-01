import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WavyContainer } from "react-wavy-transitions";

import { AnimatedBackground } from "./components/AnimatedBackground/AnimatedBackground";

import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { ConcertsPage } from "./pages/ConcertsPage/ConcertsPage";
import { Concert } from "./pages/Concert/Concert";
import { HomePage } from "./pages/HomePage/HomePage";
import { VideosPage } from "./pages/VideosPage/VideosPage";
import { MerchPage } from "./pages/MerchPage/MerchPage";
import { Video } from "./pages/Video/Video";

import { Menu } from "./components/Menu/Menu";
import { TopBar } from "./components/TopBar/TopBar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
AOS.init();

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <AnimatedBackground />
      <div className="fixed w-full h-full left-0 top-0 right-0 bottom-0 font-black text-white text-9xl flex justify-center items-center uppercase z-index-minus-1">
        <span>ricsárdgír</span>
      </div>
      <Router>
        <WavyContainer />
        <TopBar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buli" element={<ConcertsPage />} />
          <Route path="/buli/:id" element={<Concert />} />
          <Route path="/video" element={<VideosPage />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/merch" element={<MerchPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
