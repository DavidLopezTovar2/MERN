import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

const Register = (props) => {
    const { setUser } = props;
    const navigate = useNavigate();

    const signupSchema = Yup.object().shape({
        userName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Should enter a valid email')
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        password: Yup.string()
            .min(2, 'Too Short!')
            .max(6, 'Too Long!')
            .required('Required')
            .oneOf([Yup.ref('confirmPassword'), null], 'Passwords must match'),
        confirmPassword: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        age: Yup.number()
            .min(0)
            .required('Required')
    });

    return (
        <div>
            <Formik
                initialValues={{
                    userName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    age: null
                }}
                validationSchema={signupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                    setUser(values);
                    navigate('/home')
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="userName">Usuario:</label>
                        <Field name="userName" type="text" />
                        {errors.userName && touched.userName ? (
                            <div className="errorMsg">{errors.userName}</div>
                        ) : null}
                        <label htmlFor="email">Email:</label>
                        <Field name="email" type="email" />
                        {errors.email && touched.email ? (
                            <div className="errorMsg">{errors.email}</div>
                        ) : null}
                        <label htmlFor="password">Password:</label>
                        <Field name="password" type="password"/>
                        {errors.password && touched.password ? (
                            <div className="errorMsg">{errors.password}</div>
                        ) : null}
                        <label htmlFor="confirmPassword">Confirm password:</label>
                        <Field name="confirmPassword"  type="password"/>
                        {errors.confirmPassword && touched.confirmPassword ? (
                            <div className="errorMsg">{errors.confirmPassword}</div>
                        ) : null}
                        <label htmlFor="age">Age:</label>
                        <Field name="age"  type="number"/>
                        {errors.age && touched.age ? (
                            <div className="errorMsg">{errors.age}</div>
                        ) : null}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )

}

export default Register;