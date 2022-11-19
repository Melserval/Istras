import React from "react";
import ListTaskItem from "./list-task-item";

export default class ListTaskList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			dataSet: []
		}
	}

	componentDidMount() {
		// HACK: фейковые данные
		fetch("./tasks.json")
		.then(response => response.ok ? response.json() : Promise.reject())
		.then(dataSet => this.setState({dataSet}))
		.catch(console.error);
	}

	handleSelectTask(item) {
		this.props.onSelectTask(item);
	}

	render() {
		return (
			<table id="list_task">
				<tbody>
					<tr>
						<th>
							<span>дата</span>
						</th>
						<th>
							<span>важность</span>
						</th>
						<th>
							<span>статус</span>
						</th>
						<th>
							<span>заголовок</span>
						</th>
						<th>
							<span>автор</span>
						</th>
					</tr>
					{this.state.dataSet.map((item, index, dataset) =>
						<ListTaskItem 
							key={index} 
							dataItem={item}
							selectTask={ event => this.handleSelectTask(item)}
						/>
					)}
				</tbody>
			</table>
		)
	}
}