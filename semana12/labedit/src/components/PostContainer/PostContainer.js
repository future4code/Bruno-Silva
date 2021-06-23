import React from "react";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardContainer, CardContentContainer } from "./styled";

const PostContainer = (props) => {
    const { postInfo } = props

    return (
        <CardContainer>
            <CardActionArea>
                <CardContentContainer>
                    <Typography gutterBottom variant={"h5"} color={"primary"} component={"h2"}>
                        {postInfo.title}
                    </Typography>
                    <hr />
                    <Typography variant={"body2"} color={"inherit"} component={"p"}>
                        {postInfo.body}
                    </Typography>
                </CardContentContainer>
            </CardActionArea>
            <CardActions>
                <Button size={"small"} color={"secondary"}>
                    Share
                </Button>
                <Button size={"small"} color={"secondary"}>
                    Comentários
                </Button>
            </CardActions>
        </CardContainer>
    );
}

export default PostContainer;