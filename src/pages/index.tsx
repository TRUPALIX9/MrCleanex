"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesGrid from "../components/ServicesGrid";
import HeroSection from "../components/Herosection";

export default function Home() {
  return (
    <>
      <main
        style={{
          backgroundColor: "var(--color-background)",
          color: "var(--color-text)",
          minHeight: "100vh",
        }}
      >
        <HeroSection />
        <ServicesGrid />
      </main>
    </>
  );
}
