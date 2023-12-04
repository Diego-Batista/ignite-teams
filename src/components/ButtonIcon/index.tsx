import { ButtonIconStyleProps, Container, Icon } from "./styles";

type ButtonIconProps = ButtonIconStyleProps & {
    
}

export function ButtonIcon({}){
    return (
        <Container>
            <Icon 
                name="home"
                type="SECONDARY"
            />
        </Container>
    )
}