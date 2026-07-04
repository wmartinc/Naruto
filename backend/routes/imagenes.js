const { Router } = require('express');
const { getImageUrl } = require('../controllers/imagenesController');

const router = Router();

router.get('/image-url', getImageUrl);

module.exports = router;
