import React from "react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="h-screen w-full">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
