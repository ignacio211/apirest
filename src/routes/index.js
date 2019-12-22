const { Router } = require('express');
const router = Router();


router.get('/test',(req,res) => {
    const data = {
        "id" : "1",
        "Nombre": "Ignacio Gormaz"
    };
    res.json(data);
});

module.exports = router;