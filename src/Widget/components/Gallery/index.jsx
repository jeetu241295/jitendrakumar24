import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import "./style.css";

const styles = () => ({
  gallery: {
    display: "grid",
    gridColumn: "flex-start/flex-end",
    gridTemplateColumns: "repeat(8,1fr)",
    gridTemplateRows: "repeat(7,5vw)",
    gridGap: "1.5rem",
    padding: "1.5rem"
  }
});

const Gallery = props => {
  const { classes, images } = props;
  return (
    <Grid container className={classes.gallery}>
      {images.map((image, index) => (
        <figure className={`gallery__item gallery__item${index + 1}`}>
          <img src={image.url} alt={image.titile} className="gallery__img" />
        </figure>
      ))}
    </Grid>
  );
};

Gallery.propTypes = {
  class: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired
};
Gallery.defaultProps = {};

export default withStyles(styles)(Gallery);
