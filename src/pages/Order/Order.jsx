import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import GroupModal from 'components/GroupOrderModal/GroupOrderModal';
import SignUpModal from 'components/SignUpModal/SignUpModal';
import Address from 'components/Address/Address';
import Schedule from 'components/WorkingHours/Schedule';
import Products from 'components/ProductsList/Products';
import Cart from 'components/Cart/Cart';
import icons from '../../images/icons.svg';
import css from './Order.module.css';

const Order = () => {
  const [groupModalOpen, setGroupModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [carryoutModal, setCarryoutModal] = useState(false);
  const [announcement, setAnnouncement] = useState(false);

  const [availabilityModal, setAvailabilityModal] = useState(false);
  const [cart, setCart] = useState(false);

  return (
    <>
      <div className={css.container}>
        <div className={css.content}>
          <ul className={css.options}>
            <li>
              <button
                className={css.optionsBtn}
                type="button"
                onClick={() => setGroupModalOpen(true)}
              >
                Group Order
              </button>
            </li>
            <li>
              <button
                className={css.optionsBtn}
                type="button"
                onClick={() => setSignupModalOpen(true)}
              >
                Sign Up For Deals
              </button>
            </li>
          </ul>
          <ul className={css.detailsList}>
            <li>
              <h1 className={css.title}>The Angry Beaver Lodge</h1>
              <Address />
            </li>
            <li className={css.detailsItem}>
              <svg width={16} height={16}>
                <use href={`${icons}#clock`} />
              </svg>
              <button
                className={css.detailsBtn}
                onClick={() => setCarryoutModal(true)}
              >
                Carryout
              </button>
            </li>
            <li className={css.detailsItem}>
              <svg width={16} height={16}>
                <use href={`${icons}#up`} />
              </svg>
              <p>99% of 176 customers recommended</p>
            </li>
            <li className={css.detailsItem}>
              <svg width={16} height={16}>
                <use href={`${icons}#check`} />
              </svg>
              <p>Curbside Pickup Available</p>
            </li>
            <li className={css.detailsItem}>
              <svg width={16} height={16}>
                <use href={`${icons}#horn`} />
              </svg>
              <button
                className={css.detailsBtn}
                onClick={() => setAnnouncement(true)}
              >
                Announcement
              </button>
            </li>
            <li
              className={
                announcement
                  ? css.announcement
                  : `${css.announcement} ${css.hidden}`
              }
            >
              <button
                className={css.announcementBtn}
                onClick={() => setAnnouncement(false)}
              >
                <svg className={css.icon} width={16} height={16}>
                  <use href={`${icons}#close`} />
                </svg>
              </button>
              <p>CARRY OUT OUT TIMES MAY VARY</p>
            </li>
          </ul>
          <div className={css.availability}>
            <p>Start your carryout order.</p>
            <button onClick={() => setAvailabilityModal(true)}>
              Check Availability
            </button>
          </div>
          <Products />
        </div>
        {cart && <Cart mobileOpening={setCart} />}
        <div className={css.viewCartBtnWrapper}>
          <button className={css.viewCartBtn} onClick={() => setCart(true)}>
            <span>
              View cart <span>0</span>
            </span>
            <span>$0.00</span>
          </button>
        </div>
      </div>
      {groupModalOpen && (
        <Modal modalIsOpen={setGroupModalOpen}>
          <GroupModal />
        </Modal>
      )}
      {signupModalOpen && (
        <Modal modalIsOpen={setSignupModalOpen}>
          <SignUpModal />
        </Modal>
      )}
      {carryoutModal && (
        <Modal modalIsOpen={setCarryoutModal}>
          <Schedule />
        </Modal>
      )}
      {availabilityModal && (
        <Modal modalIsOpen={setAvailabilityModal}>
          <div>
            <h2>Pick And Order Type</h2>
            <p>Restaurant Location:</p>
            <span>Delivery</span>
            <span>Carryout</span>
            <button>Update</button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Order;
