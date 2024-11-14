"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF", // White background
        color: "#1C1C1C", // Dark text color
        padding: "3rem 2rem",
        marginTop: "auto",
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          position: "relative",
        }}
      >
        {/* Vertical Divider */}
        <Box
          sx={{
            position: "absolute",
            height: "100%",
            width: "2px",
            backgroundColor: "#0D47A1", // Dark blue divider
            left: "50%",
            transform: "translateX(-50%)",
            display: { xs: "none", md: "block" }, // Visible only on medium and larger screens
          }}
        />

        {/* Section 1: Contact Information */}
        <Grid
          item
          xs={12}
          md={5.5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: { xs: "center", md: "left" },
            padding: "1.5rem",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#1C1C1C",
              }}
            >
              Contacts
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginBottom: "0.5rem",
                fontSize: "0.95rem",
                color: "#6B7280",
              }}
            >
              Hamilton, ON, Canada
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginBottom: "1rem",
                color: theme.palette.primary.main,
                cursor: "pointer",
                textDecoration: "underline",
                fontSize: "0.95rem",
                "&:hover": {
                  textDecoration: "none",
                  color: theme.palette.primary.dark,
                },
              }}
            >
              Google Map
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5rem",
                gap: "0.5rem",
              }}
            >
              <IconButton
                sx={{
                  color: theme.palette.primary.main,
                  background: "transparent",
                  cursor: "default",
                  "&:hover": { background: "transparent" },
                }}
              >
                <PhoneIcon />
              </IconButton>
              <Typography
                component="a"
                href="tel:+14373353844"
                sx={{
                  fontSize: "0.95rem",
                  color: "#1C1C1C",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                    color: theme.palette.primary.dark,
                  },
                }}
              >
                +1 (437) 335-3844
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5rem",
                gap: "0.5rem",
              }}
            >
              <IconButton
                sx={{
                  color: theme.palette.primary.main,
                  background: "transparent",
                  cursor: "default",
                  "&:hover": { background: "transparent" },
                }}
              >
                <EmailIcon />
              </IconButton>
              <Typography
                component="a"
                href="mailto:office@mrcleanex.com"
                sx={{
                  fontSize: "0.95rem",
                  color: "#1C1C1C",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                    color: theme.palette.primary.dark,
                  },
                }}
              >
                office@mrcleanex.com
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: "1.5rem",
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: "0.8rem",
            }}
          >
            <IconButton
              sx={{
                backgroundColor: theme.palette.primary.light,
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
                width: "40px",
                height: "40px",
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: theme.palette.primary.light,
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
                width: "40px",
                height: "40px",
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: theme.palette.primary.light,
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
                width: "40px",
                height: "40px",
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Section 2: Form for Quote Request */}
        <Grid
          item
          xs={12}
          md={5.5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#1C1C1C",
              }}
            >
              Get Your Estimate
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginBottom: "1rem",
                color: "#6B7280",
              }}
            >
              Please fill out the form below to get a quote for our services.
              We'll get back to you as soon as possible!
            </Typography>
          </Box>
          <Box
            component="form"
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              sx={{
                backgroundColor: "#F9FAFB",
                borderRadius: "4px",
              }}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              sx={{
                backgroundColor: "#F9FAFB",
                borderRadius: "4px",
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              sx={{
                backgroundColor: "#F9FAFB",
                borderRadius: "4px",
              }}
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              sx={{
                backgroundColor: "#F9FAFB",
                borderRadius: "4px",
              }}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                gridColumn: "span 2",
                backgroundColor: theme.palette.primary.main,
                color: "#FFFFFF",
                fontWeight: "bold",
                padding: "0.5rem 1.5rem",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom Section */}
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          marginTop: "3rem",
          color: "#9CA3AF",
        }}
      >
        © 2024 MrCleanex. All Rights Reserved. Website design by YourCompany.
      </Typography>
    </Box>
  );
}
