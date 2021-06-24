import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import { CreateCommentBox } from "./styled";
import useForm from "../../hooks/useForm";
import { createComment } from '../../services/posts';


const CreateCommentContainer = (props) => {
    const [form, onChange, clear] = useForm({ body: "" });
    const { getComments } = props

    const onSubmitCreateComment = (event) => {
        event.preventDefault();
        createComment(form, clear, getComments);
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
                    Comentar
                </Button>
            </form>
        </CreateCommentBox>
    );
}

export default CreateCommentContainer;