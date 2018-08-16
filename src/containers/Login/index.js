import React from 'react';
import './Login.css';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../../assets/logo.svg';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
const FormItem = Form.Item;

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      submitted: false
    };
  }
  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault()
    // console.log('aaaaa');
    
  }
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
                onChange={this.handleUsernameChange}
                value={this.state.username}
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
              />
            </FormItem>
            <FormItem>
              <Input
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
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in 
                {/* <Link to="/">Log in </Link> */}
              </Button>
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

Login.propTypes = {};

// const mapStateToProps = state => ({

// });

// const mapDispatchToProps = dispatch => ({
// });

export default connect()(Login);
// mapStateToProps
// mapDispatchToProps
