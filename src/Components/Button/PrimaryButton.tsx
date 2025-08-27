"use client";

import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface PrimaryButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export default function PrimaryButton({ children, ...props }: PrimaryButtonProps) {
  return (
    <Button variant="primary" {...props}>
      {children}
    </Button>
  );
}
