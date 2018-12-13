import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${props => props.theme.primaryColor};
  font-size: ${props => props.theme.fontMedium};
  padding: 0.4em 1em;
  background: #FFF;
  border-radius: 5px;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  position: absolute;
  top: 15px;
  left: 15px;

  img {
    width: 20px;
    display: block;
    margin-right: 15px;
  }
`;
