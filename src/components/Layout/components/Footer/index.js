import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

import AboutSection from './AboutSection';
import StoreSection from './StoreSection';
import PaymentSection from './PaymentSection';
import SocialSection from './SocialSection';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <footer className={cx('footer')}>
            <Link to="/" className={cx('footer-logo')}>
                <h2>cordes.</h2>
            </Link>
            <div className={cx('footer-container')}>
                <AboutSection />
                <StoreSection />
                <PaymentSection />
                <SocialSection />
            </div>
            <div className={cx('footer-bottom')}>
                <p>© 2021 cordes. retail Ltd. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
