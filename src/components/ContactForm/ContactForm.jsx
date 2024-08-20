import { emailPattern, namePattern, phonePattern } from 'Constants/patterns';
import icons from '../../images/icons.svg';
import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from 'components/Modals/Modal/Modal';
import { useState } from 'react';
import Loader from 'components/Loader/Loader';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const [successModal, setSuccessModal] = useState(false);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);

  const dispatch = useDispatch();

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
    message: Yup.string()
      .min(10, 'Minimum 10 characters')
      .max(200, 'Maximum 200 characters')
      .required('Message is required'),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    setLoading(true);
    const { payload } = await dispatch(addContact(values));
    if (typeof payload !== 'object') {
      setServerError(true);
    } else {
      setName(values.name);
      setSuccessModal(true);
      resetForm();
      setSubmitting(false);
      setServerError(false);
    }
    setLoading(false);
  };

  const handleFieldChange = handleChange => e => {
    setServerError(false);
    handleChange(e);
  };

  return (
    <>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={true}
      >
        {({ isSubmitting, errors, touched, handleChange }) => (
          <Form noValidate>
            <label className={css.label}>
              Name *
              <Field
                onChange={handleFieldChange(handleChange)}
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
                onChange={handleFieldChange(handleChange)}
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
                onChange={handleFieldChange(handleChange)}
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
                onChange={handleFieldChange(handleChange)}
                as="textarea"
                type="text"
                name="message"
                className={
                  errors.message && touched.message
                    ? `${css.textarea} ${css.inputError}`
                    : css.textarea
                }
              />
              <ErrorMessage
                name="message"
                component="span"
                className={css.error}
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
            {serverError && (
              <span className={css.errorMessage}>Server error</span>
            )}
          </Form>
        )}
      </Formik>
      {successModal && (
        <Modal modalIsOpen={setSuccessModal} title="Thank You!">
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
