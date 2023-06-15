import { Typography, Grid } from "@mui/material";
import Carousal from "./Carousal";
import Image from "next/image";
import service1 from "../assests/service1.jpg";
import service2 from "../assests/service2.jpg";
import service3 from "../assests/service3.jpg";
import service4 from "../assests/service4.jpg";

function ServiceWeDo({ styles }) {
  return (
    <Grid container flexDirection={"column"} margin={"2%"}>
      <Typography variant="h3" color={"black"}>
        Services
      </Typography>
      <Typography variant="h4" color={"black"}>
        What We do
      </Typography>
      <Grid item style={{ margin: "0% 5% 0% 1%" }}>
        <Grid container spacing={2} lg={12}>
          {[service1, service2, service3, service4].map((image, index) => {
            return (
              <Grid item lg={3} key={index}>
                <Image
                  className={styles.service_card_img}
                  alt={"service Image" + index}
                  src={image}
                />
                <Typography textAlign={"center"} variant="h5" color={"black"}>
                  service {index + 1}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ServiceWeDo;
