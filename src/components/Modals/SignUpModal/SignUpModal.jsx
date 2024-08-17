import { emailPattern, namePattern } from 'Constants/patterns';
import css from './SignUpModal.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSubscribe } from 'redux/operations';
import Modal from '../Modal/Modal';
import icons from '../../../images/icons.svg';
import Loader from 'components/Loader/Loader';

const SignUpModal = () => {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

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
      .required('First name is required'),
    lastName: Yup.string()
      .matches(namePattern, 'Only latin is allowed')
      .min(3, 'Minimum 3 cheracters')
      .max(20, 'Maximum 20 characters')
      .required('Last name is required'),
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
      setFirstName(values.firstName);
      setLastName(values.lastName);
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
          validateOnChangetrue
        >
          {({ isSubmitting, error, touched, handleChange }) => {
            <Form noValidate>
              <label className={css.label}>
                <Field
                  onChange={handleFieldChange(handleChange)}
                  type="text"
                  name="firstName"
                />
                <ErrorMessage name="firstName" component="span" />
                <div>
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
                />
                <ErrorMessage name="lastName" component="span" />
                <div>
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
                />
                <ErrorMessage name="email" component="span" />
                <div>
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
                  {loading ? <Loader /> : 'Submit'}
                  Submit
                </button>
              </div>
              {serverError && <span>Server error</span>}
            </Form>;
          }}
        </Formik>
      </div>
      {successModal && (
        <Modal modalIsOpen={setSuccessModal} title="Thank you!">
          <div className={css.modalWrapper}>
            <p>
              Thank you for your subscribe, <span>{(firstName, lastName)}</span>
              !{' '}
            </p>
            <p>Let`s be in touch!</p>
            <p>
              With best wishes, <span>Angry Beaver Lodge</span>!
            </p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SignUpModal;
