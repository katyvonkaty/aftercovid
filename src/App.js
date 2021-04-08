import React from "react"
import axios from "axios"
import Navbar from "./Navbar"
import First from "./First"
import EventDetail from "./EventDetail"
import EventSearchResult from "./EventSearchResult"
import CardAttraction from "./CardAttraction"
import CardEvent from "./CardEvent"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import bg from "./assets/images/bg.png"
import TextField from '@material-ui/core/TextField';


import Container from "@material-ui/core/Container";


class App extends React.Component {

  state= {
    attractions: [],
    events:[],
  selectedEvent:null  }

  componentDidMount() {
    Promise.all([
      axios.get(`https://api.seatgeek.com/2/events/`, {
        params: {
          client_id: `${process.env.REACT_APP_API_KEY}`,
          sort:"score.desc",
          geoip: "true"

        }
      }),
      axios.get(`https://api.seatgeek.com/2/performers`, {
        params: {
          client_id: `${process.env.REACT_APP_API_KEY}`,
                sort:"score.desc"


        }
      })
    ]).then(([result1,result2]) => {
      console.log(result1)
      console.log(result2)
        this.setState({events:result1.data.events.slice(0,4), attractions: result2.data.performers.slice(0,4), })

      }
    )
    }


        onEventSelect = (event) => {
          this.setState({selectedEvent: event})
          console.log("im from", event);
        }



  render(){
    return(
      <>
      <Navbar />
      <Container maxWidth="lg">

      <First />

        <CardEvent onEventSelect={this.onEventSelect} events = {this.state.events} attractions={this.state.attractions} />
        <EventDetail event={this.state.selectedEvent} />
        <CardAttraction attractions = {this.state.attractions}  />

        </Container>
      </>
    )
  }
}

export default App;
