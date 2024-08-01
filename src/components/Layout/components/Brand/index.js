import classNames from 'classnames/bind';
import styles from './Brand.module.scss';

const cx = classNames.bind(styles);

const Brand = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('brand-logo')}>
                <img src="/assets/images/brands/nike-sb-logo_1.png" alt="nike-sb-logo_1.png" />
                <img src="/assets/images/brands/adidas-logo_1.png" alt="adidas-logo_1.png" />
                <img src="/assets/images/brands/r1-logo-grey_1.png" alt="r1-logo-grey_1.png" />
                <img src="/assets/images/brands/vans-logo-grey_1.png" alt="vans-logo-grey_1.png" />
                <img src="/assets/images/brands/carhartt-logo_1.png" alt="carhartt-logo_1.png" />
                <img src="/assets/images/brands/santa-cruz-logo_1.png" alt="santa-cruz-logo_1.png" />
            </div>
            <div className={cx('brand-title')}>
                <p>Explore Brands</p>
            </div>
        </div>
    );
};

export default Brand;
