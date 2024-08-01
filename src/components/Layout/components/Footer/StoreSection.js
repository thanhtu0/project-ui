import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const StoreSection = () => (
    <div className={cx('footer-section')}>
        <h3>Store</h3>
        <p>Company name: cordes.</p>
        <p>Tel: (239) 555-0108</p>
        <p>Gmail: ex@mail.com</p>
        <p>Add: 3891 Ranchview Dr.Richardson, California</p>
    </div>
);

export default StoreSection;
