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
        <p className="instruction__text">Lets outline the cooking process</p>
        <p>{this.props.newRecipe.name}</p>
        <ListOfInstructions className="ListOfInstructions" removeStep={this.props.removeStep} descriptionList={this.props.newRecipe.description}/>
        <form onSubmit={this.submitForm}>
          <Input className="text__input" name="instruction" type="text" required/>
          <Input type="submit" name="Add"/>
        </form>

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
