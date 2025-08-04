import { catamaran, roboto } from "@/fonts/fonts";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import AnimationProvider from "./AnimationProvider";
import "aos/dist/aos.css"; // Import AOS CSS file
export const metadata = {
  title: "Kırıkkale'nin online taksi servisi",
  description: "Kırıkkale taksi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={twMerge(catamaran.className, roboto.variable)}>
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  );
}
