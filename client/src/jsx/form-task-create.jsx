// компонент-экран создания задачи.
class FormTaskCreate extends React.Component {
	
	handleSubmit(event) {
		event.preventDefault();
		const form = event.target;
		const dataSet = {
			prior: form.elements.prior.value,
			text: form.elements.taskbody.value,
			title: form.elements.title.value,
			date: new Date(),
			author: "Penky"
		};
		console.log(dataSet);
	}

	render() {
		return (
			<form action="" id="form_task" onSubmit={this.handleSubmit.bind(this)}>
				<div>
					<select name="prior">
						<option value="1" selected={true}>обычный</option>
						<option value="2">средний</option>
						<option value="3">высокий</option>
						<option value="4">низкий</option>
					</select>
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
