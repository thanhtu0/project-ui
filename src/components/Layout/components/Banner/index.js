import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

const Banner = ({ activeTab }) => {
    return (
        <div className={cx('hero', { 'men-banner': activeTab === 'Men', 'women-banner': activeTab === 'Women' })}>
            <div
                className={cx('hero-content', {
                    'men-content': activeTab === 'Men',
                    'women-content': activeTab === 'Women',
                })}
            >
                <div className={cx('season-label')}>{activeTab === 'Men' ? 'New Season' : 'New Collection'}</div>
                <h1 className={cx('title')}>{activeTab === 'Men' ? 'Route One O.B.' : 'Elegance Redefined'}</h1>
                <h2 className={cx('sub-title')}>{activeTab === 'Men' ? 'Lastest Skateboard' : 'Latest Fashion'}</h2>
                <div className={cx('hero-btn')}>
                    <Button fill>Discover</Button>
                    <Button rounded leftIcon={<FontAwesomeIcon icon={faCirclePlay} />}>
                        Watch Video
                    </Button>
                </div>
                <div className={cx('hero-slide')}>
                    <div className={cx('slide-line', 'first-line')}></div>
                    <div className={cx('slide-line', 'second-line')}></div>
                    <div className={cx('slide-line', 'third-line')}></div>
                </div>
            </div>

            <div
                className={cx('hero-image', { 'men-image': activeTab === 'Men', 'women-image': activeTab === 'Women' })}
            >
                <img
                    src={activeTab === 'Men' ? '/assets/images/banner/men.png' : '/assets/images/banner/women.png'}
                    alt="Skateboarder"
                    className={cx('skateboarder-img')}
                />
                <strong>
                    cordes.<p>{activeTab === 'Men' ? 'Skateboard' : 'Fashion'}</p>
                </strong>
            </div>
        </div>
    );
};

export default Banner;
