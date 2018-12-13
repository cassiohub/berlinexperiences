import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 3em;
  display: flex;
  align-items: center;

  & > a {
    width: calc(100% - 3em);
    height: 40px;
    line-height: 40px;
    padding: 0.5em 1.5em;
    font-size: ${props => props.theme.fontMedium};
    font-weight: 800;
    color: ${props => props.theme.primaryColor};
    border: 2px solid ${props => props.theme.primaryColor};
    border-radius: 3px;
    text-align: center;
    background: #FFF;
    transition: all 0.2 ease-in-out;

    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
      background: ${props => props.theme.primaryColor};
      color: #FFF;
      transition: all 0.2 ease-in-out;
    }

  }
`;
