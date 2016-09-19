import Navigation from '../Navigation';
import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './photography.scss';

class Photography extends Component {
  render() {
    return (
      <div className={s.root}>
        <Navigation />
      </div>
    );
  }
}

export default withStyles(Photography, s);
