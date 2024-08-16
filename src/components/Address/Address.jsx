import icons from '../../images/icons.svg';
import css from './Address.module.css';

const Address = ({ modal }) => {
  return (
    <address>
      <ul>
        <li>
          <a
            style={{ justifyContent: modal ? 'center' : '' }}
            className={css.addressLink}
            href="https://maps.app.goo.gl/N7b2EEKPf1eH4ogJ6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width={22} height={24} className={css.addressIcon}>
              <use href={`${icons}#road`} />
            </svg>
            <div className={css.textWrapper}>
              {modal ? (
                <>
                  <p>404 MAIN AVE OAKES, ND 58474</p>
                </>
              ) : (
                <>
                  <p>404 MAIN AVE </p>
                  <p>OAKES, ND 58474</p>
                </>
              )}
            </div>
          </a>
        </li>
        {!modal && (
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
        )}
      </ul>
    </address>
  );
};

export default Address;
