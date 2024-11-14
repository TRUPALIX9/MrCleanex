"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";

export default function Services() {
  return (
    <>
      <Box sx={{ padding: "2rem", textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          Our Services
        </Typography>
        <Typography variant="body1">
          We offer a wide range of cleaning services tailored to your needs:
        </Typography>
        <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
          <li>✔️ Office Cleaning</li>
          <li>✔️ Residential Cleaning</li>
          <li>✔️ Carpet Cleaning</li>
          <li>✔️ Window Cleaning</li>
        </ul>
      </Box>{" "}
    </>
  );
}
