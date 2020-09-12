import React, { useState } from 'react'
import { Box, TextField, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding:"40px"

    }, actions: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
    }, row: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        margin: '10px',
        flexWrap: "wrap",
        alignItems:'flex-end'
    }
})
function NewChart({ data }) {
    const classes = useStyles()


    let { entries, label, maxPersantage, persantage
        , color, handleEntries, handleLabels, handlePersantage, handleColor, handelPreview, handelsubmit } = data


    return (

        <form id="Graph-form" className={classes.root} onSubmit={handelsubmit} >
            <TextField
                label="number of entries"
                name="entries"
                type="number"
                value={entries}
                onChange={handleEntries}
                inputProps={{
                    min: 2, max: 10
                }}
                fullWidth={true}

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
                                min: 0, max: 100
                            }}
                            size='small'
                            required={true}
                            onChange={handlePersantage}
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
                <Button onClick={handelPreview} variant="contained" color="secondary" > Preview </Button>

            </Box>

        </form>
    )
}

export default NewChart
