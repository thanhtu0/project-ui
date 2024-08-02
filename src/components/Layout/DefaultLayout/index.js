import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '../components/Header';
import Brand from '../components/Brand';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children, activeTab, setActiveTab }) => {
    return (
        <div className={cx('wrapper')}>
            <Header setActiveTab={setActiveTab} />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Banner activeTab={activeTab} />
                    <Brand />
                    {children}
                </div>
                <Subscribe />
            </div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
