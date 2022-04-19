import {GM,GN} from './Redux.action'
let intialstate={
    message:"hlo"
}
let MessageReducer=(state=intialstate,action)=>{
    switch(action.type){
        case GM :
            return{message:"hlo gud mrng"}
        case GN:
            return {message:"hloo gud n8"}
            default:
                return state
        }
} 
export {MessageReducer}