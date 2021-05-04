import React, { FC, useEffect } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../redux/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { typetuseSelector } from './../hooks/useselector';
import '../styles/globals.scss'
import Navbar from './../components/navbar';
import { typetactions } from './../hooks/typeactions';
const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
    const notify = (message) => toast.dark(message);
    const { auth } = typetuseSelector(state => state)
    const { clearmessage, isUserlogin } = typetactions()
    useEffect(() => {
        if (auth.message) {
            notify(auth.message)
            clearmessage()
        }
    }, [auth.message]);
    useEffect(() => {
        if (!auth.user) {
            isUserlogin()
        }
    }, []);

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={7000}
                style={{ zIndex: 55555555555 }}
            />
            <Navbar />
            <div className="app_wraper">
                <Component {...pageProps} />
            </div>

        </>
    )
};
export default wrapper.withRedux(WrappedApp);