import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Day from '../../components/Day';
import { getAllPlans } from '../../actions/plans.actions';
import './Planning.css';
import { getAllShoppingList } from '../../actions/shoppingList.actions';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
class Planning extends Component {
  componentDidMount() {
    this.props.getAllPlans(this.props.planId);
    this.props.getList();
  }

  renderPlanning() {
    const planDays = this.props.planByDay;
    const weekday = this.props.weekday;
    console.log(planDays);
    console.log(weekday);
    const plan = this.props.meals_plan;
    if (!this.props.loading) {
      return (
        <Tabs>
          {weekday.map((el, i) => {
            return (
              <TabPane tab={el} key={i} className={`${el} day`}>
                {planDays[el].map((meal, k) => {
                  console.log(meal)
                  return (
                    <Day
                      key={k}
                      meal_id={meal.id}
                      day={meal.weekday}
                      meal_time={meal.meal_type}
                      recipe={meal.recipe_id}
                      planId={this.props.planId}
                      clickHandler={this.handleClick}
                    />
                  );
                })}
              </TabPane>
            );
          })}
        </Tabs>
      );
    }
  }

  render() {
    return (
      <div className="plan__wrapper">
        {this.props.loading === true ? (
          <div />
        ) : (
          <div className="planning">{this.renderPlanning()}</div>
        )}
      </div>
    );
  }
}
Planning.propTypes = {
  getAllPlans: PropTypes.func,
  getList: PropTypes.func,
  loading: PropTypes.bool,
  plan: PropTypes.object,
  meals_plan: PropTypes.object,
  planId: PropTypes.string
};

const mapStateToProps = state => ({
  meals_plan: state.entities.meals_plan,
  planByDay: state.pages.plansByDay,
  weekday: state.pages.weekdays,
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
