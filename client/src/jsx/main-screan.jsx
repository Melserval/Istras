// начальная точка входа приложения.
import { React } from "react";

import ReactDOM from "react-dom";


class MainScrean extends React.Component 
{
	constructor(props) {
		super(props);
		
		this.state = {
			activeSection: null,
			currentTask: null
		};

		this.sectionTaskList       = {title: "Список задач",       component: <ListTaskList onSelectTask={this.selectTask.bind(this)} />};
		this.sectionAddTask        = {title: "Добавить задачу",    component: <FormTaskCreate />};
		this.sectionCurrentTask    = {title: "Текущая задача",     component: null};
		this.sectionTaskManagement = {title: "Управление задачей", component: <TaskManagement />};

		this.state.activeSection = this.sectionTaskList;
	}

	handleTaskCreateDone(task) {
		console.log(task);
	}

	selectTask(taskitem) {
		this.setState({activeSection: {title: "Управление задачей", component: <TaskManagement task={taskitem} />}}); 
		// this.setState({currentTask: taskitem}, this.setSection.bind(this, 4));
	}

	setSection(sectionNum) 
	{
		switch(sectionNum) {
			case 1:
				this.setState({activeSection: this.sectionTaskList});
				break;
			case 2:
				this.setState({activeSection: this.sectionAddTask}); 
				break;
			case 3:
				this.setState({activeSection: this.sectionCurrentTask}); 
				break;
			case 4:
				this.setState({activeSection: {title: "Управление задачей", component: <TaskManagement task={this.state.currentTask} />}}); 
				break;
			default:
				this.setState({activeSection: this.sectionTaskList});
				break;
		}
	}

	render() {
		return (
			<React.Fragment>
				<MainHeader btnOnClickHandler={this.setSection.bind(this)} sectionTitle={this.state.activeSection.title}/>
				<SectionConteiner component={this.state.activeSection.component}/>
			</React.Fragment>
		)
	}
}

ReactDOM.createRoot(document.getElementById("root")).render(<MainScrean />);