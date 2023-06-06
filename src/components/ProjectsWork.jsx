import { Grid, Typography } from "@mui/material";
import styles from "./styles.module.css";

function ProjectsWork() {
  return (
    <>
      <Grid container flexDirection={"column"} style={{ margin: "5%" }}>
        <Grid item>
          <Typography variant="h3" color={"black"}>
            Projects
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="h3" color={"black"}>
            Current Work
          </Typography>
        </Grid>

        <Grid item>
          <Grid container display={"flex"} flexDirection={"row"} spacing={0}>
            <Grid
              item
              className={styles.project_card}
            //   style={{ boxShadow: "5px 10px 18px #888888", margin: "1%" }}
              lg={4}
            >
              card1
            </Grid>
            <Grid
              item
              className={styles.project_card}
              // style={{ boxShadow: "5px 10px 18px #888888", margin: "1%" }}
              lg={4}
            >
              card2
            </Grid>
            <Grid
              item
              className={styles.project_card}
              // style={{ boxShadow: "5px 10px 18px #888888", margin: "1%" }}
              lg={4}
            >
              card3
            </Grid>
            <Grid
              item
              className={styles.project_card}
              // style={{ boxShadow: "5px 10px 18px #888888", margin: "1%" }}
              lg={4}
            >
              card4
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ProjectsWork;
