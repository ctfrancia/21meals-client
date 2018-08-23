import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Card,
  Modal,
  Tabs,
  Input,
  Form,
  Select,
  InputNumber,
  Divider,
  Button
} from 'antd';
import {
  getOneRecipe,
  removeIngredientFromGlobal,
  postRecipe
} from '../../actions/recipes.actions';
import { postIngredient } from '../../actions/ingredients.actions';

import './index.css';

const Option = Select.Option;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const styles = {
  card: {
    width: 155,
    borderRadius: 15
  },
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
    height: '12rem'
  }
};

class GlobalCard extends Component {
  constructor() {
    super();
    this.state = {
      recipe: {
        title: '',
        instructions: '',
        photo: '',
        ingredients: []
      },
      visible: false,
      selectedIngredient: {
        title: '',
        ingredient_id: '',
        amount: '',
        measure: 'units',
        measure_id: 9
      },
      newIngredient: {
        name: '',
        ingredient_type_id: 1
      },
      tabs: {
        activeKey: '1',
        next: true,
        prev: false
      }
    };
  }

  showRecipe(id) {
    this.props.getOneRecipe(id);
    this.setState({
      ...this.state,
      recipe: {
        ...this.state.recipe,
        title: this.props.title,
        photo: this.props.imageUrl
      }
    });
  }

  handleTabClick = e => {
    const { tabs } = this.state;
    this.setState({
      ...this.state,
      tabs: {
        ...tabs,
        activeKey: e,
        next: e !== '3' ? true : false,
        prev: e !== '1' ? true : false
      }
    });
  };

  changeTab = direction => {
    const { tabs } = this.state;
    const { activeKey } = tabs;

    if (activeKey === '1' && direction === true) {
      this.setState({
        ...this.state,
        tabs: {
          activeKey: '2',
          next: true,
          prev: true
        }
      });
    }
    if (activeKey === '2' && !direction) {
      this.setState({
        ...this.state,
        tabs: {
          activeKey: '1',
          next: true,
          prev: false
        }
      });
    }
    if (activeKey === '2' && direction) {
      this.setState({
        ...this.state,
        tabs: {
          activeKey: '3',
          next: false,
          prev: true
        }
      });
    }
    if (activeKey === '3' && !direction) {
      this.setState({
        ...this.state,
        tabs: {
          activeKey: '2',
          next: true,
          prev: true
        }
      });
    }
  };

  componentDidMount() {}

  showModal = id => {
    this.showRecipe(id);
    this.setState({
      ...this.state,
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      ...this.state,
      visible: false
    });
  };

  handleCancel = () => {
    this.setState({
      ...this.state,
      visible: false
    });
  };

  measureSelect = () => {
    return Object.values(this.props.measures).map(el => {
      return (
        <Option value={el.id} key={el.id}>
          {el.name}
        </Option>
      );
    });
  };

  ingredientTypeSelect = () => {
    return Object.values(this.props.ingredientTypes).map((el, i) => {
      return (
        <Option key={i} value={el.id}>
          {el.name}
        </Option>
      );
    });
  };

  ingredientListMap = () => {
    return this.state.recipe.ingredients.map((el, i) => {
      return (
        <li key={i} value={el.id}>
          {el.title} {el.amount} {el.measure}
        </li>
      );
    });
  };

  aproveIngredient = async (globalID, globalIngredientName, e) => {
    e.preventDefault();
    let globalIngredientID = 'amount' + globalID;
    for (let i = 1; i <= Object.keys(this.props.ingredients).length; i++) {
      if (
        e.target[globalIngredientName].value === this.props.ingredients[i].name
      ) {
        await this.setState({
          ...this.state,
          selectedIngredient: {
            ...this.state.selectedIngredient,
            title: this.props.ingredients[i].name,
            ingredient_id: this.props.ingredients[i].id,
            amount: e.target[globalIngredientID].value
          }
        });
        break;
      }
    }
    if (this.state.selectedIngredient.title !== '') {
      this.setState(
        {
          ...this.state,
          recipe: {
            ...this.state.recipe,
            instructions: this.props.recipeDetails.Instructions,
            ingredients: [
              ...this.state.recipe.ingredients,
              { ...this.state.selectedIngredient }
            ],
            title: this.props.name,
            photo: this.props.imageUrl
          }
        },
        () => {
          this.setState({
            ...this.state,
            newIngredient: {
              ingredient_type_id: 1,
              name: ''
            },
            selectedIngredient: {
              ...this.state.selectedIngredient,
              title: '',
              ingredient_id: '',
              amount: ''
            }
          });
        }
      );
    } else {
      this.setState(
        {
          ...this.state,
          newIngredient: {
            ...this.state.newIngredient,
            name: e.target[globalIngredientName].value
          },
          selectedIngredient: {
            ...this.state.selectedIngredient,
            title: e.target[globalIngredientName].value,
            ingredient_id: Object.keys(this.props.ingredients).length + 1,
            amount: e.target[globalIngredientID].value
          }
        },
        () => {
          this.props.postIngredient(this.state.newIngredient);
          this.setState(
            {
              ...this.state,
              recipe: {
                ...this.state.recipe,
                instructions: this.props.recipeDetails.Instructions,
                ingredients: [
                  ...this.state.recipe.ingredients,
                  { ...this.state.selectedIngredient }
                ],
                title: this.props.name,
                photo: this.props.imageUrl
              }
            },
            () => {
              this.setState({
                ...this.state,
                newIngredient: {
                  ingredient_type_id: 1,
                  name: ''
                },
                selectedIngredient: {
                  ...this.state.selectedIngredient,
                  title: '',
                  ingredient_id: '',
                  amount: ''
                }
              });
            }
          );
        }
      );
    }
    if (this.props.recipeDetails.Ingredients.length === 1) this.changeTab(true);
    this.props.removeIngredientFromGlobal(globalID);
  };

  ingredientTypeChange = value => {
    this.setState({
      ...this.state,
      newIngredient: {
        ...this.state.newIngredient,
        ingredient_type_id: value
      }
    });
  };

  createNewRecipe = () => {
    this.props.postRecipe(this.state.recipe);
    this.handleOk();
  };

  ingredientMeasureChange = value => {
    let measure;
    for (let i = 1; i <= Object.keys(this.props.measures).length; i++)
      if (value === this.props.measures[i].id)
        measure = this.props.measures[i].name;
    this.setState({
      ...this.state,
      selectedIngredient: {
        ...this.state.selectedIngredient,
        measure_id: value,
        measure: measure
      }
    });
  };

  render() {
    return (
      <div className="recipe_card">
        <div className="recipe_card--main" onClick={this.showModal.bind(this, this.props.id)}>
            <div className="recipe_card--info">
              <h2>{this.props.name}</h2>
            </div>
            <div className="recipe_card--image">
              <img alt={this.props.name} src={this.props.imageUrl} style={styles.img} />
            </div>
          </div>
        <Modal
          title={this.props.name}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button
              disabled={!this.state.tabs.prev ? true : false}
              key="back"
              size="large"
              type="primary"
              onClick={this.changeTab.bind(this, false)}
            >
              Prev
            </Button>,
            <Button
              disabled={!this.state.tabs.next ? true : false}
              key="submit"
              type="primary"
              size="large"
              onClick={this.changeTab.bind(this, true)}
            >
              Next
            </Button>
          ]}
        >
          <Tabs
            tabPosition="top"
            size="small"
            activeKey={this.state.tabs.activeKey}
            onTabClick={this.handleTabClick}
          >
            <TabPane tab="Recipe" key="1">
              <img
                alt={this.props.name}
                src={this.props.imageUrl}
                style={styles.modalImg}
              />
              <h3>{this.props.recipeDetails.Instructions}</h3>
            </TabPane>
            <TabPane tab="Validate Ingredients" key="2">
              <div>
                {this.props.recipeDetails.Ingredients.map((el, i) => {
                  if (el.Name) {
                    return <Form key={i} onSubmit={this.aproveIngredient.bind(this, el.IngredientID, el.Name)}>
                      <Divider>{`${el.Quantity} ${el.Unit} ${el.Name}`}</Divider>
                        <FormItem label="1. Verify ingredient's name">
                          <Input style={{ textAlign: 'left' }} defaultValue={el.Name} name={el.Name} />
                        </FormItem>
                        <div className="globalAmounts">
                          <FormItem label="2. Amount">
                            <InputNumber defaultValue={el.Quantity} name={'amount' + el.IngredientID}  />
                          </FormItem>
                          <FormItem label="3. Unit">
                            <Select defaultValue={9} onChange={this.ingredientMeasureChange}>
                              {this.measureSelect()}
                            </Select>
                          </FormItem>
                          <FormItem label="4. Category">
                            <Select defaultValue={1} onChange={this.ingredientTypeChange}>
                              {this.ingredientTypeSelect()}
                            </Select>
                          </FormItem>
                        </div>

                        <div className="accept__decline">
                          <div>
                            <Button type="primary" className="accept" htmlType="submit" icon="check">
                              Accept
                            </Button>
                          </div>
                          <div>
                            <Button type="danger" className="decline" icon="close" onClick={this.props.removeIngredientFromGlobal.bind(this, el.IngredientID)}>
                              Remove
                            </Button>
                          </div>
                        </div>
                      <Divider></Divider>
                      </Form>
                  }
                })}
              </div>
            </TabPane>
            <TabPane tab="Review" key="3">
              <img
                alt={this.props.name}
                src={this.props.imageUrl}
                style={styles.modalImg}
              />
              <p>{this.props.recipeDetails.Instructions}</p>
              <ul>{this.ingredientListMap()}</ul>
              <Button onClick={this.createNewRecipe.bind(this)}>
                Add to my recipes
              </Button>
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    );
  }
}

GlobalCard.propTypes = {
  instructions: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  serves: PropTypes.string,
  imageUrl: PropTypes.string,
  handleClick: PropTypes.func,
  getOneRecipe: PropTypes.func,
  recipeDetails: PropTypes.object,
  measures: PropTypes.object,
  ingredientTypes: PropTypes.object,
  ingredients: PropTypes.object,
  removeIngredientFromGlobal: PropTypes.func,
  photo: PropTypes.string,
  postIngredient: PropTypes.func,
  postRecipe: PropTypes.func
};

const mapStateToProps = state => ({
  recipeDetails: state.pages.globalRecipe,
  measures: state.entities.measures,
  ingredientTypes: state.entities.ingredient_types,
  ingredients: state.entities.allIngredients
});

const mapDispatchToProps = dispatch => ({
  getOneRecipe: RecipeID => dispatch(getOneRecipe(RecipeID)),
  removeIngredientFromGlobal: ingredient =>
    dispatch(removeIngredientFromGlobal(ingredient)),
  postIngredient: data => dispatch(postIngredient(data)),
  postRecipe: data => dispatch(postRecipe(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalCard);
