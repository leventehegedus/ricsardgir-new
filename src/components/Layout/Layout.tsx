import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {

  useEffect(() => {
    window.scroll(0, 0);
  }, [])

  return (
    <div className="p-2 sm:p-4 max-w-7xl m-auto overflow-hidden text-white">
      {children}
    </div>
  )
}


export default Layout;
