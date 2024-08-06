import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

const Search = ({
    width = '380px',
    buttonWidth = '100px',
    placeholder = 'Search product',
    withIcon = true,
    buttonText = 'Search',
}) => {
    return (
        <div className={cx('search-bar')} style={{ width }}>
            <input type="text" placeholder={placeholder} />
            <Button
                className={cx('search-btn')}
                style={{ width: buttonWidth }}
                leftIcon={withIcon && <FontAwesomeIcon icon={faSearch} />}
                iconSize="1.4rem"
                iconMargin="8px"
            >
                {buttonText}
            </Button>
        </div>
    );
};

export default Search;
