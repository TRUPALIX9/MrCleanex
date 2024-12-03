import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ServiceCard: React.FC<{
  title: string;
  description: string;
  image: string;
}> = ({ title, description, image }) => {
  return (
    <Card sx={{ height: "100%", boxShadow: 3, position: "relative" }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {description}
        </Typography>
      </CardContent>
      <Button
        variant="text"
        color="primary"
        endIcon={<ArrowForwardIosIcon fontSize="small" />}
        sx={{ position: "absolute", bottom: 8, right: 8 }}
      >
        Learn More
      </Button>
    </Card>
  );
};

export default ServiceCard;
