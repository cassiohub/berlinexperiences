import React from 'react';
import { RowWrapper, ColumnWrapper } from './style';

export const Column = props => (
  <ColumnWrapper width={props.width}>
    { props.children }
  </ColumnWrapper>
);

export const Row = props => (
  <RowWrapper direction={props.direction || 'row'} width={props.width || '100%'}>
    { props.children }
  </RowWrapper>
);

