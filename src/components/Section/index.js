import React from 'react';

import Title from '../Title';
import Card from '../Card';
import EmptyResults from '../EmptyResults';

import {
  Wrapper,
  Content
} from './style';

const Section = ({ title, cards, full, button }) => (
  <Wrapper>
    <Title>{ title }</Title>
    <Content>
      { cards && cards.length
        ? cards.map((c, k) => <Card {...c} full={full} key={k} />)
        : <EmptyResults>We couldn't find any results.<br/>Try searching for something else...</EmptyResults>
      }
    </Content>
    { button }
  </Wrapper>
);

export default Section;