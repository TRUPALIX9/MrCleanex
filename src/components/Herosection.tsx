import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function HeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-text)",
        textAlign: "center",
        py: 6,
        px: 2,
      }}
    >
      {/* Animated Typography */}
      <Box
        sx={{
          opacity: 0,
          transform: "translateY(50px)",
          animation: "fadeInUp 0.8s forwards",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontSize: { xs: "2rem", sm: "3rem" }, mb: 2 }}
        >
          Welcome to MrCleanex
        </Typography>
      </Box>

      <Box
        sx={{
          opacity: 0,
          transform: "translateY(50px)",
          animation: "fadeInUp 1s forwards",
        }}
      >
        <Typography
          variant="h6"
          component="p"
          sx={{ fontSize: { xs: "1rem", sm: "1.5rem" }, mb: 4 }}
        >
          Your trusted cleaning partner in Canada. We provide professional and
          reliable services tailored to your needs.
        </Typography>
      </Box>

      {/* Button with Hover Effect */}
      <Box
        sx={{
          display: "inline-block",
          transition: "transform 0.3s",
          ":hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "var(--color-secondary)",
            color: "var(--color-background)",
            px: 4,
            py: 1.5,
            ":hover": {
              backgroundColor: "var(--shade-medium-blue)",
            },
          }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
}
