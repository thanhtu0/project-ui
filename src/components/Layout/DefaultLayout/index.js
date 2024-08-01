import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '../components/Header';
import Brand from '../components/Brand';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

const HeaderFooterOnly = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Brand />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Subscribe />
            <Footer />
        </div>
    );
};

export default HeaderFooterOnly;
