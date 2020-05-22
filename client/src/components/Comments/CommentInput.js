import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { useAuth } from "../../utils/auth";
// import axios from "axios";

export default function CommentInput({onChange, onSubmit, value}) {

    
    
    return (
        <form
            className="container"
            onSubmit={onSubmit}
            style={{
            display: "flex",
            justifyContent: "center",
            marginTop: '15px',
            marginBottom: '15px'
        }}
            noValidate
            autoComplete="off">
            <TextField
                value={value}
                onChange={onChange}
                id="standard-basic"
                style={{
                width: "80%",
                height: "45px"
            }}
                label="What do you think..."/>
            <Button
                type="submit"
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