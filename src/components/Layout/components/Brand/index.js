import classNames from 'classnames/bind';
import styles from './Brand.module.scss';

const cx = classNames.bind(styles);

const Brand = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('categories')}>
                <div className={cx('menu')}>Brands</div>
            </div>
        </div>
    );
};

export default Brand;
