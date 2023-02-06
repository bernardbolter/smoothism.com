import React, { useContext, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { SmoothContext } from '../providers/SmoothProvider'

import Ellipsis from '../images/Ellipsis.gif'

// import '../styles/contact-form.scss'

const ContactForm = () => {
    const [smooth] = useContext (SmoothContext)
    const [messageSuccess, setMessageSuccess] = useState('')

    const encode = (data) => {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
      }

    return (
        <section 
            className="contact-form-container"
            style={{color: smooth.primaryDark}}
        >
            <h1>Send me a message and</h1>
            <h1>Let's see how we can make</h1>
            <h1>your thing Smooth.</h1>
            <p>by email</p>
            <h2>smooth@smoothism.com</h2>
            <p>or use the form</p>
            <Formik
                initialValues={{name: '', email: '', message: ''}}
                validate={values => {
                    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                    const errors = {};
                    if(!values.name) {
                      errors.name = 'Name Required'
                    }
                    if(!values.email || !emailRegex.test(values.email)) {
                      errors.email = 'Valid Email Required'
                    }
                    if(!values.message) {
                      errors.message = 'Message Required'
                    }
                    return errors;
                  }}
                  onSubmit={
                    (values, actions) => {
                        console.log(values)
                        actions.setSubmitting(true)
                      fetch("/", {
                        method: "POST",
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: encode({ "form-name": "smoothism-contact", ...values })
                      })
                      .then(() => {
                        setMessageSuccess("Your message has been sent. Thanks and we will get back to you shortly")
                        // actions.resetForm()
                      })
                      .catch(() => {
                        setMessageSuccess("There was an error sending your message, you can send a message to smooth@smoothism.com, or try again later. Our apologize.")
                      })
                    //   .finally(() => actions.setSubmitting(false))
                    }
                  }
            >
                {({ isSubmitting }) => {
                    console.log(isSubmitting)
                    return (
                    <Form name="smoothism-contact" data-netlify={true}>
                        <div className="form-input form-name">
                            <label htmlFor="name">Name: </label>
                            <Field name="name" />
                            <ErrorMessage name="name">{msg => <div className="error-message">{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="form-input form-email">
                            <label htmlFor="email">Email: </label>
                            <Field name="email" />
                            <ErrorMessage name="email">{msg => <div className="error-message">{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="form-input form-message">
                            <label htmlFor="message">Message: </label>
                            <Field name="message" component="textarea"/>
                            <ErrorMessage name="message">{msg => <div className="error-message">{msg}</div>}</ErrorMessage>
                        </div>
                        {isSubmitting ? (
                            <div className="form-blocks">
                                <img className="form-loader" src={Ellipsis} alt="gif animation loader" />
                            </div>
                        ) : (
                            <>
                                <button 
                                    className="send-button" 
                                    type="submit"
                                    style={{
                                        backgroundColor: smooth.primaryDark,
                                        color: smooth.primaryLight
                                    }}    
                                >Send</button>
                                <p>{messageSuccess.length !== 0 && messageSuccess}</p>
                            </>
                        )}
                        
                    </Form>
                )}}
            </Formik>
        </section>
    )
}

export default ContactForm