import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb clone",
  description: "This a is movie database clone"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header>
        <title>IMDb clone</title>
      </Header>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
