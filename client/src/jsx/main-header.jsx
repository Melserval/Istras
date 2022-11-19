import React from "react";
import MainNav from "./main-nav";

/**
 * @property btnOnClickHandler обработчик кнопок меню.
 * @property sectionTitle название текущей секции.
 */
export default class MainHeader extends React.Component {
	render() {
		return (
			<header>
				<MainNav   {...this.props.btnOptions} />
				<h2>{this.props.sectionTitle}</h2>
			</header>
		)
	}
}
