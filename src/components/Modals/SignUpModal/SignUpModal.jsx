import css from './SignUpModal.module.css';

const SignUpModal = () => {
  return (
    <div className={css.container}>
      <p>
        Sign up for future deals from <span>The Angry Beaver Lodge.</span> You
        can opt-out of email promotions at any time.
      </p>
      <p>*All fields are required.</p>
      <form>
        <label>
          <input type="text" placeholder="First Name" />
        </label>
        <label>
          <input type="text" placeholder="Last Name" />
        </label>
        <label>
          <input type="email" placeholder="Email" />
        </label>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpModal;
