import React from "react";

export default class MainNav extends React.Component {
	render() {
		return (
			<nav>
				<ul onClick={event => {
					//HACK: Временное решение
					if (event.target.nodeName === "A") event.preventDefault();
				}}>
					<li>
						<a href=""
							onClick={event => this.props.btnOnClickHandler(1)}
						>список задач</a>
					</li>
					<li>
						<a href=""
							onClick={event => this.props.btnOnClickHandler(2)}
						>добавить задачу</a>
					</li>
					<li>
						<a href=""
							onClick={event => this.props.btnOnClickHandler(3)}
						>Текущая задача</a>
					</li>
				</ul>
			</nav>
		)
	}
}