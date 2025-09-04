import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
import { PrimaryButton } from "@/Components";
import { heroImage, homeHeader } from "../../assets/Images/index";
import { PlayIcon } from "@/assets/Icons";

export default function HomeSection() {
  return (
    <Box component="main" sx={{ m: 0, p: 0 }}>
      <Box
        className="main-container"
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          mt: { xs: 2, md: 20 },
          px: 4,
        }}
      >
        <Box
          component="section"
          id="home"
          sx={{
            mb: { md: 10 },
            mt: { xs: "150px" },
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            spacing={4}
          >
            <Box flex={{ xs: "1 1 100%", md: "1 1 350px" }}>
              <Typography variant="displayL">
                We Design Impactful
                <br />
                <Box
                  component="span"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5em",
                  }}
                >
                  Digital
                  <Image
                    src={homeHeader}
                    alt="Product"
                    width={180}
                    height={80}
                    style={{ height: "1.7em", verticalAlign: "middle" }}
                  />
                </Box>
              </Typography>
              <Box
                sx={{
                  mt: "40px",
                }}
              >
                <Typography variant="bodyM">
                  Help find solutions with intuitive and in accordance with client business goals.
                  We provide high-quality services.
                </Typography>
              </Box>

              <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                <PrimaryButton>Contact Us</PrimaryButton>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: "primary.main",
                    }}
                  >
                    <PlayIcon />
                  </Box>
                  <Typography variant="bodyS">
                    Watch our <br /> introduction video
                  </Typography>
                </Stack>
              </Stack>
            </Box>

            <Box
              flex={{ xs: "1 1 100%", md: "1 1 250px" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              minWidth={{ md: "200px" }}
            >
              <Image
                src={heroImage}
                alt="Hero"
                width={500}
                height={400}
                style={{ marginTop: "40px", maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
