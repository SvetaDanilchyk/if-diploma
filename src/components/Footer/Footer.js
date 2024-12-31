import React from "react";
import classNames from "classnames";
//styles
import { useFooterStyles } from "./Footer.styles";
//components
import { Container } from "../Container";
//const
import { FOOTER_SETTING } from "../../constans/footerSetting";

//img
import inst from "../../icons/footer/inst.svg";
import faceBook from "../../icons/footer/fa.svg";

export const Footer = () => {
  const classes = useFooterStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.container}>
        <div className={classes.contacts}>
          {FOOTER_SETTING.map((section) => (
            <div className={classes.wrap} key={section.id}>
              <div className={classes.contactsTitle} href="#">
                {section.name}
              </div>
              {section.links.map((link) => (
                <a
                  className={classes.contactsDescr}
                  href={link.link}
                  key={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className={classes.footerSocial}>
          <div className={classNames(classes.contacts, classes.contactsTitle)}>
            Stay connected
          </div>
          <div className={classes.icons}>
            <img src={inst} alt="loupe" />
          </div>
          <div className={classes.icons}>
            <img src={faceBook} alt="loupe" />
          </div>
        </div>
      </Container>
    </footer>
  );
};
