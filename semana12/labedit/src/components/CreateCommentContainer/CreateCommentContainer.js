import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import { CreateCommentBox } from "./styled";
import useForm from "../../hooks/useForm";
import { createComment } from '../../services/posts';
import CircularProgress from '@material-ui/core/CircularProgress';


const CreateCommentContainer = (props) => {
    const [form, onChange, clear] = useForm({ body: "" });
    const { getComments } = props;
    const [ isLoading, setIsLoading ] = useState(false);

    const onSubmitCreateComment = (event) => {
        event.preventDefault();
        createComment(form, clear, getComments, setIsLoading);
    }

    return (
        <CreateCommentBox >
            <Typography variant={"h4"} color={"secondary"} component={"h2"} align={"center"}>
                Novo comentário
            </Typography>
            <form onSubmit={onSubmitCreateComment}>
                <TextField
                    type={"text"}
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    label={"Crie novo comentário..."}
                    variant={"outlined"}
                    fullWidth
                    required
                />
                <Button
                    type={"submit"}
                    variant={"contained"}
                    color={"secondary"}
                    fullWidth
                >
                    {isLoading ? <CircularProgress color={"inherit"} size={24}/> : "Comentar"}
                </Button>
            </form>
        </CreateCommentBox>
    );
}

export default CreateCommentContainer;