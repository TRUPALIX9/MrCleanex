"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />{" "}
      <Box sx={{ padding: "2rem", textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          About Us
        </Typography>
        <Typography variant="body1">
          MrCleanex has been a trusted cleaning service provider for over 10
          years. Our mission is to deliver exceptional cleaning solutions with a
          focus on quality and customer satisfaction.
        </Typography>
      </Box>
    </>
  );
}
