import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Icon, Input, Button, Tabs, Select, Collapse } from 'antd';
import { connect } from 'react-redux';
import { postIngredient } from '../../actions/ingredients.actions';
import { postRecipe } from '../../actions/recipes.actions';
import TextArea from '../../../node_modules/antd/lib/input/TextArea';
import './RecipeInput.css';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;
const Option = Select.Option;

class RecipeInput extends React.Component {
  //Local storage

  constructor(props) {
    super(props);
    this.state = {
      tabs: {
        activeKey: '1',
        next: true,
        prev: false
      },
      accordion: {
        activeKey: ''
      },
      recipe: {
        title: '',
        instructions: '',
        photo: '',
        ingredients: []
      },
      selectedIngredient: {
        title: '',
        ingredient_id: '',
        amount: '',
        measure: '',
        measure_id: ''
      },
      newIngredient: {
        name: '',
        ingredient_type_id: ''
      }
    };
  }

  //Input handlers

  handleChangeRecipe = event => {
    const { name, value } = event.target;
    const { recipe } = this.state;
    this.setState({
      ...this.state,
      recipe: {
        ...recipe,
        [name]: value
      }
    });
  };

  handleChangeIngredient = event => {
    const { name, value } = event.target;
    const { selectedIngredient } = this.state;
    this.setState({
      ...this.state,
      selectedIngredient: {
        ...selectedIngredient,
        [name]: value
      }
    });
  };

  handleChangeNewIngredient = event => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      newIngredient: {
        ...this.state.newIngredient,
        [name]: value
      }
    });
  };

  // Select Handlers

  handleChangeIngredientSelect = value => {
    const { selectedIngredient, recipe, newIngredient } = this.state;
    this.setState({
      newIngredient: { ...newIngredient },
      recipe: { ...recipe },
      selectedIngredient: {
        ...selectedIngredient,
        ingredient_id: this.props.ingredients[value].id,
        title: this.props.ingredients[value].name
      }
    });
  };

  handleChangeMeasureSelect = value => {
    const { selectedIngredient } = this.state;
    this.setState({
      ...this.state,
      selectedIngredient: {
        ...selectedIngredient,
        measure_id: this.props.measures[value].id,
        measure: this.props.measures[value].name
      }
    });
  };

  handleChangeTypeSelect = value => {
    this.setState({
      ...this.state,
      newIngredient: {
        ...this.state.newIngredient,
        ingredient_type_id: value
      }
    });
  };

  // Modal Controllers

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

  // Select and list renderers

  ingredientsSelect = () => {
    return Object.values(this.props.ingredients).map(el => {
      return (
        <Option value={el.id} key={el.id}>
          {el.name}
        </Option>
      );
    });
  };

  measureSelect = () => {
    return this.props.measuresIndex.map(el => {
      return (
        <Option
          value={this.props.measures[el].id}
          key={this.props.measures[el].id}
        >
          {this.props.measures[el].name}
        </Option>
      );
    });
  };

  deleteIngredient = ingredientIndex => {
    this.setState({
      ...this.state,
      recipe: {
        ...this.state.recipe,
        ingredients: [
          ...this.state.recipe.ingredients.splice(ingredientIndex, 1)
        ]
      }
    });
  };

  ingredientList = () => {
    return this.state.recipe.ingredients.length === 0 ? (
      <p>Add some ingredients to your recipe</p>
    ) : (
      <ul>
        {this.state.recipe.ingredients.map((el, i) => {
          return (
            <li key={i}>
              {`${el.amount} ${this.props.measures[el.measure_id].name} of ${
                this.props.ingredients[el.ingredient_id].name
              }`}
            </li>
          );
        })}
      </ul>
    );
  };
  ingredientTypeSelect = () => {
    return (
      <Select
        placeholder="type"
        style={{ width: 120 }}
        onChange={this.handleChangeTypeSelect}
      >
        {}
        {Object.values(this.props.ingredientTypes).map((el, i) => {
          return (
            <Option key={i} value={el.id}>
              {el.name}
            </Option>
          );
        })}
      </Select>
    );
  };

  // Input confirm

  addIngredient = () => {
    const { recipe } = this.state;
    this.setState({
      recipe: {
        ...recipe,
        ingredients: [
          ...this.state.recipe.ingredients,
          {
            ingredient_id: this.state.selectedIngredient.ingredient_id,
            measure_id: this.state.selectedIngredient.measure_id,
            amount: this.state.selectedIngredient.amount
          }
        ]
      },
      selectedIngredient: {
        title: '',
        ingredient_id: '',
        amount: '',
        measure: '',
        measure_id: ''
      }
    });
  };

  sendNewIngredient = async e => {
    e.preventDefault();
    await this.props.postIngredient(this.state.newIngredient);
    this.setState({
      ...this.state,
      newIngredient: {
        name: '',
        ingredient_type_id: ''
      }
    });
    this.handleAccordion('1');
  };

  sendNewRecipe = e => {
    e.preventDefault();

    this.props.postRecipe(this.state.recipe);
    this.setState({
      ...this.state,
        recipe: {
          title: '',
          instructions: '',
          photo: '',
          ingredients: []
        },
    })
    this.handleCancel();
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
  handleAccordion = e => {
    this.setState({
      ...this.state,
      accordion: { activeKey: e }
    });
  };

  render() {
    return (
      <div className="addnew__button">
        <Button
          type="primary"
          icon="plus-circle-o"
          size="large"
          onClick={this.showModal}
        >
          Add new recipe
        </Button>
        <Modal
          style={{ top: 20 }}
          className="recipe__input"
          title="New Recipe"
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
          <div>
            <Form layout="vertical" onSubmit={this.handleSubmit}>
              <Tabs
                tabPosition="top"
                size="small"
                activeKey={this.state.tabs.activeKey}
                onTabClick={this.handleTabClick}
              >
                <TabPane tab="Recipe" key="1">
                  <h2 className="ingredients">Your Recipe</h2>
                  <FormItem label="Recipe name">
                    <Input
                      name="title"
                      placeholder="Recipe name"
                      value={this.state.recipe.title}
                      onChange={this.handleChangeRecipe}
                    />
                  </FormItem>
                  <FormItem label="Image URL  (optional)">
                    <Input
                      value={this.state.recipe.photo}
                      onChange={this.handleChangeRecipe}
                      type="url"
                      name="photo"
                      placeholder="Image URL"
                    />
                  </FormItem>
                </TabPane>

                <TabPane tab="Ingredient" key="2">
                  <h2 className="ingredients">Ingredients</h2>
                  <div className="ingredient__list">
                    {this.ingredientList()}
                  </div>

                  <Collapse
                    bordered={false}
                    accordion
                    onChange={this.handleAccordion}
                    activeKey={this.state.accordion.activeKey}
                  >
                    <Panel header="Choose an existing ingredient" key="1">
                      <FormItem>
                        <Select
                          showSearch
                          name="title"
                          onChange={this.handleChangeIngredientSelect}
                          placeholder="Select an ingredient"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.props.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {this.ingredientsSelect()}
                        </Select>
                      </FormItem>
                      <div
                        className="ingredient__select"
                        style={
                          this.state.selectedIngredient.title === ''
                            ? { display: 'none' }
                            : { display: '' }
                        }
                      >
                        <div className="amountUnit">
                          <FormItem label="1. Amount">
                            <Input
                              required
                              value={this.state.selectedIngredient.amount}
                              name="amount"
                              style={{ width: 80 }}
                              placeholder="Amount"
                              onChange={this.handleChangeIngredient}
                            />
                          </FormItem>
                          <FormItem label="2. Unit">
                            <Select
                              required
                              placeholder="unit"
                              name="measure"
                              style={{ width: 100 }}
                              onChange={this.handleChangeMeasureSelect}
                            >
                              {this.measureSelect()}
                            </Select>
                          </FormItem>
                          <FormItem label="3. Confirm">
                            <Button
                              disabled={
                                this.state.selectedIngredient.measure_id
                                  ? false
                                  : true
                              }
                              type="primary"
                              onClick={this.addIngredient}
                            >
                              Add
                            </Button>
                          </FormItem>
                        </div>
                      </div>
                    </Panel>

                    <Panel header="Create a new ingredient" key="2">
                      <FormItem>
                        <Input
                          addonAfter={this.ingredientTypeSelect()}
                          name="name"
                          placeholder="Ingredient name"
                          onChange={this.handleChangeNewIngredient}
                        />
                        <FormItem>
                          {this.props.postingIngredient ? (
                            <Button loading>Posting</Button>
                          ) : (
                            <Button
                              disabled={
                                this.state.newIngredient.name &&
                                this.state.newIngredient.ingredient_type_id
                                  ? false
                                  : true
                              }
                              type="primary"
                              onClick={this.sendNewIngredient}
                            >
                              Add
                            </Button>
                          )}
                        </FormItem>
                      </FormItem>
                    </Panel>
                  </Collapse>
                </TabPane>

                <TabPane tab="Finish" key="3">
                  <div>
                    <div className="recipe__header">
                      <div className="recipe__header--image">
                        <div className="recipe__header--title">
                          {!this.state.recipe.title ? (
                            <h2>Untitled Recipe</h2>
                          ) : (
                            <h2>{this.state.recipe.title}</h2>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="recipe__body">
                      <div className="recipe__body--ingredients">
                        <div className="ingredient__list">
                          {this.ingredientList()}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="recipe__body--confirm">
                    <FormItem label="Recipe Instructions (optional)">
                      <TextArea
                        autosize={{ minRows: 3, maxRows: 6 }}
                        value={this.state.recipe.instructions}
                        onChange={this.handleChangeRecipe}
                        name="instructions"
                        type="text"
                        prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                        placeholder="There are no instructions for this recipe. Add some!"
                      />
                    </FormItem>
                    <Button
                      disabled={
                        this.state.recipe.title &&
                        this.state.recipe.ingredients.length > 0
                          ? false
                          : true
                      }
                      type="primary"
                      onClick={this.sendNewRecipe}
                    >
                      Add Recipe
                    </Button>
                  </div>
                </TabPane>
              </Tabs>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}

RecipeInput.propTypes = {
  recipes: PropTypes.array,
  typesIndex: PropTypes.array,
  measuresIndex: PropTypes.array,
  loading: PropTypes.bool,
  ingredients: PropTypes.object,
  measures: PropTypes.object,
  ingredientTypes: PropTypes.object,
  postIngredient: PropTypes.func,
  postRecipe: PropTypes.func,
  postingIngredient: PropTypes.bool
};

const mapStateToProps = state => ({
  ingredients: state.entities.allIngredients,
  loading: state.pages.loadingRecipes,
  recipes: state.pages.recipesIndex.map(el => state.entities.recipes[el]),
  measures: state.entities.measures,
  ingredientTypes: state.entities.ingredient_types,
  postingIngredient: state.pages.postingIngredient,
  success: state.pages.success,
  typesIndex: state.pages.ingredientsTypeIndex,
  measuresIndex: state.pages.measuresIndex
});

const mapDispatchToProps = dispatch => ({
  postIngredient: data => dispatch(postIngredient(data)),
  postRecipe: data => dispatch(postRecipe(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeInput);
