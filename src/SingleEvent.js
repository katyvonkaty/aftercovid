import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Badge from '@material-ui/core/Badge';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 300,
//     minWidth:300
//   },
// });


const SingleEvent = ({ event, attractions }) => {
  // const classes = useStyles();
  console.log(attractions);

  return (
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
         style={{ width: "100vw%", height:"200px" }}
         title="Contemplative Reptile"
       />
       </Badge>

       <CardContent>
       <Typography gutterBottom>
       <h2>{event.short_title} </h2>

     </Typography>
       <p> <b> From </b> : {event.stats.lowest_price} </p>
     <p> <b>At:</b> {event.venue.name} </p>
        <p> <b>At:</b> {event.score} </p>



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




  );
};

export default SingleEvent;
