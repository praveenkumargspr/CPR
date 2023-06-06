import { Grid, Typography } from "@mui/material";
import logo from "../assests/logo.png";

import Image from "next/image";

function About() {
  return (
    <Grid container display={"flex"} flexDirection={"row"} justifyContent={"space-evenly"}>
      <Grid item>
        <Typography color={"black"}>20 years</Typography>
      </Grid>

      <Grid item>
        <Typography color={"black"}>about cpr</Typography>
      </Grid>

      <Grid item>
        <Image src={logo}></Image>
      </Grid>
    </Grid>
  );
}

export default About;
