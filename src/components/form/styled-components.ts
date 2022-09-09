import styled from 'styled-components/native';

export const FormWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  width: 100%;
  padding: 20px;
`;

export const Title = styled.Text.attrs({
  adjustsFontSizeToFit: true,
})`
  margin-bottom: 10px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
`;

type InputProps = {
  combined?: boolean;
};

export const Input = styled.TextInput<InputProps>`
  margin-bottom: 15px;
  margin-right: ${({combined}) => (combined ? '7px' : '0')};
  margin-left: ${({combined}) => (combined ? '7px' : '0')};
  padding: 15px;
  border-radius: 16px;
  width: auto;
  flex: ${({combined}) => (combined ? 1 : 'none')};
  background-color: #fff;
`;
