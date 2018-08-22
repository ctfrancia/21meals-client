import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Day from '../../components/Day';
import { getAllPlans } from '../../actions/plans.actions';
import './Planning.css';
import { getAllShoppingList } from '../../actions/shoppingList.actions';
import { Tabs, Divider } from 'antd';
import moment from 'moment'

const today = (moment().format('d') - 1).toString()
const TabPane = Tabs.TabPane;
class Planning extends Component {
  componentDidMount() {
    this.props.getAllPlans(this.props.planId);
    this.props.getList();
  }
  renderPlanning() {
    const planDays = this.props.planByDay;
    const weekday = this.props.weekday;
    if (!this.props.loading) {
      return <Tabs defaultActiveKey={today}>
          {weekday.map((el, i) => {
            return <TabPane tab={el} key={i}>
                <div className={`${el}`}>
                  {planDays[el].map((meal, k) => {
                    return <Day key={k} meal_id={meal.id} day={meal.weekday} meal_time={meal.meal_type} recipe={meal.recipe_id} planId={this.props.planId} clickHandler={this.handleClick} />;
                  })}
                </div>;
              </TabPane>;
          })}
        </Tabs>;
    }
  }

  render() {
    return (
      <div className="plan__wrapper">
        {this.props.loading === true ? (
          <div />
        ) : (
          <div className="planning">
            <div className="list__title">
              <h2>My 21 Meals</h2>
            </div>
            <Divider className="planningDivider" />
            {this.renderPlanning()}
          </div>
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
  planByDay: PropTypes.object,
  weekday: PropTypes.array,
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
