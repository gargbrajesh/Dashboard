import { Link, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React from "react";
import "./footer.css";
// import { makeStyles } from "@material-ui/core/styles";

function Footer() {
//   const useStyle = makeStyles((theme) => ({
//     footer: {
//       backgroundColor: theme.palette.background.paper,
//       marginTop: theme.spacing(4),
//     //   padding: theme.spacing(1, 0),
//     },
//   }));
//   const classes = useStyle();
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Typography variant="h6"></Typography>

        <Typography
          variant="subtitle"
          align="center"
          color="textSecondary"
          component="p"
        >
        </Typography>
        <Typography
          variant="body2"
          align="center"
          
          component="p"
        className ="typography">codersarts@
        <Link color="inherit" herf="https://material-ui.com/"></Link>
          contact.com
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
