import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { history } from '../../helpers/history';
import { logout } from '../../actions/user.actions';
import { Layout, Icon, Menu, Dropdown } from 'antd';
import './index.css';
import 'antd/dist/antd.css';
const { Header } = Layout;


class TopBar extends React.Component {
  constructor() {
    super();

  }

logout = async () => {
  await this.props.logout()
  history.push('/')
} 

  menu() {
    return (
      <Menu>
        <Menu.Item key="0">
          <Icon type="user" />
          <span>{this.props.firstName}</span>
        </Menu.Item>
        <Menu.Item key="1" onClick={this.logout}>
          <Icon type="logout" />
          <span>Logout</span>
        </Menu.Item>
      </Menu>
    );
  }
  render() {
    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="topbar">
          <div className="topbar__logo">
            <h2>{this.props.section}</h2>
          </div>
          <div className="topbar__options">
            <Dropdown overlay={this.menu()}>
              <Icon type="user" />
            </Dropdown>
          </div>
        </div>
      </Header>
    );
  }
}

TopBar.propTypes = {
  logout: PropTypes.func,
  firstName: PropTypes.string,
  section: PropTypes.string
};

const mapStateToProps = state => ({
  firstName: state.authentication.user.first_name
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);
