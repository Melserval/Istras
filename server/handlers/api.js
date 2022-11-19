const db = require("./../db.js");

// получение списка задач из бд.
const sql_get_tasks_list =`
SELECT created, title, status, priority, name 
FROM task 
LEFT JOIN author
ON task.author_id = author.id
`;
exports.tasks = function(req, res) {
	db.getConnection().query(
		sql_get_tasks_list, 
		(err, results) => {
			if (err) {
				console.error(err);
			} else {
				res.json(results);
			}
		}
	);
};

// получение данных выбранной задачи
const sql_get_task_data = `
SELECT text FROM progress WHERE id = ?
`;
exports.getTaskById = function(req, res) {
	db.getConnection().execute(
		sql_get_task_data,
		[req.params.id],
		(err, result) => {
			if (err) {
				console.error(err);
			} else {
				res.json(result);
			}
		}
	);
};