import React from "react"

const CardAttraction = (props) => {
  let test = props.attractions.map (x => <li> {x.name} </li>)

return (
  <h1>  {test } </h1>
)
}

export default CardAttraction;
