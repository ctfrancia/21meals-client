import React from 'react';
import './css/index.css';
import 'antd/lib/input/style/css';
import { Input } from 'antd';
import { connect } from 'react-redux';
import { changeName } from '../../actions/recipe-input.actions';
import { changeDefaultSlide } from '../../actions/carousel.actions';

class RecipeName extends React.Component {

  submitForm = (event) => {
    event.preventDefault();
    this.props.changeName(event.target.name.value);
    event.target.name.value = '';
    this.props.changeDefaultSlide(0);
  }

  render () {
    return (
      <div className="name__field">
        <div className="input__header">
          <p className="instruction__text">How should we call it?</p>
        </div>
        <div className="form__content">
          <h1 className="recipe__name">{this.props.newRecipe.name}</h1>
        </div>
        <div className="user__input">
          <form className="input__form" onSubmit={this.submitForm}>
            <Input className="text__input" name="name" type="text" required/>
            <Input className="button__add__ready" type="submit" name="addName" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  newRecipe: state.newRecipe,
});

const mapDispatchToProps = (dispatch) => ({
  changeName: (name) => {
    dispatch(changeName(name));
  },
  changeDefaultSlide: (slide) => {
    dispatch(changeDefaultSlide(slide));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeName);
