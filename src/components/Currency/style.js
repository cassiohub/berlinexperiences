import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${props => props.theme.primaryColor};
  font-size: ${props => props.theme.fontMedium};
  margin: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${props => props.featured ? 'center' : 'flex-end'};

  background-color: ${props => props.featured ? props.theme.primaryColor : 'none'};
  border-radius: ${props => props.featured ? '5px' : 0};
  color: ${props => props.featured ? props.theme.clearColor : props.theme.primaryColor};
  max-width: ${props => props.featured ? '150px' : 'unset'};
`;

export const Prefix = styled.div`
  margin-right: 10px;
`;

export const Value = styled.div`
  font-weight: 700;
  font-size: ${props => props.theme.fontLarge};
`;