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
        <>
        <Grid container spacing={3} style={{marginBottom:"100px", marginTop:"100px"}}>
          <Grid item xs={6}>
          <h1> After Covid </h1>
          <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
          <SearchBar onFormSubmit={this.onTermSubmit} />

          </Grid>
            <Grid item xs={6}>
            <img style={{width:"100%"}} src={bg} />
            </Grid>
         </Grid>
         <EventSearchResult style={{marginTop:"130px"}} eventResults = {this.state.eventResults} />

         </>
      )
    }

}

export default First
