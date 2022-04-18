import React, { useContext} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { SmoothContext } from '../providers/SmoothProvider'

import Blocks from '../images/MovingBlocks.gif'

import '../styles/contact-form.scss'

const ContactForm = () => {
    const [smooth] = useContext (SmoothContext)
    return (
        <section 
            className="contact-form-container"
            style={{color: smooth.primaryDark}}
        >
            <h1>Send me a message and</h1>
            <h1>Let's see how we can make</h1>
            <h1>your thing Smooth.</h1>
            <p>by email</p>
            <h2>whatsup@smoothism.com</h2>
            <p>or</p>
            <h2>bernardbolter@gmail.com</h2>
            <p>or use the form</p>
            <Formik
                initialValues={{name: '', email: '', message: ''}}
                validate={values => {
                    const errors = {}
                    if (!values.email) {
                        errors.email = <p>* required</p>
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = <p>invalid email</p>
                    }
                    return errors
                }}
                onSubmit={( values, { setSubmitting }) => {
                    console.log(values)
                    setTimeout(() => {
                        setSubmitting(false)
                    }, 400)
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="form-input form-name">
                            <label htmlFor="name">Name: </label>
                            <Field name="name" />
                            <ErrorMessage name="name" />
                        </div>
                        <div className="form-input form-email">
                            <label htmlFor="email">Email: </label>
                            <Field name="email" />
                            <ErrorMessage name="email" />
                        </div>
                        <div className="form-input form-message">
                            <label htmlFor="message">Message: </label>
                            <Field name="message" component="textarea"/>
                            <ErrorMessage name="message" />
                        </div>
                        {isSubmitting ? (
                            <div className="form-blocks">
                                <Blocks />
                            </div>
                        ) : (
                            <button type="submit">Send</button>
                        )}
                        
                    </Form>
                )}
            </Formik>
        </section>
    )
}

export default ContactForm