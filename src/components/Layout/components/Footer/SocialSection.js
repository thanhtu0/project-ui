import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faSnapchat, faTwitter } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const SocialSection = () => (
    <div className={cx('footer-section')}>
        <h3>Social app</h3>
        <ul className={cx('social-icons')}>
            <li>
                <a href="https://www.facebook.com/ThanhTu03012002" className={cx('facebook')}>
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/" className={cx('instagram')}>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </li>
            <li>
                <a href="https://github.com/thanhtu0" className={cx('github')}>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
            <li>
                <a href="https://x.com/home" className={cx('twitter')}>
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </li>
            <li>
                <a href="https://www.snapchat.com/" className={cx('snapchat')}>
                    <FontAwesomeIcon icon={faSnapchat} />
                </a>
            </li>
        </ul>
    </div>
);

export default SocialSection;
