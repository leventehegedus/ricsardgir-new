import { NavLink } from 'react-router-dom';
import { routes } from "../../data/routes";
import { useMediaQuery } from 'react-responsive'

interface MenuProps {
  isMenuOpen: boolean,
  setMenuOpen: Function
}

export const Menu: React.FC<MenuProps> = ({ isMenuOpen, setMenuOpen }) => {
  return (
    <div className={"fixed bg-black top-20 w-full h-[calc(100vh-80px)] transition-all duration-500 ease-in-out z-40 overflow-auto" + (isMenuOpen ? " left-0" : " left-[-100vw]")}>
      {
        routes.map((route, index) => {
          return (
            <NavLink key={index} to={route.url} onClick={() => setMenuOpen(!isMenuOpen)} className="left-block h-12 flex justify-center items-center uppercase font-black text-white w-full hover:text-red-500">
              {route.title}
            </NavLink>
          )
        })}
    </div>
  )
}

export default Menu;
