/*
 * Reusable Element, Chart
 */

import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default class Chart extends React.Component {

		calcAverage(data) {
			let sum = 0;
			data.map(item => {
				sum+=item;
			});
			return parseInt(sum / data.length);
		}

	render() {

		return (
			<div>
				<Sparklines height={120} width={180} data={this.props.data}>
						<SparklinesLine color={this.props.color} />
						<SparklinesReferenceLine type="avg" />
						<p> {this.calcAverage(this.props.data)} {this.props.units}</p>
				</Sparklines>
			</div>
		);
	}
}