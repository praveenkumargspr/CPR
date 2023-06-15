import { Button, Grid, Typography } from "@mui/material";
import style from "./styles.module.css";
import service1 from "../assests/service1.jpg";
import service2 from "../assests/service2.jpg";
import service3 from "../assests/service3.jpg";
import service4 from "../assests/service4.jpg";

function ProjectsWork({ styles }) {
  return (
    <>
      <Grid
        container
        alignItems={"center"}
        flexDirection={"column"}
        style={{ margin: "5%" }}
      >
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

        {/* <Grid item> */}
        <Grid
          container
          lg={12}
          display={"flex"}
          flexDirection={"row"}
          spacing={2}
        >
          <Grid item className={style.project_card1} lg={4}></Grid>
          <Grid item className={style.project_card2} lg={4}></Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item lg={12}> */}
        <Grid
          container
          lg={12}
          display={"flex"}
          flexDirection={"row"}
          spacing={2}
        >
          <Grid item className={style.project_card3} lg={4}>
            card3
          </Grid>
          <Grid item className={style.project_card4} lg={4}>
            card4
          </Grid>
        </Grid>
        {/* </Grid> */}

        <Button className={styles.button_style}>View Our Work</Button>
      </Grid>
    </>
  );
}

export default ProjectsWork;
