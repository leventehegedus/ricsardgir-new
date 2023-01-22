import { useEffect } from "react";

export const Layout: React.FC = (props) => {

  useEffect(() => {
    window.scroll(0, 0);
  }, [])

  return (
    <div className="p-2 sm:p-4 max-w-7xl m-auto overflow-hidden text-white">
      {props.children}
    </div>
  )
}


export default Layout;
