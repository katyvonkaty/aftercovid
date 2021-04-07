import React from "react"
import EventSearchItem from "./EventSearchItem"
import Grid from "@material-ui/core/Grid";

const EventSearchResult = ({eventResults}) => {

  if (eventResults.length === 0) {
    return null
  }
  const eventList = eventResults.map( (event) => {
    return <EventSearchItem event = {event} />
  })

  return (
    <>
    <h1 >Results for {eventResults[0].name} </h1>

    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="stretch"
    >
    {eventList}
    </Grid>
    </>
  )
}

export default EventSearchResult
