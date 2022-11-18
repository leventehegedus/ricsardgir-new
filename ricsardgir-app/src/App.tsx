import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { ConcertsPage } from "./pages/ConcertsPage/ConcertsPage";
import { HomePage } from "./pages/HomePage/HomePage";

import { Menu } from "./components/Menu/Menu";
import { TopBar } from "./components/TopBar/TopBar";


function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Router>
      <TopBar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}/>
      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buli" element={<ConcertsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
