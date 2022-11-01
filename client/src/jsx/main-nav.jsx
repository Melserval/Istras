class MainNav extends React.Component {
	render() {
		return (
			<nav>
				<ul onClick={event => {
					//HACK: Временное решение
					if (event.target.nodeName === "A") event.preventDefault();
				}}>
					<li>
						<a href=""
							onClick={event => this.props.setSection(1)}
						>список задач</a>
					</li>
					<li>
						<a href=""
							onClick={event => this.props.setSection(2)}
						>добавить задачу</a>
					</li>
					<li>
						<a href=""
							onClick={event => this.props.setSection(3)}
						>список сотрудников</a>
					</li>
				</ul>
			</nav>
		)
	}
}