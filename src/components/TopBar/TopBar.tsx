import { WavyLink } from "react-wavy-transitions";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaHome } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive'


interface TopBarProps {
  isMenuOpen: boolean,
  setMenuOpen: Function
}

export const TopBar: React.FC<TopBarProps> = ({ isMenuOpen, setMenuOpen }) => {
  const isTabletOrBigger = useMediaQuery({ minWidth: 768 })

  return (
    <div className="sticky h-20 top-0 left-0 right-0 bg-black text-white flex z-50 items-center uppercase font-black z-[1001]">
      <div className="max-w-7xl flex m-auto items-center w-full px-4">
        <div className="w-1/4 h-full flex justify-start items-center"><span className="cursor-pointer hover:text-gir-500" onClick={() => { setMenuOpen(!isMenuOpen) }}>Menü</span></div>
        <div className="w-1/2 flex justify-center h-full items-center hover:text-gir-500">
          {isTabletOrBigger ?
            <WavyLink to={"/"} color="#ff002b" duration="1600" direction="up">
              Ricsárdgír
            </WavyLink>
            :
            <Link to={"/"}>
              <FaHome size={"1em"} />
            </Link>
          }
        </div>
        <div className="w-1/4 flex justify-end h-full items-center gap-4">
          <a href="https://facebook.com/ricsardgir" target="_blank">
            <FaFacebook size={isTabletOrBigger ? "2rem" : "1rem"} className="hover:text-gir-500" />
          </a>
          <a href="https://instagram.com/ricsardgir" target="_blank">
            <FaInstagram size={isTabletOrBigger ? "2rem" : "1rem"} className="hover:text-gir-500" />
          </a>
          <a href="https://www.youtube.com/RCHRDGR" target="_blank">
            <FaYoutube size={isTabletOrBigger ? "2rem" : "1rem"} className="hover:text-gir-500" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar;
