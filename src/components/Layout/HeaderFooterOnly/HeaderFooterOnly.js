import classNames from 'classnames/bind';
import styles from './HeaderFooterOnly.module.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';
import NavMenu from '~/components/Layout/NavMenu';

const cx = classNames.bind(styles);

const HeaderFooterOnly = ({ children, setActiveTab }) => {
    return (
        <div className={cx('wrapper')}>
            <Header setActiveTab={setActiveTab} />
            <div className={cx('container')}>
                <NavMenu />
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
};

export default HeaderFooterOnly;
