
class MainScrean extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeSection: {
				name: "Список задач",
				component: null
			}
		};
	}

	setSection(sectionNum)
	{
		switch(sectionNum) {
			case 1: 
				this.setState({activeSection: {name: "Список задач", component: <ListTaskList />}}); 
				break;
			case 2: 
				this.setState({activeSection: {name: "Добавить задачу"}}); 
				break;
			case 3: 
				this.setState({activeSection: {name: "Список сотрудников"}}); 
				break;
		}
	}

	render() {
		return (
			<React.Fragment>
				<MainHeader setSection={this.setSection.bind(this)} sectionInfo={this.state.activeSection}/>
				<SectionConteiner component={this.state.activeSection.component}/>
			</React.Fragment>
		)
	}
}

ReactDOM.createRoot(document.getElementById("root")).render(<MainScrean />);