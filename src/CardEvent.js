import React from "react"

const CardEvent = (props) => {
  let test = props.events.map (x => <li> {x.name} </li>)

return (
  <h1>  {test } </h1>
)
}

export default CardEvent;
