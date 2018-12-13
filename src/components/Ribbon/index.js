import React from 'react';
import { Wrapper, Text } from './style';

const Ribbon = ({ type, text }) => (
  <Wrapper type={type}>
    <Text>{ text }</Text>
  </Wrapper>
);

export default Ribbon;