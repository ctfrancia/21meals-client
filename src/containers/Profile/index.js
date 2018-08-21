import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {history} from '../../helpers/history';
import {logout} from '../../actions/user.actions';
import {Icon, Button } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

class Profile extends React.Component {

  logout = async () => {
    await this.props.logout()
    history.push('/')
  }

  render() {
    return (
      <div className="user__profile">
        <div className="user__info">
          <Icon type='user'/>
          <h1>{this.props.firstName}</h1>
        </div>
        <div className="user__info">
          <Icon type='user'/>
          <h1>{this.props.lastName}</h1>
        </div>
        <div className="user__info">
          <Icon type='user'/>
          <h1>{this.props.email}</h1>
        </div>

        <Button type="danger" onClick={this.logout}>Logout</Button>
      </div>);
  }
}

Profile.propTypes = {
  logout: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string
};

const mapStateToProps = state => ({firstName: state.authentication.user.first_name, lastName: state.authentication.user.last_name, email: state.authentication.user.email});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
