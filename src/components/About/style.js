import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1em;
`;

export const Text = styled.div`
  font-weight: 700;
  color: ${props => props.theme.mutedColor};
  font-size: 0.9em;
  line-height: 1.5em;
  white-space: pre-line;
`;