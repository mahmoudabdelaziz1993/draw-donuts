import React from 'react'
import { Typography, Box, FormControl, InputLabel, Input, FormHelperText, makeStyles, Button } from '@material-ui/core'
import { useForm } from "react-hook-form";
import { login } from '../../redux/actions'
import { connect } from 'react-redux'



const useStyles = makeStyles({
    root: {
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'stretch'

    }
})



function Login({ dispatch }) {
   
    const classes = useStyles()
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async (data, e) => {
        e.preventDefault()
        dispatch(login(data));
    };




    return (
        // handleSubmit" will validate your inputs before invoking "onSubmit"  
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box className={classes.root}>
                <Typography variant='h5'> Sign In</Typography>

                <FormControl>
                    <InputLabel htmlFor='email'>email</InputLabel>
                    <Input autoFocus={true} inputRef={register({
                        required: 'Required !',
                        pattern: {
                            value: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/g,
                            message: "that's not even a email !"
                        }
                    })} name='email' type='email' aria-describedby='email-helper' />
                    <FormHelperText error={errors.email && true} id='email-helper'> {errors.email ? errors.email.message : ""}  </FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor='password'>Password</InputLabel>
                    <Input inputRef={register({
                        required: 'Required !', minLength: {
                            value: 5,
                            message: 'at least 5 character '
                        }
                    })} name='password' type='password' aria-describedby='password-helper' />
                    <FormHelperText error={errors.password && true} id='password-helper'> {errors.password ? errors.password.message : ""}  </FormHelperText>
                </FormControl>
                <Button type="submit" variant='contained' color='secondary'>send</Button>
            </Box>
        </form>

    )
}
Login = connect()(Login)
export default Login
