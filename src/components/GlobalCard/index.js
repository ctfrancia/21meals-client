import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Modal } from 'antd';
import { getOneRecipe } from '../../actions/recipes.actions';

const { Meta } = Card;
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
    height: '12rem'
  }
};

class GlobalCard extends Component {
  constructor() {
    super();
    this.state = {
      recipe: { title: '', instructions: '', photo: '', ingredients: [] },
      visible:false
    };
  }
  showRecipe(id) {
    this.props.getOneRecipe(id);
    this.setState({
      ...this.state,
      recipe: {
        ...this.state.recipe,
        title: this.props.title,
        photo: this.props.photo
      }
    });
  }
  componentDidMount() {
    
  }

  showModal = id => {
    this.showRecipe(id);
    this.setState({
      ...this.state,
      visible: true
    });
    console.log(this.state);
  };
  
  handleOk = () => {
    this.setState({
      ...this.state,
      visible: false
    });
    console.log(this.state);
  };

  handleCancel = () => {
    this.setState({ ...this.state, visible: false });
  };

  render() {
    return (
      <div className="recipe_card">
        <Card
          hoverable
          onClick={this.showModal.bind(this, this.props.id)}
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
        </Modal>
      </div>
    );
  }
}

GlobalCard.propTypes = {
  name: PropTypes.string,
  serves: PropTypes.string,
  imageUrl: PropTypes.string,
  handleClick: PropTypes.func
};

const mapStateToProps = state => ({
  recipeDetails: state.pages.globalRecipe
});
const mapDispatchToProps = dispatch => ({
  getOneRecipe: RecipeID => dispatch(getOneRecipe(RecipeID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalCard);
