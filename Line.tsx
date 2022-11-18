import { Component } from 'react';
import Plot from 'react-plotly.js';

class Line extends Component {
	render(){
		return (
			<Plot 
				data={[
					{
						x: ['Jul','Aug','Sep','Oct','Nov'],
						y: [250,200,300,450,500],
						type: 'scatter'
					}
				]}
				layout={ { width: 800, height: 600, title: 'Monthly revenue'}}
				config={ {toImageButtonOptions: {format:'svg'}}}
			/>
		)
	}
}

export default Line;