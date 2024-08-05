import classNames from 'classnames/bind';
import styles from './RouteOne.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const images = [
    { src: 'assets/images/route/route_1.png', alt: 'Skateboard 1', className: 'img-1', left: 484 },
    { src: 'assets/images/route/route_2.png', alt: 'Skateboard 2', className: 'img-2', left: 624 },
    { src: 'assets/images/route/route_3.png', alt: 'Skateboard 3', className: 'img-3', left: 764 },
    { src: 'assets/images/route/route_4.png', alt: 'Skateboard 4', className: 'img-4', left: 904 },
    { src: 'assets/images/route/route_5.png', alt: 'Skateboard 5', className: 'img-5', left: 1044 },
];

const RouteOne = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <p className={cx('new-season')}>New Season</p>
                <p className={cx('title')}>Route One O.B.</p>
                <p className={cx('sub-title')}>Latest Graphics</p>
                <p className={cx('description')}>
                    Route One O.B. is our in-house brand; helping our favourite finds to become your most loved wardrobe
                    staples.
                </p>
                <Button fill>Discover</Button>
            </div>
            {images.map((image, index) => (
                <img
                    key={index}
                    className={cx(image.className)}
                    src={image.src}
                    alt={image.alt}
                    style={{ left: `${image.left}px` }}
                />
            ))}
        </div>
    );
};

export default RouteOne;
