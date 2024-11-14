import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0D47A1", // Dark Blue
      light: "#5472D3", // Lighter Shade of Blue
      dark: "#002171", // Darkest Shade of Blue
      contrastText: "#FFFFFF", // White text for better readability
    },
    secondary: {
      main: "#FF8C00", // Accent color (Orange)
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F4F4F4", // Light Grey for Background
      paper: "#FFFFFF", // White for Paper/Container Backgrounds
    },
    text: {
      primary: "#1F2937", // Dark Gray for Main Text
      secondary: "#4B5563", // Lighter Gray for Supporting Text
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h5: {
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
      color: "#1F2937",
    },
    body2: {
      fontSize: "0.95rem",
      color: "#4B5563",
    },
    button: {
      textTransform: "capitalize", // Avoid uppercase transformation on buttons
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px", // Rounded buttons for a modern look
          padding: "0.5rem 1rem",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none", // Clean, flat design for AppBar
        },
      },
    },
  },
});

export default theme;
