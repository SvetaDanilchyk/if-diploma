import React from "react";
import { useTheme } from "react-jss";
import classNames from "classnames";
//components
import { useButtonStyles } from "./Button.styles";

export const Button = ({variant,  color,  upper,  className,  href,  type = "button",
  children,
  ...props}) => {
    const theme = useTheme();
    const classes = useButtonStyles({theme});
    const colors = {
      [classes.primaryAccent]: color === 'primaryAccent',
    };

    const variants = {
      [classes.text]: variant === 'text',
    }

    if (href) {
      return (
        <a
          className={classNames(classes.root, className, {   
            ...variants,
          })}
          href={href}
          {...props}
        >
          {children}
        </a>
      );
    }
  
    return (
      <button
      className={classNames(className, classes.root,  {
          ...colors,
          ...variants,
        })}
        type={type}
        {...props}
      >
        {children}
      </button>
    )
};
