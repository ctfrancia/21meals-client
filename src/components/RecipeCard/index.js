/**
 *
 * RecipeCard
 *
 */
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import React from 'react';
import './RecipeCard.css';
import recipePlaceHolder from '../../assets/food.jpg';
import { connect } from 'react-redux';
// import styled from 'styled-components';

const styles = {
  card: { width: 155, borderRadius: 15 },
  img: {
    height: 75,
    width: 105,
    borderRadius: '5px ',
    objectFit: 'cover'
  },
  modalImg: {
    objectFit: 'cover',
    borderRadius: '15px ',
    width: '100%',
    height: 'auto'
  }
};
class RecipeCard extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
  }

  getRecipeInfo = () => {};

  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = () => {
    this.setState({
      visible: false
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return <div className="recipe_card">
        <div className="recipe_card--main" onClick={this.showModal}>
          <div className="recipe_card--info">
            <h2>{this.props.name}</h2>
          </div>
          <div className="recipe_card--image">
            <img alt={this.props.name} src={this.props.imageUrl ? this.props.imageUrl : recipePlaceHolder} style={styles.img} />
          </div>
        </div>

        <Modal title={this.props.name} visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
          <div className="recipe_modal--header">
            <img alt={this.props.name} src={this.props.imageUrl ? this.props.imageUrl : recipePlaceHolder} style={styles.modalImg} />
          </div>
          <div className="recipe_modal--Body">
            <h3>Ingredients</h3>
            <ul>
              {this.props.recipes[this.props.id].ingredients.map(
                (el, i) => {
                  return (
                    <li key={i}>
                      <span className="volume">{`(${
                        this.props.ingredientsRecipe[el].amount
                      } 
                     ${this.props.ingredientsRecipe[el].measure}) `} </span>
                      {`${
                        this.props.allIngredients[
                          this.props.ingredientsRecipe[el].ingredient_id
                        ].name
                      }`}
                    </li>
                  );
                }
              )}
            </ul>
            
          </div>
        </Modal>
      </div>;
  }
}

RecipeCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  serves: PropTypes.string,
  imageUrl: PropTypes.string,
  handleClick: PropTypes.func,
  recipes: PropTypes.object,
  ingredientsRecipe: PropTypes.object,
  allIngredients: PropTypes.object
};

const mapStateToProps = state => ({
  measures: state.entities.measures,
  ingredients_types: state.entities.ingredients_types,
  allIngredients: state.entities.allIngredients,
  recipes: state.entities.recipes,
  ingredientsRecipe: state.entities.ingredients_recipe
});

export default connect(mapStateToProps)(RecipeCard);
