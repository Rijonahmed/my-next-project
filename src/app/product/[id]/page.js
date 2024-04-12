import React from 'react';

const ProductDitails = ({params}) => {
    return (
        <div>
            <h1>This is Dynamic route: {params.id}</h1>
            <h3>This is Dynamic H3 route: {params.id}</h3>
            
        </div>
    );
};

export default ProductDitails;