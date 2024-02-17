import type { Metadata } from "next";
import { Comfortaa, Inter, Roboto_Condensed, Roboto_Flex, Roboto_Mono } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/site/navigation";
import { ThemeProvider } from "@/providers/theme-provider";

const font = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZenWorks",
  description: "Run and entire agency in one platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html 
      lang="en" suppressHydrationWarning>
       
          <body className={font.className}>
          <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
            {children}
            </ThemeProvider>
          </body>
        
      </html>
  );
}
