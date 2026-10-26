import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/lib/Provider";
import ReduxProvider from "@/redux/ReduxProvider";
import InitUser from "@/InitUser";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rydra",
  description:
    "Rydra ek modern multi-vendor booking platform hai jahan users asaani se cars, bikes aur commercial vehicles book kar sakte h. Secure login verified owners aur transparent pricing ke saath RYDRA mobility ko simple aur reliable banata h",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Provider>
          <ReduxProvider>
            {/* If InitUser only synchronizes user state, keep it self-closing */}
            <InitUser />
            {children}
          </ReduxProvider>
        </Provider>
      </body>
    </html>
  );
}