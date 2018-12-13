import styled from 'styled-components';

const Colors = {
  default: '#663399',
  special: '#f9690e',
};

export const Wrapper = styled.div`
  min-height: 20px;
  padding: 0.5em 1em;
  background: ${props => Colors[props.type]};
  text-align: center;

  position: absolute !important;
  top: 0;
  left: 0;
`;

export const Text = styled.span`
  display: block;
  color: ${props => props.theme.clearColor};
  font-size: ${props => props.theme.fontSmall};
  font-weight: 700;
  text-transform: uppercase;
`;
