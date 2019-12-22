const { Router } = require('express');
const router = Router();

const alumnos = require('../alumnos.json');


router.get('/', (req, res) => {
    res.json(alumnos);
});


router.post('/', (req, res) => {
    const { Nombre, Nota1, Nota2, Nota3, Nota4 } = req.body;
    
    if (Nombre && Nota1 && Nota2 && Nota3 && Nota4) // validando que se ingresen todos los datos
    {
        const Promedio = (Nota1 + Nota2 + Nota3 + Nota4)/4;
        var Situacion = null;

        if (Promedio >= 3.95)
        {
            Situacion = 'Aprobado';
        }
        
        if(Promedio < 3.95 && Promedio >= 2.95)
        {
            Situacion = 'Examen';
        }

        if (Promedio < 2.95)
        {
            Situacion = "Reprobado"
        }
        
        const newAlumno = { Nombre, Promedio, Situacion };
        alumnos.push(newAlumno);
        res.json('Alumno guardado correctamente'); 
    }
    
    else
    {
        res.json('Error: datos ingresados incompletos o erroneos');
    }


});

module.exports = router;