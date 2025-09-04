"use client";
import { Box, Container, Typography, Paper } from "@mui/material";
import Image from "next/image";
import { DIGITAL_PRODUCTS } from "@/Utils";
import { product1 } from "@/assets/Images";

export default function DigitalProductsSection() {
  return (
    <Paper component="section" id="product" variant="digitalSection">
      <Container maxWidth="lg">
        <Typography variant="digitalTitle">We create world-class digital products</Typography>
        <Box>
          <Typography variant="digitalSubtitle">
            By information about design the world to the best instructors, heatc helping By
            information
          </Typography>
        </Box>

        <Paper variant="digitalGrid" sx={{ mt: "100px" }}>
          <Box>
            <Paper variant="digitalCard">
              <Image
                src={product1}
                alt="Left Image"
                width={800}
                height={450}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 20,
                  objectFit: "cover",
                  maxHeight: 450,
                }}
              />
              <Box>
                <Typography variant="digitalMeta">App Design - June 20, 2022</Typography>
              </Box>
              <Box>
                <Typography variant="digitalItemTitle">App Redesign</Typography>
              </Box>

              <Box>
                <Typography variant="digitalBody">
                  By information about design the world to the best instructors, heatc helping...
                </Typography>
              </Box>
            </Paper>
          </Box>

          <Box>
            <Paper variant="digitalRightGrid">
              {DIGITAL_PRODUCTS.map((item, index) => (
                <Paper key={index} variant="digitalCard">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={500}
                    height={300}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: 16,
                      objectFit: "cover",
                      maxHeight: 220,
                    }}
                  />
                  <Box>
                    <Typography variant="digitalMeta">App Design - June 20, 2022</Typography>
                  </Box>
                  <Box>
                    <Typography variant="digitalItemTitle">{item.title}</Typography>
                  </Box>
                </Paper>
              ))}
            </Paper>
          </Box>
        </Paper>
      </Container>
    </Paper>
  );
}
