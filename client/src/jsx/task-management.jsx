class TaskManagement extends React.Component {

	constructor(props) {
		super(props);
		console.log(props);
	}
	
	render() {
		return (
			<React.Fragment>
			<div>
				<ElementSelectPriority />
				<input type="text" disabled={true} value={this.props.task.title} />
			</div>
			<div>
				<p>{this.props.task.title}</p>
			</div>
			</React.Fragment>
		)
	}
}