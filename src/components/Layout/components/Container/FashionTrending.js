import classNames from 'classnames/bind';
import styles from './FashionTrending.module.scss';
import Button from '~/components/Button';
import TitleContent from '~/components/TitleContent';

const cx = classNames.bind(styles);

const FashionTrending = ({ activeTab }) => {
    const content =
        activeTab === 'Men'
            ? {
                  title: 'Fashion Trending',
                  images: {
                      hoodie: '/assets/images/men/container/fashion_trending/hoodie.png',
                      first: '/assets/images/men/container/fashion_trending/Drive or.png',
                      second: '/assets/images/men/container/fashion_trending/be Driven.png',
                      shoes: '/assets/images/men/container/fashion_trending/shoes.png',
                      hat: '/assets/images/men/container/fashion_trending/hat.png',
                  },
                  text: 'Drive or be Driven, the new trending from Bobaj and Jackson Davies...',
              }
            : {
                  title: 'Fashion Trending',
                  images: {
                      hoodie: '/assets/images/women/container/fashion_trending/hoodie.png',
                      first: '/assets/images/women/container/fashion_trending/Drive or.png',
                      second: '/assets/images/women/container/fashion_trending/be Driven.png',
                      shoes: '/assets/images/women/container/fashion_trending/shoes.png',
                      hat: '/assets/images/women/container/fashion_trending/hat.png',
                  },
                  text: 'Stay stylish with the new trends from Alice and Eve...',
              };
    return (
        <div className={cx('wrapper')}>
            <TitleContent title={content.title} />
            <div className={cx('img-hoodie')}>
                <img src={content.images.hoodie} alt="Hoodie" />
            </div>

            <div className={cx('text-content')}>
                <img className={cx('img-first')} src={content.images.first} alt="Drive or" />
                <img className={cx('img-second')} src={content.images.second} alt="be Driven" />
                <p>{content.text}</p>
                <Button fill>Shop Now</Button>
                <div className={cx('img-shoes')}>
                    <img src={content.images.shoes} alt="Shoes" />
                </div>
            </div>

            <div className={cx('img-hat')}>
                <img src={content.images.hat} alt="Hat" />
            </div>
        </div>
    );
};

export default FashionTrending;
