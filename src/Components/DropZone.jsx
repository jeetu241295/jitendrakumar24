import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import RootRef from '@material-ui/core/RootRef';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { Calender } from '../Global/SVG';

const PaperDropzone = () => {
  const [afiles, asetFiles] = useState([]);
  // const [loaded, uploadedProgress] = useState(0);
  // const [rfiles, rsetFiles] = useState([]);
  // const config = {
  //   onUploadProgress: progressEvent => {
  //     const percentCompleted = Math.round(
  //       (progressEvent.loaded * 100) / progressEvent.total
  //     );
  //     uploadedProgress(percentCompleted);
  //   }
  // };
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: '.doc,.docx,.jpeg,.jpg,.png,.odt,.xls,.xlsx,.pdf',
    maxSize: 1024 * 5,
    multiple: false,
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles, rejectedFiles) => {
      asetFiles(acceptedFiles.map(file => Object.assign(file)));
      // eslint-disable-next-line no-alert
      rejectedFiles.map(file => alert(`${file.name} exceeds file limit 5MB `));
      // rsetFiles(rejectedFiles.map(file => Object.assign(file)));
    }
  });
  const { ref, ...rootProps } = getRootProps();
  const adelete = i => {
    asetFiles(afiles.filter((item, index) => index !== i));
  };
  // const rdelete = i => {
  //   rsetFiles(rfiles.filter((item, index) => index !== i));
  // };
  return (
    <React.Fragment>
      {afiles.length === 0 && (
        <RootRef rootRef={ref}>
          <Grid {...rootProps}>
            <IconButton disableRipple onClick={open}>
              <Calender />
            </IconButton>
            <TextField inputProps={{ ...getInputProps() }} />
          </Grid>
        </RootRef>
      )}
      {afiles &&
        afiles.map((file, index) => (
          <Grid key={file.name}>
            {file.name} - {file.size} bytes
            <IconButton disableRipple onClick={() => adelete(index)}>
              <Calender />
            </IconButton>
          </Grid>
        ))}
      {/* {rfiles &&
        rfiles.map(file =>
          // <Grid key={file.name}>
          //   {file.name} - {file.size} bytes
          //   <IconButton disableRipple onClick={() => rdelete(index)}>
          //     <Calender />
          //   </IconButton>
          // </Grid>
          alert(`${file.name} exceeds file limit 5MB `)
        )} */}
    </React.Fragment>
  );
};
PaperDropzone.propTypes = {};

export default PaperDropzone;
