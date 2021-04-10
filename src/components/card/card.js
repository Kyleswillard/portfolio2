import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(112, 111, 111, .5)',
        margin: '10px',
        color: '#2832c2'
    },
    media: {
        height: 250
    }
})

const MediumCard = (props) => {
    console.log('medium card props', props)
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.item.thumbnail}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.item.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default MediumCard
