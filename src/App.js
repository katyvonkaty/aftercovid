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

  // componentDidMount() {
  //   axios.post("https://marketplace.api.healthcare.gov/api/v1/plans/search?apikey=d687412e7b53146b2631dc01974ad0a4", {
  //     "household": {
  //  "income": 52000,
  //  "people": [
  //    {
  //     "dob": "1992-01-01",
  //     "aptc_eligible": true,
  //     "gender": "Female",
  //      "uses_tobacco": false
  //     }
  //   ]
  //  },
  //  "market": "Individual",
  //  "place": {
  //     "countyfips": "37057",
  //     "state": "NC",
  //      "zipcode": "27360"
  //  },
  //  "year": 2019
  //   })
  //   .then( response => {
  //     this.setState({plans:response.data.plans})
  //     console.log(response.data);
  //   })
  //
  //
  // }

  componentDidMount(){
    axios.get("https://app.ticketmaster.com/discovery/v2/suggest.json?apikey=FOaGhweA08BfKYU6NdaHXSzpj17GGLqI")
    .then(response => {
      this.setState({attractions: response.data._embedded.attractions, events:response.data._embedded.events})
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
