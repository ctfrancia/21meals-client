import React from 'react';
import './css/index.css';

class RecipeName extends React.Component {
  render () {
    return (
      <div className="name__field">
        <p>How should we call it?</p>
        <p>{this.props.name}</p>
        <form onSubmit={this.props.changeName}>
          <input className="text__input" name="name" type="text" required/>
          <input type="submit" name="addName" />
        </form>

      </div>
    );
  }
}

export default RecipeName;
