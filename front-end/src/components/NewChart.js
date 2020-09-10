import React, { useState } from 'react'
import { Box,  TextField, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"

    }, actions: {
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
    }, row: {
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
        margin: '10px',
        flexWrap: "wrap"
    }
})
function NewChart({data}) {
    const classes = useStyles()

    // const [entries, setEntries] = useState(3)
    // const [label, setLabels] = useState([])
    // const [maxPersantage, setMaxPersantage] = useState(100)
    // const [persantage, setPersantage] = useState([])
    // const [color, setColor] = useState([])
    console.log('object :',{data})
    let { entries, label, maxPersantage, persantage
        , color, handleEntries, handleLabels, handlePersantage, handleColor } =  data
 console.log({ entries, label, maxPersantage, persantage
    , color, handleEntries, handleLabels, handlePersantage, handleColor })

    return (

        <form className={classes.root} >
            <TextField
                label="number of entries"
                name="entries"
                type="number"
                value={entries}
                onChange={handleEntries}

            />
            {[...Array(entries)].map((value, i) => {
                return (

                    <Box className={classes.row} key={i}>
                        <TextField
                            key={`Label ${i + 1} `}
                            label={` Label ${i + 1} `}
                            name={`${i}`}
                            size='small'
                            required={true}
                            onChange={handleLabels}
                        />
                        <TextField
                            key={` persantage ${i + 1} `}
                            label={`persantage`}
                            name={`${i}`}
                            type="number"
                            inputProps={{
                                min: 0, max: maxPersantage
                            }}
                            size='small'
                            required={true}

                            onBlur={handlePersantage}
                        />
                        < TextField
                            key={` color ${i + 1} `}
                            label={`color`}
                            name={`${i}`}
                            type="color"
                            value={color[i]}
                            size='medium'
                            style={{ width: "30px" }}
                            
                            onChange={handleColor}
                            required={true}
                        />

                    </Box>




                )
            })}

            <Box m={2} className={classes.actions}>
                <Button type="submit" variant="contained" color="primary" > save </Button>
                <Button type="submit" variant="contained" color="secondary" > Preview </Button>

            </Box>

        </form>
    )
}

export default NewChart
