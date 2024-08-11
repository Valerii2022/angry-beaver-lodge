import icons from '../../images/icons.svg';
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
            <svg width={22} height={24}>
              <use href={`${icons}#road`} />
            </svg>
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
            <svg width={16} height={16}>
              <use href={`${icons}#phone`} />
            </svg>
            <p>(701) 742-3458</p>
          </a>
        </li>
      </ul>
    </address>
  );
};

export default Address;
