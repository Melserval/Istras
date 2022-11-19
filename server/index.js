const express = require("express");
const bodyparser = require("body-parser");
const handlebars = require("express-handlebars");

const PORT = process.env.PORT || 8888;

const app = express();

// --- Установки Express ---
app.disable('x-powered-by');

const hbs = handlebars.create({
    extname: 'hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static(__dirname+'/static'));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

// ---- routes ----
const handlerApi = require('./handlers/api');
const handlerUser = require('./handlers/user');

// пользовательские 
app.get('/', handlerUser.home);
app.get('/about', handlerUser.about);
app.get('/registration', handlerUser.registration);
app.get('/its', handlerUser.its);

//API
app.get('/api/tasks', handlerApi.tasks);
app.get('/api/task/:id', handlerApi.getTaskById);

// служебные 404, 500
app.use((req, res) => {
    res.status(404).render('404')
});
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).render('500');
});

// --- Run! ---
app.listen(PORT, () => console.info(`Запущен на ${PORT} порту.`));
