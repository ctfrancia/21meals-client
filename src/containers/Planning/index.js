import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Layout, List, Avatar } from 'antd';
import { getAll } from '../../actions/plans.actions';

import Day from '../../components/Day';
import './Planning.css'
const { Content } = Layout;

class Planning extends Component {
  componentDidMount () {
    this.props.getAll()
  }


  render () {
    let list;
    if (this.props.loading !== true) {
      list =
        <List
          className="day__list"
          itemLayout="horizontal"
          dataSource={this.props.meals}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar>{item.recipe ? item.recipe[0] : 'A'}</Avatar>}
                title={`${item.weekday.toUpperCase()} ${item.meal_type.toUpperCase()}`}
                description={item.recipe}
              />
            </List.Item>
          )}
        />

    }

    return (
      <div className="planning">
        <Layout>
          <Content>
            <div className="planning__image">
              <div className="planning__image--title">
                <h2>Weekly Planning</h2>
              </div>
            </div>
            {list}
          </Content>
        </Layout>
      </div>
    )
  }
}
Planning.propTypes = {
  getAll: PropTypes.func,
  loading: PropTypes.bool
};

const mapStateToProps = (state) => ({
  meals: state.plans.plans.meals,
  loading: state.plans.loading
})

const mapDispatchToProps = (dispatch) => ({
  getAll: () => dispatch(getAll())
})

export default connect(mapStateToProps, mapDispatchToProps)(Planning)
