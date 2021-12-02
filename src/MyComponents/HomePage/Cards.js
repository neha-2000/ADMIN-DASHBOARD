import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      color: (props) => props.color,
      fontSize: 13
    }
  });
function Cards(props) {
    const classes = useStyles(props);
    return (
        <Card sx={{ maxWidth: 300 }}>
           
      <CardActionArea>
         <CardContent>
          <Typography gutterBottom variant="h5" component="div"  style={{color:'#2391F9'}}>
           {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className={classes.root}>
          Click here
        </Button>
      </CardActions>
    </Card>
    )
}

export default Cards
