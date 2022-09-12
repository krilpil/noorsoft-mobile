import styled from 'styled-components/native';

type ButtonProps = {
  backgroundColor?: string;
};

export const Button = styled.TouchableOpacity<ButtonProps>`
  margin-top: 20px;
  padding: 15px;
  border-radius: 16px;
  width: 100%;
  background-color: ${({backgroundColor}) => backgroundColor ?? '#ffffff'};
`;

type TitleProps = {
  color?: string;
};

export const Title = styled.Text<TitleProps>`
  color: ${({color}) => color ?? '#000000'};
  text-align: center;
`;
