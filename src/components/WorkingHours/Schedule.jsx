import css from './Schedule.module.css';

const Schedule = ({ modal }) => {
  return (
    <div className={modal ? css.hoursModalWrapper : css.hoursWrapper}>
      <div>
        <h3 className={modal ? css.modalTitle : css.subtitle}>
          Business Hours
        </h3>
        <div className={modal ? css.hoursModalInner : css.hoursInner}>
          <div>
            <p className={css.text}>
              {modal ? 'Monday - Saturday' : 'Mon - Sat:'}
            </p>
            <p>{modal ? 'Sunday' : 'Sun:'}</p>
          </div>
          <div>
            <p className={modal ? css.modalText : css.text}>
              5:00 PM - 2:00 AM
            </p>
            <p className={modal ? css.modalText : ''}>Closed</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className={modal ? css.modalTitle : css.subtitle}>
          Carryout Hours
        </h3>
        <div className={modal ? css.hoursModalInner : css.hoursInner}>
          <div>
            <p className={css.text}>
              {modal ? 'Monday - Saturday' : 'Mon - Sat:'}
            </p>
            <p>{modal ? 'Sunday' : 'Sun:'}</p>
          </div>
          <div>
            <p className={modal ? css.modalText : css.text}>
              5:00 PM - 10:30 AM
            </p>
            <p className={modal ? css.modalText : ''}>Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
