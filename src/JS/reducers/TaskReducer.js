import{ADD_TASK,EDIT_TASK} from "../constant/ActionsTypes" 
const initialState = {
listTask : [
    {id:1,
        Text:"hi"
    }
]
}
const TaskReducer = (state = initialState , {type,payload})=>{
switch (type) {
    case ADD_TASK:
        return {...state,listTask:[...state.listTask,payload]};
        case EDIT_TASK:
            return {...state,listTask:state.listTask.map((el)=>el.id === payload.id ? 
                {...el, text:payload.newTask}:el)}
            default:
                return state
}

}

export default TaskReducer;
