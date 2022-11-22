import { LOGGED_IN , LOGGED_OUT,OPEN_DIALOG,CLOSE_DIALOG} from '../constants/action-types'

// const LOGGED_IN = "LOGGED_IN"

export const ActionLogedin = payload =>{
    console.log("login action is called");
    return{
    type: LOGGED_IN,
    payload
};
};

export const ActionOpendialog = payload =>{
    console.log("the add tax dialog open called");
    return{
        type: OPEN_DIALOG,
        payload
    };
};

export const ActionClosedialog = payload =>{
    console.log('the add tax dialog closed called')
    return{
        type: CLOSE_DIALOG,
        payload
    };
};

