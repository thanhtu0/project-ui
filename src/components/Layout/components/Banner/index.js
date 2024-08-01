import classNames from 'classnames/bind';
import styles from './Banner.module.scss';

import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);

const Banner = () => {
    return (
        <div className={cx('hero')}>
            <div className={cx('hero-content')}>
                <div className={cx('season-label')}>New Season</div>
                <h1 className={cx('hero-title')}>Route One O.B.</h1>
                <h2 className={cx('hero-subtitle')}>Lastest Skateboard</h2>
                <div className={cx('hero-btn')}>
                    <Button primary>Discover</Button>
                    <Button rounded>
                        <span className={cx('video-icon')}>
                            <FontAwesomeIcon icon={faCirclePlay} />
                        </span>{' '}
                        Watch Video
                    </Button>
                </div>
                <div className={cx('hero-slide')}>
                    <div className={cx('slide-line', 'first-line')}></div>
                    <div className={cx('slide-line', 'second-line')}></div>
                    <div className={cx('slide-line', 'third-line')}></div>
                </div>
            </div>

            <div className={cx('hero-image')}>
                <img
                    src="/assets/images/men/banner/banner_1.png"
                    alt="Skateboarder"
                    className={cx('skateboarder-img')}
                />
                <strong>
                    cordes.<p>Skateboard</p>
                </strong>
            </div>
        </div>
    );
};

export default Banner;
