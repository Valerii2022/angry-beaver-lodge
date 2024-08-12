import css from './Cart.module.css';
import cards from '../../images/cards.png';

const Cart = ({ mobileOpening }) => {
  const cart = [];

  return (
    <div className={css.cart}>
      <div className={css.content}>
        {cart.length !== 0 ? (
          <div className={css.orderListWrapper}>
            <h2>Your Items</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rem non quo, repellendus voluptatem sint iure exercitationem laudantium soluta saepe magnam nisi ipsam sequi tenetur eius. Odio amet rem, cumque sit delectus, nisi tempore itaque a, quibusdam similique enim aliquam quas aut. Deserunt magni, inventore totam molestiae accusantium placeat laboriosam similique fugiat ullam, nostrum dolorum deleniti est a! Voluptate sit quis pariatur accusantium provident tenetur natus ullam est rem illo nesciunt veritatis hic minus quidem cumque amet voluptas ducimus nostrum velit, corporis aperiam sapiente iure. Magnam beatae quam consectetur distinctio dolore doloribus. Nulla molestias velit nostrum officiis ab corporis voluptatibus. Placeat accusantium omnis, eligendi debitis quia asperiores, magni ipsum, culpa sint nesciunt tenetur adipisci odit optio assumenda. Dolores cum in accusantium nesciunt possimus, harum obcaecati provident numquam ipsam nam excepturi sit animi facere, saepe quo! Cum sunt, ducimus cupiditate ab expedita minus praesentium animi porro reiciendis, dignissimos libero omnis quo ipsam alias quis, quos officiis provident inventore eum. Voluptatibus accusantium illum error nisi. Labore, voluptate rem exercitationem sed asperiores doloremque dolore? Eos possimus repellendus similique aperiam! Magnam quam ratione doloribus ex omnis nemo temporibus soluta aliquam nobis eum, beatae officia quidem nesciunt minima. Magnam odio corrupti ex asperiores perferendis!</p>
          </div>
        ) : (
          <div className={css.emptyWrapper}>
            <p className={css.emptyText}>Your cart is empty.</p>
            <img src={cards} alt="Logo" />
          </div>
        )}
      </div>
      <ul className={css.btnList}>
        <li>
          <button
            className={css.closeBtn}
            onClick={() => {
              document.body.classList.remove('lock');
              mobileOpening(false);
            }}
          >
            Close cart
          </button>
        </li>
        <li>
          <button className={css.checkoutBtn}>
            <span>Checkout</span> <span>$0.00</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
