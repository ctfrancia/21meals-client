import React from 'react';
import { connect } from 'react-redux';
import './css/index.css';
import ListOfInstructions from './instructions-list';
import { Input } from 'antd';
import { addStep, removeStep } from '../../actions/recipe-input.actions';
import { changeDefaultSlide } from '../../actions/carousel.actions';

class RecipeDescription extends React.Component {

  submitForm = (event) => {
    event.preventDefault();
    this.props.addStep(event.target.instruction.value);
    event.target.instruction.value = '';
    this.props.changeDefaultSlide(3);
  }

  render () {
    console.log(this.props);
    return (
      <div className="name__field">
        <div className="input__header">
          <p className="instruction__text">Lets outline the cooking process</p>
        </div>
        <div className="form__content">
          <ListOfInstructions className="ListOfInstructions" onClick={this.props.removeStep} descriptionList={this.props.newRecipe.description}/>
        </div>
        <div className="user__input">
          <form className="input__form" onSubmit={this.submitForm}>
            <Input className="text__input" name="instruction" type="text" required/>
            <Input className="button__add__ready" type="submit" name="Add"/>
          </form>
        </div>
      </div>
      );
  }
}


const mapStateToProps = (state) => ({
  newRecipe: state.newRecipe,
  slider: state.slider,
});

const mapDispatchToProps = (dispatch) => ({
  removeStep: (index) => {
    dispatch(removeStep(index));
  },
  addStep: (step) => {
    dispatch(addStep(step));
  },
  changeDefaultSlide: (slide) => {
    dispatch(changeDefaultSlide(slide));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDescription);
