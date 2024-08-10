import css from './Schedule.module.css';

const Schedule = () => {
    return (
      <div className={css.hoursWrapper}>
        <div>
          <h3 className={css.subtitle}>Business Hours</h3>
          <div className={css.hoursInner}>
            <div>
              <p className={css.text}>Mon - Sat:</p>
              <p>Sun:</p>
            </div>
            <div>
              <p className={css.text}>5:00 PM - 2:00 AM</p>
              <p>Closed</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className={css.subtitle}>Carryout Hours</h3>
          <div className={css.hoursInner}>
            <div>
              <p className={css.text}>Mon - Sat:</p>
              <p>Sun:</p>
            </div>
            <div>
              <p className={css.text}>5:00 PM - 10:30 AM</p>
              <p>Closed</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Schedule
