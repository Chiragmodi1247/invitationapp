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
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  }
}));

function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClose() {
    setOpen(false);
  }
  return (
    <div>
      <Container maxWidth="lg">
        <DialogTitle id="form-dialog-title">New Event</DialogTitle>
        <DialogContent>
          <Grid container direction="column">
            <Grid item md={5}>
              <TextField
                margin="dense"
                fullWidth
                required
                id="eventName"
                label="Event Name"
                type="text"
                value="Event01"
              />
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item md={5}>
                <TextField
                  fullWidth
                  margin="dense"
                  required
                  id="fname"
                  label="First Name"
                  type="text"
                  value="Samir"
                />
              </Grid>
              <Grid item md={5}>
                <TextField
                  fullWidth
                  margin="dense"
                  required
                  id="lname"
                  label="Last Name"
                  type="text"
                  value="Joshi"
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item md={5}>
                <TextField
                  fullWidth
                  margin="dense"
                  required
                  id="cemail"
                  label="Client Email"
                  type="Email"
                  value="samirj@gmail.com"
                />
              </Grid>
              <Grid item md={5}>
                <TextField
                  margin="dense"
                  fullWidth
                  required
                  id="cphone"
                  label="Client Phone"
                  type="Contact"
                  value="98986XXXXX"
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item md={5}>
                <TextField
                  margin="dense"
                  fullWidth
                  required
                  autoFocus
                  id="eventType"
                  label="Event Type"
                  type="text"
                />
              </Grid>
              <Grid item md={5}>
                <TextField
                  fullWidth
                  margin="dense"
                  required
                  id="venue"
                  label="Venue"
                  type="text"
                />
              </Grid>
            </Grid>
            <TextField
              id="eventDesc"
              label="Description"
              multiline
              rows="2"
              margin="normal"
              variant="outlined"
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
                  fullWidth
                  required
                  id="startdate"
                  label="Start Date"
                  InputLabelProps={{
                    shrink: true
                  }}
                  type="date"
                />
              </Grid>
              <Grid item md={5}>
                <TextField
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                  margin="dense"
                  id="end-date"
                  label="End Date"
                  type="date"
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item md={4}>
                <Typography variant="body1">Event Image URL</Typography>
              </Grid>
              <Grid item md={8}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="outlined-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="outlined-button-file">
                  <Button
                    variant="contained"
                    component="span"
                    color="primary"
                    className={classes.button}
                  >
                    Upload
                    <CloudUploadIcon className={classes.rightIcon} />
                  </Button>
                </label>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item md={4}>
                <Typography variant="body1">Event Thumbnail URL</Typography>
              </Grid>
              <Grid item md={8}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="outlined-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="outlined-button-file">
                  <Button
                    variant="contained"
                    component="span"
                    color="primary"
                    className={classes.button}
                  >
                    Upload
                    <CloudUploadIcon className={classes.rightIcon} />
                  </Button>
                </label>
              </Grid>
            </Grid>
            <Typography variant="h5">Groom's Details:</Typography>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item md={5}>
                <TextField
                  margin="dense"
                  fullWidth
                  required
                  id="groomname"
                  label="Groom Name"
                  type="text"
                />
              </Grid>
              <Grid item md={5}>
                <TextField
                  fullWidth
                  margin="dense"
                  required
                  id="groomage"
                  label="Groom Age"
                  type="text"
                />
              </Grid>
            </Grid>
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
    </div>
  );
}

export default FormDialog;
