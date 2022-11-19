// начальная точка входа приложения.
import React from "react";
import ReactDOM from "react-dom/client";

import MainHeader from "./main-header";
import SectionConteiner from "./section-conteiner";
import ListTaskList from "./task-list/list-task-list";
import FormTaskCreate from "./task-control/form-task-create";
import TaskManagement from "./task-control/task-management";


class MainScrean extends React.Component
{
	constructor(props) {
		super(props);
		
		this.state = {
			activeSection: {
				title: "Список задач", 
				component: <ListTaskList onSelectTask={this.sectionManagementTask.bind(this)} />
			},
			currentTask: null
		};
	}

	handleTaskCreateDone(task) {
		console.log(task);
	}

	sectionTaskList() {
		this.setState({activeSection: {
			title: "Список задач", 
			component: <ListTaskList onSelectTask={this.sectionManagementTask.bind(this)} />
		}});
	}

	sectionCreateTask() {
		this.setState({activeSection: {
			title: "Добавить задачу", 
			component: <FormTaskCreate />
		}});
	}

	sectionCurrentTask() {
		this.setState({activeSection: {
			title: "Текущая задача",
			component: <TaskManagement task={this.state.currentTask} />
		}});
	}

	sectionManagementTask(task) {
		this.setState({
			activeSection: {
				title: "Управление задачей", 
				component: <TaskManagement task={task} />
			},
			currentTask: task
		});
	}

	render() {
		return (
			<React.Fragment>
				<MainHeader 
				sectionTitle={ this.state.activeSection.title } 
				btnOptions={{
					btn_1: {onClick: this.sectionTaskList.bind(this)},
					btn_2: {onClick: this.sectionCreateTask.bind(this)},
					btn_3: {
						onClick: this.sectionCurrentTask.bind(this), 
						disabled: this.state.currentTask === null
					}
				}}
				/>
				<SectionConteiner component={this.state.activeSection.component}/>
			</React.Fragment>
		)
	}
}

ReactDOM.createRoot(document.getElementById("root")).render(<MainScrean />);
