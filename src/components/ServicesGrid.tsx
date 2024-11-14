// app/components/ServicesGrid.js
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  const services = [
    {
      title: "Residential Cleaning",
      description: "Keep your home spotless and healthy.",
    },
    {
      title: "Commercial Cleaning",
      description: "Professional cleaning for your office space.",
    },
    {
      title: "Deep Cleaning",
      description: "Thorough cleaning for every corner.",
    },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <div>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <div
              key={index}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              <Grid item xs={12} sm={6} md={4}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                />
              </Grid>
            </div>
          ))}
        </Grid>
      </div>
    </Container>
  );
}
