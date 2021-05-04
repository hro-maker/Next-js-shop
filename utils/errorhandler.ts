
interface errorsa{
    name?:string,
    password?:string,
    email?:string
 }
export  const validate = values => {
   const errors:errorsa = {};
   if (!values.name) {
     errors.name = 'Required';
   } else if (values.name.length > 15 || values.name.length < 6) {
     errors.name = 'Must be longer then 6 and  less then 15';
   }
 
   if (!values.password) {
     errors.password = 'Required';
   } else if (values.password.length > 20 || values.password.length < 6) {
     errors.password = 'Must be longer then 6 and  less then 15';
   }
 
   if (!values.email) {
     errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }
   return errors;
 };

export  const validatelogin = values => {
  const errors:errorsa = {};
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length > 20 || values.password.length < 6) {
    errors.password = 'Must be longer then 6 and  less then 15';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};
