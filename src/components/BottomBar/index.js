/**
 *
 * BottomBar
 *
 */
import { Layout, Icon } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import { changePageView } from '../../actions/page.actions';
import PropTypes from 'prop-types';
import './index.css';
const { Footer } = Layout;

class BottomBar extends React.Component {

  changeView(pageIndex) {
    this.props.changePageView(pageIndex);
  }

  render() {
    return (
      <Footer style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        bottom: 0,
        backgroundColor: 'black'
      }}>
      <div className="bottom-bar">
        <div className="bottom-bar__option" onClick={this.changeView.bind(this, 0)}>
          <Icon type="global"/>
        </div>
        <div className="bottom-bar__option" onClick={this.changeView.bind(this, 1)}>
          <Icon type="heart-o"/>
        </div>
        <div className="bottom-bar__option" onClick={this.changeView.bind(this, 2)}>
          <Icon type="calendar"/>
        </div>
        <div className="bottom-bar__option" onClick={this.changeView.bind(this, 3)}>
          <Icon type="shopping-cart"/>
        </div>
        <div className="bottom-bar__option" onClick={this.changeView.bind(this, 4)}>
          <Icon type="user"/>
        </div>
      </div>
    </Footer>);
  }
}

BottomBar.propTypes = {
  changePageView: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  changePageView: (pageIndex) => dispatch(changePageView(pageIndex))
});

export default connect(null, mapDispatchToProps)(BottomBar);
