const initialstate={
    message:""
}
export enum actiontypes{
    show_alert='show_alert',
    hide_alert='hide_alert'
}
export const alertt=(state,action)=>{
    switch (action.type) {
        case actiontypes.show_alert:
                return {
                    ...state,
                    message:action.payload
                }
            break;
    
            case actiontypes.hide_alert:
                return {
                    ...state,
                    message:""
                }
            break;
    
        default:
           return {...state}
    }
}