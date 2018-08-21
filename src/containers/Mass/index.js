import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import ShoppingList from '../ShoppingList';
import Planning from '../Planning';
import Recipes from '../Recipes/Recipes';
import TopBar from '../../components/TopBar';
import GlobalRecipes from '../GlobalRecipes';
import BottomBar from '../../components/BottomBar';
import Profile from '../Profile';
class Index extends Component {

  render() {
    return (
      <div className="appBackground">
        <SwipeableViews className="SwipeableViews" index={this.props.pageIndex} resistance style={{ height: '94vh', backgroundColor: '#252134', overflow: 'hidden'}}>
          <GlobalRecipes />
          <Recipes />
          <Planning />
          <ShoppingList />
          <Profile />
        </SwipeableViews>
        <BottomBar />
      </div>
    );
  }
}

Index.propTypes = {
  pageIndex: PropTypes.number,
};

const mapStateToProps = state => ({
  pageIndex: state.pages.pageIndex,
});

export default connect(
  mapStateToProps,
)(Index);
