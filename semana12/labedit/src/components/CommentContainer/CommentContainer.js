import React from "react";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardContainer, CardContentContainer } from "./styled";

const CommentContainer = (props) => {
    const { commentInfo } = props

    return (
        <CardContainer>
            <CardActionArea>
                <CardContentContainer>
                    <Typography gutterBottom variant={"h5"} color={"primary"} component={"h2"}>
                        {commentInfo.userId}
                    </Typography>
                    <hr />
                    <Typography variant={"body2"} color={"inherit"} component={"p"}>
                        {commentInfo.body}
                    </Typography>
                </CardContentContainer>
            </CardActionArea>
            <CardActions>
                <Button size={"small"} color={"secondary"}>
                    Share
                </Button>
            </CardActions>
        </CardContainer>
    );
}

export default CommentContainer;