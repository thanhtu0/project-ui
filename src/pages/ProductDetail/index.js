import React from 'react';
import Button from '~/components/Button';

const ProductDetail = () => {
    return (
        <>
            <div>
                <Button>Discovery</Button>
            </div>
            <div>
                <Button fill>Normal</Button>
            </div>
            <div>
                <Button outline>Normal</Button>
            </div>
            <div>
                <Button disabled>Fill default</Button>
            </div>

            <div>
                <Button disabled>Icon default</Button>
            </div>
        </>
    );
};

export default ProductDetail;
