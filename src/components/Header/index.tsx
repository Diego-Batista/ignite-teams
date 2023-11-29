import LogoImage from '@assets/logo.png';
import { BackButton, BackIcon, Container, Logo } from "./styles";

export function Header() {
    return (
        <Container>
            <BackButton>
                <BackIcon />
            </BackButton>
            <Logo source={LogoImage}/>
        </Container>
    )
}