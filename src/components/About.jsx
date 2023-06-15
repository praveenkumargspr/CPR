import { Grid, Typography, Button } from "@mui/material";
import image1 from "../assests/image1.jpg";

import experience from "../assests/experience.png";
import Image from "next/image";

function About() {
  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-evenly"}
      lg={12}
    >
      <Grid item lg={5}>
        <Image src={experience} alt="hero-image"></Image>
      </Grid>

      <Grid item lg={5}>
        <Typography variant={"h3"} color={"black"}>
          About
        </Typography>
        <Typography variant={"h4"} color={"#00A0E1"}>
          CPR
        </Typography>
        <Typography variant={"h6"} color={"black"}>
          Construction Professional Resources Pte. Ltd. (CPR has been a provider
          of quality scaffolding services since 2010. We first started off by
          offering contractors scaffold erectors, before moving on to providing
          tubular systems to clients who demanded safety. With adequate
          knowledge and experience in the Singapore's construction industry, we
          are moved to serve our clients with the best competitive construction
          services. Our construction services include Scaffolding services,
          Heavy Engineering Components Fabrication, Steel Structures and Steel
          construction turnkey projects.
        </Typography>
        <Button>Read More</Button>
      </Grid>

      <Grid item lg={2}>
        <Image
          src={image1}
          alt="hero-image"
          style={{
            maxWidth: "100%",
            maxHeight: "71vh",
          }}
        ></Image>
      </Grid>
    </Grid>
  );
}

export default About;
