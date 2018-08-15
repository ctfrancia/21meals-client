import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import { connect } from 'react-redux';

import './Day.css';

function Day(props) {
  
  if (props.recipe !== undefined) {
    return (
      <div className="day" onClick={props.handleClick}>
        <div className="day__side">
          <Avatar size="large" style={{ backgroundColor: '#87d068' }}>
            {props.recipe.title[0]}
          </Avatar>
        </div>
        <div className="day__main">
          <div className="day__main--title">
            <p>{props.day}</p>
          </div>
          <div className="day__main--body">
            <p>{props.recipe.title}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="day" onClick={props.handleClick}>
        <div className="day__side">
          <Avatar size="large" style={{ backgroundColor: '#87d068' }}>
            O
          </Avatar>
        </div>
        <div className="day__main">
          <div className="day__main--title">
            <p>{props.day}</p>
          </div>
          <div className="day__main--body">
          <p>EATING OUT</p>
          </div>
        </div>
      </div>;
  }
}

Day.propTypes = {
  name: PropTypes.string,
  serves: PropTypes.string,
  imageUrl: PropTypes.string,
  handleClick: PropTypes.func
};
const mapStateToProps = (state, props) => ({
  recipe: state.entities.recipes[props.recipe]
});
export default connect(
  mapStateToProps
)(Day);
