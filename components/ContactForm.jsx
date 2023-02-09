import React, { useContext, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import { SmoothContext } from '../providers/SmoothProvider'

import ThreeDots from '../svg/threeDots'

const FormSchema = Yup.object().shape({
  name: Yup.string().min(2).max(50).required('required'),
  email: Yup.string().email('invalid email').required('required'),
  message: Yup.string().min(10).required('required')
})

const ContactForm = () => {
    const [smooth] = useContext (SmoothContext)

    const [responseMessage, setResponseMessage] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleFocus = () => {
        if (formSubmitted) {
            setFormSubmitted(false)
            setResponseMessage('')
        }
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
                initialValues={{
                  name: '', 
                  email: '', 
                  message: ''
                }}
                validationSchema={FormSchema}
                onSubmit={
                  async (
                    values,
                    { setSubmitting, resetForm }
                  ) => {
                    setSubmitting(true)
                    const response = await fetch('/api/mail', {
                      method: 'POST',
                      body: JSON.stringify(values)
                    })
                    if (response.status === 200) {
                      setResponseMessage("Your message has been sent, we will get back to you as soon as possible")
                      resetForm()
                      setFormSubmitted(true)
                      setSubmitting(false)
                    } else {
                      setResponseMessage("There was an error sending you\'re message, please try again later or send an email directly to smooth@smoothism.com")
                      resetForm()
                      setFormSubmitted(true)
                      setSubmitting(false)
                    }
                  }
                }
            >
                {({ errors, touched, isSubmitting }) => {
                    console.log("subing: ", isSubmitting)
                    return (
                    <Form name="smoothism-contact">
                        <div className="form-input form-name">
                            <label htmlFor="name">Name: </label>
                            <Field
                                id="name"
                                name="name" 
                                onFocus={handleFocus}
                            />
                            {(errors.name && touched.name) && <div className="error-message">{errors.name}</div>}
                        </div>
                        <div className="form-input form-email">
                            <label htmlFor="email">Email: </label>
                            <Field 
                                id="email"
                                name="email" 
                                onFocus={handleFocus}    
                            />
                            {(errors.email && touched.email) && <div className="error-message">{errors.email}</div>}
                        </div>
                        <div className="form-input form-message">
                            <label htmlFor="message">Message: </label>
                            <Field
                                id="message"
                                name="message" 
                                component="textarea"
                                onFocus={handleFocus}    
                            />
                            {(errors.message && touched.message) && <div className="error-message">{errors.message}</div>}
                        </div>
                        {isSubmitting ? (
                            <div className="form-blocks">
                                <ThreeDots />
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
                                <p>{responseMessage.length !== 0 && responseMessage}</p>
                            </>
                        )}
                        
                    </Form>
                )}}
            </Formik>
        </section>
    )
}

export default ContactForm