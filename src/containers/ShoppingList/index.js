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
  createShoppingList() {
    let list = [];
    for (const category in this.props.listItems) {
      if (this.props.listItems.hasOwnProperty(category)) {
        list.push(
          <List
            key={category}
            header={
              <div className="list__list--header">
                <Icon type="coffee" />
                {category.toUpperCase()}
              </div>
            }
            bordered
            dataSource={this.props.listItems[category]}
            renderItem={item => (
              <List.Item key={item.id}>
                <Checkbox onChange={onChange}>
                  {`${item.amount === 0 || item.amount === null ? 'Some' : item.amount} ${item.measure === null ? '': item.measure} ${item.name}`}
                </Checkbox>
              </List.Item>
            )}
          />
        );
      }
    }
    return list;
  }

  componentDidMount = () => {};

  render() {
    console.log(this.props.listItems);
    // console.log(this.props.ingredients_recipe);

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
              <div className="list__list">{this.createShoppingList()}</div>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

ShoppingList.propTypes = {};

const mapStateToProps = state => ({
  ingredients_recipe: state.entities.ingredients_recipe,

  listItems: Object.values(
    Object.values(state.entities.meals_plan)
      .reduce((acc, el) => {
        if (el.recipe_id) acc.push(el.recipe_id);
        return acc;
      }, []) //Gets where there's a recipe
      .map(el => state.entities.recipes[el].ingredients) //gets ingredients/measures references from recipe
      .reduce((acc, el) => acc.concat(el), []) // Flatten array
      .reduce((acc, el) => {
        //gets actual ingredients/measures
        acc.push(state.entities.ingredients_recipe[el]);
        return acc;
      }, [])
      .reduce((acc, el) => {
        //gets name/type related with ingredient
        acc.push({
          id: el.ingredient_id,
          name: state.entities.allIngredients[el.ingredient_id].name,
          type: state.entities.allIngredients[el.ingredient_id].ingredient_type,
          amount: el.amount,
          measure: el.measure
        });
        return acc;
      }, [])
      .reduce((acc, el) => {
        if (!acc.hasOwnProperty(el.id)) {
          acc[el.id] = el;
        } else {
          acc[el.id].amount += el.amount;
        }
        return acc;
      }, {})
  ).reduce((acc, el) => {
    if (!acc.hasOwnProperty(el.type)) {
      acc[el.type] = [el];
    } else {
      acc[el.type].push(el);
    }
    return acc;
  }, {})
});

// .reduce((acc, el) => {
//   if (el.recipe_id) {
//     const recipeIngredients = state.entities.recipes[el.recipe_id].ingredients //full list of ingredients/amount references
//     const fullList = recipeIngredients.map(el => {
//       //switch references for actual data
//       return state.entities.ingredients_recipe[el]

//       // return {
//       //   name: state.entities.allIngredients[el.ingredient_id].name,
//       //   amount: el.amount
//       // }
//     })
//     acc.push(fullList)

//     return acc
//   }
// }, [])
const mapDispatchToProps = dispatch => ({});
//Generate list of meals from meals_plan [1,2,1]
//every recipe yelds some ingredients_recipe [1...9, 10...18]
// ingredient_recipe.ingredient_id = name
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList);
