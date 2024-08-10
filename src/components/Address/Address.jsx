import { ReactComponent as RoadSign } from '../../images/road.svg';
import { ReactComponent as Phone } from '../../images/phone.svg';

import css from './Address.module.css';

const Address = () => {
  return (
    <address>
      <ul className={css.addressList}>
        <li>
          <a
            className={css.addressLink}
            href="https://maps.app.goo.gl/N7b2EEKPf1eH4ogJ6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RoadSign width={22} height={24} />
            <p>404 MAIN AVE </p>
            <p>OAKES, ND 58474</p>
          </a>
        </li>

        <li>
          <a
            className={css.addressLink}
            href="tel:+7017423458"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone width={16} height={16} />
            <p>(701) 742-3458</p>
          </a>
        </li>
      </ul>
    </address>
  );
};

export default Address;
