import { Modal, Form, Icon, Input, Button, Tabs, Select, Collapse } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RecipeCard from '../../components/RecipeCard';
import './RecipeInput.css';
import TextArea from '../../../node_modules/antd/lib/input/TextArea';
import RecipeInputSummary from '../../components/RecipeInputSummary';
import { postIngredient } from '../../actions/ingredients.actions';
import { postRecipe } from '../../actions/recipes.actions';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;
const Option = Select.Option;

class RecipeInput extends React.Component {
  //Local storage

  constructor(props) {
    super(props);
    this.state = {
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
    return Object.values(this.props.measures).map(el => {
      return (
        <Option value={el.id} key={el.id}>
          {el.name}
        </Option>
      );
    });
  };

  ingredientList = () => {
    return (
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
        measure: '1',
        measure_id: 1
      }
    });
  };

  sendNewIngredient = e => {
    e.preventDefault();
    this.props.postIngredient(this.state.newIngredient);
  };

  sendNewRecipe = e => {
    e.preventDefault();
    
    this.props.postRecipe(this.state.Recipe);
  };

  render() {
    return (
      <div>
        <RecipeCard
          handleClick={this.showModal}
          imageUrl="https://cdn.onlinewebfonts.com/svg/img_211806.png"
          name="Add new"
          description="Add your recipe"
        />
        <Modal
          className="recipe__input"
          title="New Recipe"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div>
            <Form layout="vertical" onSubmit={this.handleSubmit}>
              <Tabs tabPosition="bottom">
                <TabPane tab="Recipe" key="1">
                  <FormItem label="Recipe name">
                    <Input
                      prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                      name="title"
                      placeholder="Recipe name"
                      value={this.state.recipe.title}
                      onChange={this.handleChangeRecipe}
                    />
                  </FormItem>
                  <FormItem label="Image URL">
                    <Input
                      value={this.state.recipe.photo}
                      onChange={this.handleChangeRecipe}
                      type="url"
                      name="photo"
                      prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                      placeholder="Image URL"
                    />
                  </FormItem>
                  <FormItem label="Recipe Instructions">
                    <TextArea
                      value={this.state.recipe.instructions}
                      onChange={this.handleChangeRecipe}
                      name="instructions"
                      autosize
                      type="text"
                      prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                      placeholder="Instructions..."
                    />
                  </FormItem>
                </TabPane>

                <TabPane tab="Ingredient" key="2">
                  <div className="ingredient__list">
                    {this.ingredientList()}
                  </div>

                  <Collapse bordered={false} accordion>
                    <Panel header="Choose existing ingredient" key="1">
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
                        <FormItem label="Select amount and measure unit">
                          <Input
                            value={this.state.selectedIngredient.amount}
                            name="amount"
                            style={{ width: 80 }}
                            placeholder="Amount"
                            onChange={
                              this.handleChangeIngredient //prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                            }
                          />
                          <Select
                            placeholder="unit"
                            name="measure"
                            style={{ width: 100 }}
                            onChange={this.handleChangeMeasureSelect}
                          >
                            {this.measureSelect()}
                          </Select>
                          <Button type="primary" onClick={this.addIngredient}>
                            Ok
                          </Button>
                        </FormItem>
                      </div>
                    </Panel>

                    <Panel header="Create a new ingredient" key="2">
                      <Button
                        type="primary"
                        onClick={() => console.log(this.state)}
                      >
                        Ok
                      </Button>
                      <FormItem>
                        <Input
                          addonAfter={this.ingredientTypeSelect()}
                          name="name"
                          placeholder="Ingredient name"
                          onChange={this.handleChangeNewIngredient}
                        />
                        <FormItem>
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
                        </FormItem>
                      </FormItem>
                    </Panel>
                  </Collapse>
                </TabPane>

                <TabPane tab="Finish" key="3">
                  {RecipeInputSummary(this.state.recipe)}
                  <div className="recipe__body--confirm">
                    <Button type="primary" onClick={this.sendNewRecipe}>Spot on, baby boy</Button>
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
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  ingredients: state.entities.allIngredients,
  loading: state.pages.loadingRecipes,
  recipes: state.pages.recipesIndex.map(el => state.entities.recipes[el]),
  measures: state.entities.measures,
  ingredientTypes: state.entities.ingredient_types
});

const mapDispatchToProps = dispatch => ({
  postIngredient: data => dispatch(postIngredient(data)),
  postRecipe: data => dispatch(postRecipe(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeInput);
