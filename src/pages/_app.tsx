import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles"; // Import ThemeProvider
import CssBaseline from "@mui/material/CssBaseline"; // Import CssBaseline for style normalization
import Navbar from "../components/Navbar"; // Import your custom theme
import Footer from "../components/Footer"; // Import your custom theme
import theme from "../../theme"; // Import your custom theme

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
