import React from 'react'
import { Box, FormControl, InputLabel, Input, FormHelperText, makeStyles, Button, Typography } from '@material-ui/core'
import { useForm } from "react-hook-form";
import { useSelector , connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { registerUS } from '../../redux/actions'

const useStyles = makeStyles({
    root: {
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'stretch'

    }
})

function Register({dispatch}) {
   
    const classes = useStyles()
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async (data, e) => {
        e.preventDefault()
        dispatch(registerUS(data))
   
    };

    return (
        // handleSubmit" will validate your inputs before invoking "onSubmit"  
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box className={classes.root}>
                <Typography variant='h5'> Sign Up</Typography>
                <FormControl>
                    <InputLabel htmlFor='name'>name</InputLabel>
                    <Input
                        autoFocus={true}
                        inputRef={register({
                            required: 'Required !',
                            minLength: {
                                value: 3,
                                message: 'too short for a name dude !'
                            },
                            pattern: {
                                value: /^[a-zA-Z]+(([/',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
                                message: "that's not even a name dude !"
                            }
                        })}
                        name='name' type='name' aria-describedby='name-helper' />
                    <FormHelperText error={errors.name && true} id='name-helper'>{errors.name ? errors.name.message : "What should We call you "} </FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor='email'>email</InputLabel>
                    <Input inputRef={register({
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

Register = connect()(Register)
export default Register
