import { Button, Grid, Typography } from "@mui/material";
import Carousal from "./Carousal";

export function HomeScreen({ styles }) {
  return (
    <Grid container width={"100%"}>
      <Grid item lg={12}>
        <Grid
          className={styles.home_screen_bg}
          container
          alignContent={"center"}
          alignItems={"space-between"}
          width={"100%"}
          flexDirection={"row"}
          flex={true}
        >
          <Grid item lg={12}>
            <Grid container>
              <Grid item lg={6}></Grid>
              <Grid item lg={6}>
                <Grid
                  container
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Grid item>
                    <Typography variant="h4" color={"black"}>
                      CONSTRUCTION PROFESSIONAL
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h4" color={"black"}>
                      RESOURCES PTE LTD
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      className={styles.button_style}
                    >
                      View Our Work
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid lg={12} item>
            <Grid container   flexDirection={"column"}>
              <Grid item lg={8}></Grid>
              <Grid item lg={4}>
                {" "}
                <Carousal></Carousal>{" "}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

//#00A0E1
