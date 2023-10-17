import React from "react";

const ProductRow = ({ product }) => {
    const { name, price, category, inStock } = product;

    const textStyle = {
        color: inStock ? "black" : "red",
    };

    return (
        <tr>
            <td style={textStyle}>{name}</td>
            <td>{price}</td>
            <td>{category}</td>
            <td>{inStock ? "Yes" : "No"}</td>
        </tr>
    );
}

export default ProductRow;