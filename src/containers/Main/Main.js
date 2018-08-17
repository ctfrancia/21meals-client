import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Spin } from 'antd';
import RecipeCard from '../../components/RecipeCard';
import './Main.css';
import TopBar from '../../components/TopBar';
import BottomBar from '../../components/BottomBar';
import RecipeInput from '../RecipeInput/RecipeInput';

const { Content } = Layout;

class Main extends React.Component {
  componentDidMount() {}
  renderCards() {
    if (this.props.loading) {
      return (
        <div className="cards">
          <Spin size="large" />
        </div>
      );
    } else {
      return (
        <div className="cards">
          <RecipeCard
            handleClick={this.showModal}
            imageUrl="https://cdn.onlinewebfonts.com/svg/img_211806.png"
            name="Add new"
            description="Add your recipe"
          />
          {this.props.recipes.map((el, i) => (
            <RecipeCard
              key={i}
              handleClick={this.showModal}
              imageUrl={el.photo}
              name={el.title}
              serves={el.serves}
            />
          ))}
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <TopBar />
        <Layout>
          <Content>{this.renderCards()}</Content>
        </Layout>
        <BottomBar />
      </div>
    );
  }
}

Main.propTypes = {
  recipes: PropTypes.array,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  loading: state.pages.loadingRecipes,
  recipes: state.pages.recipesIndex.map(el => state.entities.recipes[el])
});

// const mapDispatchToProps = dispatch => ({
// });

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Main);
