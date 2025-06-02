'use client';
import About from "@/app/components/About";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Services from "@/app/components/Services";
import Work from "@/app/components/Work";

export default function Home() {
  return (
    <> 
    <Navbar />
    <Header />
    <About />
    <Services />
    <Work />
    </>
  );
}