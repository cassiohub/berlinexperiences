import React from 'react';
import { Link } from 'react-router-dom';

import Title from '../Title';
import Rating from '../Rating';
import Ribbon from '../Ribbon';
import Currency from '../Currency';
import Duration from '../Duration';


import {
  Wrapper,
  Body,
  Featured,
  Content,
  Footer,
} from './style';

const Card = ({ full, ...props }) => (
  <Wrapper>
    <Body full={full}>
      { props.isSpecialOffer &&
        <Ribbon type="special" text="Special Offer" />
      }
      <Featured image={props.image} full={full} />
      <Content full={full}>
        <Link to={`/tours/${props.id}`}>
          <Title>{ props.title }</Title>
        </Link>
        <Duration duration={props.duration} />
        <Rating value={props.rating}/>
      </Content>
    </Body>
    <Footer>
      <Currency symbol={props.currency} value={props.price} />
    </Footer>
  </Wrapper>
);

export default Card;