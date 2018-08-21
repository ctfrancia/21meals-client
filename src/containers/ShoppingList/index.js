import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../../components/TopBar';
import BottomBar from '../../components/BottomBar';
import icons from '../../helpers/icons'
import { connect } from 'react-redux';
import { List, Checkbox } from 'antd';
import './ShoppingList.css';
import { getAllShoppingList } from '../../actions/shoppingList.actions';


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
                <img src={icons[category]} alt={category}/>
                <div className="list__list--header--category">
                {category.toUpperCase()}
                </div>
              </div>
            }
            bordered
            dataSource={this.props.listItems[category]}
            renderItem={item => (
              <List.Item key={item.id}>
                <Checkbox checked={item.bought} onChange={onChange}>
                  {`${
                    item.total_amount === 0 || item.total_amount === null
                      ? 'Some'
                      : item.total_amount
                  } ${item.measure === null ? '' : item.measure} ${item.ingredient}`}
                </Checkbox>
              </List.Item>
            )}
          />
        );
      }
    }
    return list;
  }

  componentDidMount = () => {
    this.props.getList()
  };

  render() {
    return (
      <div>
        <TopBar section="My Shopping List" />

        <div className="list">
          <div className="list__list">{this.createShoppingList()}</div>
        </div>

        <BottomBar />
      </div>
    );
  }
}

ShoppingList.propTypes = {};

const mapStateToProps = state => ({
  ingredients_recipe: state.entities.ingredients_recipe,
  listItems: state.pages.shoppingList

})
 

ShoppingList.propTypes = {
  listItems: PropTypes.object
};
const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(getAllShoppingList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList);
