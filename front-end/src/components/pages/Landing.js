import React from 'react'
import { Box, Typography, Button, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "70vh",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    },
    sub: {
        marginTop: "87px",
        width: "60%",
        flexDirection: 'column',
        justifyContent: 'center'
    }
})
function Landing() {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Box className={classes.sub} >
                <Typography variant='h1'> Create you Donut chart Today </Typography>
                <Link to='/signin'>
                    <Button variant='contained' color="primary"  >Start</Button>
                </Link>
            </Box>
        </Box>
    )
}

export default Landing
