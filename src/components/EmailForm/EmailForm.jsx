import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { emailPattern } from 'Constants/patterns';
import Loader from 'components/Loader/Loader';
import icons from '../../images/icons.svg';
import css from './EmailForm.module.css';
import { updateOrder } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { leaveOrder } from 'redux/slices/orderSlice';

const EmailForm = ({ orderId, setCheckoutEmail, setCheckoutModalOpening }) => {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);

  const dispatch = useDispatch();

  const initialValue = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(emailPattern, 'Invalid email format')
      .required('Email is required'),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    setLoading(true);

    const order = {
      status: 'done',
      email: values.email,
    };
    const { payload } = await dispatch(updateOrder({ orderId, order }));
    if (typeof payload !== 'object') {
      setServerError(true);
    } else {
      resetForm();
      setSubmitting(false);
      setServerError(false);
      setCheckoutEmail(false);
      setCheckoutModalOpening(true);
      dispatch(leaveOrder());
    }
    setLoading(false);
  };

  const handleFieldChange = handleChange => e => {
    setServerError(false);
    handleChange(e);
  };

  return (
    <div className={css.form}>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={true}
      >
        {({ isSubmitting, errors, touched, handleChange }) => (
          <Form noValidate>
            <p className={css.text}>
              Enter your email to receive your order number please.
            </p>
            <label className={css.label}>
              <Field
                placeholder="Email"
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
            <div className={css.buttonWrapper}>
              {serverError && (
                <span className={css.errorMessage}>* Server error</span>
              )}
              <button
                style={{ borderColor: loading ? '#1072d3' : '' }}
                disabled={isSubmitting}
                type="submit"
                className={css.submitBtn}
              >
                {loading ? <Loader modal={true} /> : 'Checkout'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EmailForm;
