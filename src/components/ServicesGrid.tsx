import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Commercial Cleaning",
    description:
      "Keep your workspace spotless and productive with our expert services. We ensure safety, comfort, and lasting impressions for clients and employees across industries.",
    image: "https://picsum.photos/300/200?random=1",
  },
  {
    title: "Residential Cleaning",
    description:
      "Enjoy a clean, relaxing home with our trusted cleaners. We provide regular cleaning and additional services like ironing, laundry, and bed-changing to suit your needs.",
    image: "https://picsum.photos/300/200?random=2",
  },
  {
    title: "Deep Cleaning",
    description:
      "Experience thorough cleaning with our deep cleaning services. We target every corner and remove grime to refresh and revitalize your space.",
    image: "https://picsum.photos/300/200?random=3",
  },
];
const ServicesGrid: React.FC = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={10} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceCard
              title={service.title}
              description={service.description}
              image={service.image}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default ServicesGrid;
