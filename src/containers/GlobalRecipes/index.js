import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Spin, Input } from 'antd';
import RecipeCard from '../../components/RecipeCard';
import '../Recipes/Recipes.css';
import './index.css';
import { getSearchRecipes, getOneRecipe } from '../../actions/recipes.actions';
const { Content } = Layout;

const Search = Input.Search;

class GlobalRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      name: [],
      instructions: [],
      imageUrl: ''
    };
  }

  componentDidMount() {
    this.props.getSearchRecipes('featured');
  }

  showRecipe(id) {
    this.props.getOneRecipe(id);
  }

  renderCards() {
    if (this.props.loadingGlobalRecipes) {
      return (
        <div className="cards">
          <Spin size="large" />
        </div>
      );
    } else {
      return <div className="cards global">
          <div className="search__bar--input">
            <Search size="large" placeholder="Search for recipes" onSearch={value => this.props.getSearchRecipes(value)} style={{ width: 200 }} />
          </div>
          <div className="cards global">
            {this.props.globalRecipes.map((el, i) => (
              <RecipeCard
                key={i}
                handleClick={this.showRecipe.bind(this, el.RecipeID)}
                imageUrl={el.PhotoUrl}
                name={el.Title}
                // serves={el.Servings}
              />
            ))}
          </div>
        </div>;
    }
  }
  render() {
    return (
      <div className="globalView">
          {this.renderCards()}
      </div>
    );
  }
}

GlobalRecipes.propTypes = {
  loadingGlobalRecipes: PropTypes.bool,
  loadingOneGlobalRecipes: PropTypes.bool,
  getSearchRecipes: PropTypes.func,
  getOneRecipe: PropTypes.func,
  globalRecipes: PropTypes.array,
  globalRecipe: PropTypes.object
};

const mapStateToProps = state => ({
  loadingGlobalRecipes: state.pages.loadingGlobalRecipes,
  globalRecipes: state.pages.globalRecipes,
  globalRecipe: state.pages.globalRecipe,
  loadingOneGlobalRecipe: state.pages.loadingOneGlobalRecipe
});

const mapDispatchToProps = dispatch => ({
  getSearchRecipes: keyWord => dispatch(getSearchRecipes(keyWord)),
  getOneRecipe: RecipeID => dispatch(getOneRecipe(RecipeID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalRecipes);
