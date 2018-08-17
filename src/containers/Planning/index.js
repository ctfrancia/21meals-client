import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import TopBar from '../../components/TopBar';
import BottomBar from '../../components/BottomBar';
import Day from '../../components/Day';
import './Planning.css';
const { Content } = Layout;

class Planning extends Component {
  componentDidMount() {}

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
          clickHandler={this.handleClick}
        />
      ));
    }
  }

  render() {
    return (
      <div>
        <TopBar />
        <Layout>
          <Content className="planning">{this.renderPlanning()}</Content>
        </Layout>
        <BottomBar />
      </div>
    );
  }
}
Planning.propTypes = {
  getAllPlans: PropTypes.func,
  loading: PropTypes.bool,
  plan: PropTypes.object,
  meals_plan: PropTypes.object
};

const mapStateToProps = state => ({
  meals_plan: state.entities.meals_plan,
  plan: state.entities.plan[state.pages.plansIndex],
  loading: state.pages.loadingPlans
});

// const mapDispatchToProps = (dispatch) => ({
// });

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Planning);
