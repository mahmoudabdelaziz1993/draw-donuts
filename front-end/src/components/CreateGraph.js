import React, { useState } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import Draw from './Draw'
import NewChart from './NewChart'

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap-reverse",
        width: "100%",
        height: "100vh",

    }
})


function CreateGraph() {
    const [data, setData] = useState({})
    const [entries, setEntries] = useState(3)
    const [label, setLabels] = useState([])
    const [maxPersantage, setMaxPersantage] = useState(100)
    const [persantage, setPersantage] = useState([])

    const [color, setColor] = useState([
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
    ])



    const handleEntries = e => setEntries(parseInt(e.target.value))
    const handleLabels = e => {
        label[parseInt(e.target.name)] = e.target.value
        setLabels([...label])
    }
    const handlePersantage = e => {
        persantage[parseInt(e.target.name)] = parseInt(e.target.value)
        let current = persantage.reduce((a, b) => { return a + b })
        let max = 100 - current
        setMaxPersantage(max)
        setPersantage([...persantage])
    }
    const handleColor = e => {
        color[parseInt(e.target.name)] = e.target.value
        setColor([...color])
    }

    const classes = useStyles()
    let form = {
        entries, label, maxPersantage, persantage
        , color, handleEntries, handleLabels, handlePersantage, handleColor
    }


    return (
        <Box className={classes.root}>
            <NewChart data={form} />
            <Draw data={data} />
        </Box>
    )
}

export default CreateGraph
