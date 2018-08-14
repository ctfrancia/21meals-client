/**
 *
 * RecipeCard
 *
 */
import PropTypes from "prop-types";
import { Card } from "antd";
import React from "react";
import "./RecipeCard.css";
const { Meta } = Card;
// import styled from 'styled-components';
const styles = {
  card: { width: 170, borderRadius: 15 },
  img: {
    height: 130,
    borderRadius: "15px 15px 0 0 ",
    objectFit: "cover"
  }
};
function RecipeCard(props) {
  return (
    <div className="recipe_card" onClick={props.handleClick}>
      <Card
        hoverable
        style={styles.card}
        cover={<img alt={props.name} src={props.imageUrl} style={styles.img} />}
      >
        <Meta title={props.name} description={`Serves ${props.serves}`} />
      </Card>
    </div>
  );
}

RecipeCard.propTypes = {
  name: PropTypes.string,
  serves: PropTypes.string,
  imageUrl: PropTypes.string,
  handleClick: PropTypes.func
};

export default RecipeCard;
