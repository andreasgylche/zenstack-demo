import React from "react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="h-screen w-full bg-gray-900">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
