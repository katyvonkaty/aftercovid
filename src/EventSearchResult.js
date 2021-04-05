import React from "react"
import EventSearchItem from "./EventSearchItem"

const EventSearchResult = ({eventResults}) => {
  const eventList = eventResults.map( (event) => {
    return <EventSearchItem event = {event} />
  })

  return <> {eventList} </>
}

export default EventSearchResult
