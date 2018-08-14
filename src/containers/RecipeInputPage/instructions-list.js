import React from 'react';
import './css/index.css';

class ListOfInstructions extends React.Component {

  renderListIteams = () => {
      return this.props.descriptionList.map((description, i) => (<li key={i} onClick={description => this.props.removeStep(i)}>{description}</li>));
  };

  render () {
    return (
      <div className="ready__instructions">
        <ol>
          {this.renderListIteams()}
        </ol>
      </div>
    );
  }
}

export default ListOfInstructions;
