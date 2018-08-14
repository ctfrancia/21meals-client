import React from 'react';
import './css/index.css';
import ListOfInstructions from './instructions-list';

class QuantityInput extends React.Component {
  render () {
    console.log(this.props);
    return (
      <div className="name__field">
        <p>Lets outline the cooking process</p>
        <p>{this.props.name}</p>
        <ListOfInstructions removeStep={this.props.removeStep} descriptionList={this.props.descriptionList}/>
        <form onSubmit={this.props.addStep}>
          <input className="text__input" name="instruction" type="text" required/>
          <input type="submit" name="Add"/>
        </form>

      </div>
    );
  }
}

export default QuantityInput;
