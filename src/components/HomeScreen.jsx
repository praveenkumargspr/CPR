import { Button, Grid, Typography } from "@mui/material";
import Carousal from "./Carousal";

export function HomeScreen() {
  return (
    <Grid container width={"100%"}>
      <Grid item lg={12}>
        <Grid
          container
          alignContent={"flex-end"}
          alignItems={"center"}
          width={"100%"}
          flexDirection={"column"}
          flex={true}
        >
          <Grid item>
            <Typography color={"black"}>
              CONSTRUCTION PROFESSIONAL RESOURCES PTE LTD
            </Typography>
          </Grid>
          <Button> View Work</Button>
        </Grid>
      </Grid>

      <Grid lg={12} item>
        <Carousal></Carousal>
      </Grid>
    </Grid>
  );
}
