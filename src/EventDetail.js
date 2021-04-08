import React from "react"
import axios from "axios"

const EventDetail = ({event}) => {
  if( !event){
    return <div> loading ... </div>
  } else {
    axios.get(`https://api.seatgeek.com/2/recommendations?performers.id=${event.id}`, {
      params: {
        client_id: `${process.env.REACT_APP_API_KEY}`

      }
    })
        .then( response => console.log(response))
  }




  return <div> {event.id} </div>

}

export default EventDetail
