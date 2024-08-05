import classNames from 'classnames/bind';
import styles from './NavMenu.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const NavMenu = () => {
    return (
        <nav aria-label="breadcrumb" className={cx('menu')}>
            <ol class={cx('breadcrumb')}>
                <li class={cx('breadcrumb-item')}>
                    <Link to="/">Home</Link>
                </li>
                <li class={cx('breadcrumb-item')}>
                    <Link to="/men">Men</Link>
                </li>
                <li class={cx('breadcrumb-item')}>
                    <Link to="/men/shoes">Shoes</Link>
                </li>
                <li class={cx('breadcrumb-item active')} aria-current="page">
                    Globe Sabre Skate Shoes - Black
                </li>
            </ol>
        </nav>
    );
};

export default NavMenu;
