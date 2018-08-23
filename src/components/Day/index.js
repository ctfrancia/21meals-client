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

  handleRecipeChange = async (item, e) => {
    e.stopPropagation();
    this.setState({ visible: false });
    if (item === undefined) {
      await this.props.changeMeal(null, this.props.meal_id, this.props.planId);
    } else {
      await this.props.changeMeal(
        item.id,
        this.props.meal_id,
        this.props.planId
      );
    }
  };

  render() {
    if (this.props.recipe !== undefined) {
      return <div className="day" onClick={this.showModal}>
          <div className="day__main">
            <div className="day__main--title">
              <p>
                <strong>{this.props.meal_time}</strong>
              </p>
            </div>
            <div className="day__main--body">
              <Modal title={`Choose a recipe for ${this.props.day}`} visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel} footer={[<Button key="delete" type="danger" onClick={this.handleRecipeChange.bind(this, undefined)}>
                    Clear this meal
                  </Button>, <Button key="back" onClick={this.handleCancel}>
                    Return
                  </Button>]}>
                <List itemLayout="horizontal" dataSource={this.props.allRecipes} renderItem={item => <List.Item>
                      <List.Item.Meta avatar={<Avatar style={{ color: '#fafafa', backgroundColor: '#e69b76' }}>
                            {item.title[0].toUpperCase()}
                          </Avatar>} title={item.title} onClick={this.handleRecipeChange.bind(this, item)} />
                    </List.Item>} />,
              </Modal>
              <p>{this.props.recipe.title}</p>
            </div>
          </div>
        </div>;
    } else {
      return (
        <div className="day" onClick={this.showModal}>
          <div className="day__main--title">
            <p>
              <strong>{this.props.meal_time}</strong>
            </p>
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
                      avatar={
                        <Avatar
                          style={{
                            color: '#fafafa',
                            backgroundColor: '#e69b76'
                          }}
                        >
                          {item.title[0].toUpperCase()}
                        </Avatar>
                      }
                      title={item.title}
                      onClick={this.handleRecipeChange.bind(this, item)}
                    />
                  </List.Item>
                )}
              />
              ,
            </Modal>
            <p>No meal planned!</p>
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
  meal_id: PropTypes.string,
  allRecipes: PropTypes.array,
  planId: PropTypes.string
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
