import classNames from 'classnames/bind';
import styles from './NewSeason.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import TitleContent from '~/components/TitleContent';

const cx = classNames.bind(styles);

const NewSeason = ({ activeTab }) => {
    const content =
        activeTab === 'Men'
            ? {
                  title: "New Season - Converse 'White Widow' Pack",
                  images: {
                      main: '/assets/images/men/container/new_Season/shoes.png',
                      card: '/assets/images/men/container/new_season/shoes_cart.png',
                  },
                  description: 'CTAS Pro Hi Skate Shoes',
                  price: '£64.99',
              }
            : {
                  title: 'New Season - Nike Air Max Pack',
                  images: {
                      main: '/assets/images/women/container/new_Season/clothes.png',
                      card: '/assets/images/women/container/new_season/clothes_cart.png',
                  },
                  description: 'Womens Russett Pullover Hoodie',
                  price: '£79.99',
              };
    return (
        <div className={cx('wrapper')}>
            <TitleContent title={content.title} />
            <div className={cx('season-content')}>
                <div className={cx('left-season')}>
                    <img src={content.images.main} alt="" />
                </div>
                <div className={cx('right-season')}>
                    <div className={cx('season-slide')}>
                        <div className={cx('slide-line', 'first-line')}></div>
                        <div className={cx('slide-line', 'second-line')}></div>
                        <div className={cx('slide-line', 'third-line')}></div>
                    </div>

                    <div className={cx('season-card')}>
                        <div className={cx('season-img')}>
                            <img src={content.images.card} alt="" />
                        </div>
                        <div className={cx('season-info')}>
                            <span>
                                <b>{activeTab === 'Men' ? 'Converse' : 'Obey'} </b>
                                {content.description}
                            </span>
                            <strong>{content.price}</strong>
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
