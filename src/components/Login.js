import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { validateUser } from "../actions/userActions";

class Login extends Component {
  state = {
    uname: "",
    pwd: "",
    message: ""
  };

  onSubmit = async e => {
    e.preventDefault();
    await this.props.validateUser(this.state.uname, this.state.pwd);
    if (this.props.userLoggedIn) {
      this.props.history.push("/dashboard");
    } else {
      this.setState((state, props) => {
        return { message: "invalid user", uname: "", pwd: "" };
      });
      setTimeout(() => {
        this.setState((state, props) => {
          return { message: "" };
        });
      }, 3000);

      //* With React Implementation
      // if (this.state.uname === this.props.username && this.state.pwd === this.props.password) {
      //   this.props.history.push("/dashboard");
      // } else {
      //   this.setState((state, props) => {
      //     return { message: "invalid user", uname: "", pwd: "" };
      //   });
      //   setTimeout(() => {
      //     this.setState((state, props) => {
      //       return { message: "" };
      //     });
      //   }, 3000);
      // }
    }
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        {this.state.message && <div className="alert alert-danger">{this.state.message}</div>}
        <div className="form-container">
          <h1 className="text-primary text-center"> Login</h1>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="email">Username</label>
              <input type="email" ref="uname" className="form-control" name="uname" value={this.state.uname} onChange={this.onChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" ref="pwd" className="form-control" name="pwd" value={this.state.pwd} onChange={this.onChange} required />
            </div>
            <div className="form-group">
              <input type="submit" value="Login" className="btn btn-primary btn-block" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  userLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  username: state.username,
  password: state.password,
  userLoggedIn: state.userLoggedIn
});
export default connect(
  mapStateToProps,
  { validateUser }
)(Login);
