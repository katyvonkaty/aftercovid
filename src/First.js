import React from "react"
import SearchBar from "./SearchBar"
import EventSearchResult from "./EventSearchResult"

import Grid from '@material-ui/core/Grid';
import bg from "./assets/images/bg.png"

import axios from "axios"

class First extends React.Component {
  state = {
    eventResults:[],
    eventAttractions:[]
  }


    onTermSubmit = async (term) => {

      const [response] = await axios.all ([
        axios.get(`https://api.seatgeek.com/2/performers?q=${term}`, {
          params: {
            client_id: `${process.env.REACT_APP_API_KEY}`
          }
        })
          // axios.get(`https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=${term}&apikey=${process.env.REACT_APP_API_KEY}`)
        ])
      this.setState({eventResults:response.data.performers.slice(0,4)})
      console.log(response.data.performers);

    }

    render(){
      return(
        <div>
        <Grid container fluid spacing={3} style={{marginBottom:"100px", marginTop:"100px"}}>
          <Grid item xs={4}>
          <h1> After Covid </h1>
          <h3> It is a long established fact that a readeestablished fact that a reade established fact that a reade  </h3>
          <SearchBar onFormSubmit={this.onTermSubmit} />

          </Grid>
            <Grid item xs={7}>
            <img style={{width:"100%"}} src={bg} />
            </Grid>
         </Grid>
         <EventSearchResult style={{marginTop:"130px"}} eventResults = {this.state.eventResults} />

         </div>
      )
    }

}

export default First
