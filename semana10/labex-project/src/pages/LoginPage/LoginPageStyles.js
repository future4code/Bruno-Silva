import styled from 'styled-components';
import { firstColor } from '../../constants/colors';

export const AccessButton = styled.button`
    margin-left: 32px;
    height: 32px;
    width: 64px;
    border-radius: 24px;
    background-color: ${firstColor};

    :hover {
        cursor: pointer;
        background-color: darkgrey;
    }
`