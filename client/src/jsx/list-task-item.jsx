class ListTaskItem extends React.Component {
	render() {
		return (
			<tr onClick={this.props.selectTask}>
				<td>
					<span>{this.props.dataItem.date}</span>
				</td>
				<td>
					<span>{this.props.dataItem.prio}</span>
				</td>
				<td>
					<span>{this.props.dataItem.status}</span>
				</td>
				<td>
					<span>{this.props.dataItem.title}</span>
				</td>
				<td>
					<span>{this.props.dataItem.author}</span>
				</td>
			</tr>
		)
	}
}