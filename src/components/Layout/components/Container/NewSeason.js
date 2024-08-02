import classNames from 'classnames/bind';
import styles from './NewSeason.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import TitleContent from '~/components/TitleContent';

const cx = classNames.bind(styles);

const NewSeason = () => {
    return (
        <div className={cx('wrapper')}>
            <TitleContent title="New Season - Converse 'White Widow' Pack" />
            <div className={cx('season-content')}>
                <div className={cx('left-season')}>
                    <img src="/assets/images/men/container/new_Season/shoes.png" alt="" />
                </div>
                <div className={cx('right-season')}>
                    <div className={cx('season-slide')}>
                        <div className={cx('slide-line', 'first-line')}></div>
                        <div className={cx('slide-line', 'second-line')}></div>
                        <div className={cx('slide-line', 'third-line')}></div>
                    </div>

                    <div className={cx('season-card')}>
                        <div className={cx('season-img')}>
                            <img src="/assets/images/men/container/new_season/shoes_cart.png" alt="" />
                        </div>
                        <div className={cx('season-info')}>
                            <span>
                                <b>Converse </b>
                                CTAS Pro Hi Skate Shoes
                            </span>
                            <strong>£64,99</strong>
                        </div>
                    </div>
                    <div className={cx('arrow-btn')}>
                        <button>
                            <FontAwesomeIcon className={cx('icon')} icon={faAngleLeft} />
                        </button>
                        <button>
                            <FontAwesomeIcon className={cx('icon')} icon={faAngleRight} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewSeason;
