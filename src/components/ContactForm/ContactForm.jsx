import { emailPattern, namePattern, phonePattern } from 'Constants/patterns';
import icons from '../../images/icons.svg';
import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from 'components/Modals/Modal/Modal';
import { useState } from 'react';
import Loader from 'components/Loader/Loader';

const ContactForm = () => {
  const [successModal, setSuccessModal] = useState(false);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    console.log('Form data', values);
    setName(values.name);
    setTimeout(() => {
      setLoading(false);
      setSuccessModal(true);
      resetForm();
      setSubmitting(false);
    }, 4000);
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
              style={{ borderColor: loading ? '#1072d3' : '' }}
              disabled={isSubmitting}
              type="submit"
              className={css.submitBtn}
            >
              {loading ? <Loader /> : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
      {successModal && (
        <Modal modalIsOpen={setSuccessModal} title="Thank you!">
          <div className={css.modalWrapper}>
            <p>
              Thank you for your request, <span>{name}</span>!{' '}
            </p>
            <p>We will contact you shortly!</p>
            <p>
              With best wishes, <span>Angry Beaver Lodge</span>!
            </p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ContactForm;
