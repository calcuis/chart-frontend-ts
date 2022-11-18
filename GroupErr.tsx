import { Component } from 'react';
import Plot from 'react-plotly.js';

class GroupErr extends Component {
	render(){
        var group1 = {
            x: ['Jul','Aug','Sep','Oct','Nov'],
			y: [250,200,300,450,500],
            name: 'Upper Class',
            error_y: {
              type: 'data',
              array: [15,10,15,10,20],
              visible: true
            },
			type: 'bar'
        };

        var group2 = {
            x: ['Jul','Aug','Sep','Oct','Nov'],
            y: [150,250,250,350,400],
            name: 'Lower Class',
            error_y: {
              type: 'data',
              array: [20,15,20,15,10],
              visible: true
            },
            type: 'bar'
        };

        var data = [group1,group2]
        
		return (
			<Plot 
                data ={data}
				layout={ { width: 800, height: 600, title: 'Monthly income (**)'}}
        config={ {toImageButtonOptions: {format:'svg'}}}
			/>
		)
	}
}

export default GroupErr;