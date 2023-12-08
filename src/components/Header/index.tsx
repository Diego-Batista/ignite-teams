import LogoImage from '@assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import { BackButton, BackIcon, Container, Logo } from "./styles";

type HeaderProps = {
    showBackButton?: boolean
}

export function Header({ showBackButton }: HeaderProps) {
    const navigation = useNavigation()

    function handleGoBack() {
        navigation.navigate('groups')
    }
    return (
        <Container>
            {showBackButton &&
                <BackButton
                    onPress={handleGoBack}
                >
                    <BackIcon />
                </BackButton>
            }
            
            <Logo source={LogoImage}/>
        </Container>
    )
}