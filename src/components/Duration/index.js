import React from 'react';

import Subtitle from '../Subtitle';
import Clock from '../../assets/icon-clock.svg';

const Duration = props => (
  <Subtitle>
    <img src={Clock} alt="Duration" />
    <strong>Duration:</strong>{ props.duration }
  </Subtitle>
);

export default Duration;
