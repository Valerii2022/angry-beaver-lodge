import { useEffect, useState } from 'react';
import css from './Products.module.css';
import { nanoid } from 'nanoid';
import { getProducts } from 'redux/operations';
import { getAllProducts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import icons from '../../images/icons.svg';

const Products = () => {
  const [productDetails, setProductDetails] = useState(false);
  const [openProductId, setOpenProductId] = useState('');

  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      {products && products.length !== 0 ? (
        <div className={css.container}>
          <button
            className={css.openBtn}
            onClick={() => setProductDetails(!productDetails)}
          >
            <span className={css.openIcon}>{productDetails ? '-' : '+'}</span>
            <span className={css.openBtnText}>
              {productDetails ? 'Collapse' : 'Expand'} Menu
            </span>
          </button>
          <ul>
            {products.map(({ title, id, description, items }) => {
              return (
                <li
                  key={id}
                  className={css.listItem}
                  id={id}
                  onClick={() => {
                    if (openProductId === id) {
                      setOpenProductId('');
                    } else {
                      setOpenProductId(id);
                    }
                  }}
                >
                  <p className={css.title}>
                    <span>{title}</span>
                    <button
                      style={{
                        transform: openProductId === id ? 'rotate(180deg)' : '',
                      }}
                      className={css.titleBtn}
                    >
                      <svg width={20} height={20} className={css.icon}>
                        <use href={`${icons}#arrow`} />
                      </svg>
                    </button>
                  </p>
                  {description && (
                    <p className={css.description}>{description}</p>
                  )}
                  <ul className={css.productList}>
                    {items &&
                      (productDetails || openProductId === id) &&
                      items.map(el => {
                        return (
                          <li key={nanoid(6)} className={css.productItem}>
                            <p>{el.title}</p>
                            <p>{el.description}</p>
                            <p>${el.price}</p>
                          </li>
                        );
                      })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p className={css.errorText}>
          Sorry! We have some technical problems. Try again later!
        </p>
      )}
    </div>
  );
};

export default Products;
