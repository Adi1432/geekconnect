import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const SearchBasicCard = ({ query }) => {
  return (
    <Card
      variant="outlined"
      sx={{ maxWidth: 520, margin: "auto", marginTop: "2rem" }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          Search Results for - {query}
        </Typography>

        <Typography variant="body2">Love Animals.</Typography>
      </CardContent>
    </Card>
  );
};

export default SearchBasicCard;
