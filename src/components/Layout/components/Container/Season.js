import classNames from 'classnames/bind';
import styles from './Season.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Season = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('section', 'top-left')}>
                <p className={cx('new-season')}>New Season</p>
                <p className={cx('title')}>Welcome</p>
                <p className={cx('sub-title')}>Hoddies</p>
                <Button outline>Discover</Button>
            </div>
            <div className={cx('section', 'top-right')}>
                <p className={cx('latest')}>Latest</p>
                <p className={cx('title')}>Santa</p>
                <p className={cx('sub-title')}>Cruz</p>
                <Button outline>Discover</Button>
            </div>
            <div className={cx('section', 'bottom-left')}>
                <div className={cx('play-button')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faPlay} />
                </div>
            </div>
            <div className={cx('section', 'bottom-right')}>
                <p className={cx('title')}>Cookie</p>
                <p className={cx('sub-title')}>'Light of Mine'</p>
                <p className={cx('description')}>
                    Remember when Chris 'Cookie' Colbourn mixed amazing Cobra Man cameos in his Heatwave part? You ought
                    to, it was only seven months ago! Well, he's back again (sans Cobra Man sadly) and this time the
                    "gimmick" is it's all filmed...
                </p>
                <Button primary>Discover</Button>
            </div>
        </div>
    );
};

export default Season;
