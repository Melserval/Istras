function tfd(date, prio, status, title, author) {
	return {
		date: date | new Date(),
		prio: prio | "High",
		status: status | "open",
		title: title | "task",
		author: author | "Unknow"
	}
}
const testFakeData = [
	tfd("12-01-2012", 1, 1, "Очень важная задача", "warfazer"),
	tfd("10-11-2017", 2, 2, "Очень важная задача", "warfazer"),
	tfd("12-12-2012", 2, 1, "Очень важная задача", "warfazer"),
	tfd("30-07-2012", 1, 1, "Очень важная задача", "warfazer"),
	tfd("12-05-2016", 1, 2, "Очень важная задача", "warfazer"),
	tfd("28-06-2019", 3, 1, "Очень важная задача", "warfazer"),
	tfd("02-08-2020", 2, 1, "Очень важная задача", "warfazer"),
	tfd("18-08-2012", 1, 1, "Очень важная задача", "warfazer"),
	tfd("12-11-2012", 3, 3, "Очень важная задача", "warfazer"),
	tfd("15-12-2022", 1, 1, "Очень важная задача", "warfazer"),
	tfd("12-03-2022", 1, 1, "Очень важная задача", "warfazer"),
	tfd("25-02-2021", 3, 3, "Очень важная задача", "warfazer"),
];