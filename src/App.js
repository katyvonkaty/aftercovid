import React from "react"
import axios from "axios"
import CardAttraction from "./CardAttraction"
import CardEvent from "./CardEvent"


class App extends React.Component {

  state= {
    attractions: [],
    events:[],
    venues:[]
  }


  componentDidMount(){
    axios.get(`https://app.ticketmaster.com/discovery/v2/suggest.json?keyword=music&apikey=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      this.setState({attractions: response.data._embedded.attractions.slice(0,4), events:response.data._embedded.events.slice(0,4)})
      console.log(response.data);
    })
  }

  render(){
    return(
      <>
       <h1> hi </h1>
        <CardAttraction attractions = {this.state.attractions} />
        <CardEvent events = {this.state.events} />

      </>
    )
  }
}

export default App;
