import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Button.scss';
import Link from '../Link';

class Button extends Component {

  render() {
    return (
      <Link className={s.Button} to={this.props.link}>
        <span>{this.props.value}</span>
      </Link>
    );
  }
}

export default withStyles(Button, s);
