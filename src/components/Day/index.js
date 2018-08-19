import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, List, Modal, Button } from 'antd';
import { connect } from 'react-redux';

import './Day.css';
import { changeMeal } from '../../actions/plans.actions';

class Day extends React.Component {
  constructor() {
    super();
    this.state = { visible: false };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    e.stopPropagation();
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    e.stopPropagation();
    this.setState({
      visible: false
    });
  };

  handleRecipeChange = (item, e) => {
    e.stopPropagation();
    this.setState({ visible: false });
    if (item === undefined) {
      this.props.changeMeal(
        undefined,
        this.props.meal_id,
        this.props.day,
        this.props.meal_time
      );
    } else {
      this.props.changeMeal(
        item.id,
        this.props.meal_id,
        this.props.day,
        this.props.meal_time
      );
    }
  };

  render() {
    if (this.props.recipe !== undefined) {
      return (
        <div className="day monday" onClick={this.showModal}>
          {/* <div className="day__side">
            <Avatar size="large" style={{ backgroundColor: '#87d068' }}>
              {this.props.recipe.title[0]}
            </Avatar>
          </div> */}
          <div className="day__main">
            <div className="day__main--title">
              <p>
                {this.props.day} - {this.props.meal_time}
              </p>
            </div>
            <div className="day__main--body">
              <Modal
                title={`Choose a recipe for ${this.props.day}`}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                  <Button
                    key="delete"
                    type="danger"
                    onClick={this.handleRecipeChange.bind(this, undefined)}
                  >
                    Clear this meal
                  </Button>,
                  <Button key="back" onClick={this.handleCancel}>
                    Return
                  </Button>,
                ]}
              >
                <List
                  itemLayout="horizontal"
                  dataSource={this.props.allRecipes}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar>{item.title[0]}</Avatar>}
                        title={item.title}
                        onClick={this.handleRecipeChange.bind(this, item)}
                        
                      />
                    </List.Item>
                  )}
                />
                ,
              </Modal>
              <p>{this.props.recipe.title}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="day" onClick={this.showModal}>
          {/* <div className="day__side">
            <Avatar size="large" style={{ backgroundColor: '#87d068' }}>
              O
            </Avatar>
          </div> */}
          <div className="day__main">
            <div className="day__main--title">
              <p>{this.props.day}</p>
            </div>
            <div className="day__main--body">
              <Modal
                title={`Choose a recipe for ${this.props.day}`}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                  <Button key="back" onClick={this.handleCancel}>
                    Return
                  </Button>
                ]}
              >
                <List
                  itemLayout="horizontal"
                  dataSource={this.props.allRecipes}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar>{item.title[0]}</Avatar>}
                        title={item.title}
                        onClick={this.handleRecipeChange.bind(this, item)}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      />
                    </List.Item>
                  )}
                />
                ,
              </Modal>
              <p>No meal planned!</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

Day.propTypes = {
  name: PropTypes.string,
  serves: PropTypes.string,
  imageUrl: PropTypes.string,
  handleClick: PropTypes.func,
  recipe: PropTypes.object,
  day: PropTypes.string,
  meal_time: PropTypes.string,
  changeMeal: PropTypes.func,
  meal_id: PropTypes.number,
  allRecipes: PropTypes.array
};

const mapStateToProps = (state, props) => ({
  recipe: state.entities.recipes[props.recipe],
  allRecipes: Object.values(state.entities.recipes)
});

const mapDispatchToProps = dispatch => ({
  changeMeal: (mealId, recipeId, day, mealTime) =>
    dispatch(changeMeal(mealId, recipeId, day, mealTime))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Day);
