import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const PaymentSection = () => (
    <div className={cx('footer-section')}>
        <h3>We accept</h3>
        <ul className={cx('payment-methods')}>
            <li>
                <Link to="/">
                    <FontAwesomeIcon icon={faCreditCard} className={cx('icon')} />
                    Amex
                </Link>
            </li>
            <li>
                <Link to="/">
                    <FontAwesomeIcon icon={faCreditCard} className={cx('icon')} />
                    Credit card
                </Link>
            </li>
        </ul>
    </div>
);

export default PaymentSection;
