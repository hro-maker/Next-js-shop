
import { useRouter } from 'next/router'
import React, { useEffect } from 'react';
import { typetuseSelector } from '../../hooks/useselector';

const Privateroutes:React.FC = ({children}) => {
    const router=useRouter()
    const {auth}=typetuseSelector(state => state)
    let token
    if(process.browser){
        token=localStorage.getItem("token")
    }
    if(!token){
        if(process.browser){
        router.push('/auth/login')
        }
    }
    return (
        <div>
            {children}
        </div>
    );
}

export default Privateroutes;
