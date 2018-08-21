import React from 'react';
import './css/index.css';
import SelectedIngredients from './SelectedIngredients';
import { connect } from 'react-redux';
import { Input, InputNumber, Select } from 'antd';
import {removeIngredient, changeIngredientAmount} from '../../actions/recipe-input.actions';
import { changeDefaultSlide } from '../../actions/carousel.actions';
import 'antd/lib/input/style/css';
import 'antd/lib/select/style/css';
import 'antd/lib/input-number/style/css';
const InputGroup = Input.Group;
const Option = Select.Option;

class QuantityInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      measure: 'default',
      activeIngredientIndex: -1,
    }
  }

  renderListIteams = () => {
      return this.props.measures.map((measure, i) => (<Option
        key={i}
        value={measure}>{measure}
      </Option> ));
  };

  handleChange = (value) => {
    this.setState({
      measure: value,
      activeIngredientIndex: this.state.activeIngredientIndex,
    });
  }

  changeActiveIngredient = (index) => {
    this.setState({
      measure: this.state.measure,
      activeIngredientIndex: index,
    });
  }

  submitForm = (event) => {
    event.preventDefault();
    this.props.changeIngredientAmount(this.state.activeIngredientIndex, event.target.quantityAmount.value, this.state.measure);
    event.target.quantityAmount.value = '';
    this.props.changeDefaultSlide(2);
    this.changeActiveIngredient(-1);
  }

  render () {
    return (
      <div className="name__field">
        <div className="input__header">
          <p className="instruction__text">Lets select the quantities</p>
        </div>
        <div className="form__content">
          <SelectedIngredients ingredientList={this.props.newRecipe.ingredients} active={this.state.activeIngredientIndex} onClick={this.changeActiveIngredient}/>
        </div>
        <div className="user__input">
          <form className="input__form" onSubmit={this.submitForm}>
            <InputGroup compact>
              <InputNumber name="quantityAmount"/>
              <Select defaultValue="Measure" name="quantity" onChange={this.handleChange}>
                {this.renderListIteams()}
              </Select>
            </InputGroup>
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
  removeIngredient: (index) => {
    dispatch(removeIngredient(index));
  },
  changeIngredientAmount: (index, amount, measure) => {
    dispatch(changeIngredientAmount(index, amount, measure));
  },
  changeDefaultSlide: (slide) => {
    dispatch(changeDefaultSlide(slide));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(QuantityInput);
