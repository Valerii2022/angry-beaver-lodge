import { useEffect, useState } from 'react';
import Modal from 'components/Modals/Modal/Modal';
import GroupModal from 'components/Modals/GroupOrderModal/GroupOrderModal';
import SignUpModal from 'components/Modals/SignUpModal/SignUpModal';
import Address from 'components/Address/Address';
import Schedule from 'components/WorkingHours/Schedule';
import Products from 'components/ProductsList/Products';
import Cart from 'components/Cart/Cart';
import icons from '../../images/icons.svg';
import css from './Order.module.css';
import AvailabilityModal from 'components/Modals/AvailabilityModal/AvailabilityModal';
import { useLocation } from 'react-router-dom';

const Order = () => {
  const location = useLocation();

  const [groupModalOpen, setGroupModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [carryoutModal, setCarryoutModal] = useState(false);
  const [announcement, setAnnouncement] = useState(false);
  const [availabilityModal, setAvailabilityModal] = useState(false);
  const [cart, setCart] = useState(false);
  const [orderType, setOrderType] = useState('');
  const [successModal, setSuccessModal] = useState(false);
  const [workingDaysStatus, setWorkingDaysStatus] = useState(true);
  const [workingHoursStatus, setWorkingHoursStatus] = useState(true);
  const [date, setDate] = useState('');

  useEffect(() => {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();

    if (day === 0) {
      setDate(`${now.getMonth() + 2}/${now.getDate()}`);
      setWorkingDaysStatus(false);
    } else {
      setDate(`${now.getMonth() + 1}/${now.getDate()}`);
      setWorkingDaysStatus(true);
    }

    if (hours >= 2 && hours < 17) {
      setWorkingHoursStatus(false);
    } else {
      setWorkingHoursStatus(true);
    }
  }, []);

  useEffect(() => {
    setOrderType(localStorage.getItem('orderType'));
  }, []);

  useEffect(() => {
    setTimeout(() => setAnnouncement(true), 1000);
  }, []);

  useEffect(() => {
    if (location.state) {
      if (
        location.state.cart &&
        window.matchMedia('(max-width: 991px)').matches
      ) {
        document.body.classList.add('lock');
        setCart(true);
      }
    } else {
      setCart(false);
    }
  }, [location]);

  const handleChangeAvailability = type => {
    setOrderType(type);
    setAvailabilityModal(false);
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.content}>
          <ul className={css.options}>
            <li>
              <button
                className={css.optionsBtn}
                type="button"
                onClick={() => {
                  if (orderType) {
                    setGroupModalOpen(true);
                  } else {
                    setAvailabilityModal(true);
                  }
                }}
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
            <li className={css.addressItem}>
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
                {workingDaysStatus ? (
                  '5:00 PM - 2:00 AM'
                ) : (
                  <span className={css.warning}>Closed</span>
                )}
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
              <div
                className={
                  announcement
                    ? `${css.hidden} hidden`
                    : css.announcementWrapper
                }
              >
                <svg width={16} height={16}>
                  <use href={`${icons}#horn`} />
                </svg>
                <button
                  className={css.detailsBtn}
                  onClick={() => setAnnouncement(true)}
                >
                  Announcement
                </button>
              </div>
              <div
                className={
                  announcement ? css.announcement : `${css.hidden} hidden`
                }
              >
                <button
                  aria-label="Close announcement"
                  className={css.announcementBtn}
                  onClick={() => setAnnouncement(false)}
                >
                  <svg className={css.icon} width={16} height={16}>
                    <use href={`${icons}#close`} />
                  </svg>
                </button>
                <p>CARRY OUT OUT TIMES MAY VARY</p>
              </div>
            </li>
          </ul>
          <div className={css.availability}>
            <p className={css.availabilityTitle}>
              {workingHoursStatus ? (
                'Start your order.'
              ) : (
                <span className={css.warning}>
                  Closed until {workingDaysStatus ? 'Today' : 'Tomorrow'},{' '}
                  {date} 5:00 PM
                </span>
              )}
            </p>
            <button
              className={css.availabilityBtn}
              onClick={() => setAvailabilityModal(true)}
            >
              Check Availability
            </button>
          </div>
          <Products />
        </div>
        <div
          className={
            !cart ? `${css.cartHidden} ${css.cartWrapper}` : css.cartWrapper
          }
        >
          <Cart mobileOpening={setCart} />
        </div>
        <div className={css.viewCartBtnWrapper}>
          <button
            className={css.viewCartBtn}
            onClick={() => {
              document.body.classList.add('lock');
              setCart(true);
            }}
          >
            <span>
              View cart <span>0</span>
            </span>
            <span>$0.00</span>
          </button>
        </div>
      </div>
      {groupModalOpen && (
        <Modal modalIsOpen={setGroupModalOpen} title="Group Order">
          <GroupModal />
        </Modal>
      )}
      {signupModalOpen && (
        <Modal modalIsOpen={setSignupModalOpen} title="Sign Up For Deals">
          <SignUpModal
            modalIsOpen={setSignupModalOpen}
            setSuccessModal={setSuccessModal}
          />
        </Modal>
      )}
      {carryoutModal && (
        <Modal modalIsOpen={setCarryoutModal} title="Hours">
          <Schedule modal={true} />
        </Modal>
      )}
      {availabilityModal && (
        <Modal modalIsOpen={setAvailabilityModal} title="Pick And Order Type">
          <AvailabilityModal
            closeModal={handleChangeAvailability}
            setSuccessModal={setSuccessModal}
          />
        </Modal>
      )}
      {successModal && (
        <Modal modalIsOpen={setSuccessModal} title="Thank you!">
          <div className={css.modalWrapper}>
            <p>Thank you for your subscribe!</p>
            <p>Let`s be in touch!</p>
            <p>
              With best wishes, <span>Angry Beaver Lodge</span>!
            </p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Order;
