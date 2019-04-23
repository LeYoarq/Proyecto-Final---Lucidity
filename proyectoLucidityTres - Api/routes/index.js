const express = require('express');
const controller = require('../controller.js');
const Token = require("../util/token");

const router = express.Router();

router.post('/auth/', controller.auth); // funciona

router.post('/usuarios/', controller.postUser); // no requiere autenticación, funciona 
router.get('/usuarios/:userID', Token.verifyParam, controller.getUser);
router.put('/usuarios/:userID', Token.verifyParam, controller.putUser);
router.delete('/usuarios/:userID', Token.verifyParam, controller.deleteUser); 

router.get('/usuarios/:userID/tests', Token.verifyParam, controller.getTests);
router.get('/usuarios/:userID/tests/:testID', Token.verifyParam, controller.getTest);
router.post('/usuarios/:userID/tests', Token.verifyParam, controller.postTest);
router.delete('/usuarios/:userID/tests/:testID', Token.verifyParam, controller.deleteTest);

module.exports = router;