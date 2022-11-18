/**
 * @property btnOnClickHandler обработчик кнопок меню.
 * @property sectionTitle название текущей секции.
 */
class MainHeader extends React.Component {
	render() {
		return (
			<header>
				<MainNav btnOnClickHandler={this.props.btnOnClickHandler}/>
				<h2>{this.props.sectionTitle}</h2>
			</header>
		)
	}
}