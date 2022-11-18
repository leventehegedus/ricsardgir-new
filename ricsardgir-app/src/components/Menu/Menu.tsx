import { NavLink } from 'react-router-dom';

const routes = [
  {
    url: "/tinder",
    title: "Gírtinder"
  },
  {
    url: "/buli",
    title: "Bulikrumpli"
  },
  {
    url: "/ricsaj",
    title: "Ricsaj"
  },
  {
    url: "/flappy",
    title: "Repülő Koala"
  },
  {
    url: "/video",
    title: "Videók"
  },
  {
    url: "/2049",
    title: "2049"
  },
  {
    url: "/szar",
    title: "A ricsárdgír szar"
  },
  {
    url: "/merch",
    title: "Mörcs"
  },
  {
    url: "/koala",
    title: "Rise of Koala"
  },
  {
    url: "/quiz",
    title: "Ricsárd, kvíz, stb."
  },
  {
    url: "/money",
    title: "Ricsárdgír movie"
  },
]

interface MenuProps {
  isMenuOpen: boolean,
  setMenuOpen: Function
}

export const Menu: React.FC<MenuProps> = ({isMenuOpen, setMenuOpen}) => {
  return (
    <div className={"absolute top-20 w-full transition-all duration-500 ease-in-out"  + (isMenuOpen ? " left-0" : " left-[-100vw]")}>
      {
        routes.map((route, index) => {
          return (
            <NavLink key={index} to={route.url} onClick={() => setMenuOpen(!isMenuOpen)} className="left-block h-12 flex justify-center items-center uppercase font-black text-black w-full hover:text-red-500">
              {route.title}
            </NavLink>
          )
        })}
    </div>
  )
}

export default Menu;
