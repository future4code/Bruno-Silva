import React from "react";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardContainer, CardContentContainer, ImageIcon } from "./styled";
import uparrowDefault from '../../assets/uparrow-default.svg';
import downarrowDefault from '../../assets/downarrow-default.svg';
import uparrowVoted from '../../assets/uparrow-voted.svg';
import downarrowVoted from '../../assets/downarrow-voted.svg';
import { createPostOrCommentVote, changePostOrCommentVote, deletePostOrCommentVote } from "../../services/posts";

const PostContainer = (props) => {
    const { postInfo, onClickComments, getPosts } = props

    const actionVote = (valor) => {
        if (postInfo.userVote === null) {
            createPostOrCommentVote(postInfo.id, valor, "posts", getPosts)
        } else if (valor !== postInfo.userVote) {
            changePostOrCommentVote(postInfo.id, valor, "posts", getPosts)
        } else if (valor === postInfo.userVote) {
            deletePostOrCommentVote(postInfo.id, "posts", getPosts)
    }
}

return (
    <CardContainer>
        <CardActionArea>
            <CardContentContainer>
                <Typography gutterBottom variant={"h5"} color={"primary"} component={"h2"}>
                    {postInfo.username}
                </Typography>
                <hr />
                <Typography variant={"body2"} color={"inherit"} component={"p"}>
                    {postInfo.body}
                </Typography>
            </CardContentContainer>
        </CardActionArea>
        <CardActions>
            <ImageIcon onClick={() => actionVote(1)} src={ postInfo.userVote === 1 ? uparrowVoted : uparrowDefault } alt={"ícone de voto +1"} />
            <p>{postInfo.voteSum}</p>
            <ImageIcon onClick={() => actionVote(-1)} src={ postInfo.userVote === -1 ? downarrowVoted : downarrowDefault } alt={"ícone de voto -1"} />
            <p>{postInfo.commentCount ? postInfo.commentCount : 0}</p>
            <Button onClick={() => { onClickComments(postInfo.id) }} size={"small"} color={"secondary"}>
                Comentários
            </Button>
        </CardActions>
    </CardContainer>
);
}

export default PostContainer;