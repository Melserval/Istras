import React from "react";

export default class MainNav extends React.Component {
	render() {
		return (
			<nav>
				<ul>
					<li>
						<button 
						onClick={this.props.btn_1.onClick}
						>Список задач</button>
					</li>
					<li>
						<button 
						onClick={this.props.btn_2.onClick}
						>Добавить задачу</button>
					</li>
					<li>
						<button 
						onClick={this.props.btn_3.onClick} 
						disabled={this.props.btn_3.disabled}
						>Текущая задача</button>
					</li>
				</ul>
			</nav>
		)
	}
}