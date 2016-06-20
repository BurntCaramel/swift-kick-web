import React from 'react'
import { Enum } from 'swift-kick'
import { textAreaStyler, outputStyler } from './styles' 

export default React.createClass({
	getInitialState() {
		return {
			equalityOutput: ''
		}
	},

	onEnumInputChange() {
		const { inputField } = this.refs
		const inputText = inputField.value

		const kickEnum = new Enum(inputText)
		const equalityOutput = kickEnum.generateEquatesFunc()

		this.setState({
			equalityOutput 
		})
	},

  render() {
		return (
			<div>
				<h2>Paste your Swift enum:</h2>
				<textarea cols="20" rows="10" ref='inputField'
					onChange={ this.onEnumInputChange }
					{ ...textAreaStyler() }
				/>
				<h2>func ==</h2>
				<pre { ...outputStyler() }>
					{ this.state.equalityOutput }
				</pre>
			</div>
		)
  }
})
