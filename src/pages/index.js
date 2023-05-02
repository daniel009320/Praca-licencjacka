import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-custom-yellow max-h-screen">
      <main className="container mx-auto">
        <Header />
        <Banner />
      </main>
    </div>
  );
}
