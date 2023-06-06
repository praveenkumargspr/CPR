import { Typography, Grid } from "@mui/material";
import Carousal from "./Carousal";

function ServiceWeDo() {
  return (
    <Grid container flexDirection={"column"}>
      <Typography variant="h3" color={"black"}>
        Services
      </Typography>
      <Typography variant="h4" color={"black"}>
        What We do
      </Typography>
      <Grid lg={6} item>
        <Carousal></Carousal>
      </Grid>
    </Grid>
  );
}

export default ServiceWeDo;
