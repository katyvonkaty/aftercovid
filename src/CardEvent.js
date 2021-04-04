import React from "react"
import SingleEvent from "./SingleEvent"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";


const CardEvent = (props) => {
  const renderedEvents = props.events.map (event => {
  return <SingleEvent event={event} />
});

return (
  <>
    <Container maxWidth="lg">
      <h1> Local Events </h1>

      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {renderedEvents}
      </Grid>
    </Container>
  </>
)
}

export default CardEvent;
