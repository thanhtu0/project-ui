import classNames from 'classnames/bind';
import styles from './Subscribe.module.scss';
import Search from '~/components/Search';

const cx = classNames.bind(styles);

const Subscribe = () => {
    return (
        <div className={cx('subscription')}>
            <div className={cx('subscription__content')}>
                <p className={cx('subscription__text')}>Stay in touch</p>
                <h2 className={cx('subscription__title')}>Subscribe</h2>
            </div>
            <Search
                width="480px"
                buttonWidth="125px"
                placeholder="Enter your email here..."
                withIcon={false}
                buttonText="Subscribe"
            />
        </div>
    );
};

export default Subscribe;
