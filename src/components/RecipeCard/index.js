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
// import styled from 'styled-components';

const styles = {
  card: { width: 155, borderRadius: 15 },
  img: {
    height: 75,
    width: 105,
    borderRadius: '5px ',
    objectFit: 'none',
    filter: 'grayscale()'
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
    return (
      <div className="recipe_card">
        <div className="recipe_card--main" onClick={this.showModal}>
          <div className="recipe_card--info">
            <h2>{this.props.name}</h2>
          </div>
          <div className="recipe_card--image">
            <img
              alt={this.props.name}
              src={this.props.imageUrl ? this.props.imageUrl : recipePlaceHolder}
              style={styles.img}
            />
          </div>
        </div>

        <Modal
          title={this.props.name}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <img
            alt={this.props.name}
            src={this.props.imageUrl}
            style={styles.modalImg}
          />
        </Modal>
      </div>
    );
  }
}

RecipeCard.propTypes = {
  name: PropTypes.string,
  serves: PropTypes.string,
  imageUrl: PropTypes.string,
  handleClick: PropTypes.func
};

export default RecipeCard;
