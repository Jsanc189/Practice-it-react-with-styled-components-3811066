import React from 'react'
import { UNSAFE_withComponentProps } from 'react-router-dom';

const imageURL = props.ImageURL || 'default-image.jpg'
const ProductImage = (props) => {


  return <div>
    <img src={props.imageURL} alt="Product" />
  </div>
};

export default ProductImage;
