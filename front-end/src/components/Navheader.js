import React from 'react'
import { AppBar, Toolbar, IconButton, Button, makeStyles } from '@material-ui/core'
import { DonutLargeRounded, AccountCircle } from '@material-ui/icons'
import { NavLink } from 'react-router-dom'
import { useSelector  , connect } from 'react-redux'
import { setToken } from '../redux/actions'
const useStyles = makeStyles({
    space: {
        flexGrow: 1,
    }, menu: {
        display: "flex",
        listStyle: 'none',
    }, menuitm: {
        color: "#fff",
        textDecoration: 'none'
    }, logo: {
        fontSize: "45px"
    }
})

function Navheader({dispatch}) {
    const logout = (e)=>{
        dispatch(setToken(""))
    }
    const classes = useStyles()
    const state = useSelector(state => state)
    return (
        <AppBar position="sticky" >
            <Toolbar>
                <NavLink to={state.token.length !== 0   ? '/dashboard' : '/'} > <IconButton color="secondary"   > <DonutLargeRounded className={classes.logo} /> </IconButton></NavLink>

                <div className={classes.space} />
                {state.token.length == 0 ? <ul className={classes.menu}>
                    <li >
                        <NavLink className={classes.menuitm} to="/signin">
                            <Button color="inherit">signin</Button> 
                        </NavLink>
                    </li>
                    <li >
                        < NavLink className={classes.menuitm} to="/signup">
                            <Button color="inherit" className=" ">SignUp</Button>
                        </NavLink>
                    </li>

                </ul>
                    :
                 
                        <Button color="inherit" onClick={logout} className=" ">Logout</Button>
                

                }</Toolbar>
        </AppBar>
    )
}
Navheader = connect()(Navheader)
export default Navheader
