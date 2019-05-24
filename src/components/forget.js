import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Background from "../assets/signin/bg.png";
import avatar from "../assets/signin/avatar.png";

const GREY = "#9E9E9E";
const Purp = "#7E25B8";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundImage: `url(${Background})`,
      backgroundSize: "cover"
    }
  },
  paper: {
    marginTop: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.common.white,
    borderRadius: 10,
    padding: 20,
    boxShadow: `3px 3px 3px ${GREY}`,
    paddingBottom: 105
  },
  avatar: {
    backgroundImage: `url(${avatar})`,
    backgroundSize: "cover"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: Purp,
    borderRadius: 20,
    marginBottom: 30,
    marginTop: 50
  }
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} />
        <Typography component="h1" variant="h5">
          Reset
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email/Phone"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Reset Password
          </Button>
          {"Back to "}
          <Link href="/log" variant="body2">
            {"Log In?"}
          </Link>
        </form>
      </div>
    </Container>
  );
}
