/* eslint-disable jsx-a11y/alt-text */
import { Grid, Typography } from "@mui/material";

import logo from "../assests/logo.png";
import Image from "next/image";

import styles from "./styles.module.css";

export default function InfoBox() {
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"space-between"}
      width={"100%"}
    >
      <Grid item className={styles.sample_image}></Grid>

      <Grid item className={styles.title_1}>
        <Typography>35+ Projects</Typography>
      </Grid>

      <Grid
        item
        className={styles.title_1}
        style={{ backgroundColor: "#01A0E1" }}
      >
        <Typography>100+ EMPLOYEES</Typography>
      </Grid>

      <Grid item className={styles.title_1}>
        <Typography>35+ Projects</Typography>
      </Grid>

      <Grid
        item
        className={styles.title_1}
        style={{ backgroundColor: "#01A0E1" }}
      >
        <Typography>35+ Projects</Typography>
      </Grid>
    </Grid>
  );
}
