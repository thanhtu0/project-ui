import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Brand from '../components/Brand';

const cx = classNames.bind(styles);

const HeaderFooterOnly = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Brand />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
};

export default HeaderFooterOnly;
