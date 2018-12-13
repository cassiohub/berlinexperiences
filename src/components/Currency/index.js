import React from 'react';
import { Wrapper, Prefix, Value } from './style';

const Currency = ({ symbol, value, hidePrefix, featured }) => (
  <Wrapper featured={featured}>
    { !hidePrefix && <Prefix>From</Prefix> }
    <Value>{ `${symbol}${value}` }</Value>
  </Wrapper>
);

export default Currency;