import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
// });


const SingleAttraction = ({ attraction }) => {
  // const classes = useStyles();

  return (

    <Card style={{width:"300px", height:"400px"}}>
     <CardActionArea>
       <CardMedia
         component="img"
         alt="Contemplative Reptile"
         height="140"
         src={attraction.image}
         style={{ width: "100%" }}
         title="Contemplative Reptile"
       />
       <CardContent>
         <Typography>
         <h2> {attraction.name} </h2>
         </Typography>
         <p> <b> Genre </b>: {attraction.short_title} </p>
         <p><b> Attraction </b>{attraction.taxonomies[0].name} </p>
       </CardContent>
     </CardActionArea>
     <CardActions>
       <Button size="small" color="primary">
         Share
       </Button>
       <Button size="small" color="primary">
         Learn More
       </Button>
     </CardActions>
   </Card>


  );
};

export default SingleAttraction;
