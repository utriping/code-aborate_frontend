import Chat from "@/components/Chat";
import CompanyTicker from "@/components/CompanyTicker";
import Duels from "@/components/Duels";
import Hero from "@/components/Hero";
import LeaderBoard from "@/components/LeaderBoard";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import WhiteBoard from "@/components/WhiteBoard";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanyTicker />
      <LeaderBoard />
      <Chat />
      <Duels />
      <WhiteBoard />
      <FAQs />
      <Footer />
    </>
  );
}
