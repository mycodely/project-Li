const express = require('express');
const path = require('path');
const eHbs = require('express-handlebars');
const method0verride = require('method-override');
const session = require('express-session');
//Init
const app = express();
require('./db');



//Settings

const port = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'views'));    
app.engine('.hbs', eHbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir:path.join(app.get('views'), 'partials'),
    extname:'.hbs'
}))

app.set('view engine', '.hbs');


//Middlewares
app.use(express.urlencoded({ extended:false }));
app.use(method0verride('_method'));

app.use(session({
    secret: 'Li',
    resave: true,
    saveUninitialized: true
}))

//G Vars

//Routes
app.use(require('./routes/index.js'));
app.use(require('./routes/app.js'));
app.use(require('./routes/users.js'));

//Static Files

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port);
console.log(`Server listening on ${port}`);