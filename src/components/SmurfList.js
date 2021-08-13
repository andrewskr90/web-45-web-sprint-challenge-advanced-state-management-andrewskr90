import React from 'react';
import Smurf from './Smurf';

import { connect } from 'react-redux'


 const SmurfList = (props)=> {
    const { isLoading, smurfs, fetchError } = props

    const loading = isLoading;
    const error = fetchError
    const testSmurf = {
        id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        name:'Poppa Smurf',
        position:'Village Leader',
        nickname: 'Pops',
        description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    }

    if (loading) {
        return <h1>Loading...</h1>;
    }
    if(error) {
        return <h1>Fetch Error: {error}</h1>
    }

    return(<div className="listContainer">
        {smurfs.map((item) => {
            return (<Smurf key={item.id} smurf={item}/>)
        })}
    </div>);
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs,
        fetchError: state.fetchError
    }
}

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.