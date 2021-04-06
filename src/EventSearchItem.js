import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const EventSearchItem = ({event}) => {
  return (
    <>
    <Card style={{width:"300px"}}>
     <CardActionArea>
       <CardMedia
         component="img"
         alt="Contemplative Reptile"
         height="140"
         src={event.image}
         style={{ width: "100%" }}
         title="Contemplative Reptile"
       />
       <CardContent>
       <Typography gutterBottom variant="h5" component="h2">
       {event.type}{" "}



       </Typography>
       </CardContent>
     </CardActionArea>
     <CardActions>
       <Button size="small" color="primary">
       </Button>
       <Button size="small" color="primary">
         Learn More
       </Button>
     </CardActions>
   </Card>
   </>
 )
}

export default EventSearchItem
