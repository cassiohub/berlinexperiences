import React from 'react';

import Title from '../Title';

import { Wrapper, Text } from './style';

const About = ({ title, content }) => (
  <Wrapper>
    <Title>{ title }</Title>
    <Text>{ content }</Text>
  </Wrapper>
);

export default About;