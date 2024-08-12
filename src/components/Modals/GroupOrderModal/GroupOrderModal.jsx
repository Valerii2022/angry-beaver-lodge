import css from './GrouporderModal.module.css';

const GroupModal = () => {
  return (
    <div className={css.container}>
      <div>
        <p>Share this link with your guests</p>
        <p>
          Order with your team! You invite guests, they add their meals to the
          order, and you check out. It's that simple!
        </p>
        <label>
          <input type="text" />
          <button>icon</button>
        </label>
      </div>
      <div>
        <p>$30.00 order limit per guest</p>
        <button>change</button>
      </div>
      <div>
        <p>
          Start a group order, then share the link provided. You can continue
          adding food to your cart. When your guests submit their order, you
          will see their items in your cart.
        </p>
        <p>
          If you need to invite more people you can always open this window
          again.
        </p>
      </div>
      <button>Help</button>
    </div>
  );
};

export default GroupModal;
