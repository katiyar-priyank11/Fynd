const { Router } = require('express');
const IndexCtrl = require( '../controllers/index.controllers' );

const router = Router();

router.get('/', IndexCtrl.getIndex);

module.exports = router;
