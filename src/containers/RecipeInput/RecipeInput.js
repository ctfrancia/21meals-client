import { Modal, Form, Icon, Input, Button, Tabs, Select, Collapse } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RecipeCard from '../../components/RecipeCard';
import './RecipeInput.css';
import TextArea from '../../../node_modules/antd/lib/input/TextArea';
import RecipeInputSummary from '../../components/RecipeInputSummary';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;
const Option = Select.Option;

class RecipeInput extends React.Component {
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
      }
    };
  }
  handleChangeIngredient = event => {
    const { name, value } = event.target;
    const { selectedIngredient, recipe } = this.state;
    this.setState({
      recipe: { ...recipe },
      selectedIngredient: {
        ...selectedIngredient,
        [name]: value
      }
    });
  };

  handleChangeIngredientSelect = value => {
    const { selectedIngredient, recipe } = this.state;
    this.setState({
      recipe: { ...recipe },
      selectedIngredient: {
        ...selectedIngredient,
        ingredient_id: this.props.ingredients[value].id,
        title: this.props.ingredients[value].name
      }
    });
  };
  handleChangeMeasureSelect = value => {
    const { selectedIngredient, recipe } = this.state;
    this.setState({
      recipe: { ...recipe },
      selectedIngredient: {
        ...selectedIngredient,
        measure_id: this.props.measures[value].id,
        measure: this.props.measures[value].name
      }
    });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

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

    console.log(this.state);
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
                      placeholder="Recipe name"
                    />
                  </FormItem>
                  <FormItem label="Recipe Instructions">
                    <TextArea
                      autosize
                      type="text"
                      prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                      placeholder="Instructions..."
                    />
                  </FormItem>
                </TabPane>
                <TabPane tab="3" key="2">
                  <div className="ingredient__list">
                    {this.ingredientList()}
                  </div>

                  <div
                    className="ingredient__select"
                    style={
                      this.state.selectedIngredient.title === ''
                        ? { display: 'none' }
                        : { display: '' }
                    }
                  >
                    <FormItem label={this.state.selectedIngredient.title}>
                      <Input
                        value={this.state.selectedIngredient.amount}
                        name="amount"
                        style={{ width: 80 }}
                        //prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                        placeholder="Amount"
                        onChange={this.handleChangeIngredient}
                      />
                      <Select
                        defaultValue="measure"
                        name="measure"
                        style={{ width: 100 }}
                        onChange={this.handleChangeMeasureSelect}
                      >
                        {this.measureSelect()}
                      </Select>
                      <Button onClick={this.addIngredient}>Ok</Button>
                    </FormItem>
                  </div>
                  <Button onClick={() => console.log(this.state)}>click</Button>
                  <FormItem label="Add Ingredient">
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
                  <FormItem label="Create new Ingredient">

                  </FormItem>
                </TabPane>
                <TabPane tab="Finish" key="3">
                  {RecipeInputSummary()}
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
  measures: state.entities.measures
});

// const mapDispatchToProps = dispatch => ({
// });

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(RecipeInput);
