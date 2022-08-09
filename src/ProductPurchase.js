import React from 'react';

import caret from './images/caret.svg';
import minus from './images/minus.png';
import plus from './images/plus.png';

export const ProductPurchase = ({ price }) =>
  <section className='product-purchase bold'>
    <div className='product-purchase__options'>
      <div className='product-purchase__quantity'>
        Quantity <img src={minus} alt="Decrease Quantity" /> 1 <img src={plus} alt="Increase Quantity" />
      </div>
      <div className='product-purchase__type'>
        One Time Purchase  <img src={caret} alt="Select Frequency" className='caret' />
      </div>
    </div>
    <div className='product-purchase__flexbox--desktop wtf'>
      <div className='product-purchase__price'>{price}</div>
      <button className='product-purchase__btn bold' name="AddToBag">Add To Bag</button>
    </div>
  </section>