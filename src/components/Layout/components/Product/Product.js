import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FaRegHeart } from 'react-icons/fa';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const Product = () => {
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('image-product')}>
                <img src="assets/images/product/product_details/product_detail_1.png" alt="Ảnh lỗi" />
                <img src="assets/images/product/product_details/product_detail_2.png" alt="Ảnh lỗi" />
                <img src="assets/images/product/product_details/product_detail_3.png" alt="Ảnh lỗi" />
                <img src="assets/images/product/product_details/product_detail_4.png" alt="Ảnh lỗi" />
                <img src="assets/images/product/product_details/product_detail_5.png" alt="Ảnh lỗi" />
                <img src="assets/images/product/product_details/product_detail_6.png" alt="Ảnh lỗi" />
            </div>

            <div className={cx('image-show')}>
                <img src="assets/images/product/product_details/product_detail_1_show.png" alt="Ảnh lỗi" />
            </div>

            <div className={cx('product-details')}>
                <h1>Globe Sabre Skate Shoes - Black</h1>
                <p className={cx('price')}>£84.99</p>

                <div className={cx('size-selector')}>
                    <span>Size</span>
                    <div className={cx('sizes')}>
                        <Button size>7</Button>
                        <Button size style={{ marginLeft: '10px' }}>
                            8
                        </Button>
                        <Button size style={{ marginLeft: '10px' }}>
                            9
                        </Button>
                        <Button size disabled style={{ marginLeft: '10px' }}>
                            10
                        </Button>
                        <Button size disabled style={{ marginLeft: '10px' }}>
                            11
                        </Button>
                    </div>
                </div>

                <div className={cx('quantity-selector')}>
                    <Button className={cx('quantity-decrease')} minus>
                        <FontAwesomeIcon icon={faMinus} />
                    </Button>
                    <span className={cx('quantity')}>1</span>
                    <Button className={cx('quantity-increase')} plus>
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </div>

                <div className={cx('actions')}>
                    <Button outline leftIcon={<FaRegHeart />} iconSize="1.5rem" iconMargin="17px">
                        Add to Wishlist
                    </Button>
                    <Button outline reverse style={{ marginLeft: '20px' }}>
                        Add to Cart
                    </Button>
                </div>

                <div className={cx('info-delivery')}>
                    <div className={cx('additional-info')}>
                        <h3>Additional information</h3>
                        <button className={cx('toggle-button')}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>

                    <div className={cx('assembly-delivery')}>
                        <h3>Assembly & Delivery</h3>
                        <button className={cx('toggle-button')}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
