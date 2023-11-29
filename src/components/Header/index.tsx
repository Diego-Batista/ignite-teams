import LogoImage from '@assets/logo.png';
import { BackButton, BackIcon, Container, Logo } from "./styles";

type HeaderProps = {
    showBackButton?: boolean
}

export function Header({ showBackButton }: HeaderProps) {
    return (
        <Container>
            {showBackButton &&
                <BackButton>
                    <BackIcon />
                </BackButton>
            }
            
            <Logo source={LogoImage}/>
        </Container>
    )
}