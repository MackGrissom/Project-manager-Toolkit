import type { Metadata } from "next";
import { Inter, Roboto_Condensed, Roboto_Flex, Roboto_Mono } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/site/navigation";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZenStream",
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
       
          <body className={inter.className}>
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
