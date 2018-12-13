import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1em 1em 3em;

  & > h3 {
    margin-top: 0.5em;
    font-size: ${props => props.theme.fontLarge}
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > div {
    margin-bottom: 3em;
  }
`;