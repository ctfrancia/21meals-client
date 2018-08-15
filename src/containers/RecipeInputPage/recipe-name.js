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
        <p className="instruction__text">How should we call it?</p>
        <p>{this.props.newRecipe.name}</p>
        <form onSubmit={this.submitForm}>
          <Input className="text__input" name="name" type="text" required/>
          <Input type="submit" name="addName" />
        </form>
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
