import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <>
      {/* Full-width Image */}
      <Box>
        <Image
          src={"https://picsum.photos/1920/300"}
          alt="Cleaning Services"
          layout="responsive"
          width={1920}
          height={1080}
          style={{ objectFit: "cover" }}
        />
      </Box>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Quality Cleaning Company in Canada
        </Typography>

        <Typography variant="body1" gutterBottom>
          At Mr. CleanX, we specialize in delivering exceptional cleaning
          services tailored to both residential and commercial clients across
          Canada. Whether you need a one-time deep clean or regular maintenance,
          our skilled team is dedicated to creating spotless, healthy, and
          welcoming spaces. We understand that every property is unique, which
          is why we offer customizable cleaning solutions to fit your specific
          needs.
        </Typography>

        <Typography variant="body1" gutterBottom></Typography>

        <Typography variant="h6" gutterBottom>
          Choose Mr. CleanX for dependable service and a spotless, hygienic
          environment. Let us take care of the cleaning while you enjoy a fresh
          and healthy space.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2 }}
          onClick={() => (window.location.href = "/booking")} // Replace with your booking page URL
        >
          Book Now
        </Button>
      </Container>
    </>
  );
};

export default HeroSection;
