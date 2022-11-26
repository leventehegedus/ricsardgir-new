import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
      <Router>
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
