"use client";

import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter

export default function Navbar() {
  const theme = useTheme();
  const router = useRouter();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const [activeItem, setActiveItem] = useState("");

  // Sync activeItem with the current browser URL
  useEffect(() => {
    const currentPath = router.pathname;
    const activeNavItem = navItems.find((item) => item.path === currentPath);
    if (activeNavItem) {
      setActiveItem(activeNavItem.label);
    }
  }, [router.pathname]);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        boxShadow: `0px 4px 8px ${theme.palette.primary.main}80`,
        padding: "0.5rem 1rem",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Brand Logo */}
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
            color: theme.palette.primary.main,
          }}
        >
          MrCleanex
        </Typography>

        {/* Navigation Links */}
        <Box
          sx={{
            display: "flex",
            gap: "1.5rem",
          }}
        >
          {navItems.map((item) => (
            <Link key={item.label} href={item.path} passHref>
              <Button
                onClick={() => setActiveItem(item.label)} // Update active item
                sx={{
                  color:
                    activeItem === item.label
                      ? theme.palette.background.default
                      : theme.palette.text.primary,
                  backgroundColor:
                    activeItem === item.label
                      ? theme.palette.primary.main
                      : "transparent",
                  fontWeight: "600",
                  borderRadius: "15px",
                  padding: "0.5rem 1rem",
                  textTransform: "capitalize",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.background.default,
                    transform: "scale(1.05)",
                    boxShadow: `0px 4px 12px ${theme.palette.primary.main}AA`,
                  },
                }}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
