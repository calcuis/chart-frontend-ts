import { Component } from 'react';
import Plot from 'react-plotly.js';

class Pie extends Component {
	render(){
		return (
			<Plot 
				data={[
					{
						labels: ['Jul','Aug','Sep','Oct','Nov'],
						values: [250,200,300,450,500],
                        textinfo: "percent+value",
						type: 'pie'
					}
				]}
				layout={ { width: 800, height: 600, title: 'Monthly revenue ($)'}}
				config={ {toImageButtonOptions: {format:'svg'}}}
			/>
		)
	}
}

export default Pie;