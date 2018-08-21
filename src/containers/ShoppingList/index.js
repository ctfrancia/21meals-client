import React from 'react';
import PropTypes from 'prop-types';
import icons from '../../helpers/icons';
import { connect } from 'react-redux';
import { List, Checkbox, Divider } from 'antd';
import './ShoppingList.css';
import {
  getAllShoppingList,
  checkItem
} from '../../actions/shoppingList.actions';

class ShoppingList extends React.Component {
  onChange = e => {
    this.props.markItem(e.target.value);
  };
  createShoppingList() {
    let list = [];
    for (const category in this.props.listItems) {
      if (this.props.listItems.hasOwnProperty(category)) {
        list.push(
          <List
            key={category}
            header={
              <div className="list__list--header">
                <img src={icons[category]} alt={category} />
                <div className="list__list--header--category">
                  {category.toUpperCase()}
                </div>
              </div>
            }
            bordered
            dataSource={this.props.listItems[category]}
            renderItem={item => (
              <List.Item key={item.id}>
                <Checkbox
                  checked={item.bought}
                  onChange={this.onChange}
                  value={item.id}
                >
                  {item.bought ? (
                    <del>{`${
                      item.total_amount === 0 || item.total_amount === null
                        ? 'Some'
                        : item.total_amount
                    } ${item.measure === null ? '' : item.measure} ${
                      item.ingredient
                    }`}</del>
                  ) : (
                    `${
                      item.total_amount === 0 || item.total_amount === null
                        ? 'Some'
                        : item.total_amount
                    } ${item.measure === null ? '' : item.measure} ${
                      item.ingredient
                    }`
                  )}
                </Checkbox>
              </List.Item>
            )}
          />
        );
      }
    }
    return list;
  }

  render() {
    return <div>
        <div className="list">
          <div className="list__title">
            <h2 >My Shopping List</h2>
          </div>
          <Divider/>
          <div className="list__list">{this.createShoppingList()}</div>
        </div>
      </div>;
  }
}

ShoppingList.propTypes = {};

const mapStateToProps = state => ({
  ingredients_recipe: state.entities.ingredients_recipe,
  listItems: state.pages.shoppingList
});

ShoppingList.propTypes = {
  listItems: PropTypes.object,
  markItem: PropTypes.func
};
const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(getAllShoppingList()),
  markItem: itemId => dispatch(checkItem(itemId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList);
