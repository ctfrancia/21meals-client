/**
 *
 * BottomBar
 *
 */
import { Layout, Icon, Popconfirm } from 'antd';
import React from 'react';
import { connect} from 'react-redux';
import { changePageView } from '../../actions/page.actions';
import PropTypes from 'prop-types';
import './index.css';
import { logout } from '../../actions/user.actions';
const { Footer } = Layout;

class BottomBar extends React.Component {
  logout = () => {
    this.props.logout()
  }
  changeView(pageIndex) {
    this.props.changePageView(pageIndex);
  }

  render() {
    return <Footer style={{ position: 'fixed', zIndex: 1, width: '100%', bottom: 0, backgroundColor: 'black' }}>
        <div className="bottom-bar">
          <div className="bottom-bar__option" onClick={this.changeView.bind(this, 0)}>
            {this.props.currentPage === 0 ? <Icon type="heart-o" style={{ color: '#e69b76' }} /> : <Icon type="heart-o" style={{ color: 'white' }} />}
          </div>
          <div className="bottom-bar__option" onClick={this.changeView.bind(this, 1)}>
            {this.props.currentPage === 1 ? <Icon type="calendar" style={{ color: '#e69b76' }} /> : <Icon type="calendar" style={{ color: 'white' }} />}
          </div>
          <div className="bottom-bar__option" onClick={this.changeView.bind(this, 2)}>
            {this.props.currentPage === 2 ? <Icon type="shopping-cart" style={{ color: '#e69b76' }} /> : <Icon type="shopping-cart" style={{ color: 'white' }} />}
          </div>
          <div className="bottom-bar__option">
            <Popconfirm onConfirm={this.logout} icon={<Icon type="frown-o" style={{ color: '#e69b76' }} />} placement="topRight" title="Do you REALLY want to logout?" okText="Yes" cancelText="No">
              {<Icon type="poweroff" style={{ color: 'white' }} />}
            </Popconfirm>
          </div>
        </div>
      </Footer>;
  }
}

BottomBar.propTypes = {
  changePageView: PropTypes.func,
  logout: PropTypes.func,
  currentPage: PropTypes.number
  
};
const mapStateToProps = state => ({
  currentPage: state.pages.pageIndex
})
const mapDispatchToProps = dispatch => ({
  changePageView: (pageIndex) => dispatch(changePageView(pageIndex)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar);
