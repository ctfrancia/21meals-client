import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import TopBar from '../../components/TopBar';
import BottomBar from '../../components/BottomBar';
import Day from '../../components/Day';
import { getAllPlans } from '../../actions/plans.actions';
import './Planning.css';
import { getAllShoppingList } from '../../actions/shoppingList.actions';

const { Content } = Layout;

class Planning extends Component {
  componentDidUpdate () {
    this.props.getList();
  }
  componentDidMount() {
    this.props.getAllPlans(this.props.planId);
  }

  renderPlanning() {
    const plan = this.props.meals_plan;
    if (this.props.loading !== true) {
      return Object.keys(plan).map((el, i) => (
        <Day
          key={i}
          meal_id={plan[el].id}
          day={plan[el].weekday}
          meal_time={plan[el].meal_type}
          recipe={plan[el].recipe_id}
          planId= {this.props.planId}
          clickHandler={this.handleClick}
        />
      ));
    }
  }

  render() {
    return (
      <div className="plan__wrapper">
        <Layout>
          <Content className="planning">{this.renderPlanning()}</Content>
        </Layout>
      </div>
    );
  }
}
Planning.propTypes = {
  getAllPlans: PropTypes.func,
  loading: PropTypes.bool,
  plan: PropTypes.object,
  meals_plan: PropTypes.object,
  planId: PropTypes.string
};

const mapStateToProps = state => ({
  meals_plan: state.entities.meals_plan,
  plan: state.entities.plan[state.pages.plansIndex],
  loading: state.pages.loadingPlans,
  planId: state.authentication.user.plan_id
});

const mapDispatchToProps = dispatch => ({
  getAllPlans: planId => dispatch(getAllPlans(planId)),
  getList: () => dispatch(getAllShoppingList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Planning);
