import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kirill Khramkov - Software Engineer",
  description: "Portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "bg-primary text-primary-foreground")}
      >
        {children}
      </body>
    </html>
  );
}