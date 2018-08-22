import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import ShoppingList from '../ShoppingList';
import Planning from '../Planning';
import Recipes from '../Recipes/Recipes';
import GlobalRecipes from '../GlobalRecipes';
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
            height: '94vh',
            backgroundColor: '#f3f2ea',
            onSwitchingoverflow: 'hidden'
          }}
        >
          <GlobalRecipes />
          <Recipes />
          <Planning />
          <ShoppingList />
          {/* <Profile /> */}
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
