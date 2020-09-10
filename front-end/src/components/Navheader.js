import React from 'react'
import { AppBar, Toolbar, IconButton, Button, makeStyles } from '@material-ui/core'
import { DonutLargeRounded, AccountCircle } from '@material-ui/icons'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
    space: {
        flexGrow: 1,
    }, menu: {
        display: "flex",
        listStyle: 'none',
    }, menuitm: {
        color: "#fff" ,
        textDecoration:'none'
    },logo:{
        fontSize:"45px"
    }
})

function Navheader() {
    const classes = useStyles()
    return (
        <AppBar position="sticky" >
            <Toolbar>
                <IconButton  color="secondary"   > <DonutLargeRounded className={classes.logo} /> </IconButton>
                <div className={classes.space} />
                <ul className={classes.menu}>
                    <li >
                        <NavLink className={classes.menuitm} to="/signin">
                            <Button color="inherit">signin</Button>
                        </NavLink>
                    </li>
                    <li >
                        < NavLink className={classes.menuitm} to="/signup">
                            <Button color="inherit" className =" ">SignUp</Button>
                            </NavLink>
                    </li>
                   
                </ul>
                <IconButton color="inherit" > <AccountCircle /> </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Navheader
