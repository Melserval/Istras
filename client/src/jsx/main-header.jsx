class MainHeader extends React.Component {
	render() {
		return (
			<header>
				<MainNav setSection={this.props.setSection}/>
				<h2>{this.props.sectionInfo.name}</h2>
			</header>
		)
	}
}