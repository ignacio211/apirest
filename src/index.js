const express = require('express');
const app = express ();
const morgan = require('morgan');


app.set('port', process.env.PORT || 3000);


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//rutas
app.use(require('./routes/index'));
app.use('/api/alumnos', require('./routes/alumnos'));

//servidor
app.listen(3000, () => {
    console.log('Server running');
});