"use client";

import * as React from "react";
import { Box, Typography, Stack } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2.5,
        px: 3,
        mt: "auto",
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",

      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: 14, textAlign: "center" }}
        >
          © {new Date().getFullYear()} <b>Power</b>. All rights reserved.
        </Typography>
      </Stack>
    </Box>
  );
}
