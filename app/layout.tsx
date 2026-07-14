import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"], // ← Regular, Medium, Semi Bold
  variable: "--font-inter",
});

export const metadata = {
  title: "TravelTrucks",
  description: "Оренда кемперів",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {/* ⬇️ Ось тут підключаємо всі провайдери */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
