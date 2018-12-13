import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 200px;
  background: #FFF;
  border-radius: .2rem;
  box-shadow: 0 10px 25px 0 rgba(0,0,0,.11), 0 0px 20px 0 rgba(0,0,0,.08);

  display: flex;
  flex-direction: column;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01);
    transition: all 0.3s ease-in-out;
  }
`;

export const Body = styled.div`
  min-height: 160px;
  position: relative;
  
  display: flex;
  flex-direction: ${props => props.full ? 'column' : 'row'};
`;

export const Featured = styled.div`
  width: ${props => props.full ? '100%' : '40%'};
  min-height: ${props => props.full ? '200px' : 'auto'};

  ${props => props.image ? `
    background-image: url(${props.image});
    background-size: cover;
    background-position: center center;
  ` : null }
`;

export const Content = styled.div`
  width: calc(${props => props.full ? '100%' : '60%'} - 2em);
  color: ${props => props.theme.baseColor};
  padding: 0 1em;
`;

export const Footer = styled.div`
  color: ${props => props.theme.mutedColor};
  height: 40px;
  padding: 0.5em 1em;
  border-top: 1px solid #EEE;
`;

