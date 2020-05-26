import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tab from "@material-ui/core/Tab"


export default function FormDialog( {onChange, onSubmit, value}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tab                    
        label="Add/Edit Bio"
        style={{
          "color": "rgb(41,189,193)",
          "alignText": "center"
        }}
        onClick={handleClickOpen}
      />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Tell us About Yourself</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Write a small paragraph about yourself....
            </DialogContentText>
            {/* <form> */}
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Bio..."
                type="bio"
                value={value}
                onChange={onChange}
                fullWidth
              />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Clear
            </Button>
            <form  noValidate onSubmit={onSubmit}
    autoComplete="off">
            <Button onClick={handleClose} color="primary" type="submit">
              Submit
            </Button>
            </form>
          </DialogActions>
      </Dialog>
      </div>
  );
}