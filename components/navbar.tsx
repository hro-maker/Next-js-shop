import React from 'react';
import Link from 'next/link';
import { typetuseSelector } from '../hooks/useselector';
import { typetactions } from '../hooks/typeactions';
import { useRouter } from 'next/router';
const Navbar = () => {
    const {auth}=typetuseSelector(state => state)
    const {logout} = typetactions()
    const router=useRouter()
    const logoutt=()=>{
        logout()
            process.browser && router.push('/auth/login')
    }
    return (
        <div className="navbar_wraper">
                <div className="navbar_left">
                <Link href="/">
                    <a>Home</a>
                    </Link></div>
             {!auth.user &&    <div className="navbar_rigth">
                <Link  href="/auth/login">
                    <a className="navbar_link">login</a>
                    </Link>
                    <Link href="/auth/register">
                    <a className="navbar_link">register</a>
                    </Link>
                </div>}
                {auth.user &&    <div className="navbar_rigth">
                    <span style={{cursor:'pointer'}} onClick={logoutt} className="navbar_link">logout</span>
               
                </div>}
        </div>
    );
}

export default Navbar;
