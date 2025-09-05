import { Typography, Paper } from "@mui/material";
import { TRUSTED_COPMANY_LOGOS } from "@/Utils";

export default function TrustedCompanies() {
  return (
    <Paper component="section" variant="trustedSection">
      <Typography variant="digitalTitle">Trusted by these companies</Typography>

      <Paper variant="trustedLogosContainer">
        {TRUSTED_COPMANY_LOGOS.map((Logo, index) => (
          <Paper key={index} variant="trustedLogo">
            <Logo />
          </Paper>
        ))}
      </Paper>
    </Paper>
  );
}
