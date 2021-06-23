import React, { useEffect, useState } from "react";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardContainer, CardContentContainer, ImageIcon } from "./styled";
import uparrowDefault from '../../assets/uparrow-default.svg';
import downarrowDefault from '../../assets/downarrow-default.svg';
import uparrowVoted from '../../assets/uparrow-voted.svg';
import downarrowVoted from '../../assets/downarrow-voted.svg';
import { createPostVote, changePostVote, deletePostVote } from "../../services/posts";

const PostContainer = (props) => {
    const { postInfo, onClickComments } = props
    const [isPositiveVoted, setIsPositiveVoted] = useState(false);
    const [isNegativeVoted, setIsNegativeVoted] = useState(false);

    const votar = (num) => {
        if (num === 1) {
            setIsPositiveVoted(true);
        } else if (num === 2) {
            setIsNegativeVoted(true);
        }  
    }

    const desvotar = (num) => {
        if (num === 1 ) {
            setIsPositiveVoted(false);
        } else if (num === 2) {
            setIsNegativeVoted(false);
        }   
    }

    useEffect(() => {
        createPostVote(isPositiveVoted, postInfo)
    }, []);

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
                {isPositiveVoted ? <ImageIcon onClick={() => desvotar(1)} src={uparrowVoted} alt={"ícone de voto -1"} /> : <ImageIcon onClick={() => votar(1)} src={uparrowDefault} alt={"ícone de voto +1"} />}
                <p>{postInfo.voteSum}</p>
                {isNegativeVoted ? <ImageIcon onClick={() => desvotar(2)}src={downarrowVoted} alt={"ícone de voto -1"} /> : <ImageIcon onClick={() => votar(2)} src={downarrowDefault} alt={"ícone de voto +1"} />}
                <p>{postInfo.commentCount}</p>
                <Button onClick={() => { onClickComments(postInfo.id) }} size={"small"} color={"secondary"}>
                    Comentários
                </Button>
            </CardActions>
        </CardContainer>
    );
}

export default PostContainer;