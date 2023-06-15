import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

function Carousal(props) {
  var items = [
    {
      name: "Construction Professional Resources",
      description: "Corporate Member of Access Scaffold Industry Association",
    },
    {
      name: "Construction Professional Resources",
      description: "Corporate Member of Access Scaffold Industry Association",
    },
  ];

  return (
    <Carousel
      autoPlay={false}
      indicatorContainerProps={{
        style: {
          display: "none",
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper
      style={{
        width: "25vw",
        backgroundColor: "#ffffffbf",
      }}
    >
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
    </Paper>
  );
}

export default Carousal;
