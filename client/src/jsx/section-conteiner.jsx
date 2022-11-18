import React from "react";

export default class SectionConteiner extends React.Component {
	render() {
		return(
			<div className="section-conteiner">
				{this.props.component}
			</div>
		)
	}
}