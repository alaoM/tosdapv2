import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Script from "next/script";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      
    </>
  );
};

export default AppWrapper;
