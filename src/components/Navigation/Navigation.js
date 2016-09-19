import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.scss';
import Link from '../Link';

class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  toggleDropdown() {
    return document.getElementsByClassName(s.ulNav)[0].classList.toggle(s.responsive);
  };

  render() {
    return (
      <div className={cx(s.root, this.props.className)} role="navigation">

        <h1 className={s.NavHeader}>Sara Frederixon</h1>
        <div className={s.LinkDiv}>
          <ul className={s.ulNav}>

            <li> <Link className={s.Link} to="/">
              <span>Home</span>
            </Link> </li>

            <li> <Link className={s.Link} to="/photography">
              <span>Photography</span>
            </Link></li>

            <li> <Link className={s.Link} to="/projects">
              <span>Projects</span>
            </Link> </li>

            <li> <Link className={s.Link} to="/about">
              <span>About</span>
            </Link> </li>

            <li className={s.icon}>
              <a onClick={this.toggleDropdown}>&#9776;</a>
            </li>

          </ul>
        </div>
        <div className={s.hrDiv}>
          <hr />
        </div>
      </div>
    );
  }

}

export default withStyles(Navigation, s);

