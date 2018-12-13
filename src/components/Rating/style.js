import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 30px;
  margin-bottom: 15px;
  align-items: center;

  img {
    width: 1em;
    margin: 0 0.15em;
  }
`;

export const Value = styled.span`
  color: ${props => props.theme.mutedColor};
  font-weight: bold;
  margin-left: 10px;
`;
