import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getItems, getOrderType } from 'redux/selectors';
import Modal from 'components/Modals/Modal/Modal';
import GroupModal from 'components/Modals/GroupOrderModal/GroupOrderModal';
import SignUpModal from 'components/Modals/SignUpModal/SignUpModal';
import Address from 'components/Address/Address';
import Schedule from 'components/WorkingHours/Schedule';
import Products from 'components/ProductsList/Products';
import Cart from 'components/Cart/Cart';
import AvailabilityModal from 'components/Modals/AvailabilityModal/AvailabilityModal';
import icons from 'images/icons.svg';
import css from './Order.module.css';
import JoinGroupOrderModal from 'components/Modals/JoinGroupOrderModal/JoinGroupOrder';

const Order = () => {
  const location = useLocation();
  const currentOrderType = useSelector(getOrderType);
  const cartItems = useSelector(getItems);
  const { id } = useParams();

  const totalCartPrice = cartItems.reduce((acc, item) => {
    return acc + parseFloat(item.price);
  }, 0);

  const [groupModalOpen, setGroupModalOpen] = useState(false);
  const [groupModalPreOpen, setGroupModalPreOpen] = useState(false);
  const [productModalPreOpen, setProductModalPreOpen] = useState(false);
  const [productModal, setProductModal] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [carryoutModal, setCarryoutModal] = useState(false);
  const [announcement, setAnnouncement] = useState(false);
  const [availabilityModal, setAvailabilityModal] = useState(false);
  const [cart, setCart] = useState(false);
  const [orderType, setOrderType] = useState('none');
  const [successModal, setSuccessModal] = useState(false);
  const [workingDaysStatus, setWorkingDaysStatus] = useState(true);
  const [workingHoursStatus, setWorkingHoursStatus] = useState(true);
  const [sundayHours, setSundayHours] = useState(true);
  const [date, setDate] = useState('');
  const [joinGroupModalOpening, setJoinGroupModalOpening] = useState(false);

  useEffect(() => {
    if (id) {
      setJoinGroupModalOpening(true);
    }
  }, [id]);

  useEffect(() => {
    setOrderType(currentOrderType);
  }, [currentOrderType]);

  useEffect(() => {
    const now = new Date();
    const utcHour = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();
    const hours = (utcHour - 5 + 24) % 24;
    const day = now.getUTCDay();

    if (day === 0) {
      setDate(`${now.getMonth() + 2}/${now.getDate()}`);
      setWorkingDaysStatus(false);
    } else {
      setDate(`${now.getMonth() + 1}/${now.getDate()}`);
      setWorkingDaysStatus(true);
    }

    const sundayHours = hours >= 0 && hours < 2;

    if (sundayHours) {
      setSundayHours(false);
    } else {
      setSundayHours(true);
    }

    const isWithinTimeRange =
      (hours > 17 || (hours === 17 && utcMinutes >= 0)) &&
      (hours < 22 || (hours === 22 && utcMinutes <= 30));

    if (!isWithinTimeRange) {
      setWorkingHoursStatus(false);
    } else {
      setWorkingHoursStatus(true);
    }
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

  const handleGroupOrderModalLogic = () => {
    setGroupModalPreOpen(false);
    setGroupModalOpen(true);
  };

  const handleDetailsModalOpening = () => {
    setProductModalPreOpen(false);
    setProductModal(true);
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
                    setGroupModalPreOpen(true);
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
                  <span className={css.warning}>
                    {sundayHours ? 'Closed' : 'Closed for Delivery/Carryout'}
                  </span>
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
                <span
                  className={css.warning}
                  onClick={() => setAvailabilityModal(true)}
                >
                  Closed until {workingDaysStatus ? 'Today' : 'Tomorrow'},{' '}
                  {date} 5:00 PM
                </span>
              )}
            </p>
            {workingHoursStatus ? (
              <button
                className={css.availabilityBtn}
                onClick={() => setAvailabilityModal(true)}
              >
                Check Availability
              </button>
            ) : (
              <div className={css.closedMenu}>
                <p>{`Carryout / Delivery menu opens at ${date} 5:00 PM`}</p>
              </div>
            )}
          </div>
          <Products
            availability={orderType}
            setPreOpen={setProductModalPreOpen}
            productModal={productModal}
            setProductModal={setProductModal}
          />
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
              View cart <span>{cartItems.length}</span>
            </span>
            <span>${(totalCartPrice * 1.15).toFixed(2)}</span>
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
      {(availabilityModal || groupModalPreOpen || productModalPreOpen) && (
        <Modal
          modalIsOpen={
            availabilityModal
              ? setAvailabilityModal
              : groupModalPreOpen
              ? setGroupModalPreOpen
              : setProductModalPreOpen
          }
          title="Pick And Order Type"
        >
          <AvailabilityModal
            closeModal={handleChangeAvailability}
            groupOrder={groupModalPreOpen}
            productDetails={productModalPreOpen}
            closeGroupModal={handleGroupOrderModalLogic}
            closeDetailsModal={handleDetailsModalOpening}
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
      {joinGroupModalOpening && (
        <Modal
          modalIsOpen={setJoinGroupModalOpening}
          title="Let`s order together"
          orderId={true}
        >
          <JoinGroupOrderModal
            modalIsOpen={setJoinGroupModalOpening}
            orderId={true}
          />
        </Modal>
      )}
    </>
  );
};

export default Order;
