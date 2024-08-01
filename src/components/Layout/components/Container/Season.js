import classNames from 'classnames/bind';
import styles from './Season.module.scss';

const cx = classNames.bind(styles);

const Season = () => {
    return <div className={cx('wrapper')}>Season</div>;
};

export default Season;
