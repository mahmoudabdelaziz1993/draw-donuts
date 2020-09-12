import React from 'react'
import { useSelector ,connect } from 'react-redux'
import { Box, IconButton, makeStyles } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import Draw from './Draw'

import {deleteGraph  } from '../redux/actions'

const useStyles = makeStyles({
    root:{
        marginTop :"10px",
        width:"100%",
        display:"flex",
        flexWrap:'wrap'
      
    },
    item:{
        width :"50%"
    }
})



function Items({dispatch}) {
    const classes = useStyles()
    let state = useSelector(state => state.auth.createdGraphs)
    let token = useSelector(state=>state.token)

    const renderGraph = () => {
        return state.map((graph) => {
            let info = {
                labels: graph.labels,
                datasets: [{
                    data: graph.data,
                    backgroundColor: graph.backgroundColor,
                    hoverBackgroundColor: graph.backgroundColor
                }]
            };
            return (
                <Box className={classes.item} key={graph._id}>
                    
                    <IconButton onClick={()=>dispatch(deleteGraph(graph._id,token))}><Delete /></IconButton>
                    <Draw data={info} />

                </Box>

            )

        }
        )
    }

    return (
        <Box className={classes.root}>
            {renderGraph()}
        </Box>
    )
}

Items = connect()(Items)
export default Items
