import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default function AddUser() {

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    }),
  );
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [profile, setProfile] = React.useState('');
  const [email, setEmail] = React.useState('');


  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  const handleChangeProfile = (event: React.ChangeEvent<{ value: unknown }>) => {
    setProfile(event.target.value as string);
  };

  const handleChangeEmail = (event: React.ChangeEvent<{ value: unknown }>) => {
    setEmail(event.target.value as string);
  };

  const handleChangeName = (event: React.ChangeEvent<{ value: unknown }>) => {
    setName(event.target.value as string);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add User
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            onChange={handleChangeEmail}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            onChange={handleChangeName}
            fullWidth
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">profile</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={profile}
              onChange={handleChangeProfile}
            >
              <MenuItem value={'Administrateur'}>Administrateur</MenuItem>
              <MenuItem value={'Auditeur'}>Auditeur</MenuItem>
              <MenuItem value={'Intégrateur'}>Intégrateur</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}
