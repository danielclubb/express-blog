var express = require('express');
const path = require('path');
var router = express.Router();
const serveStatic = require('serve-static');
const {homepageController} = require('./controllers/homepage');
const { postController } = require('./controllers/post');
const { tagController } = require('./controllers/tag');

// Include assets.
router.use('/public', serveStatic(path.resolve(__dirname, './public')));

router.use('/tags/:tag', tagController);
router.use('/tags/', tagController);
router.use('/posts/:id', postController);
router.use('/', homepageController);

module.exports = router;
