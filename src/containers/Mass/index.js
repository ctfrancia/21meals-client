import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import ShoppingList from '../ShoppingList';
import Planning from '../Planning';
import Recipes from '../Recipes/Recipes';
import TopBar from '../../components/TopBar';
// import BottomBar from '../../components/BottomBar';
export default class Index extends Component {


  render() {
    return (
      <div className="appBackground">
        <TopBar />
        <SwipeableViews resistance style={{ height: '100vh', backgroundColor: '#252134'}}>
          <Recipes />
          <Planning />
          <ShoppingList />
        </SwipeableViews>
        {/* <BottomBar /> */}
      </div>
    );
  }
}
