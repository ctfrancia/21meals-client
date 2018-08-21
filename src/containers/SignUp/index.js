import React from 'react';
import './SignUp.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../../assets/logo.svg';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { register } from '../../actions/user.actions';
const FormItem = Form.Item;

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        submitted: false
      }
    };
  }
  handleChange = (event) => {
    
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.register(this.state.user)
   
    
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
                onChange={this.handleChange}
                name="first_name"
                value={this.state.user.first_name}
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="First name"
              />
            </FormItem>
            <FormItem>
              <Input required
                onChange={this.handleChange}
                name="last_name"
                value={this.state.user.last_name}
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Last name"
              />
            </FormItem>
            <FormItem>
              <Input required
                onChange={this.handleChange}
                value={this.state.user.email}
                name="email"
                prefix={
                  <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Email address"
              />
            </FormItem>
            <FormItem>
              <Input required
                onChange={this.handleChange}
                value={this.state.user.password}
                name="password"
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />
            </FormItem>
            <FormItem>
              {this.props.loggingIn ? (
                <Button type="primary" className="login-form-button" loading>
                  Registering...
                </Button>
              ) : (
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Register
                </Button>
                )}
            </FormItem>
            
            <FormItem className="login-form__options">
              <Link to="/login" className="login-form-forgot">
                Log in
              </Link>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  register: PropTypes.func,
  loggingIn: PropTypes.bool
};

const mapStateToProps = state => ({
  loggingIn: state.authentication.logging_in
});

const mapDispatchToProps = dispatch => ({
register: (data) => dispatch(register(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

