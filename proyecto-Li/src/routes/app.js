const router = require('express').Router();

router.get('/app', (req,res) => {
    res.send('Sucess res!');
})

module.exports = router;
