import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import ProgressBar from "../../../Components/ProgressBar";
import Button from "../../../Components/Button";

const styles = theme => ({
  about: {
    display: "flex",
    padding: "10rem",
    alignItems: "flex-start",
    [theme.breakpoints.down("md")]: {
      padding: "3rem"
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1.5rem"
    }
  },
  imageWrap: {
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      display: "block"
    },
    padding: "2rem",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1rem",
      padding: 0
    }
  },
  skills: {
    position: "relative",
    padding: "2.5rem",
    [theme.breakpoints.down("md")]: {
      padding: "0.5rem"
    },
    "&:last-child": {
      [theme.breakpoints.down("md")]: {
        marginTop: 0
      }
    }
  },
  aboutMe: {
    position: "relative",
    padding: "2.5rem",
    alignSelf: "center",
    [theme.breakpoints.down("md")]: {
      padding: "0.5rem"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
      marginBottom: "1rem"
    }
  },
  titleBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: "2px",
    height: "2px",
    width: "3rem",
    margin: "2rem",
    backgroundColor: theme.colors.mainAction,
    [theme.breakpoints.down("md")]: {
      margin: 0
    }
  },
  title: {
    fontSize: "2rem",
    fontWeight: 500
  },
  hire: {
    borderRadius: "50px",
    padding: "0.5rem 2rem",
    "&:hover": {
      color: theme.colors.white
    }
  },
  resume: {
    borderRadius: "50px",
    backgroundColor: theme.colors.buttonColor,
    marginLeft: "1rem",
    padding: "0.5rem 2rem",
    "&:hover": {
      color: theme.colors.white,
      backgroundColor: theme.colors.buttonColor
    }
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  description: {
    fontSize: "1.5rem",
    margin: "2rem 0",
    textAlign: "justify",
    lineHeight: "1.5rem"
  },
  mottoWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  motto: {
    fontSize: "3rem",
    fontWeight: 900,
    textAlign: "center",
    color: "transparent",
    background: `url(${require("../../../static/images/motto.jpg")})`,
    backgroundSize: "cover",
    backgroundPosition: "50% 46%",
    WebkitBackgroundClip: "text",
    backgroundRepeat: "no-repeat"
  }
});

const About = props => {
  const { classes, skills } = props;
  return (
    <Grid container className={classes.about}>
      <Grid className={classes.imageWrap} item sm={5} xs={12}>
        <img src={require("../../../static/images/about.jpg")} alt="My Pic" />
      </Grid>
      <Grid className={classes.aboutMe} item sm={7} xs={12}>
        <Grid className={classes.titleBorder} />
        <Typography className={classes.title} variant="h3" component="h3">
          About Me
        </Typography>
        <Typography
          className={classes.description}
          variant="body1"
          component="p"
        >
          &emsp; Hey, this is my homepage, so I have to say something about
          myself. Sometimes it is hard to introduce yourself because you know
          yourself so well that you do not know where to start with. Let me give
          a try to see what kind of image you have about me through my
          self-description. I hope that my impression about myself and your
          impression about me are not so different. Here it goes.
        </Typography>
        <Typography
          className={classes.description}
          variant="body1"
          component="p"
        >
          &emsp; I became very interested in acquire more knowledge about
          computers, so I begun my studies at the VR Siddhartha Engineering
          College. More than computers I am fancied about Mechanical but fate
          turned me into the Software Engineer and seriously I am thankful to
          it.
        </Typography>
        <Typography
          className={classes.description}
          variant="body1"
          component="p"
        >
          &emsp; I regard myself to be a very open minded person, ready for new
          challenge, especially when it comes to technology. People consider me
          to be a social, temperamental person who doesn't hesitate in giving my
          opinion for what I think and believe in, honest and respectfully. They
          see me like a purposeful person and good in maintaining secrets.
        </Typography>
        <Typography
          className={classes.description}
          variant="body1"
          component="p"
        >
          &emsp; I am an enthusiastic, self-motivated, reliable, responsible and
          hard working person. I believe my strengths are that I am able to work
          well under pressure and adhere to strict deadlines. I am a mature team
          worker and adaptable to all challenging situations.
        </Typography>
        <Grid className={classes.buttons}>
          <Button type={1} className={classes.hire} onClick={() => {}}>
            Hire Me
          </Button>
          <Button type={1} className={classes.resume} onClick={() => {}}>
            Download CV
          </Button>
        </Grid>
      </Grid>
      <Grid className={classes.skills} item sm={4} xs={12}>
        <Grid className={classes.titleBorder} />
        <Typography className={classes.title} variant="h3" component="h3">
          My Skills
        </Typography>
      </Grid>
      <Grid className={classes.skills} item sm={8} xs={12}>
        {skills.map(skill => (
          <ProgressBar
            key={skill.title}
            heading={skill.title}
            value={skill.value}
          />
        ))}
      </Grid>
      <Grid item xs={12} className={classes.mottoWrap}>
        <Typography className={classes.motto} variant="h1" component="h1">
          My life motto is 'Do my best, so that I can't blame myself for
          anything.
        </Typography>
      </Grid>
    </Grid>
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired,
  skills: PropTypes.array.isRequired
};
About.defaultProps = {};

export default withStyles(styles)(About);
