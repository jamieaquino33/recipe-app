import React, { Component } from 'react';
import './header.css';

class Header extends Component { 

    constructor(props) {
        super(props);
        this.state = { textFieldValue: '' }

        /*Binds the value of 'this' in the current context as the 'this' inside of the handleChange function */
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ textFieldValue: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.recipeByNameHandler(this.state.textFieldValue);
        this.setState({ textFieldValue: '' });
    }

    generateLetterButtons() {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
            <button key={letter} onClick={() => this.props.recipeByLetterHandler(letter)}>
                {letter}
            </button>

        ));
    }
      render() {
          return (
            <div>
                <h1>Recipe Finder</h1>
                <p>Get recipes by Letter</p>
                {this.generateLetterButtons()}
                <p>Get recipe by Keyword</p>
                <form onSubmit={this.handleSubmit}> 
                    <input className="textBar" type='text' value={this.state.textFieldValue} onChange={this.handleChange} />
                    <input className="submitButton" type='submit' value='Submit' />
                </form>
                <p>Get Random Recipe</p>
                <button  onClick={() => this.props.randomRecipeHandler()}>Submit</button>
            </div>
        
        );
    }
}

    
export default Header;
