import React from 'react';

import StarFull from '../../assets/icon-star.svg';
import StarHalf from '../../assets/icon-star-half.svg';
import StarEmpty from '../../assets/icon-star-empty.svg';

import { Wrapper, Value } from './style';

const Icons = {
  full: StarFull,
  half: StarHalf,
  empty: StarEmpty,
}

const Star = ({ type }) => <img src={Icons[type]} alt="rating" />;

const FillStarts = value => {
  const fullStars = parseInt(value, 10);
  const halfStars = Math.round(value - fullStars);
  const emptyStars = 5 - (fullStars + halfStars);
  const stars = [];

  for (let i = fullStars; i > 0; i--) {
    stars.push('full')
  }

  for (let i = halfStars; i > 0; i--) {
    stars.push('half')
  }
  
  for (let i = emptyStars; i > 0; i--) {
    stars.push('empty')
  }

  return stars.map((type, k) => <Star type={type} key={k} />);
}

const Rating = ({ value }) => (
  <Wrapper>
    { FillStarts(value) }
    <Value>{ value }</Value>
  </Wrapper>  
);

export default Rating;