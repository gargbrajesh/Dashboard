import { Link, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Typography variant="h6"></Typography>

        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          component="p"
        ></Typography>
        <Typography
          variant="body2"
          align="center"
          component="p"
          className="typography"
        >
          codersarts@
          <Link
            color="inherit"
            herf="https://codersarts@contact.com"
            className="typography"
          ></Link>
          contact.com
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
