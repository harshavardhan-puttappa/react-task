import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/userActions";

const Navbar = ({ title, icon, username, logoutUser, userLoggedIn }) => {
  const loggedInLinks = (
    <Fragment>
      <li> Hello {username}</li>
      <li>
        <a onClick={logoutUser} href="#!">
          <i className="fas fa-sign-out-alt" />
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </Fragment>
  );
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> <small>{title}</small>
      </h1>
      <ul>{userLoggedIn ? loggedInLinks : guestLinks}</ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Employee Details",
  icon: "fas fa-users"
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  username: state.username,
  userLoggedIn: state.userLoggedIn
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
