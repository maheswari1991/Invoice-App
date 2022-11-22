import { LOGGED_IN , LOGGED_OUT} from '../constants/action-types'

const initialState =  {
    loading: false,
    logInState: {
        isLoggedIn: false,
        message: '',
        accessToken: '',
        refreshToken: '',
    }

};

const isLogged = (state=initialState , action) => {
    console.log('the initialState value', state);
    switch(action.type){

        case LOGGED_IN:
            console.log("Loggin reducer called");

            return {
                 ...state,logInState:{
                    
                    isLoggedIn: action.payload.status,
                    message: action.payload.message,
                    accessToken: action.payload.accessToken,
                    refreshToken: action.payload.refreshToken,
                }
                
            }
           

        default:
            console.log("Logiin default called", state)
            return { ...state, initialState }

        }
    }


export default isLogged;