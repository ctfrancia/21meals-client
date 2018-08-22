import React from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../../assets/logo.svg';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { login } from '../../actions/user.actions';
const FormItem = Form.Item;

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }
  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.logIn(this.state);
  };
  render() {
    return (
      <div className="login-page">
        <div className="login-page__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="login-page__form">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              <Input
                required
                onChange={this.handleUsernameChange}
                value={this.state.username}
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Email address"
              />
            </FormItem>
            <FormItem>
              <Input
                required
                onChange={this.handlePasswordChange}
                value={this.state.password}
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />
            </FormItem>
            <FormItem>
              {this.props.loggingIn ? (
                <Button block type="primary" className="login-form-button" loading>
                  Logging In...
                </Button>
              ) : (
                <Button block
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
              )}
            </FormItem>
            <FormItem className="login-form__options">
              <Link className="login-form-forgot" to="/main">
                Forgot password
              </Link>
            </FormItem>
            <FormItem className="login-form__options">
              <Link className="login-form-forgot" to="/signup">
                register now!
              </Link>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func,
  loggingIn: PropTypes.bool
};

const mapStateToProps = state => ({
  loggingIn: state.authentication.logging_in
});

const mapDispatchToProps = dispatch => ({
  logIn: (data)=> dispatch(login(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
