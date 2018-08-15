/**
 *
 * ShoppingList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, List, Icon, Checkbox } from 'antd';
import './ShoppingList.css';
import 'antd/dist/antd.css';
const { Content } = Layout;

const drinks = [
  '12 bottles of water',
  '6 cans of Coca-cola',
  '3 bottles of wine'
];

const meat = ['2 Steaks', '6 Chickent thigs'];

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

class ShoppingList extends React.Component {
  
  componentDidMount = () => {
    
  }
  
  render() {
    console.log(this.props.listItems);

    return (
      <div>
        <Layout>
          <Content>
            <div className="list">
              <div className="list__image">
                <div className="list__image--title">
                  <h2>Shopping List</h2>
                </div>
              </div>
              <div className="list__list">
                <List
                  header={
                    <div className="list__list--header">
                      <Icon type="coffee" />
                      Drinks
                    </div>
                  }
                  bordered
                  dataSource={drinks}
                  renderItem={item => (
                    <List.Item>
                      <Checkbox onChange={onChange}>{item}</Checkbox>
                    </List.Item>
                  )}
                />
                <List
                  header={
                    <div className="list__list--header">
                      <Icon type="coffee" />
                      Meat
                    </div>
                  }
                  bordered
                  dataSource={meat}
                  renderItem={item => (
                    <List.Item>
                      <Checkbox onChange={onChange}>{item}</Checkbox>
                    </List.Item>
                  )}
                />
                <List
                  header={
                    <div className="list__list--header">
                      <Icon type="coffee" />
                      Drinks
                    </div>
                  }
                  bordered
                  dataSource={drinks}
                  renderItem={item => (
                    <List.Item>
                      <Checkbox onChange={onChange}>{item}</Checkbox>
                    </List.Item>
                  )}
                />
                <List
                  header={
                    <div className="list__list--header">
                      <Icon type="coffee" />
                      Meat
                    </div>
                  }
                  bordered
                  dataSource={meat}
                  renderItem={item => (
                    <List.Item>
                      <Checkbox onChange={onChange}>{item}</Checkbox>
                    </List.Item>
                  )}
                />
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

ShoppingList.propTypes = {};

const mapStateToProps = state => ({
  listItems: Object.keys(state.entities.meals_plan).map(el => {
    const recipeIngredients = state.entities.recipes[state.entities.meals_plan[el].recipe_id]
    return recipeIngredients;
  })
});

const mapDispatchToProps = dispatch => ({});
//Generate list of meals from meals_plan [1,2,1]
//every recipe yelds some ingredients_recipe [1...9, 10...18]
// ingredient_recipe.ingredient_id = name
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList);
