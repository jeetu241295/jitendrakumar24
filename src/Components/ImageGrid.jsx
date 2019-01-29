import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
// import tileData from "./tileData";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    height: "100vh"
  },
  gridList: {
    width: "100%",
    padding: 50,
    height: "100%"
  },
  img: {
    backgroundColor: "black",
    height: "25%"
  }
});
const ImageGridList = props => {
  const { classes } = props;
  const tileData = [
    { title: "1", img: "1", cols: 1 },
    { title: "2", img: "2", cols: 4 },
    { title: "3", img: "3", cols: 3 },
    { title: "4", img: "4", cols: 2 },
    { title: "1", img: "1", cols: 1 },
    { title: "2", img: "2", cols: 4 },
    { title: "3", img: "3", cols: 3 },
    { title: "4", img: "4", cols: 2 }
  ];
  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={5}>
        {tileData.map(tile => (
          <GridListTile
            className={classes.img}
            key={tile.img}
            cols={tile.cols || 1}
          >
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageGridList);
