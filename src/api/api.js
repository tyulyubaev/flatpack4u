const express = require('express');
const apiRouter = express.Router;

module.exports = apiRouter;

const figuresRouter = require('./figures');
apiRouter.use('/figures', figuresRouter);