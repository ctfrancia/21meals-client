/**
 *
 * RecipeCard
 *
 */
import PropTypes from 'prop-types';
import { Card } from 'antd';
import React from 'react';
import './RecipeCard.css';
const { Meta } = Card;
// import styled from 'styled-components';

function RecipeCard(props) {
  return (
    <div className="recipe_card" onClick={props.handleClick}>
      <Card
        hoverable
        style={{ width: 170, borderRadius: 15 }}
        cover={
          <img
            alt={props.name}
            src={props.imageUrl}
            style={{
              height: 130,
              borderRadius: '15px 15px 0 0 ',
              objectFit: 'cover',
            }}
          />
        }
      >
        <Meta title={props.name} description={`Serves ${props.serves}`}/>
      </Card>
    </div>
  );
}

RecipeCard.propTypes = {
  name: PropTypes.string,
  serves: PropTypes.string,
  imageUrl: PropTypes.string,
  handleClick: PropTypes.func,
};

export default RecipeCard;
