import React from 'react';
import { ProductImage } from './ProductImage';

export const ProductGrid = ({ heading, cta1, p1Name, p1Img, p1Price, p2Name, p2Img, p2Price, p3Name, p3Img, p3Price, p4Name, p4Img, p4Price }) =>
  <section className='product-grid'>
    <hr></hr>
    <h2 className='product-grid__heading'>{heading}</h2>
    <div className='product-grid__products'>

      <div className='product-grid__product'>
        <ProductImage image={p1Img} className="product-grid__image" />
        <div className='product-grid__details'>
          <h1 className='product-grid__name'>{p1Name}</h1>
          <h4 className='product-grid__price'>{p1Price}</h4>
          <button className='product-grid__btn'>{cta1}</button>
        </div>
      </div>
      <div className='product-grid__product'>
        <ProductImage image={p2Img} className="product-grid__image" />
        <div className='product-grid__details'>
          <h1 className='product-grid__name'>{p2Name}</h1>
          <h4 className='product-grid__price'>{p2Price}</h4>
          <button className='product-grid__btn'>{cta1}</button>
        </div>
      </div>
      <div className='product-grid__product'>
        <ProductImage image={p3Img} className="product-grid__image" />
        <div className='product-grid__details'>
          <h1 className='product-grid__name'>{p3Name}</h1>
          <h4 className='product-grid__price'>{p3Price}</h4>
          <button className='product-grid__btn'>{cta1}</button>
        </div>
      </div>
      <div className='product-grid__product'>
        <ProductImage image={p4Img} className="product-grid__image" />
        <div className='product-grid__details'>
          <h1 className='product-grid__name'>{p4Name}</h1>
          <h4 className='product-grid__price'>{p4Price}</h4>
          <button className='product-grid__btn'>{cta1}</button>
        </div>
      </div>

    </div>
  </section>
