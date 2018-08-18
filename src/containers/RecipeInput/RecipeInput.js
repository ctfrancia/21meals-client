import { Modal, Form, Icon, Input, Button, Tabs, Select } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RecipeCard from '../../components/RecipeCard';
import './RecipeInput.css';
import TextArea from '../../../node_modules/antd/lib/input/TextArea';
import RecipeInputSummary from '../../components/RecipeInputSummary';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

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
      selectedIngredient: ''
    };
  }
  
  handleChange = (value) => {
    console.log(`selected ${value}`);
  }
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
                <TabPane tab="Ingredients" key="2">
                  <FormItem label="Add Ingredient">
                    <Select
                      showSearch
                      onChange={this.handleChange}
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
  recipes: state.pages.recipesIndex.map(el => state.entities.recipes[el])
});

// const mapDispatchToProps = dispatch => ({
// });

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(RecipeInput);
