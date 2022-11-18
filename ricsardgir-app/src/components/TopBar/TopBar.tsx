import { Link } from "react-router-dom";
const routes = [
  {
    url: "https://facebook.com/ricsardgir",
    favicon: "fa-brands fa-facebook"
  },
]

interface TopBarProps {
  isMenuOpen: boolean,
  setMenuOpen: Function
}

export const TopBar: React.FC<TopBarProps> = ({isMenuOpen, setMenuOpen}) => {
  return (
    <div className="sticky h-20 top-0 left-0 right-0 bg-black text-white z-50 flex items-center uppercase font-black">
      <div onClick={() => {setMenuOpen(!isMenuOpen)}} className="w-1/4 h-full flex justify-center items-center cursor-pointer hover:text-gir-500 hover:bg-white/10">Menü</div>
      <Link to={"/"} className="w-1/2 flex justify-center h-full items-center hover:text-gir-500">Ricsárdgír</Link>
      <div className="w-1/4 flex justify-right h-full items-center">
        {
          routes.map((route, index) => {
            return (
              <a key={index} href={route.url} target="_blank">
                { route.favicon}
              </a>
            )
          })}
      </div>
    </div>
  )
}

export default TopBar;
