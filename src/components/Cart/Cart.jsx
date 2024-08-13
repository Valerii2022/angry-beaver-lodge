import css from './Cart.module.css';
import cards from '../../images/cards.png';

const Cart = ({ mobileOpening }) => {
  const cart = [1];

  return (
    <div className={css.cart}>
      <div className={css.content}>
        {cart.length !== 0 ? (
          <div className={css.orderListWrapper}>
            <h2>Your Items</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              enim numquam recusandae soluta autem commodi voluptates asperiores
              deserunt ea. Debitis, officia modi! Enim quia harum optio
              obcaecati voluptas illum, laboriosam nisi nobis odit unde neque,
              tempora perferendis modi in velit? Cupiditate eius ad omnis ex sed
              eum ipsum, error sequi deserunt voluptatum ratione eaque
              reiciendis impedit quasi nam nemo, doloribus quae cum, odio
              consectetur excepturi? Provident unde tempora inventore libero
              consequatur dolore cupiditate vel veniam eligendi consectetur ea
              illo nihil quisquam, expedita praesentium odio accusantium rem ab
              aperiam iste reiciendis harum iure molestias. Inventore eos maxime
              enim, aut dolorum laudantium magnam cumque nam sunt numquam
              adipisci facilis rem, sed et voluptate harum libero autem ad
              delectus! Nam quaerat esse libero tempore! Eum velit nobis facere,
              sit sed ducimus laboriosam deserunt officia illo libero
              praesentium ea asperiores consequuntur nesciunt quam corporis cum
              aperiam ad amet quisquam adipisci aliquam. Error sapiente saepe
              commodi reprehenderit ea delectus esse facere suscipit voluptate
              voluptatibus. Ab adipisci mollitia ipsum expedita, odit quis sit
              voluptas eum quam assumenda ratione amet id totam maiores eius
              nulla laudantium, maxime nemo commodi. Est vel modi explicabo
              aliquam deleniti dolorem, velit dicta ab quia ipsam rem earum
              voluptatibus optio repudiandae voluptatem a rerum aut iste quo
              molestias commodi sapiente! Qui labore libero, quaerat, modi
              pariatur dolorum commodi consectetur vel deleniti voluptate nobis
              aliquid blanditiis neque illo quasi, cumque similique. Ex eum
              quibusdam quo praesentium dignissimos error obcaecati saepe
              voluptatibus? Nostrum minima mollitia aliquam eveniet accusantium
              ipsum modi eos itaque a corrupti sequi molestias tenetur dolor
              debitis eum nisi laudantium hic in, possimus suscipit et?
              Accusamus illo, beatae labore veniam vero asperiores, voluptatem
              reprehenderit fugit et, temporibus accusantium tenetur odit quidem
              ratione magni odio pariatur rerum corrupti! Quibusdam omnis
              accusamus eveniet recusandae deleniti velit doloremque adipisci.
              Dolorum, consequatur debitis quos non vero officiis, placeat eius
              necessitatibus maxime atque accusamus laboriosam, recusandae nobis
              inventore delectus modi rerum blanditiis at commodi quidem
              assumenda. Dolorem blanditiis aliquam neque quo a explicabo
              aspernatur, provident enim possimus cupiditate nemo adipisci
              necessitatibus dignissimos illum molestiae atque nulla vitae minus
              eligendi odit doloribus modi error? Inventore consequuntur
              voluptatibus minus molestias dolores nobis. Dolorem quibusdam illo
              expedita modi vel reiciendis nam. Maiores cum vel totam excepturi
              error, iure quam in perferendis non nobis recusandae ullam soluta
              facere optio omnis voluptatibus nisi quos nulla neque animi. Quam
              repellat commodi doloribus amet! Fuga, quod non. Provident
              obcaecati esse harum, sequi beatae eveniet recusandae molestiae
              amet minima voluptates iste dolor blanditiis, aut deserunt aliquam
              sed sapiente, voluptatibus corporis tempore distinctio dolorum qui
              voluptate similique? Ratione tenetur ea asperiores consectetur
              consequuntur libero quam qui quos? Voluptate error in vel, vero
              non repudiandae rem corporis, quod debitis ab accusantium dolor
              illo tenetur eius? Eaque architecto at beatae laboriosam aliquam
              placeat veritatis modi libero eum commodi unde quidem doloribus
              perferendis molestiae saepe adipisci dignissimos consectetur sint
              consequuntur, fugit quos sapiente incidunt iste quibusdam! Eum ex
              saepe voluptatem odit sint quisquam ratione aspernatur!
              Perspiciatis aliquid adipisci corrupti fugiat. Repellat, animi
              doloremque. Magni ratione reprehenderit consectetur quo fugiat?
            </p>
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
            <span>Submit Order</span> <span>$0.00</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
