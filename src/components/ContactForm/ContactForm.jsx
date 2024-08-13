import { emailPattern, namePattern, phonePattern } from 'Constants/patterns';
import icons from '../../images/icons.svg';
import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from 'components/Modals/Modal/Modal';
import { useState } from 'react';

const ContactForm = () => {
  const [successModal, setSuccessModal] = useState(false);
  const [name, setName] = useState('');

  const initialValue = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(namePattern, 'Only latin is allowed')
      .min(3, 'Minimum 3 characters')
      .max(20, 'Maximum 20 characters')
      .required('Name is required'),
    email: Yup.string()
      .matches(emailPattern, 'Invalid email format')
      .required('Email is required'),
    phone: Yup.string()
      .matches(phonePattern, 'Format XXX-XXX-XXXX')
      .required('Phone is required'),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Form data', values);
    setName(values.name);
    setSuccessModal(true);
    resetForm();
    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={true}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form noValidate>
            <label className={css.label}>
              Name *
              <Field
                type="text"
                name="name"
                className={
                  errors.name && touched.name
                    ? `${css.input} ${css.noIconInput} ${css.inputError}`
                    : `${css.input} ${css.noIconInput}`
                }
              />
              <ErrorMessage
                name="name"
                component="span"
                className={css.error}
              />
            </label>
            <label className={css.label}>
              Email *
              <Field
                type="email"
                name="email"
                className={
                  errors.email && touched.email
                    ? `${css.input} ${css.inputError}`
                    : css.input
                }
              />
              <ErrorMessage
                name="email"
                component="span"
                className={css.error}
              />
              <div className={css.iconWrapper}>
                <svg width={16} height={16}>
                  <use href={`${icons}#email`} />
                </svg>
              </div>
            </label>
            <label className={css.label}>
              Phone *
              <Field
                type="text"
                name="phone"
                className={
                  errors.phone && touched.phone
                    ? `${css.input} ${css.inputError}`
                    : css.input
                }
              />
              <ErrorMessage
                name="phone"
                component="span"
                className={css.error}
              />
              <div className={css.iconWrapper}>
                <svg width={16} height={16}>
                  <use href={`${icons}#phone`} />
                </svg>
              </div>
            </label>
            <label className={css.label}>
              Message *
              <Field
                as="textarea"
                type="text"
                name="message"
                className={css.textarea}
              />
            </label>
            <button
              disabled={isSubmitting}
              type="submit"
              className={css.submitBtn}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {successModal && (
        <Modal modalIsOpen={setSuccessModal} title="Thank you!">
          <p>Thank you for your request, {name}! </p>
          <p>We will contact you shortly!</p>
          <p>With best wishes, Angry Beaver Lodge!</p>
        </Modal>
      )}
    </>
  );
};

export default ContactForm;
