import { Link } from "react-router-dom";
import { WavyLink } from "react-wavy-transitions";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Audio } from "../../components/AudioPlayer/Audio";


interface TopBarProps {
  isMenuOpen: boolean,
  setMenuOpen: Function
}

export const TopBar: React.FC<TopBarProps> = ({ isMenuOpen, setMenuOpen }) => {
  return (
    <div className="sticky h-20 top-0 left-0 right-0 bg-black text-white flex z-50 items-center uppercase font-black">
      <div className="max-w-7xl flex m-auto items-center w-full px-4">
        <div className="w-1/4 h-full flex justify-start items-center"><span className="cursor-pointer hover:text-gir-500" onClick={() => { setMenuOpen(!isMenuOpen) }}>Menü</span></div>
        <div className="w-1/2 flex justify-center h-full items-center hover:text-gir-500">
          <WavyLink to={"/"} color="#ff0700" duration="1600" direction="up">
            Ricsárdgír
          </WavyLink>
        </div>
        <div className="w-1/4 flex justify-end h-full items-center gap-4">
          <Audio className="hover:text-gir-500"/>
          <a href="https://facebook.com/ricsardgir" target="_blank">
            <FaFacebook size={"2em"} className="hover:text-gir-500"/>
          </a>
          <a href="https://instagram.com/ricsardgir" target="_blank">
            <FaInstagram size={"2em"} className="hover:text-gir-500"/>
          </a>
          <a href="https://www.youtube.com/RCHRDGR" target="_blank">
            <FaYoutube size={"2em"} className="hover:text-gir-500"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar;
