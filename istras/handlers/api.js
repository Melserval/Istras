// получение списка задач из бд.

exports.getTaskList = function(req, res) {
    res.json([
   {"date": "01-05-2020", "prio": "high", "status": "open", "title": "Очень Важная Задача", "author": "Warfazer"},
   {"date": "01-05-2020", "prio": "high", "status": "open", "title": "Очень Важная Задача", "author": "Warfazer"},
   {"date": "01-05-2020", "prio": "high", "status": "open", "title": "Очень Важная Задача", "author": "Warfazer"},
   {"date": "01-05-2020", "prio": "high", "status": "open", "title": "Очень Важная Задача", "author": "Warfazer"},
   {"date": "01-05-2020", "prio": "high", "status": "open", "title": "Очень Важная Задача", "author": "Warfazer"},
   {"date": "01-05-2020", "prio": "high", "status": "open", "title": "Очень Важная Задача", "author": "Warfazer"},
   {"date": "01-05-2020", "prio": "high", "status": "open", "title": "Очень Важная Задача", "author": "Warfazer"},
   {"date": "01-05-2020", "prio": "high", "status": "open", "title": "Очень Важная Задача", "author": "Warfazer"},
   {"date": "01-05-2020", "prio": "high", "status": "open", "title": "Очень Важная Задача", "author": "Warfazer"},
   {"date": "02-03-2020", "prio": "medium", "status": "in work", "title": "Текущая Задача", "author": "Penky"},
   {"date": "02-03-2020", "prio": "medium", "status": "in work", "title": "Текущая Задача", "author": "Penky"},
   {"date": "02-03-2020", "prio": "medium", "status": "in work", "title": "Текущая Задача", "author": "Penky"},
   {"date": "02-03-2020", "prio": "medium", "status": "in work", "title": "Текущая Задача", "author": "Penky"},
   {"date": "02-03-2020", "prio": "medium", "status": "in work", "title": "Текущая Задача", "author": "Penky"},
   {"date": "02-03-2020", "prio": "medium", "status": "in work", "title": "Текущая Задача", "author": "Penky"},
   {"date": "02-03-2020", "prio": "medium", "status": "in work", "title": "Текущая Задача", "author": "Penky"},
   {"date": "02-03-2020", "prio": "medium", "status": "in work", "title": "Текущая Задача", "author": "Penky"},
   {"date": "02-03-2020", "prio": "medium", "status": "in work", "title": "Текущая Задача", "author": "Penky"},
   {"date": "01-02-2020", "prio": "low", "status": "in work", "title": "Надо бы выпонить", "author": "Paywa"},
   {"date": "01-02-2020", "prio": "low", "status": "in work", "title": "Надо бы выпонить", "author": "Paywa"},
   {"date": "01-02-2020", "prio": "low", "status": "in work", "title": "Надо бы выпонить", "author": "Paywa"},
   {"date": "01-02-2020", "prio": "low", "status": "in work", "title": "Надо бы выпонить", "author": "Paywa"},
   {"date": "01-02-2020", "prio": "low", "status": "in work", "title": "Надо бы выпонить", "author": "Paywa"},
   {"date": "01-02-2020", "prio": "low", "status": "in work", "title": "Надо бы выпонить", "author": "Paywa"},
   {"date": "01-02-2020", "prio": "low", "status": "in work", "title": "Надо бы выпонить", "author": "Paywa"},
   {"date": "01-02-2020", "prio": "low", "status": "in work", "title": "Надо бы выпонить", "author": "Paywa"},
   {"date": "01-02-2020", "prio": "low", "status": "in work", "title": "Надо бы выпонить", "author": "Paywa"}
    ]);
};