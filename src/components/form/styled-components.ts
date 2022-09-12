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
