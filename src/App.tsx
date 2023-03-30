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
import { MoviePage } from "./pages/MoviePage/MoviePage";
import { MusicPage } from "./pages/MusicPage/MusicPage";
import { ArticlesPage } from "./pages/ArticlesPage/ArticlesPage";
import { Tinder } from "./pages/Tinder/Tinder";
import { Timeline } from "./pages/Timeline/Timeline";
import { Quiz } from "./pages/Quiz/Quiz";
import { QuotesPage } from "./pages/QuotesPage/QuotesPage";
import { ContentPage } from "./pages/ContentPage/ContentPage";
import { App as Game2048 } from "./pages/2048/App/App";

import { Menu } from "./components/Menu/Menu";
import { TopBar } from "./components/TopBar/TopBar";
import { Footer } from "./components/Footer/Footer";
import { Layout } from "./components/Layout/Layout";

import MediaQuery from 'react-responsive'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FlixPage from './pages/FlixPage/FlixPage';
import TagPage from './pages/TagPage/TagPage';
import ContentsPage from './pages/ContentsPage/ContentsPage';
AOS.init();

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App bg-black md:bg-transparent min-h-screen">
      <MediaQuery minWidth={768}>
        <AnimatedBackground />
        <div className="fixed w-full h-full left-0 top-0 right-0 bottom-0 font-black text-white text-9xl flex justify-center items-center uppercase z-index-minus-1 opacity-[.02]">
          <span>ricsárdgír</span>
        </div>
      </MediaQuery>
      <div className="min-h-[calc(100vh-80px)]">
        <Router>
          <WavyContainer />
          <TopBar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
          <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/buli" element={<ConcertsPage />} />
              <Route path="/buli/:id" element={<Concert />} />
              <Route path="/video" element={<VideosPage />} />
              <Route path="/video/:id" element={<Video />} />
              <Route path="/merch" element={<MerchPage />} />
              <Route path="/money" element={<MoviePage />} />
              <Route path="/ricsaj" element={<MusicPage />} />
              <Route path="/szar" element={<ArticlesPage />} />
              <Route path="/tinder" element={<Tinder />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/2048" element={<Game2048 />} />
              <Route path="/idezetek" element={<QuotesPage />} />
              <Route path="/flix" element={<FlixPage />} />
              <Route path="/contents/" element={<ContentsPage />} />
              <Route path="/content/:id" element={<ContentPage />} />
              <Route path="/tags/:id" element={<TagPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Layout>
        </Router>
      </div>
      <Footer />
    </div>
  )
}

export default App
