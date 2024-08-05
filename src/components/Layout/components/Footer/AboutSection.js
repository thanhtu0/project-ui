import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const links = {
    left: [
        { to: '/', text: 'About us' },
        { to: '/', text: "We'r hiring" },
        { to: '/', text: 'Support' },
        { to: '/', text: 'Find store' },
        { to: '/', text: 'Shipment' },
    ],
    right: [
        { to: '/', text: 'Payment' },
        { to: '/', text: 'Gift card' },
        { to: '/', text: 'Return' },
        { to: '/', text: 'Help' },
    ],
};

const AboutSection = () => (
    <div className={cx('footer-section')}>
        <h3>About</h3>
        <div className={cx('about-section')}>
            {Object.entries(links).map(([key, items]) => (
                <ul key={key} className={cx(`about-${key}`)}>
                    {items.map(({ to, text }) => (
                        <li key={text}>
                            <Link to={to}>{text}</Link>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    </div>
);

export default AboutSection;
