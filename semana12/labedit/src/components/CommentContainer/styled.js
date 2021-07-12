import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

export const CardContainer = styled(Card)`
    width: 600px;
    margin: 24px;
`

export const CardContentContainer = styled(CardContent)`
    height: 160px;
`

export const CardActionsContainer = styled(CardActions)`
    display: flex;
    justify-content: center;

    p {
        font-size: 20px;
        font-weight: bolder;
    }
`

export const ImageIcon = styled.img`
    height: 24px;

    :hover {
        cursor: pointer;
    }
`