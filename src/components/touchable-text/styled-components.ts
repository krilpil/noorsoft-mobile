import styled from 'styled-components/native';

type TextTextProps = {
  color?: string;
};

export const TextButton = styled.Text<TextTextProps>`
  color: ${({color}) => (color ? color : '#ffffff')};
`;
