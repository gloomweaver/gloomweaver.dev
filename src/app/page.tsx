import { SiteHeader } from "@/components/site-header/site-header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <SiteHeader />
    </>
  );
}
