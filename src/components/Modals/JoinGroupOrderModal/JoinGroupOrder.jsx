import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { getGuestsOrder } from 'redux/operations';
import { namePattern } from 'Constants/patterns';
import Loader from 'components/Loader/Loader';
import css from './JoinGroupOrder.module.css';

const JoinGroupOrderModal = ({ modalIsOpen, orderId }) => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValue = {
    name: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(namePattern, '* Only latin is allowed')
      .min(3, '* Minimum 3 characters')
      .max(20, '* Maximum 20 characters')
      .required('* Name is required'),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    const name = values.name;
    setLoading(true);
    await dispatch(getGuestsOrder({ orderId, name }));
    navigate('/order');
    setLoading(false);
    setSubmitting(false);
    modalIsOpen(false);
  };

  const handleFieldChange = handleChange => e => {
    handleChange(e);
  };

  return (
    <div className={css.container}>
      <p className={css.message}>
        You are invited to join a group order, paid for by the group`s
        organizer.
      </p>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={true}
      >
        {({ isSubmitting, errors, touched, handleChange }) => (
          <Form noValidate>
            <label className={css.label}>
              <Field
                placeholder="Type your name"
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
            <div className={css.bottomWrapper}>
              <a
                href="https://support.menufy.com/hc/en-us/articles/360044057712-Group-Ordering"
                target="_blank"
                rel="noopener noreferrer"
                className={css.helpBtn}
              >
                <span className={css.helpIcon}>?</span>
                <span>Help</span>
              </a>
            </div>
            <div className={css.buttonsWrapper}>
              <button
                disabled={isSubmitting}
                type="submit"
                className={css.button}
              >
                {loading ? <Loader modal /> : 'Join Order'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default JoinGroupOrderModal;
