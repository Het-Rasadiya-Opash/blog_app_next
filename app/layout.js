import { Outfit } from "next/font/google";
import "./globals.css";
import ToastProvider from "./ToastProvider";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Blog App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
