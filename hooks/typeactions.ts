import { useDispatch } from "react-redux"
import { bindActionCreators } from 'redux';
import { actioncreators } from "../redux/action";

export const typetactions=()=>{
    const dispatch=useDispatch()     
   return  bindActionCreators(actioncreators,dispatch)    
}