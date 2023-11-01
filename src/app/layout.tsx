 import React, { useEffect } from "react";

import type { Metadata } from "next";
import "../styles/css/bootstrap.min.css";
import "../styles/css/icofont.css";
import "../styles/css/plugins.css";
import "../styles/css/shortcode/shortcodes.css";
import "../styles/css/responsive.css";

import "../styles/fonts/lato/lato.css";
import "./globals.css";
import AppWrapper from "@/components/AppWrapper";
import Script from "next/script";
import Preloader from "@/components/Preloader";
 

export const metadata: Metadata = {
  title: "Tosdap Drivers",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {  
  return (
    <html className="no-js" lang="en">
      <body>
        <Preloader />
        <div className="wrapper fix">
          <AppWrapper>{children}</AppWrapper>
        </div>
        <Script src="/js/vendor/modernizr-2.8.3.min.js"></Script>
        <Script src="/js/vendor/jquery-1.12.0.min.js"></Script>
        <Script src="/js/bootstrap.bundle.min.js"></Script>
        <Script src="/js/plugins.js"></Script>
        <Script src="/js/ajax-mail.js"></Script>
        <Script src="/js/wow.min.js"></Script>
        <Script src="/js/style-customizer.js"></Script>
        <Script src="/js/main.js"></Script>
      </body>
    </html>
  );
}
