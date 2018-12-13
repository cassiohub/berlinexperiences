import styled from 'styled-components';

export const RowWrapper = styled.div`
  width: ${props => props.width};
  flex-direction: ${props => props.direction};
  display: flex;
  align-items: center;
`;

export const ColumnWrapper = styled.div`
  width: ${props => props.width || '100%'};
`;
