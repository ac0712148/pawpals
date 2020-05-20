import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

class PostInput extends Component {
    
    render() {
        return (
            <form
                className="container"
                style={{
                display: "flex",
                justifyContent: "center",
                marginTop: '25px'
            }}
                noValidate
                autoComplete="off">
                <TextField
                    id="standard-basic"
                    style={{
                    // width: "60%",
                    height: "30px",
                    paddingBottom: "5px"
                }}
                    />
                <Button
                    variant="contained"
                    color="primary"
                    style={{
                    margin: "3px",
                    height: "25px"
                }}>
                    <i className="fas fa-angle-right"></i>
                </Button>
            </form>
        );
    }
}

export default PostInput;