import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 300px;
  background: #000;
  background-image: url('${props => props.image}');
  background-position: center center;
  background-size: cover;
  padding: 2em 1em;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 480px) {
    height: 180px;
    padding: 1em;
  }
`;

export const Title = styled.h1`
  color: ${props => props.theme.primaryColor};
  font-weight: 900;
  font-size: ${props => props.theme.fontXLarge};
  line-height: 1.2em;
  padding: 0 0.3em;
  text-transform: uppercase;
  background: ${props => props.theme.clearColor};

  @media (max-width: 480px) {
    font-size: ${props => props.theme.fontLarge};
    margin-bottom: 15px;
  }

  & > a {
    &:hover,
    &:focus,
    &:active {
      color: ${props => props.theme.primaryColor};
      text-decoration: none;
    }
  }
`;
