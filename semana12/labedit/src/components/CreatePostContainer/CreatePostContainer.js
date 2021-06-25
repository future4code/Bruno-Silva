import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import { CreatePostBox } from "./styled";
import useForm from "../../hooks/useForm";
import { createPost } from '../../services/posts';
import CircularProgress from '@material-ui/core/CircularProgress';


const CreatePostContainer = (props) => {
    const [form, onChange, clear] = useForm({ title: "", body: "" });
    const {getPosts} = props
    const [ isLoading, setIsLoading ] = useState(false);

    const onSubmitCreatePost = (event) => {
        event.preventDefault();
        createPost(form, clear, getPosts, setIsLoading);
    }

    return (
        <CreatePostBox >
            <Typography variant={"h4"} color={"secondary"} component={"h2"} align={"center"}>
                Novo Post
            </Typography>
            <form onSubmit={onSubmitCreatePost}>
                <TextField
                    type={"text"}
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    label={"Nome do novo post..."}
                    variant={"outlined"}
                    fullWidth
                    required
                />
                <TextField
                    type={"text"}
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    label={"Crie seu post aqui..."}
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
                    {isLoading ? <CircularProgress color={"inherit"} size={24}/> : "Postar"}
                </Button>
            </form>
        </CreatePostBox>
    );
}

export default CreatePostContainer;