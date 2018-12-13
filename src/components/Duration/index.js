import React from 'react';

import Subtitle from '../Subtitle';
import Clock from '../../assets/icon-clock.svg';

const Duration = props => (
  <Subtitle>
    <img src={Clock} alt="Duration" />
    { props.duration }
  </Subtitle>
);

export default Duration;
