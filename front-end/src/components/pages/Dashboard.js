import React, { useEffect } from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'
import CreateGraph from '../CreateGraph'
import { connect, useSelector } from 'react-redux'
import { getUserData } from '../../redux/actions'
import Draw from '../Draw'
import Items from '../Items'

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%"
    }
})
function Dashboard({ dispatch }) {
    const classes = useStyles()
    let state = useSelector(state => state)
    console.log(state)

    useEffect(() => {
        dispatch(getUserData(state.token))

    }, [state.token])
    return (
        <Box className={classes.root}>
            <CreateGraph />
            <Typography variant='h3'> Your Donuts </Typography>
            <Items/>
        </Box>
    )
}
Dashboard = connect()(Dashboard)
export default Dashboard
