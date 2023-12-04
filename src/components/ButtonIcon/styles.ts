import { MaterialIcons } from '@expo/vector-icons'
import styled from "styled-components/native"

export type ButtonIconStyleProps = 'PRIMERY' | 'SECONDARY'

type Props = {
    type: ButtonIconStyleProps
}


export const Container = styled.View`
    width: 56px;
    height: 56px;

    justify-content: center;
    align-items: center;

    margin-left: 12px;
`
export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type}) => ({
    size: 24,
    color: type === 'PRIMERY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
}))``