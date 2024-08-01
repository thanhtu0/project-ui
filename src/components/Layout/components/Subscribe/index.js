import classNames from 'classnames/bind';
import styles from './Subscribe.module.scss';

const cx = classNames.bind(styles);

const Subscribe = () => {
    return (
        <div className={cx('subscription')}>
            <div className={cx('subscription__content')}>
                <p className={cx('subscription__text')}>Stay in touch</p>
                <h2 className={cx('subscription__title')}>Subscribe</h2>
            </div>
            <form className={cx('subscription__form')}>
                <input type="email" className={cx('subscription__input')} placeholder="Enter your email here" />
                <button type="submit" className={cx('subscription__button')}>
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default Subscribe;
