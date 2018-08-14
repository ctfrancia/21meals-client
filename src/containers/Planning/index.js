import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Layout } from 'antd';
import { getAll } from '../../actions/plans.actions';

import Day from '../../components/Day';
import './Planning.css'
const { Content } = Layout;

class Planning extends Component {
  componentDidMount () {
    this.props.getAll()
  }


  render () {
    const plan = this.props.plan;
    let list = [];
    if (this.props.loading !== true) {
      
      for (const day in plan) {
        list.push(<Day day={day} plan={plan[day]}/>)
        
      }

    }

    return (
      <div className="planning">
        <Layout>
          <Content className="planning">
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
  loading: PropTypes.bool,
  plan: PropTypes.object,
};

const mapStateToProps = (state) => ({
  plan: state.plans.plan,
  loading: state.plans.loading
})

const mapDispatchToProps = (dispatch) => ({
  getAll: () => dispatch(getAll())
})

export default connect(mapStateToProps, mapDispatchToProps)(Planning)
