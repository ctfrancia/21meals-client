import React from 'react';
import './css/index.css';

class ListOfInstructions extends React.Component {

  handleClick = (index) => {
      if(this.props.onClick) {
        this.props.onClick(index);
      }
    }

  renderListIteams = () => {
      return this.props.descriptionList.map((description, i) => (<li key={i} onClick={description => this.handleClick(i)}>{description}</li>));
  };

  render () {
    return (
      <div className="ready__instructions">
        <ol className="list__numbered">
          {this.renderListIteams()}
        </ol>
      </div>
    );
  }
}

export default ListOfInstructions;
