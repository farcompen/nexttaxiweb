import { Roboto, Catamaran } from "next/font/google";

export const catamaran = Catamaran({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
});
