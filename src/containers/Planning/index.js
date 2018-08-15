import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout } from 'antd';
// import { getAllPlans } from '../../actions/plans.actions';

import Day from '../../components/Day';
import './Planning.css';
const { Content } = Layout;

class Planning extends Component {
  componentDidMount() {}
  renderPlanning() {
    const plan = this.props.meals_plan;
    if (this.props.loading !== true) {
      return Object.keys(plan).map((el, i) => (
        <Day key={i} day={plan[el].weekday} recipe={plan[el].recipe_id} />
      ));
    }
  }

  render() {
    return (
      <div className="planning">
        <Layout>
          <Content className="planning">
            <div className="planning__image">
              <div className="planning__image--title">
                <h2>Weekly Planning</h2>
              </div>
            </div>
            {this.renderPlanning()}
          </Content>
        </Layout>
      </div>
    );
  }
}
Planning.propTypes = {
  getAllPlans: PropTypes.func,
  loading: PropTypes.bool,
  plan: PropTypes.object
};

const mapStateToProps = state => ({
  meals_plan: state.entities.meals_plan,
  plan: state.entities.plan[state.pages.plansIndex],
  loading: state.pages.loadingPlans
});

const mapDispatchToProps = dispatch => ({
  // getAllPlans: () => dispatch(getAllPlans())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Planning);
