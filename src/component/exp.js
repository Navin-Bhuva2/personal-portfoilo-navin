import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
      background: "#233",
    },
    timeLine: {
      position: "relative",
      padding: "1rem",
      margin: "o auto",
      "&:before": {
        content: "''",
        position: "absolute",
        height: "100%",
        border: "1px solid tan",
        right: "40px",
        top: 0,
      },
      "&:after": {
        content: "''",
        display: "table",
        clear: "both",
      },
      [theme.breakpoints.up("md")]: {
        padding: "2rem",
        "&:before": {
          left: "calc(50% - 1px)",
          right: "auto",
        },
      },
    },
    timeLineItem: {
      padding: "1rem",
      borderBottom: "2px solid tan",
      position: "relative",
      margin: "1rem 3rem 1rem 1rem",
      clear: "both",
      "&:after": {
        content: "''",
        position: "absolute",
      },
      "&:before": {
        content: "''",
        position: "absolute",
        right: "-0.625rem",
        top: "calc(50% - 5px)",
        borderStyle: "solid",
        borderColor: "tomato tomato transparent transparent",
        borderWidth: "0.625rem",
        transform: "rotate(45deg)",
      },
      [theme.breakpoints.up("md")]: {
        width: "44%",
        margin: "1rem",
        "&:nth-of-type(2n)": {
          float: "right",
          margin: "1rem",
          borderColor: "tan",
        },
        "&:nth-of-type(2n):before": {
          right: "auto",
          left: "-0.625rem",
          borderColor: "transparent transparent tomato tomato",
        },
      },
    },
    timeLineYear: {
      textAlign: "center",
      maxWidth: "9.375rem",
      margin: "0 3rem 0 auto",
      fontSize: "1.8rem",
      color: "#fff",
      background: "tomato",
      lineHeight: 1,
      padding: "0.5rem 1rem",
      "&:before": {
        display: "none",
      },
      [theme.breakpoints.up("md")]: {
        textAlign: "center",
        margin: "0 auto",
        "&:nth-of-type(2n)": {
          float: "none",
          margin: "0 auto",
        },
        "&:nth-of-type(2n):before": {
          display: "none",
        },
      },
    },
    heading: {
      color: "tomato",
      padding: "3rem 0",
      textTransform: "uppercase",
    },
    subHeading: {
      color: "#fff",
      padding: 0,
      textTransform: "uppercase",
    },
    body1: {
      color: "tomato",
    },
    subtitle1: {
      color: "tan",
    },
  }));
  
  const Experi = () => {
    const classes = useStyles();
    return (
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Working Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            june-2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
             Angular
            </Typography>
            <Typography variant="body1" align="center" className={classes.body1}>
              company name where worked
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.subtitle1}
            >
             starting learn angular and step by step learn and create new mini project for understanding and know about diffrent standard coding level.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Nov-2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              html & css
            </Typography>
            <Typography variant="body1" align="center" className={classes.body1}>
              company name where worked
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.subtitle1}
            >
              Zeronsec india pvt(junagadh) Company Name <br></br>
              any fornt-end developer know about html and css. beacause html its design besic and css is how to design manipulate.
              that's why important for front-end developer.

            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019-2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
               Javascript
            </Typography>
            <Typography variant="body1" align="center" className={classes.body1}>
              company name where worked
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.subtitle1}
            >
              Company Name : Zeronsec india pvt<br></br>
              Javascript is important when complete html/css.  and front-end developer for used functalities for javascript used.
              react library is depend on javascript beacause javascript is used react. 
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Nov-2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              React.js
            </Typography>
            <Typography variant="body1" align="center" className={classes.body1}>
              company name where worked
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.subtitle1}
            >
              Company Name : Zeronsec india pvt<br></br>
              
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default Experi;