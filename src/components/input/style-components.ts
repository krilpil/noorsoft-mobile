import styled from 'styled-components/native';

type InputProps = {
  combined?: boolean;
  unOffset?: boolean;
};

export const Input = styled.TextInput<InputProps>`
  margin-bottom: ${({unOffset}) => (unOffset ? 0 : '15px')}
  margin-right: ${({combined}) => (combined ? '7px' : 0)};
  margin-left: ${({combined}) => (combined ? '7px' : 0)};
  padding: 15px;
  border-radius: 16px;
  width: auto;
  flex: ${({combined}) => (combined ? 1 : 'none')};
  background-color: #fff;
`;
