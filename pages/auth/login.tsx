import React, { useEffect } from 'react';
 import { useFormik } from 'formik';
 import {validatelogin} from './../../utils/errorhandler';
 import { typetactions } from './../../hooks/typeactions';
import { typetuseSelector } from '../../hooks/useselector';
import Publicroutes from '../../components/layouts/puplicroutes';
 const Signin = () => {
   const {login}=typetactions()
    const {alert,auth}=typetuseSelector(state => state)
   const formik = useFormik({
     initialValues: {
       password: '',
       email: '',
     },
     validate:validatelogin,
     onSubmit: values => {
       login(values)
       values.password=""
     },
   });
   if(auth.loading){
       return (
           <div>lodinggggg</div>
       )
   }

   return (
     <Publicroutes>
     <div className="wrap">
     <form className="form" onSubmit={formik.handleSubmit}>
     <label className="label" htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
       <label className="label" htmlFor="password">Password</label>
       <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
       />
       {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}

       <button className="btn" type="submit">Submit</button>
     </form>
     </div>
     </Publicroutes>
   );
 };
 export default Signin