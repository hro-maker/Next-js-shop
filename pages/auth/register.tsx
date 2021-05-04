import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { validate } from './../../utils/errorhandler';
import { typetactions } from './../../hooks/typeactions';
import { typetuseSelector } from '../../hooks/useselector';
import { toast } from 'react-toastify';
import Publicroutes from '../../components/layouts/puplicroutes';
const SignupForm = () => {
  const { register } = typetactions()
  const { alert, auth } = typetuseSelector(state => state)
  const formik = useFormik({
    initialValues: {
      password: '',
      name: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      register(values)
      values.password = ""
    },
  });
  return (
    <Publicroutes>
    <div className="wrap">
      <form className="form" onSubmit={formik.handleSubmit}>
        <label className="label" htmlFor="name"> Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
        <label className="label" htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
        <label className="label" htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
    </Publicroutes>
  );
};

export default SignupForm