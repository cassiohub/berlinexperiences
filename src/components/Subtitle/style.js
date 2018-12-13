import styled from 'styled-components';

export const Text = styled.p`
  color: ${props => props.theme.mutedColor};
  font-size: 1em;
  font-style: italic;
  display: flex;
  align-items: center;

  img {
    width: 17px;
    margin-right: 8px;
  }
`;
