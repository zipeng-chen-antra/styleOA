import React from 'react';

export const ProductImage = ({ image,className }) =>
  <figure className={className}>
    <img src={image} alt="Product" />
  </figure>
