import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const GREY = "#9E9E9E";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 300
  }
}));

function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div>
      <Button variant="text" color="inherit" onClick={handleClickOpen}>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Create Event
        </Typography>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <Container maxWidth="xs">
          <DialogTitle id="form-dialog-title">New Event</DialogTitle>
          <DialogContent>
            <Grid container direction="column">
              <TextField
                margin="dense"
                required
                autoFocus
                id="eventName"
                label="Event Name"
                type="text"
              />
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item md={5}>
                  <TextField
                    margin="dense"
                    required
                    id="fname"
                    label="First Name"
                    type="text"
                  />
                </Grid>
                <Grid item md={5}>
                  <TextField
                    margin="dense"
                    required
                    id="lname"
                    label="Last Name"
                    type="text"
                  />
                </Grid>
              </Grid>
              <TextField
                margin="dense"
                required
                id="cemail"
                label="Client Email"
                type="Email"
              />
              <TextField
                margin="dense"
                required
                id="cphone"
                label="Client Phone"
                type="Contact"
              />
            </Grid>
          </DialogContent>
          <Container maxWidth="lg" className={classes.container}>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <Button onClick={handleClose} color="primary">
                Save
              </Button>
              <Button onClick={handleClose} color="primary">
                Save & Proceed
              </Button>
            </Grid>
          </Container>
        </Container>
      </Dialog>
    </div>
  );
}

export default FormDialog;
