import { getAll } from '../../actions/recipes.actions';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Spin } from 'antd';
import RecipeCard from '../../components/RecipeCard';
import './Main.css';

const { Content } = Layout;


class Main extends React.Component {

  componentDidMount () {
    this.props.getAll()

  }

  render () {

    const loading = this.props.loading;
    let cards;
    if (loading) {
      cards = <div className="cards"><Spin size="large" /></div>
    } else {
      cards =
        <div className="cards">
          <RecipeCard
            handleClick={this.showModal}
            imageUrl="https://cdn.onlinewebfonts.com/svg/img_211806.png"
            name="Add new"
            description="Add your recipe"
          />
          {this.props.recipes.map((el, i) =>
            <RecipeCard
              key={i}
              handleClick={this.showModal}
              imageUrl={el.photo}
              name={el.title}
              serves={el.serves}
            />)}
        </div>
    }
    return (
      <div>
        <Layout>
          <Content>
            {cards}
          </Content>
          {/* <BottomBar /> */}
        </Layout>
      </div>
    );
  }
}

Main.propTypes = {
  recipes: PropTypes.array,
  getAll: PropTypes.func,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  recipes: state.recipes.recipes,
});

const mapDispatchToProps = (dispatch) => ({
  getAll: () => dispatch(getAll())
})



export default connect(mapStateToProps, mapDispatchToProps)(Main)
