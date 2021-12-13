import { ADD_TASK,DELETE_TASK,DONE_TASK } from "../Todotypes"

const inistialstate={
    initlist:[]
};
const Todoreducer=(state=inistialstate,{type,paylaod})=>{
    switch(type){
        case ADD_TASK:
        return{...state,initlist:[...state.initlist,paylaod]};
        case DELETE_TASK:
            return{...state,initlist:state.initlist.filter((el)=>el.id !==paylaod)};
            case DONE_TASK:
                return{...state,initlist:state.initlist.map((el)=>el.id ===paylaod ?{...el,isDone:!el.isDone}:el)};
        default:
            return state
    }
    
}
export default Todoreducer