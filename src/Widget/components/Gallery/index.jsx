import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import "./style.css";

const styles = () => ({
  memories: {
    display: "grid",
    gridColumn: "flex-start/flex-end",
    gridTemplateColumns: "repeat(8,1fr)",
    gridTemplateRows: "repeat(7,5vw)",
    gridGap: "1.5rem",
    padding: "1.5rem"
  },
  gallery: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

const Gallery = props => {
  const { classes, images } = props;
  return (
    <Grid container className={classes.gallery}>
      <Grid className={classes.heading}>
        <Typography component="h2" variant="h2">
          My Memories
        </Typography>
      </Grid>
      <Grid className={classes.memories}>
        {images.map((image, index) => (
          <figure className={`gallery__item gallery__item${index + 1}`}>
            <img
              src={require(`../../../static/images/gal-${index + 1}.jpg`)}
              alt={image.titile}
              className="gallery__img"
            />
          </figure>
        ))}
      </Grid>
    </Grid>
  );
};

Gallery.propTypes = {
  class: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired
};
Gallery.defaultProps = {};

export default withStyles(styles)(Gallery);
