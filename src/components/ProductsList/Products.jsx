import { useEffect, useState } from 'react';
import css from './Products.module.css';
import { nanoid } from 'nanoid';
import { getProducts } from 'redux/operations';
import { getAllProducts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {
  const [productDetails, setProductDetails] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      {products && products.length !== 0 ? (
        <>
          <button onClick={() => setProductDetails(!productDetails)}>
            {productDetails ? 'Collapse' : 'Expand'} Menu
          </button>
          <ul>
            {products.map(({ title, id, description, items }) => {
              return (
                <li key={id}>
                  <p>{title}</p>
                  <p>{description}</p>
                  <ul>
                    {items &&
                      productDetails &&
                      items.map(el => {
                        return (
                          <li key={nanoid(6)}>
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
        </>
      ) : (
        <p className={css.errorText}>
          Sorry! We have some technical problems. Try again later!
        </p>
      )}
    </div>
  );
};

export default Products;
