import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { IoIosStar } from 'react-icons/io';
import {
    faCartFlatbed,
    faChevronDown,
    faHeart,
    faLocationDot,
    faPhoneVolume,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MenuBar from '../MenuItem';
import Search from '~/components/Search';

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

const Header = ({ setActiveTab }) => {
    const location = useLocation();
    const [activeTabState, setActiveTabState] = useState('Men');

    useEffect(() => {
        if (location.pathname === '/men') {
            setActiveTabState('Men');
            setActiveTab('Men');
        } else if (location.pathname === '/women') {
            setActiveTabState('Women');
            setActiveTab('Women');
        }
    }, [location.pathname, setActiveTab]);

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
                        <IoIosStar className={cx('icon')} key={index} />
                    ))}
                    <p>33400 Five Star Service Reviews</p>
                </div>
            </div>

            <div className={cx('navigation')}>
                <div className={cx('logo')}>cordes.</div>

                <nav className={cx('nav')}>
                    <ul>
                        <li className={cx({ active: activeTabState === 'Men' })} onClick={() => setActiveTab('Men')}>
                            <Link to="/men">Men</Link>
                        </li>
                        <li
                            className={cx({ active: activeTabState === 'Women' })}
                            onClick={() => setActiveTab('Women')}
                        >
                            <Link to="/women">Women</Link>
                        </li>
                    </ul>
                </nav>

                <Search
                    width="380px"
                    buttonWidth="100px"
                    placeholder="Search product"
                    showIcon={true}
                    buttonText="Search"
                />

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

            <MenuBar />
        </header>
    );
};

export default Header;
