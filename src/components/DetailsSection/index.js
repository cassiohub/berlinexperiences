import React from 'react';
import { Link } from 'react-router-dom';

import Title from '../Title';
import Duration from '../Duration';
import Rating from '../Rating';
import Currency from '../Currency';
import Ribbon from '../Ribbon';
import EmptyResults from '../EmptyResults';

import { Row, Column } from '../Grid';

import {
  Wrapper,
  Content,
  Text,
} from './style';

const DetailsSection = ({ title, ...props }) => (
  <Wrapper>
    { title ?
      <>
        <Title>{ title }</Title>
        <Content>
          { props.isSpecialOffer && <Ribbon type="special" text="Special Offer" /> }
          <Row>
            <Column width="60%">
              <Duration duration={props.duration} />
              <Rating value={props.rating}/>
            </Column>
            <Column width="40%">
              <Currency featured={true} symbol={props.currency} value={props.price} />
            </Column>
          </Row>
          <Row>
            <Column>
              <Text>
                { props.description }
              </Text>
            </Column>
          </Row>
        </Content>
        { props.button }
      </>
    : <EmptyResults>The item you're looking for is not available now. <Link to="/">Go back to Home Page</Link></EmptyResults>
    }
  </Wrapper>
);

export default DetailsSection;