import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box>
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        align="center"
        pt={4}
        pb={4}
      >
        &copy;Simma_Adithya
      </Typography>
    </Box>
  );
}
