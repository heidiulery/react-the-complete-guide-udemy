import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

//function App() {
class App extends Component {
	state = {
		name1: 'Bruno',
		name2: 'Newkie',
		showKitties: false,
		inputLength: ''
	}

	nameChangeHandler = (event) => {
		this.setState({name1: event.target.value});
	}

	toggleOutput = () => {
		const doesShow = this.state.showKitties;
		this.setState({showKitties: !doesShow});	
	}

	inputLengthHandler = (event) => {
		this.setState({inputLength: event.target.value});
	}

	removeCharHandler = (index) => {
		const text = [...this.state.inputLength];
		text.splice(index, 1);
		const updatedText = text.join('');	
		this.setState({inputLength: updatedText})
	}

	render() {
		let kitties = null;

		if (this.state.showKitties) {
			kitties = (
				<div>
					<UserOutput 
						name1={this.state.name1} 
						name2={this.state.name2} 
					/>
				</div> 
			);
		}

		let chars = [...this.state.inputLength].map((char, index) => {
			return <ErrorBoundary key={index} >
				<Char 
					character={char}
					clicked={() => this.removeCharHandler(index)}
				/>	
			</ErrorBoundary>
		});

  		return (
    		<div className="App">
				<UserInput 
					changed={this.nameChangeHandler} 
					currentName={this.state.name1}
				/>
				<button onClick={this.toggleOutput}>Show Kitty Story</button>
				{kitties}
				<input type="text" onChange={this.inputLengthHandler} value={this.state.inputLength} />
				<p>{this.state.inputLength.length}</p>
				<Validation textLength={this.state.inputLength.length} />
				{chars}
    		</div>
  		);
	}
}

export default App;
