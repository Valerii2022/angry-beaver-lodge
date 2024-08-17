import { emailPattern, namePattern } from 'Constants/patterns';
import css from './SignUpModal.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSubscribe } from 'redux/operations';
import icons from '../../../images/icons.svg';
import Loader from 'components/Loader/Loader';

const SignUpModal = ({ modalIsOpen, setSuccessModal }) => {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);

  const dispatch = useDispatch();

  const initialValue = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .matches(namePattern, 'Only latin is allowed')
      .min(3, 'Minimum 3 cheracters')
      .max(20, 'Maximum 20 characters')
      .required('First Name is required'),
    lastName: Yup.string()
      .matches(namePattern, 'Only latin is allowed')
      .min(3, 'Minimum 3 cheracters')
      .max(20, 'Maximum 20 characters')
      .required('Last Name is required'),
    email: Yup.string()
      .matches(emailPattern, 'Invalid email format')
      .required('Email is required'),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    setLoading(true);
    const { payload } = await dispatch(addSubscribe(values));
    if (typeof payload !== 'object') {
      setServerError(true);
    } else {
      modalIsOpen(false);
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
      <div className={css.container}>
        <p className={css.text}>
          Sign up for future deals from <span>The Angry Beaver Lodge.</span> You
          can opt-out of email promotions at any time.
        </p>
        <p className={css.subText}>* All fields are required.</p>

        <Formik
          initialValues={initialValue}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnChange={true}
        >
          {({ isSubmitting, errors, touched, handleChange }) => (
            <Form noValidate>
              <label className={css.label}>
                <Field
                  onChange={handleFieldChange(handleChange)}
                  type="text"
                  name="firstName"
                  className={
                    errors.firstName && touched.firstName
                      ? `${css.input} ${css.inputError}`
                      : `${css.input}`
                  }
                  placeholder="First Name"
                />
                <ErrorMessage
                  name="firstName"
                  component="span"
                  className={css.error}
                />
                <div className={css.iconWrapper}>
                  <svg width={16} height={16}>
                    <use href={`${icons}#user`} />
                  </svg>
                </div>
              </label>
              <label className={css.label}>
                <Field
                  onChange={handleFieldChange(handleChange)}
                  type="text"
                  name="lastName"
                  className={
                    errors.lastName && touched.lastName
                      ? `${css.input} ${css.inputError}`
                      : `${css.input}`
                  }
                  placeholder="LastName"
                />
                <ErrorMessage
                  name="lastName"
                  component="span"
                  className={css.error}
                />
                <div className={css.iconWrapper}>
                  <svg width={16} height={16}>
                    <use href={`${icons}#user`} />
                  </svg>
                </div>
              </label>
              <label className={css.label}>
                <Field
                  onChange={handleFieldChange(handleChange)}
                  type="email"
                  name="email"
                  className={
                    errors.email && touched.email
                      ? `${css.input} ${css.inputError}`
                      : `${css.input}`
                  }
                  placeholder="Email"
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
              <div className={css.buttonWrapper}>
                <button
                  style={{ borderColor: loading ? '#1072d3' : '' }}
                  disabled={isSubmitting}
                  type="submit"
                  className={css.submitBtn}
                >
                  {loading ? <Loader modal={true} /> : 'Sign Up'}
                </button>
              </div>
              {serverError && (
                <span className={css.errorMessage}>Server error</span>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default SignUpModal;
