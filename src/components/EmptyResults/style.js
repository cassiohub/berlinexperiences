import styled from 'styled-components';

export const Wrapper = styled.p`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: ${props => props.theme.mutedColor};
  font-weight: 700;
`;
