"use client";

import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />{" "}
      <main style={{ padding: "2rem" }}>
        <Typography variant="h3">Contact Us</Typography>
        <Typography variant="body1" style={{ marginTop: "1rem" }}>
          Get in touch with us for inquiries, quotes, or feedback.
        </Typography>
      </main>
    </>
  );
}
