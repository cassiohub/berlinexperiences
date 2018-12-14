import React from 'react';

import Title from '../Title';
import Card from '../Card';
import EmptyResults from '../EmptyResults';

import {
  Wrapper,
  Content
} from './style';

const Section = ({ title, cards, full, button, emptyText, alignment }) => (
  <Wrapper alignment={alignment}>
    <Title>{ title }</Title>
    <Content>
      { cards && cards.length
        ? cards.map((c, k) => <Card {...c} full={full} key={k} />)
        : <EmptyResults>{emptyText ? emptyText : "We couldn't find any results.\nTry searching for something else..."}</EmptyResults>
      }
    </Content>
    { button }
  </Wrapper>
);

export default Section;