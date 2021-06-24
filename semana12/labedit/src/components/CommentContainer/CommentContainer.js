import React from "react";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { CardContainer, CardContentContainer, ImageIcon } from "./styled";
import uparrowDefault from '../../assets/uparrow-default.svg';
import downarrowDefault from '../../assets/downarrow-default.svg';
import uparrowVoted from '../../assets/uparrow-voted.svg';
import downarrowVoted from '../../assets/downarrow-voted.svg';
import { createPostOrCommentVote, changePostOrCommentVote, deletePostOrCommentVote } from "../../services/posts";

const CommentContainer = (props) => {
    const { commentInfo, getComments } = props

    const actionVote = (valor) => {
        if (commentInfo.userVote === null) {
            createPostOrCommentVote(commentInfo.id, valor, "comments", getComments)
        } else if (valor !== commentInfo.userVote) {
            changePostOrCommentVote(commentInfo.id, valor, "comments", getComments)
        } else if (valor === commentInfo.userVote) {
            deletePostOrCommentVote(commentInfo.id, "comments", getComments)
        }
    }

    return (
        <CardContainer>
            <CardActionArea>
                <CardContentContainer>
                    <Typography gutterBottom variant={"h5"} color={"primary"} component={"h2"}>
                        {commentInfo.username}
                    </Typography>
                    <hr />
                    <Typography variant={"body2"} color={"inherit"} component={"p"}>
                        {commentInfo.body}
                    </Typography>
                </CardContentContainer>
            </CardActionArea>
            <CardActions>
                <ImageIcon onClick={() => actionVote(1)} src={ commentInfo.userVote === 1 ? uparrowVoted : uparrowDefault } alt={"ícone de voto +1"} />
                <p>{commentInfo.voteSum}</p>
                <ImageIcon onClick={() => actionVote(-1)} src={ commentInfo.userVote === -1 ? downarrowVoted : downarrowDefault } alt={"ícone de voto -1"} />
            </CardActions>
        </CardContainer>
    );
}

export default CommentContainer;