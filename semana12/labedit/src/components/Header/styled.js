import styled from 'styled-components'
import Toolbar from '@material-ui/core/Toolbar';
import { thirdColor, fourthColor, neutralColor } from '../../constants/colors';

export const StyledBar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`

export const LogoContainer = styled.div`
    font-size: 24px;
    font-family: verdana, arial, helvetica, sans-serif;
    display: flex;

    :hover {
        cursor: pointer;
    }

    img {
        height: 64px;
        margin: 16px 0;
    }

    div {
        margin-top: 16px;
    }

    div span:nth-child(1) {
        color: ${fourthColor};
    }

    div span:nth-child(2) {
        color: ${thirdColor}
    }

    div span:nth-child(3) {
        color: ${neutralColor}
    }
`

