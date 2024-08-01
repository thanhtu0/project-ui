import classNames from 'classnames/bind';
import styles from './RouteOne.module.scss';

const cx = classNames.bind(styles);

const RouteOne = () => {
    return <div className={cx('wrapper')}>RouteOne</div>;
};

export default RouteOne;
