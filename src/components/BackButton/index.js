import React from 'react';
import Arrow from '../../assets/icon-arrow.svg';

import { Wrapper } from './style';

const BackButton = props => (
  <Wrapper onClick={props.onClick}>
    <img src={Arrow} alt="Go back" />
    <strong>{ props.label || 'Back' }</strong>
  </Wrapper>
);

export default BackButton;
