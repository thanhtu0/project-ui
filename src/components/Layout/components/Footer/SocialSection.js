import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
    faSnapchat,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const socialLinks = [
    { href: 'https://www.facebook.com/ThanhTu03012002', icon: faFacebook, className: 'facebook' },
    { href: 'https://www.instagram.com/', icon: faInstagram, className: 'instagram' },
    { href: 'https://github.com/thanhtu0', icon: faGithub, className: 'github' },
    { href: 'https://x.com/home', icon: faTwitter, className: 'twitter' },
    { href: 'https://www.snapchat.com/', icon: faSnapchat, className: 'snapchat' },
    { href: 'https://www.snapchat.com/', icon: faLinkedin, className: 'linkedin' },
];

const SocialSection = () => (
    <div className={cx('footer-section')}>
        <h3>Social app</h3>
        <ul className={cx('social-icons')}>
            {socialLinks.map(({ href, icon, className }) => (
                <li key={className}>
                    <a href={href} className={cx(className)} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={icon} />
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default SocialSection;
