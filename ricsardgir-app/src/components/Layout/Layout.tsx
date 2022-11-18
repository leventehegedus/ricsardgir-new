import React from "react";

export type LayoutProps = {
  children: JSX.Element[] | JSX.Element;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header>
      header
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout;
