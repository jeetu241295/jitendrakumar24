import React from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { intrests } from '../_helpers/constants';

const styles = {
  title: {
    color: 'common.black',
    fontSize: '1.75rem',
    letterSpacing: 1.25,
    fontFamily: 'cursive',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '1rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    opacity: 0,
    transform: 'translate(-50%,10%)',
    textTransform: 'uppercase',
    transition: 'all .5s'
  },
  intrestWrap: {
    display: 'inline-block'
  },
  avatarWrap: {
    position: 'relative',
    float: 'left',
    shapeOutside: 'circle(50% at 50% 40%)',
    marginRight: '3rem',
    overflow: 'hidden',
    transition: 'all .5s',
    backfaceVisibility: 'hidden',
    '&:hover': {
      transform: 'scale(0.95)',
      '& $avatar img': {
        filter: 'blur(3px) brightness(80%)'
      },
      '& $title': {
        opacity: 1,
        transform: 'translate(-50%,-50%)'
      }
    }
  },
  avatar: {
    width: '15rem',
    height: '15rem'
  },
  text: {
    textAlign: 'justify',
    fontSize: '1.5rem'
  }
};

const Intrests = () => {
  return (
    <Grid container spacing={5}>
      {intrests.map(item => (
        <Grid item xs={12} key={item.id} sx={styles.intrestWrap}>
          <Grid sx={styles.avatarWrap}>
            <Avatar alt={item.title} src={item.avatar} sx={styles.avatar} />
            <Grid sx={styles.title}>{item.title}</Grid>
          </Grid>
          <Grid sx={styles.text}>{item.content}</Grid>
        </Grid>
      ))}
    </Grid>
  );
};

Intrests.propTypes = {};

Intrests.defaultPtops = {};

export default Intrests;
