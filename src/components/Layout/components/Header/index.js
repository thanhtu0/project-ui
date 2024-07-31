import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import {
    faCartFlatbed,
    faChevronDown,
    faHeart,
    faLocationDot,
    faPhoneVolume,
    faSearch,
    faStar,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

const infoItems = [
    {
        icon: faPhoneVolume,
        text: '(239) 555-0108',
        className: 'phone',
    },
    {
        icon: faLocationDot,
        text: '3891 Ranch view Dr. Richardson, California',
        className: 'address',
    },
];

const Header = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('Men');

    useEffect(() => {
        if (location.pathname === '/men') {
            setActiveTab('Men');
        } else if (location.pathname === '/women') {
            setActiveTab('Women');
        }
    }, [location.pathname]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('info-header')}>
                <div className={cx('left-info')}>
                    {infoItems.map((item, index) => (
                        <div key={index} className={cx(item.className)}>
                            <FontAwesomeIcon className={cx('icon')} icon={item.icon} />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className={cx('right-info')}>
                    {Array.from({ length: 5 }, (_, index) => (
                        <FontAwesomeIcon className={cx('icon')} key={index} icon={faStar} />
                    ))}
                    <p>33400 Five Star Service Reviews</p>
                </div>
            </div>

            <div className={cx('navigation')}>
                <div className={cx('logo')}>cordes.</div>

                <nav className={cx('nav')}>
                    <ul>
                        <li className={cx({ active: activeTab === 'Men' })} onClick={() => setActiveTab('Men')}>
                            <Link to="/men">Men</Link>
                        </li>
                        <li className={cx({ active: activeTab === 'Women' })} onClick={() => setActiveTab('Women')}>
                            <Link to="/women">Women</Link>
                        </li>
                    </ul>
                </nav>

                <div className={cx('search-bar')}>
                    <input type="text" placeholder="Search product" />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon className={cx('search-icon')} icon={faSearch} />
                        <span className={cx('search-text')}>Search</span>
                    </button>
                </div>

                <div className={cx('account')}>
                    <div className={cx('account-icon')}>
                        <FontAwesomeIcon icon={faUser} />
                    </div>

                    <div className={cx('account-text')}>
                        <div className={cx('up')}>
                            <Link to="/login">Log in</Link>/<Link to="/signup">Sign up</Link>
                        </div>
                        <div className={cx('down')}>
                            <p>Account</p>
                            <FontAwesomeIcon className={cx('icon')} icon={faChevronDown} />
                        </div>
                    </div>
                </div>

                <div className={cx('wishlist')}>
                    <FontAwesomeIcon icon={faHeart} className={cx('icon')} />
                    <Link to="/wishlist">Wishlist</Link>
                </div>

                <div className={cx('cart')}>
                    <FontAwesomeIcon icon={faCartFlatbed} className={cx('icon')} />
                    <Link to="/cart">Cart</Link>
                </div>
            </div>

            <div className={cx('menu-bar')}>Menu nha</div>
        </header>
    );
};

export default Header;
