/**
 *
 * RecipeCard
 *
 */
import PropTypes from 'prop-types';
import { Card, Modal } from 'antd';
import React from 'react';
import './RecipeCard.css';
const { Meta } = Card;
// import styled from 'styled-components';

const styles = {
  card: { width: 155, borderRadius: 15 },
  img: {
    height: 130,
    borderRadius: '15px ',
    objectFit: 'cover'
  },
  modalImg: {
    objectFit: 'cover',
    borderRadius: '15px ',
    width: '100%',
    height:'auto'
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
        <Card
          hoverable
          onClick={this.showModal}
          style={styles.card}
          cover={
            <img
              alt={this.props.name}
              src={this.props.imageUrl}
              style={styles.img}
            />
          }
        >
          <Meta title={this.props.name} />
        </Card>
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
          <ul>

          </ul>
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
