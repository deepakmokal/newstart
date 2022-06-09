import React from 'react'
import { useFormik } from 'formik';
import './register.scss'
import { Link } from 'react-router-dom';

function RegisterComponent() {

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  const validate = values => {
    const errors = {}

    //Validating a First Name
    if(!values.firstName){
      errors.firstName = 'First Name is a required field'
    }
    else if(!/^[a-z ,.'-]+$/i.test(values.firstName)){
      errors.firstName = 'Invalid First Name'
    }

    //Validating Last Name
    if(!values.lastName){
      errors.lastName = 'Last Name is a required field'
    }
    else if(!/^[a-z ,.'-]+$/i.test(values.lastName)){
      errors.lastName = 'Invalid Last Name'
    }

    //Validating Email Address
    if (!values.email) {
      errors.email = 'Email is a required field'
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid Email Address'
    }

    //Validating Password
    if (!values.password) {
      errors.password = 'Password is a required field'
    }
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(values.password)) {
      errors.password = "Password should be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    }



    return errors
  }

  const formik = useFormik({
    initialValues,
    validate
  })

  console.log(formik.values)

  return (
    <div className='register-form'>
      <div className='ui card'>
        <div className='content'>
          <div className="ui  form">
            <h3 className='text-center'>Create a new account</h3>
            <div className='field'>
              <label htmlFor='firstName'>First Name</label>
              <input type='text' name='firstName' id='firstName'
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.firstName}  
               />
               {formik.touched.firstName && formik.errors.firstName ? (
                <div className='error'>{formik.errors.firstName}</div>
                ) : null}
            </div>
            <div className='field'>
              <label htmlFor='lastName'>Last Name</label>
              <input type='text' name='lastName' id='lastName'
               onChange={formik.handleChange}
               onBlur={formik.handleBlur} 
               value={formik.values.lastName} 
               />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className='error'>{formik.errors.lastName}</div>
              ) : null}
            </div>
            <div className='field'>
              <label htmlFor='email'>E-mail</label>
              <input type='email' name='email' id='email'
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.email}
               />
              {formik.touched.email && formik.errors.email ? (
                <div className='error'>{formik.errors.email}</div>
              ) : null}
            </div>
            <div className='field'>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' id='password'
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.password}
               />
              {formik.touched.password && formik.errors.password ? (
                <div className='error'>{formik.errors.password}</div>
              ) : null}
            </div>
            <div className='controls'>
              <button type='button' className="ui blue button">Sign up</button>
              <Link to='/login'>
                <button type='submit' className="ui submit button">Log in</button>            
              </Link>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterComponent