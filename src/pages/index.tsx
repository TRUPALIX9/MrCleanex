"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main
        style={{
          backgroundColor: "var(--color-background)",
          color: "var(--color-text)",
          minHeight: "100vh",
          padding: "2rem",
        }}
      >
        <h1>Welcome to MrCleanex</h1>
        <p>Providing exceptional cleaning services tailored to your needs.</p>
      </main>
    </>
  );
}
