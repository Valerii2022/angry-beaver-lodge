import { useEffect, useState } from 'react';
import css from './Products.module.css';
import { nanoid } from 'nanoid';
import { getProducts } from 'redux/operations';
import { getAllProducts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import icons from '../../images/icons.svg';
import Modal from 'components/Modals/Modal/Modal';
import Details from 'components/Modals/ProductDetailsModal/Details';

const Products = () => {
  const [productDetailsVisibility, setProductDetailsVisibility] =
    useState(false);
  const [openProductId, setOpenProductId] = useState('');
  const [detailsModal, setDetailsModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [productDetails, setProductDetails] = useState(null);

  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <div>
        {products && products.length !== 0 && (
          <div className={css.container}>
            <button
              className={css.openBtn}
              onClick={() =>
                setProductDetailsVisibility(!productDetailsVisibility)
              }
            >
              <span className={css.openIcon}>
                {productDetailsVisibility ? '-' : '+'}
              </span>
              <span className={css.openBtnText}>
                {productDetailsVisibility ? 'Collapse' : 'Expand'} Menu
              </span>
            </button>
            <ul>
              {products.map(({ title, id, description, items }) => {
                return (
                  <li key={id} className={css.listItem} id={id}>
                    <p
                      className={css.title}
                      onClick={() => {
                        if (openProductId === id) {
                          setOpenProductId('');
                        } else {
                          setOpenProductId(id);
                        }
                      }}
                    >
                      <span>{title}</span>
                      <button
                        style={{
                          transform:
                            openProductId === id ? 'rotate(180deg)' : '',
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
                        (productDetailsVisibility || openProductId === id) &&
                        items.map(el => {
                          return (
                            <li
                              key={nanoid(6)}
                              className={css.productItem}
                              onClick={() => {
                                setModalTitle(el.title);
                                setProductDetails(el);
                                setDetailsModal(true);
                              }}
                            >
                              <p>{el.title}</p>
                              <p className={css.productDescription}>
                                {el.description}
                              </p>
                              <p className={css.price}>${el.price}</p>
                            </li>
                          );
                        })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      {detailsModal && (
        <Modal modalIsOpen={setDetailsModal} title={modalTitle}>
          <Details item={productDetails} />
        </Modal>
      )}
    </>
  );
};

export default Products;
