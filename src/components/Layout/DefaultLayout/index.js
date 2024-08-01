import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '../components/Header';
import Brand from '../components/Brand';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const cx = classNames.bind(styles);

const HeaderFooterOnly = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Banner />
                    <Brand />
                    {children}
                </div>
                <Subscribe />
            </div>
            <Footer />
        </div>
    );
};

export default HeaderFooterOnly;
