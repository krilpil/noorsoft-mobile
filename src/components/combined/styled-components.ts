import styled from 'styled-components/native';

interface CombinedWrapProps {
  offset: boolean;
}

export const CombinedWrap = styled.View<CombinedWrapProps>`
  flex-direction: row;
  justify-content: space-between;
  margin: ${({offset}) => (offset ? '0 -7px' : '0')};
`;
