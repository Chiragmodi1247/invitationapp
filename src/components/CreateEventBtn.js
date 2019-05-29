import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
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
  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>
        <Typography
          component="h1"
          variant="h6"
          //   color="inherit"
          //   noWrap
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
              <Button
                onClick={handleClose}
                style={{ backgroundColor: "#7E25B8", color: "#FFFFFF" }}
              >
                Save
              </Button>
              <Button
                onClick={handleClose}
                style={{ backgroundColor: "#7E25B8", color: "#FFFFFF" }}
              >
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
