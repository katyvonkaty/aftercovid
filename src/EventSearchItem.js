import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Badge from '@material-ui/core/Badge';


import Typography from '@material-ui/core/Typography';

const EventSearchItem = ({event}) => {
  return (
    <>
    <Card style={{width:"300px"}}>
     <CardActionArea>
     <Badge anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }} color={"#000"} overlap="circle"  badgeContent=" ">


       <CardMedia
         component="img"
         alt="Contemplative Reptile"
         height="140"
         src={event.image}
         style={{ width: "100vw%", height:"200px" }}
         title="Contemplative Reptile"
       />
       </Badge>

       <CardContent>
       <Typography gutterBottom>
       <h2> {event.name} </h2>

     </Typography>
       <p> <b> Event Type </b> : {event.type}</p>
     <p> <b>Popularity:</b> {event.score}  </p>
     <p> <b>Upcoming Events:</b> {event.num_upcoming_events}  </p>
{event.genres ?
     <Chip
           label= {event.genres[0].name.toUpperCase()}

           variant="outlined"
         /> : null }

         {event.taxonomies ?
              <Chip
                    label= {event.taxonomies[0].name.toUpperCase()}

                    variant="outlined"
                  /> : null }


       </CardContent>
     </CardActionArea>
     <CardActions>
       <Button size="small" color="primary">
       </Button>
       <Button size="small" color="primary">
    <a href= {event.url}> Buy Tickets</a>

       </Button>
     </CardActions>
   </Card>
   </>
 )
}

export default EventSearchItem
//
// <p> {event.genres ?  "Genre: " + event.genres[0].name : null} </p>
// <p> {event.taxonomies ? event.taxonomies[0].name : null}  </p>
