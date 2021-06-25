import React from "react";
import { useParams } from "react-router-dom";
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardContainer, CardContentContainer, ImageIcon, CardActionsContainer } from "./styled";
import uparrowDefault from '../../assets/uparrow-default.svg';
import downarrowDefault from '../../assets/downarrow-default.svg';
import uparrowVoted from '../../assets/uparrow-voted.svg';
import downarrowVoted from '../../assets/downarrow-voted.svg';
import { createPostOrCommentVote, changePostOrCommentVote, deletePostOrCommentVote } from "../../services/posts";

const PostContainer = (props) => {
    const { postInfo, onClickComments, getRenderMethod } = props;
    const params = useParams();

    const actionVote = (valor) => {
        if (postInfo.userVote === null) {
            createPostOrCommentVote(postInfo.id, valor, "posts", getRenderMethod)
        } else if (valor !== postInfo.userVote) {
            changePostOrCommentVote(postInfo.id, valor, "posts", getRenderMethod)
        } else if (valor === postInfo.userVote) {
            deletePostOrCommentVote(postInfo.id, "posts", getRenderMethod)
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
            <hr />
            <CardActionsContainer>
                <div>
                    <ImageIcon onClick={() => actionVote(1)} src={postInfo.userVote === 1 ? uparrowVoted : uparrowDefault} alt={"ícone de voto +1"} />
                    <p>{postInfo.voteSum ? postInfo.voteSum : 0}</p>
                    <ImageIcon onClick={() => actionVote(-1)} src={postInfo.userVote === -1 ? downarrowVoted : downarrowDefault} alt={"ícone de voto -1"} />
                </div>
                <div>
                    <p>{postInfo.commentCount ? postInfo.commentCount : 0}</p>
                    {params.id ? <Button size={"small"} color={"secondary"}>
                        Comentários
                    </Button> : <Button onClick={() => { onClickComments(postInfo.id) }} size={"small"} color={"secondary"}>
                        Comentários
                    </Button>}
                </div>
            </CardActionsContainer>
        </CardContainer>
    );
}

export default PostContainer;