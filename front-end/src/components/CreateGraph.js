import React, { useState } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import Draw from './Draw'
import NewChart from './NewChart'
import { connect ,useSelector } from 'react-redux'
import { setsnack  ,createGraph} from '../redux/actions'

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap-reverse",
        width: "100%",
        margin:"10px 0px"


    }
})


function CreateGraph({ dispatch }) {
    let state = useSelector(state => state)
    const [data, setData] = useState({
        labels: [
            'Red',
            'Green',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    })
    const [entries, setEntries] = useState(3)
    const [label, setLabels] = useState([])
    const [maxPersantage, setMaxPersantage] = useState(100)
    const [persantage, setPersantage] = useState([])

    const [color, setColor] = useState([
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
    ])

    const handelPreview = e => {
        if (maxPersantage >= 0) {
            setData({ ...data, labels: label, datasets: [{ data: persantage, backgroundColor: color, hoverBackgroundColor: color }] })
        } else if(maxPersantage <= 0 ) {
            dispatch(setsnack({ open: true, type: "warning", message: `the persentages is ${100 + Math.abs(maxPersantage)}` }))
        }
    }

    const handelsubmit = e =>{
        e.preventDefault()
        if (maxPersantage === 0 && state.token.length > 0) {

            setData({ ...data, labels: label, datasets: [{ data: persantage, backgroundColor: color, hoverBackgroundColor: color }] })
            console.log({okten:state.token,labels:label ,data:persantage ,backgroundColor:color})
            dispatch(createGraph({token:state.token,labels:label ,data:persantage ,backgroundColor:color}))
            e.target.reset()
            setPersantage([])
            setLabels([])
        } else {
            dispatch(setsnack({ open: true, type: "warning", message: `the persentages is ${100 + Math.abs(maxPersantage)}` }))
        }
        
    }


    const handleEntries = e => {
        if (!isNaN(parseInt(e.target.value)))
            setEntries(parseInt(e.target.value))
            document.getElementById('Graph-form').reset()
            setPersantage([])
            setLabels([])
            
    }

    const handleLabels = e => {
        label[parseInt(e.target.name)] = e.target.value
        setLabels([...label])
    }


    const handlePersantage = e => {
        if (!isNaN(parseInt(e.target.value)) && Math.sign(parseInt(e.target.value)) >= 0)
            persantage[parseInt(e.target.name)] = parseInt(e.target.value)
        setPersantage([...persantage])
        let current = persantage.reduce((a, b) => { return a + b })
        let max = 100 - current
        setMaxPersantage(max)

    }


    const handleColor = e => {
        color[parseInt(e.target.name)] = e.target.value
        setColor([...color])
    }

    

    const classes = useStyles()
    let form = {
        entries, label, maxPersantage, persantage
        , color, handleEntries, handleLabels, handlePersantage, handleColor, handelPreview , handelsubmit
    }


    return (
        <Box className={classes.root}>
            <NewChart data={form} />
            <Draw data={data} />
        </Box>
    )
}
CreateGraph = connect()(CreateGraph)
export default CreateGraph
