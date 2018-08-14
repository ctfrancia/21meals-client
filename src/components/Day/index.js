import React from "react";
import PropTypes from "prop-types";
import { Card, Avatar, List } from "antd";

import "./Day.css";
const { Meta } = Card;

function Day(props) {
  if (props.plan !== null) {
    console.log(props.plan);
    return <div className="day" onClick={props.handleClick}>
        <div className="day__side">
          <Avatar size="large" style={{ backgroundColor: "#87d068" }}>
            {props.plan.title[0]}
          </Avatar>
        </div>
        <div className="day__main">
          <div className="day__main--title">
            <p>{props.day}</p>
          </div>
          <div className="day__main--body">
            <p>{props.plan.title}</p>
          </div>
        </div>
      </div>;
  } else {
    return (
      <div className="day" onClick={props.handleClick}>
        <p />
        <p>{props.day}</p>
      </div>
    );
  }
}

Day.propTypes = {
  name: PropTypes.string,
  serves: PropTypes.string,
  imageUrl: PropTypes.string,
  handleClick: PropTypes.func
};

export default Day;
