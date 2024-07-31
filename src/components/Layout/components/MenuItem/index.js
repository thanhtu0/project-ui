import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const MenuBar = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu-bar')}>
                <ul>
                    <li>
                        <Link to="/new in" title="New in">
                            New in
                        </Link>
                    </li>
                    <li>
                        <Link to="/clothing" title="Clothing">
                            Clothing
                        </Link>
                    </li>
                    <li>
                        <Link to="/shoes" title="Shoes">
                            Shoes
                        </Link>
                    </li>
                    <li>
                        <Link to="/accessories" title="Accessories">
                            Accessories
                        </Link>
                    </li>
                    <li>
                        <Link to="/skateboard" title="Skateboard">
                            Skateboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/route one" title="Route One">
                            Route One
                        </Link>
                    </li>
                    <li>
                        <Link to="/brands" title="Brands">
                            Brands
                        </Link>
                    </li>
                    <li>
                        <Link to="/launches" title="Launches">
                            Launches
                        </Link>
                    </li>
                    <li>
                        <Link to="/sale" title="Sale">
                            Sale
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MenuBar;
