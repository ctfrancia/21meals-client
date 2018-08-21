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
    return <Footer style={{ position: 'fixed', zIndex: 1, width: '100%', bottom: 0, backgroundColor: 'black' }}>
        <div className="bottom-bar">
          <div className="bottom-bar__option" onClick={this.changeView.bind(this, 0)}>
          {this.props.currentPage === 0 ? <Icon type="global" style={{ color: '#e69b76' }} /> : <Icon type="global" style={{ color: 'white' }} />}
          </div>
          <div className="bottom-bar__option" onClick={this.changeView.bind(this, 1)}>
          {this.props.currentPage === 1 ? <Icon type="heart-o" style={{ color: '#e69b76' }} /> : <Icon type="heart-o" style={{ color: 'white' }} />}
          </div>
          <div className="bottom-bar__option" onClick={this.changeView.bind(this, 2)}>
          {this.props.currentPage === 2 ? <Icon type="calendar" style={{ color: '#e69b76' }} /> : <Icon type="calendar" style={{ color: 'white' }} />}
          </div>
          <div className="bottom-bar__option" onClick={this.changeView.bind(this, 3)}>
            {this.props.currentPage === 3 ? <Icon type="shopping-cart" style={{ color: '#e69b76' }} /> : <Icon type="shopping-cart" style={{ color: 'white' }} />}
          </div>
          <div className="bottom-bar__option" >
            {<Icon type="poweroff" style={{ color: 'white' }} />}
          </div>
        </div>
      </Footer>;
  }
}

BottomBar.propTypes = {
  changePageView: PropTypes.func,
  
};
const mapStateToProps = state => ({
  currentPage: state.pages.pageIndex
})
const mapDispatchToProps = dispatch => ({
  changePageView: (pageIndex) => dispatch(changePageView(pageIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar);
