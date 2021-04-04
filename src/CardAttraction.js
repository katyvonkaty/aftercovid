import React from "react";
import SingleAttraction from "./SingleAttraction";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const CardAttraction = (props) => {
  const renderedAttractions = props.attractions.map((attraction) => {
    return <SingleAttraction attraction={attraction} />;
  });

  return (
    <>
        <h1> Local Attractions </h1>

        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          {renderedAttractions}
        </Grid>
    </>
  );
};

export default CardAttraction;
