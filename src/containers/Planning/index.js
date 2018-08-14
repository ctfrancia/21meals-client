import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { getAll } from '../../actions/plans.actions';

import Day from '../../components/Day';
import './Planning.css';
const { Content } = Layout;

class Planning extends Component {
  componentDidMount() {
    this.props.getAll();
  }
  renderPlanning() {
    const plan = this.props.plan;
    if (this.props.loading !== true) {
      return Object.keys(plan).map((el, i) => (
        <Day key={i} day={el} plan={plan[el]} />
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
            {/* {this.renderPlanning()} */}
          </Content>
        </Layout>
      </div>
    );
  }
}
Planning.propTypes = {
  getAll: PropTypes.func,
  loading: PropTypes.bool,
  plan: PropTypes.object
};

const mapStateToProps = state => ({
  plan: state.plans.plan,
  loading: state.plans.loading
});

const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(getAll())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Planning);
