import React from 'react';
import ReactDOM from 'react-dom';

const initialState = {

    isSignUp:{
        firstName : '',
        lastName : '',
        emailAddress: '',
        companyName : ''
    }
    
}

const isSignedUp = (state = initialState , action) => {


    switch(action.type){

        case 'SIGNEDUP':
            return{
                    ...state,isLoggedIn: "true"
            }

        default:

        return{ state}
    }


}

export default isSignedUp;