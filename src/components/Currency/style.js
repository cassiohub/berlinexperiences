import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${props => props.theme.primaryColor};
  font-size: ${props => props.theme.fontMedium};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Prefix = styled.div`
  margin-right: 10px;
`;

export const Value = styled.div`
  font-weight: 700;
  font-size: ${props => props.theme.fontLarge};
`;