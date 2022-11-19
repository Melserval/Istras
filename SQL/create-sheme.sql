CREATE DATABASE istras;
USE istras;

-- авторы (создатели задач)
CREATE TABLE author (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50) UNIQUE
);

-- информация по выполнению задачи.
CREATE TABLE progress (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	text TEXT NOT NULL
);

-- задача (запросы)
CREATE TABLE task (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	created TIMESTAMP NOT NULL DEFAULT (CURRENT_TIMESTAMP()),
	title VARCHAR(255) NOT NULL,
	status INT NOT NULL DEFAULT 1,
	priority INT NOT NULL DEFAULT 1,
	author_id INT NOT NULL,
	progress_id INT NOT NULL,
	CONSTRAINT fk_author_id FOREIGN KEY (author_id) REFERENCES author(id),
	CONSTRAINT fk_progress_id FOREIGN KEY (progress_id) REFERENCES progress(id)
);
