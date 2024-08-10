import css from './ContactForm.module.css';

const Form = () => {
  return (
    <form className={css.form}>
      <label className={css.label}>
        Name *
        <input type="text" name="name" />
      </label>
      <label className={css.label}>
        Email *
        <input type="text" name="email" />
      </label>
      <label className={css.label}>
        Phone *
        <input type="text" name="phone" />
      </label>
      <label className={css.label}>
        Message *
        <textarea type="text" name="medsage" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
