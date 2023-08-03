import React from "react";
import "./Contact.css";
import Navbar from "../Navbar";
import contactimg from "../../assets/contact.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Footer from "../Footer";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const initialValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-main-container d-flex">
        <div className="contact-bg position-relative">
          <img src={contactimg} alt="contactimg" className="w-100 mw-100" />
        </div>
        <div className="contact-form w-25 mw-100 p-3 position-absolute">
          <div className="d-flex flex-column gap-1">
            <h1 className="contact-me">CONTACT ME</h1>
            <h1 className="reus-h">Get in Touch</h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ touched, errors }) => (
                <Form>
                  <div className="form-components-contact d-flex flex-column gap-4">
                    <div className="form-group contact-forms-inputs">
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error"
                      />
                    </div>

                    <div className="form-group contact-forms-inputs">
                      <Field
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="error"
                      />
                    </div>

                    <div className="form-group contact-forms-inputs">
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                      />
                    </div>

                    <div className="form-group contact-forms-inputs">
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        placeholder="Message"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="error"
                      />
                    </div>

                    <button type="button" class="btn btn-outline-light">
                      Send Message
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
