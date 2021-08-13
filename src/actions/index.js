import axios from 'axios';

export const fetchSmurfs = () => {
    console.log('fetchSmufs runs')
    return (dispatch) => {
        dispatch(fetchStart())
        setTimeout(() => {
            axios.get('http://localhost:3333/smurfs')
            .then(res => dispatch(fetchSuccess(res.data)))
            .catch(err => dispatch(fetchError(err)));
        },1500)
    }
}

export const FETCH_START = 'FETCH_START'
export const fetchStart = () => {
    return ({type:FETCH_START})
}
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const fetchSuccess = (array) => {
    return ({type:FETCH_SUCCESS, payload: array})
}
export const FETCH_ERROR = 'FETCH_ERROR'
export const fetchError = (err) => {
    return ({type:FETCH_ERROR, payload:err})
}

export const ADD_SMURF = 'ADD_SMURF'
export const addSmurf = (smurf) => {
    return ({type:ADD_SMURF, payload:smurf})
}
export const SET_ERROR = 'SET_ERROR'
export const setError = (error) => {
    return ({type:SET_ERROR, payload:error})
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.