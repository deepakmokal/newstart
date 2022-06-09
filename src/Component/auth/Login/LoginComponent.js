import React from 'react'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom'
import './login.scss';
function LoginComponent() {

    const initialValues = {
        email: '',
        password: ''
    }

    const validate = values => {

        const errors = {};

        //email validation
        if (!values.email) {
            errors.email = 'Email is a required field'
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid Email Address'
        }

        //password validation
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
        validate,


    })

    return (
        <div className='login-form'>
            <div className='ui card'>
                <div className='content'>
                    <div className="ui  form">
                        <h3 className='text-center'>Login</h3>
                        <div className="field">
                            <label htmlFor='email'>E-mail</label>
                            <input id='email'
                                name='email'
                                type="email"
                                placeholder="joe@schmoe.com"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {/* Email Validation Content */}
                            {formik.touched.email && formik.errors.email ? (
                                <div className='error'>{formik.errors.email}</div>
                            ) : null}
                        </div>


                        <div className="field">
                            <label htmlFor='password'>Password</label>
                            <input id='password'
                                name='password'
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className='error'>{formik.errors.password}</div>
                            ) : null}
                        </div>

                        <div className="field">
                            <a href='#'>Forgot password?</a>
                        </div>
                        <div className='controls'>
                            <button type='submit' className="ui blue submit button">Log in</button>
                            <Link to='/register'>
                                <button type='button' className="ui button">Sign up</button>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent