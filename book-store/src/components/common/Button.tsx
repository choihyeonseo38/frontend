//Button.tsx

import  styled  from "styled-components";
import { ButtonScheme, ButtonSize } from "../../style/theme";

interface Props{
    children : React.ReactNode;
    size: ButtonSize
    scheme: ButtonScheme
    disabled?: boolean;
    isLoading?: boolean;
}

function Button({children, size, scheme, disabled, 
    isLoading}: Props){
    return (
        <ButtonStyled size={size} scheme={scheme}
        disabled={disabled} isLoading={isLoading}>
            {children}
        </ButtonStyled>
    );
}

const ButtonStyled = styled.button<Omit<Props, "children">>`
font-size : ${({theme, size}) => theme.button[size].
    fontsize}; 
padding: ${({theme, size}) => theme.button[size].
    padding};
color : ${({theme, scheme}) => theme.buttonscheme[scheme].
    color};
background-color : ${({theme, scheme}) => theme.buttonscheme[scheme].
    backgroundcolor};      
border : 0;
border-radius:${({theme, scheme}) => theme.borderRadius.
    default}; 
opacity: ${({disabled}) => (disabled ? 0.5 : 1)}; 
pointer-events: ${({disabled}) => (disabled ? "none": "auto")};
cursor: ${({disabled}) => (disabled ? 'none' : 'pointer')}; 
`;

export default Button;