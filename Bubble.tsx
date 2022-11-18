import { Component } from 'react';
import Plot from 'react-plotly.js';

class Bubble extends Component {
	render(){
		return (
			<Plot 
				data={[
					{
						x: ['Jul','Aug','Sep','Oct','Nov'],
						y: [250,200,300,450,500],
						type: 'markers',
                        marker: {
                            color: ['rgb(93, 164, 214)','rgb(255, 144, 14)', 'rgb(44, 160, 101)','rgb(85, 100, 120)','rgb(255, 65, 54)'],
                            opacity: [1,0.8,0.6,0.4,0.2],
                          	size: [50,40,70,85,100]
                        }
					}
				]}
				layout={ { width: 800, height: 600, title: 'Monthly revenue'}}
				config={ {toImageButtonOptions: {format:'svg'}}}
			/>
		)
	}
}

export default Bubble;