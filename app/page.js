'use client';
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Skills from "@/app/components/Skills";
import Work from "@/app/components/Work";

export default function Home() {
  return (
    <> 
    <Navbar />
    <Header />
    <About />
    <Skills />
    <Work />
    <Contact />
    <Footer />
    </>
  );
}