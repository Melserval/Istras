// компонент-экран создания задачи.
class FormTaskCreate extends React.Component {
	
	handleSubmit(event) {
		event.preventDefault();
		const form = event.target;
		const dataSet = 
		this.props.taskCreateDone({
			prior: form.elements.prior.value,
			text: form.elements.taskbody.value,
			title: form.elements.title.value,
			date: new Date(),
			author: "Penky"
		});
	}

	render() {
		return (
			<form action="" id="form_task" onSubmit={this.handleSubmit.bind(this)}>
				<div>
					<ElementSelectPriority />
					<input type="text" name="title"/>
				</div>
				<div>
					<textarea name="taskbody" rows="10"></textarea>
				</div>
				<div>
					<button type="submit">Готово</button>
				</div>
			</form>
		)
	}
}
