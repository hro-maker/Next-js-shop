export interface Iuser{
    _id:string,
    email:string,
    password:string,
    name:string
}

export interface initialstate{
    loading:boolean,
    error:null | string,
    user:null | Iuser,
    message:null | string
}
export enum actionenum{
    logi_request='logi_request',
    logi_success='logi_success',
    logi_failure='logi_failure',
    clear_message='clear_message'
}
interface loginrequest{
    type:actionenum.logi_request
}
interface clearmessage{
    type:actionenum.clear_message
}
interface loginsuccess{
    type:actionenum.logi_success,
    payload:Iuser,
    message?:string
}
interface loginfailuer{
    type:actionenum.logi_failure,
    payload:string
}

export type actiontyps = loginrequest | loginsuccess | loginfailuer | clearmessage