import React from "react";
import { withStyles } from "@material-ui/core";
import DialogJK from "../../../Components/Dialog";
import Grid from "@material-ui/core/Grid";

const styles = () => {};

const ImageClick = props => {
  const { image, imageOpen, index, dialogOpen } = props;
  return (
    <Grid>
      {image && (
        <DialogJK
          title={image.title}
          open={imageOpen}
          onClose={() => dialogOpen()}
          closeButton
        >
          <img
            src={require(`../../../static/images/gal-${index + 1}.jpg`)}
            alt={image.title}
            className="gallery__img"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block"
            }}
          />
        </DialogJK>
      )}
    </Grid>
  );
};
export default withStyles(styles)(ImageClick);
