import css from './Order.module.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'redux/operations';
import { getAllProducts } from 'redux/selectors';

const Order = () => {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      {products ? (
        <ul>
          {products.map(({ title, id, description }) => {
            return (
              <li key={id}>
                <p>{title}</p>
                <p>{description}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Sorry! We have some technical problems. Try again later!</p>
      )}
    </div>
  );
};

export default Order;
