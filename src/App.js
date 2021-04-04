import React from "react"
import axios from "axios"
import Navbar from "./Navbar"
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
      <Navbar />
      <Container maxWidth="lg">


      <Grid container spacing={3} >
      <Grid item xs={6}>
      <h1> After Covid </h1>
      <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
      <TextField
                label="large"
                id="filled-size-small"
                defaultValue="Small"
                variant="filled"
                size="small"
              />
       </Grid>
       <Grid item xs={6}>
       <img style={{width:"100%"}} src={bg} />
       </Grid>
       </Grid>
        <CardAttraction attractions = {this.state.attractions} />
        <CardEvent events = {this.state.events} />
        </Container>
      </>
    )
  }
}

export default App;
