import React from "react"
import SingleEvent from "./SingleEvent"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";


const CardEvent = ({events, attractions}) => {
  const renderedEvents = events.map ( (event) => {
      return <SingleEvent event={event} attractions={attractions} />
    })

return (
  <>
      <h1> Local Events </h1>

      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="stretch"
      >
        {renderedEvents}
      </Grid>
  </>
)
}

export default CardEvent;
