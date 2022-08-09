import React from 'react';

import caret from './images/caret.svg';

export const ProductDesc = ({ name, description, rating, features, shade }) => (
  <section className='product-desc'>
    <h2 className='product-desc__name'>{name}</h2>
    <p className='product-desc__description'>{description}.</p>
    <figure className='rating'>
      <img src={rating} alt="Product Rating" className='rating__self'/>
      <img src={caret} alt="View All Ratings" className='rating__others caret'/>
    </figure>
    <section className='product-desc__details'>
      <div className='detail'>
        <h4 className='detail__title'>Benefits</h4>
        <p className='detail__desc'>{features.benefits}</p>
      </div>
      <div className='detail'>
        <h4 className='detail__title'>Finish</h4>
        <p className='detail__desc'>{features.finish}</p>
      </div>
      <div className='detail'>
        <h4 className='detail__title'>Coverage</h4>
        <p className='detail__desc'>{features.coverage}</p>
      </div>
      <div className='detail'>
        <h4 className='detail__title'>Key Ingredients</h4>
        <p className='detail__desc'>
          {features.keyIngredients} <a className='detail__more' href="http://www.clinique.com">More</a>
        </p>
      </div>
    </section>
    <section className='shade'>
      <span className='shade__name bold'>{shade.name}</span>
      <div className='shade__color' style={{ background: shade.color }}></div>
    </section>
  </section>
);
