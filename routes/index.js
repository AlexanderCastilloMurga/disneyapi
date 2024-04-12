const { Router } = require('express');
const controllers = require('../controllers/index.js');

const router = Router();

router.get('/', (req, res) => res.send ( 'Welcome to alex api' ))

router.post('/disnapis', controllers.createdisnapi);
router.get('/disnapis', controllers.getAlldisnapis);

module.exports = router;
