import icons from '../../images/icons.svg';
import css from './Cart.module.css';

const CartDetails = ({
  name,
  items,
  guestId,
  setRemoveItemDetails,
  setItemRemoveModal,
}) => {
  if (name === '') {
    const groupedItems = items.reduce((acc, item) => {
      const name = item.guestName || 'Your Items';
      if (!acc[name]) acc[name] = [];
      acc[name].push(item);
      return acc;
    }, {});

    return (
      <>
        {Object.entries(groupedItems).map(([guestName, items]) => {
          let counter = 0;
          return (
            <div key={guestName} className={css.cartListWrapper}>
              <h2 className={css.title}>{guestName}</h2>
              <ul className={css.cartList}>
                {items.map(el => {
                  counter += el.price;
                  return (
                    <li key={el.id} className={css.cartItem}>
                      <div className={css.itemTitleWrapper}>
                        <span
                          className={css.itemTitle}
                        >{`${el.quantity} x ${el.title}`}</span>
                        <span>${parseFloat(el.price).toFixed(2)}</span>

                        <svg
                          id={el.id}
                          className={css.icon}
                          width={16}
                          height={16}
                          onClick={e => {
                            setRemoveItemDetails(el);
                            setItemRemoveModal(true);
                          }}
                        >
                          <use href={`${icons}#remove`} />
                        </svg>
                      </div>
                      {el.instructions && (
                        <ul>
                          <li className={css.instructions}>
                            + Special Instructions
                          </li>
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
              {guestName !== 'Your Items' && (
                <p className={css.guestTotalText}>
                  Guest Total: ${counter.toFixed(2)}
                </p>
              )}
            </div>
          );
        })}
      </>
    );
  } else {
    const filteredItems = items.filter(el => el.guestId === guestId);

    if (filteredItems.length > 0) {
      return (
        <>
          <h2 className={css.title}>Your Items</h2>
          <ul className={css.cartList}>
            {filteredItems.map(el => (
              <li key={el.id} className={css.cartItem}>
                <div className={css.itemTitleWrapper}>
                  <span
                    className={css.itemTitle}
                  >{`${el.quantity} x ${el.title}`}</span>
                  <span>${parseFloat(el.price).toFixed(2)}</span>

                  <svg
                    id={el.id}
                    className={css.icon}
                    width={16}
                    height={16}
                    onClick={e => {
                      setRemoveItemDetails(el);
                      setItemRemoveModal(true);
                    }}
                  >
                    <use href={`${icons}#remove`} />
                  </svg>
                </div>
                {el.instructions && (
                  <ul>
                    <li className={css.instructions}>+ Special Instructions</li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </>
      );
    } else {
      return <p className={css.emptyText}>No items yet...</p>;
    }
  }
};

export default CartDetails;
