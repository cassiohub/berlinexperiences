import styled from 'styled-components';

export const Text = styled.p`
  color: ${props => props.theme.mutedColor};
  font-size: 1em;
  font-style: italic;
  display: flex;
  align-items: center;

  strong {
    margin-right: 5px;
    font-style: normal;
  }
  img {
    width: 17px;
    margin-right: 10px;
  }
`;
