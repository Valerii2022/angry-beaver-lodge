import css from './Contacts.module.css';
import Title from 'components/Title/Title';
import Address from 'components/Address/Address';
import Schedule from 'components/WorkingHours/Schedule';

const Contacts = () => {
  return (
    <section className={css.contacts}>
      <div className={css.contactInner}>
        <div className={css.contactsInfo}>
          <div className={css.titleWrapper}>
            <Title title="The Angry Beaver Lodge" />
          </div>
          <p className={css.contactDescription}>
            At The Angry Beaver Lodge, you can find a variety of American
            cuisine such as sandwiches, burgers, salads, steaks, and more. We
            are conveniently located on 88th St and 4th St, near Dickey County
            Heritage Center. Order online for carryout!
          </p>
          <h3 className={css.subtitle}>Cuisines</h3>
          <ul className={css.benefitsList}>
            <li>American</li>
            <li>Hamburgers</li>
            <li>Sandwiches</li>
            <li>Steak</li>
          </ul>
          <Address />
          <Schedule />
        </div>
        <div className={css.mapWrapper}></div>
      </div>
    </section>
  );
};

export default Contacts;
