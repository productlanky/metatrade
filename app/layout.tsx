import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/context/ThemeContext";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

export const metadata: Metadata = {
title: "META | Blockchain Assets",
  description: "Track your investments, monitor live stocks, and manage your portfolio in real-time with META.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>

         <Script
          id="chaport-live-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,v3){
                w.chaportConfig = {
                  appId : '6973d1a744b652d05aab5173',
                };

                if(w.chaport) return;
                v3 = w.chaport = {};
                v3._q = [];
                v3._l = {};
                v3.q = function(){ v3._q.push(arguments) };
                v3.on = function(e,fn){
                  if(!v3._l[e]) v3._l[e] = [];
                  v3._l[e].push(fn)
                };
                var s = d.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = 'https://app.chaport.com/javascripts/insert.js';
                var ss = d.getElementsByTagName('script')[0];
                ss.parentNode.insertBefore(s, ss);
              })(window, document);
            `,
          }}
        />
      </body>
    </html>
  );
}


