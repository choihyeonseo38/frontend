// Button.tsx

import styled from "styled-components";
import { ButtonScheme, ButtonSize } from "../../style/theme";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: ButtonSize;
  scheme: ButtonScheme;
  disabled?: boolean;
  isLoading?: boolean;
}

function Button({
  children,
  size,
  scheme,
  disabled,
  isLoading,
  ...rest
}: Props) {
  return (
    <ButtonStyled
      size={size}
      scheme={scheme}
      disabled={disabled}
      isLoading={isLoading}
      {...rest} // 나머지 속성 전달
    >
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button<Omit<Props, "children">>`
  font-size: ${({ theme, size }) => theme.button[size].fontsize};
  padding: ${({ theme, size }) => theme.button[size].padding};
  color: ${({ theme, scheme }) => theme.buttonscheme[scheme].color};
  background-color: ${({ theme, scheme }) =>
    theme.buttonscheme[scheme].backgroundcolor};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  cursor: ${({ disabled }) => (disabled ? "none" : "pointer")};
`;

export default Button;
