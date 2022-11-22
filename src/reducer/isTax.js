import {OPEN_DIALOG,CLOSE_DIALOG} from '../constants/action-types'

const initialState = {
    openDialog: false
}

const openAddTax =(state=initialState,action)=>{
    console.log('open Tax Add dialog',state)


    switch(action.type){
        case OPEN_DIALOG:
            console.log('open Tax Add dialog',state)
            return{
                openDialog:true,
            }

        case CLOSE_DIALOG:
            console.log('close Add Tax dialog')
            return{
                openDialog:false
            }

            default: return {
                openDialog: false

            }
    }
}

export default openAddTax;