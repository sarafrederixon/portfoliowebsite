import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Landing.scss';

import Button from '../Button';


class Landing extends Component {
  render() {
    return (
      <div className={s.LandingContent}>
        <h1 className={s.LandingHeader}>Sara Frederixon</h1>
        <div className={s.LandingButtons}>
          <Button value="Photographer" link="/photography"/>
          <Button value="Developer" link="/photography"/>
        </div>
      </div>
    );
  }

}

export default withStyles(Landing, s);
