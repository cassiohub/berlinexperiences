import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Icon = styled.img`
  width: 40px;
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 2;
`;

export const IconClose = styled.img`
  width: 25px;
  position: absolute;
  top: 12px;
  right: 8px;
  z-index: 2;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  appearance: none;
  width: 40%;
  height: 40px;
  min-width: 250px;
  border: 1px solid #ccc;
  font-size: ${props => props.theme.fontMedium};
  color: ${props => props.theme.baseColor};
  background: ${props => props.theme.clearColor};
  padding: 0.2em 0.4em 0.3em 3em;
  border-radius: 0.2em;
  position: relative;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-style: italic;
  }
`;