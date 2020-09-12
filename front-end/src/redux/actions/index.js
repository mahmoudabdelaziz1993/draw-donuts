import { FETCH_USER, FETCH_TOKEN, SET_SNACK } from './types'
import axios from 'axios'


export const getUserData = (token) => async dispatch => {
    try {
        const response = await axios.post(serverurl, {
            query: `
        query{
            user {
                _id
                name
                email
                 createdGraphs{
              _id
              labels
              backgroundColor
              data
              createdAt
              updatedAt
              __typename
            }
            }
        }
       `
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`

            }
        });

        if (typeof response.data.errors !== "undefined") { throw new Error(response.data.errors[0].message) }
        console.log(response)
        dispatch({ type: FETCH_USER, payload: response.data.data.user })


    } catch (error) {
        dispatch({ type: SET_SNACK, payload: { open: true, type: "error", message: error.message } })
    }


    // dispatch({
    //     type: FETCH_USER, payload: {
    //         name: "test",
    //         id: "5f4d839a8faa72312874dba9",
    //         email: "test",
    //     }
    // })
}

export const setToken = (token) => async dispatch => {
    dispatch({ type: FETCH_TOKEN, payload: token })

}

export const setsnack = ({ open, type, message }) => async dispatch => {
    dispatch({
        type: SET_SNACK, payload: { open, type, message }
    })

}

const serverurl = "http://localhost:4000/graphql"

export const login = ({ email, password }) => async dispatch => {
    try {
        const response = await axios.post(serverurl, {
            query: `
            query {
           login(email:"${email}",password:"${password}"){
            token
          }
        }
           `
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (typeof response.data.errors !== "undefined") { throw new Error(response.data.errors[0].message) }
        dispatch({ type: FETCH_TOKEN, payload: response.data.data.login.token })
    } catch (error) {
        dispatch({ type: SET_SNACK, payload: { open: true, type: "error", message: error.message } })

    }

}

export const registerUS = ({ name, password, email }) => async dispatch => {

    try {
        const response = await axios.post(serverurl, {
            query: `
            mutation{
                createUser(input:{name:"${name}",password:"${password}",email:"${email}"}){
                  token
                }
              }
            `}
            , {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

        );
        if (typeof response.data.errors !== "undefined") { throw new Error(response.data.errors[0].message) }
        dispatch({ type: FETCH_TOKEN, payload: response.data.data.createUser.token })
    } catch (error) {
        dispatch({ type: SET_SNACK, payload: { open: true, type: "error", message: error.message } })
    }
}

//    createGraph (labels: [String!]!,data: [Int!]!, backgroundColor: [String!]!) : User
export const createGraph = ({ token, labels, data, backgroundColor }) => async dispatch => {

    try {
        let color = JSON.stringify(backgroundColor);
        labels = JSON.stringify(labels)
        const response = await axios.post(serverurl, {
            query: `
            mutation{
                createGraph(labels:${labels},data:[${data}],backgroundColor:${color}){
                    name
                    
                     createdGraphs{
                      _id
                      labels
                      backgroundColor
                      data
                      createdAt
                      updatedAt
                      __typename
                    }
                }
                }
        
                 `
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`

            }
        });

        if (typeof response.data.errors !== "undefined") { throw new Error(response.data.errors[0].message) }

        dispatch({ type: FETCH_USER, payload: response.data.data.createGraph })


    } catch (error) {
        dispatch({ type: SET_SNACK, payload: { open: true, type: "error", message: error.message } })
    }
}

export const deleteGraph = (id, token)=>async dispatch => {
    try {
        const response = await axios.post(serverurl, {
            query: `
            mutation{
                deleteGraph(id:"${id}"){
                  _id
                  name
                  email
                  createdGraphs{
                    _id
                    labels
                    data
                    backgroundColor
                    createdAt
                    updatedAt
                  }
                }
              }
        
                 `
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`

            }
        });

        if (typeof response.data.errors !== "undefined") { throw new Error(response.data.errors[0].message) }

        dispatch({ type: FETCH_USER, payload: response.data.data.deleteGraph })
    } catch (error) {
        dispatch({ type: SET_SNACK, payload: { open: true, type: "error", message: error.message } })
    }
}