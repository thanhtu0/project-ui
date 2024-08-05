import classNames from 'classnames/bind';
import styles from './FashionTrending.module.scss';
import Button from '~/components/Button';
import TitleContent from '~/components/TitleContent';

const cx = classNames.bind(styles);

const FashionTrending = () => {
    return (
        <div className={cx('wrapper')}>
            <TitleContent title="Fashion Trending" />
            <div className={cx('img-hoodie')}>
                <img src="/assets/images/men/container/fashion_trending/hoodie.png" alt="Hoodie" />
            </div>

            <div className={cx('text-content')}>
                <img
                    className={cx('img-first')}
                    src="/assets/images/men/container/fashion_trending/Drive or.png"
                    alt="Drive or"
                />
                <img
                    className={cx('img-second')}
                    src="/assets/images/men/container/fashion_trending/be Driven.png"
                    alt="be Driven"
                />
                <p>Drive or be Driven, the new trending from Bobaj and Jackson Davies...</p>
                <Button fill>Shop Now</Button>
                <div className={cx('img-shoes')}>
                    <img src="/assets/images/men/container/fashion_trending/shoes.png" alt="Shoes" />
                </div>
            </div>

            <div className={cx('img-hat')}>
                <img src="/assets/images/men/container/fashion_trending/hat.png" alt="Hat" />
            </div>
        </div>
    );
};

export default FashionTrending;
