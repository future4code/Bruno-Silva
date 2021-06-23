import styled from 'styled-components'
import Toolbar from '@material-ui/core/Toolbar';
import { thirdColor, fourthColor, neutralColor } from '../../constants/colors';

export const StyledBar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`

export const TitleName = styled.h1`
    font-size: 48px;
    font-family: verdana, arial, helvetica, sans-serif;

    span:nth-child(1) {
        color: ${fourthColor}
    }

    span:nth-child(2) {
        color: ${thirdColor}
    }

    span:nth-child(3) {
        color: ${neutralColor}
    }
`

