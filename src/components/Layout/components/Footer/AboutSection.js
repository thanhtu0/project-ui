import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const AboutSection = () => (
    <div className={cx('footer-section')}>
        <h3>About</h3>
        <div className={cx('about-section')}>
            <ul className={cx('about-left')}>
                <li>
                    <Link to="/">About us</Link>
                </li>
                <li>
                    <Link to="/">We'r hiring</Link>
                </li>
                <li>
                    <Link to="/">Support</Link>
                </li>
                <li>
                    <Link to="/">Find store</Link>
                </li>
                <li>
                    <Link to="/">Shipment</Link>
                </li>
            </ul>
            <ul className={cx('about-right')}>
                <li>
                    <Link to="/">Payment</Link>
                </li>
                <li>
                    <Link to="/">Gift card</Link>
                </li>
                <li>
                    <Link to="/">Return</Link>
                </li>
                <li>
                    <Link to="/">Help</Link>
                </li>
            </ul>
        </div>
    </div>
);

export default AboutSection;
