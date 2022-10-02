const express = require("express");
const bodyparser = require("body-parser");
const handlebars = require("express-handlebars");

const PORT = process.env.PORT || 8888;
const app = express();
const hbs = handlebars.create({
    extname: 'hbs'
});

app.disable('x-powered-by');
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static(__dirname+'/static'));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


// пользовательские 
require("./routes/routes")(app);

// служебные 404 500
app.use((req, res) => {
    res.status(404).render('404')
});
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).render('500');
});

app.listen(PORT, () => console.info(`Запущен на ${PORT} порту.`));