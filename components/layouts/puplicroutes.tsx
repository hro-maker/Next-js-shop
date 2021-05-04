
import { useRouter } from 'next/router'
import React, { useEffect } from 'react';
import { typetuseSelector } from '../../hooks/useselector';

const Publicroutes:React.FC = ({children}) => {
    const router=useRouter()
    const {auth}=typetuseSelector(state => state)
    let token
    if(process.browser){
        token=localStorage.getItem("token")
    }
    if(token && process.browser){
        router.push('/')
    }
    useEffect(() => {
            if(auth.user && process.browser){
                router.push('/')
            }
    }, [auth.user]);
    return (
        <div>
            {children}
        </div>
    );
}

export default Publicroutes;
