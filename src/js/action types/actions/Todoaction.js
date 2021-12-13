import { ADD_TASK ,DELETE_TASK,DONE_TASK} from "../Todotypes"

export const addtask=(paylaod)=>{
    return{
type:ADD_TASK,
paylaod,
    }
}
export const deletetask=(paylaod)=>{
    return{
type:DELETE_TASK,
paylaod,
    }
}
export const donetask=(paylaod)=>{
    return{
type:DONE_TASK,
paylaod,
    }
}