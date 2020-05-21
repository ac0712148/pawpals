import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useAuth } from "../../utils/auth";
import axios from "axios";

export default function PostInput() {
    const { user } = useAuth();
    const [textFieldValue,
        setTextFieldValue] = useState("");

    const handleTextFieldChange = (e) => {
        setTextFieldValue(e.target.value);
    };

    const handleSubmit = () => {
        // setTextFieldValue(e.target.value);
        console.log("On click value: " + textFieldValue);
        axios.post('/api/post', {
            authorId: user.id,
            text: textFieldValue
        })
    };

    return (
        <form
            className="container"
            style={{
            display: "flex",
            justifyContent: "center",
            marginTop: '25px',
            marginBottom: '25px'
        }}
            noValidate
            autoComplete="off">
            <TextField
                value={textFieldValue}
                onChange={handleTextFieldChange}
                id="standard-basic"
                style={{
                width: "90%",
                height: "45px"
            }}
                label="PawPost!..."/>
            <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                style={{
                margin: "3px"
            }}>
                <i className="fas fa-angle-right"></i>
            </Button>
        </form>
    )
}