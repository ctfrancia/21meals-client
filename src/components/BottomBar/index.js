/**
 *
 * BottomBar
 *
 */

import { Layout, Icon } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const { Footer } = Layout;
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function BottomBar() {
  return (
    <Footer
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        bottom: 0,
        backgroundColor: 'black',
      }}
    >
      <div className="bottom-bar">
        <div className="bottom-bar__option">
          <Link to="/">
            <Icon type="heart-o" />
          </Link>
        </div>
        <div className="bottom-bar__option">
          <Icon type="calendar" />
        </div>
        <div className="bottom-bar__option">
          <Link to="/list">
            <Icon type="shopping-cart" />
          </Link>
        </div>
      </div>
    </Footer>
  );
}

BottomBar.propTypes = {};

export default BottomBar;
