import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import "./style.css";
import ImageClick from "./ImageClick";

const styles = theme => ({
  memories: {
    display: "grid",
    gridColumn: "flex-start/flex-end",
    gridTemplateColumns: "repeat(8,1fr)",
    gridTemplateRows: "repeat(7,5vw)",
    gridGap: "1.5rem",
    [theme.breakpoints.down("xs")]: {
      gridGap: "1rem"
    },
    [theme.breakpoints.down("sm")]: {
      gridGap: "0.5rem"
    }
  },
  title: {
    backgroundImage: `linear-gradient(to right bottom,${theme.colors.primary},${
      theme.colors.secondary
    })`,
    fontSize: "4rem",
    textTransform: "uppercase",
    fontWeight: 900,
    marginBottom: "2rem",
    WebkitBackgroundClip: "text",
    color: "transparent"
  },
  gallery: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10rem",
    paddingTop: "2rem",
    [theme.breakpoints.down("md")]: {
      padding: "5rem"
    },
    [theme.breakpoints.down("xs")]: {
      padding: "3rem"
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1.5rem"
    }
  }
});

const Gallery = ({ classes, ...props }) => {
  const { images, dialogOpen } = props;
  return (
    <Grid container className={classes.gallery}>
      <Grid>
        <Typography className={classes.title} component="h2" variant="h2">
          My Memories
        </Typography>
      </Grid>
      <Grid className={classes.memories}>
        {images.map((image, index) => (
          <Grid
            onClick={() => dialogOpen(index, image)}
            className={`gallery__item gallery__item${index + 1}`}
          >
            <img
              src={require(`../../../static/images/gal-${index + 1}.jpg`)}
              alt={image.title}
              className="gallery__img"
            />
          </Grid>
        ))}
      </Grid>
      <ImageClick {...props} />
    </Grid>
  );
};

Gallery.propTypes = {
  classes: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
  dialogOpen: PropTypes.func.isRequired
};
Gallery.defaultProps = {};

export default withStyles(styles)(Gallery);
