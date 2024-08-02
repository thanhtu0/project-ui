import { useState, useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NewRelease.module.scss';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import TitleContent from '~/components/TitleContent';

const cx = classNames.bind(styles);

const initialProducts = [
    {
        id: 1,
        liked: false,
        name: 'Globe Sabre Skate Shoes - Black...',
        title: 'Globe Sabre Skate Shoes - Black...',
        price: '£84.99',
        sold: '1114 sold',
        image: 'assets/images/men/container/new_releases/product_1.png',
    },
    {
        id: 2,
        liked: false,
        name: 'Birdhouse Armanto Favorites...',
        title: 'Birdhouse Armanto Favorites...',
        price: '£79.95',
        sold: '123 sold',
        image: 'assets/images/men/container/new_releases/product_2.png',
    },
    {
        id: 3,
        liked: true,
        name: 'Thrasher Flame Logo Snapback',
        title: 'Thrasher Flame Logo Snapback',
        price: '£64.99',
        sold: '1233 sold',
        image: 'assets/images/men/container/new_releases/product_3.png',
    },
    {
        id: 4,
        liked: false,
        name: 'Pull On Chino Short - Coconut...',
        title: 'Pull On Chino Short - Coconut...',
        price: '£47.99',
        sold: '1214 sold',
        image: 'assets/images/men/container/new_releases/product_4.png',
    },
    {
        id: 5,
        liked: false,
        name: 'Stage 3 Complete Skateboard',
        title: 'Stage 3 Complete Skateboard',
        price: '£59.99',
        sold: '764 sold',
        image: 'assets/images/men/container/new_releases/product_5.png',
    },
    {
        id: 6,
        liked: false,
        name: 'Herschel Supply Co. Settlement...',
        title: 'Herschel Supply Co. Settlement...',
        price: '£59.99',
        sold: '1573 sold',
        image: 'assets/images/men/container/new_releases/product_6.png',
    },
    {
        id: 7,
        liked: false,
        name: 'REKD Elite 2.0 Helmet - Blue',
        title: 'REKD Elite 2.0 Helmet - Blue',
        price: '£34.95',
        sold: '364 sold',
        image: 'assets/images/men/container/new_releases/product_7.png',
    },
    {
        id: 8,
        liked: false,
        name: 'Element Cookie Skateboard...',
        title: 'Element Cookie Skateboard...',
        price: '£64.99',
        sold: '245 sold',
        image: 'assets/images/men/container/new_releases/product_8.png',
    },
];

const Product = memo(({ product, onLikeToggle }) => (
    <div className={cx('product')}>
        <div className={cx('heart-icon')} onClick={() => onLikeToggle(product.id)}>
            {product.liked ? <AiFillHeart color="black" /> : <AiOutlineHeart color="black" />}
        </div>
        <img src={product.image} alt={product.name} className={cx('product-image')} />
        <div className={cx('product-info')}>
            <Link to={`/product-detail/${product.id}`} className={cx('product-name')} title={product.title}>
                {product.name}
            </Link>
            <div className={cx('product-sale')}>
                <p className={cx('product-price')}>{product.price}</p>
                <p className={cx('product-sold')}>{product.sold}</p>
            </div>
        </div>
    </div>
));

const NewRelease = () => {
    const [products, setProducts] = useState(initialProducts);

    const handleLikeToggle = useCallback(
        (id) => {
            setProducts(
                products.map((product) => (product.id === id ? { ...product, liked: !product.liked } : product)),
            );
        },
        [products],
    );

    return (
        <div className={cx('container')}>
            <TitleContent title="New Releases" />
            <div className={cx('products')}>
                {products.map((product) => (
                    <Product key={product.id} product={product} onLikeToggle={handleLikeToggle} />
                ))}
            </div>
        </div>
    );
};

export default NewRelease;
