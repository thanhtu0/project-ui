import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './NewRelease.module.scss';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import TitleContent from '~/components/TitleContent';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const initialProducts = [
    {
        id: 1,
        liked: false,
        name: 'Globe Tilt Skate Shoes - Black Split...',
        price: '£64.99',
        sold: 157,
        imgSrc: 'assets/images/product/product_related/product_1.png',
    },
    {
        id: 2,
        liked: false,
        name: 'Nike SB Zoom Blazer Mid Premium...',
        price: '£94.99',
        sold: 575,
        imgSrc: 'assets/images/product/product_related/product_2.png',
    },
    {
        id: 3,
        liked: true,
        name: 'Globe Skate Shoes - Golden...',
        price: '£84.99',
        sold: 1573,
        imgSrc: 'assets/images/product/product_related/product_3.png',
    },
    {
        id: 4,
        liked: false,
        name: 'Footprint Worn Gamechangers...',
        price: '£44.95',
        sold: 175,
        imgSrc: 'assets/images/product/product_related/product_4.png',
    },
];

const NewRelease = () => {
    const [products, setProducts] = useState(initialProducts);

    const handleLikeToggle = (id) => {
        setProducts(products.map((product) => (product.id === id ? { ...product, liked: !product.liked } : product)));
    };

    return (
        <div className={cx('wrapper')}>
            <TitleContent title="You May Also Like" />
            <div className={cx('product-list')}>
                {products.map((product) => (
                    <div key={product.id} className={cx('product-card')}>
                        <div className={cx('heart-icon')} onClick={() => handleLikeToggle(product.id)}>
                            {product.liked ? <AiFillHeart color="black" /> : <AiOutlineHeart color="black" />}
                        </div>
                        <img src={product.imgSrc} alt={product.name} />
                        <div className={cx('product-info')}>
                            {/* <Link
                                to={`/product-detail/${product.id}`}
                                className={cx('product-name')}
                                title={product.title}
                            >
                                {product.name}
                            </Link> */}
                            <Link to="/product-detail" className={cx('product-name')} title={product.title}>
                                {product.name}
                            </Link>
                            <p>
                                <b>{product.price}</b> {product.sold} sold
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewRelease;
