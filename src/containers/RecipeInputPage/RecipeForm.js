import React from 'react';
import './css/index.css';
import RecipeName from './RecipeName';
import { connect } from 'react-redux';
import RecipeIngridientInput from './RecipeIngredient';
import QuantityInput from './QuantityInput';
import RecipeDescription from './RecipeDescription';
import RecipeReview from './RecipeReview';
import { changeDefaultSlide } from '../../actions/carousel.actions';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './css/index.css';
class RecipeForm extends React.Component {

  render () {
    return (
      <div className="form__wrapper">
        <Carousel showThumbs={false} swipeable={false} showArrows={true} showStatus={false} autoPlay={false} selectedItem={this.props.slider} >
          <RecipeName />
          <RecipeIngridientInput />
          <QuantityInput measures={this.props.measures} />
          <RecipeDescription />
          <RecipeReview recipe={this.props.recipe} submitRecipe={this.props.submitRecipe}/>
        </Carousel>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  slider: state.slider,
});

const mapDispatchToProps = (dispatch) => ({
  changeDefaultSlide: (slide) => {
    dispatch(changeDefaultSlide(slide));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
