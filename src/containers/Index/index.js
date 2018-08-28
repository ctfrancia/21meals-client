import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import ShoppingList from '../ShoppingList';
import Planning from '../Planning';
import Recipes from '../Recipes/Recipes';
import BottomBar from '../../components/BottomBar';
import { changePageView } from '../../actions/page.actions';
class Index extends Component {
  handleSwitching = e => {
    this.props.changePageView(e);
  };

  render() {
    return (
      <div className="appBackground">
        <SwipeableViews
          className="SwipeableViews"
          index={this.props.pageIndex}
          resistance
          onSwitching={this.handleSwitching}
          style={{
            height: '100vh',
            backgroundColor: 'white',
            onSwitchingoverflow: 'hidden'
          }}
        >
          <Recipes />
          <Planning />
          <ShoppingList />
        </SwipeableViews>
        <BottomBar />
      </div>
    );
  }
}

Index.propTypes = {
  pageIndex: PropTypes.number,
  changePageView: PropTypes.func
};

const mapStateToProps = state => ({
  pageIndex: state.pages.pageIndex
});

const mapDispatchToProps = dispatch => ({
  changePageView: pageIndex => dispatch(changePageView(pageIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
