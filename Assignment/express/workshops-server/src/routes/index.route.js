const { Router } = require('express');
const IndexCtrl = require( '../controllers/index.controllers' );

const router = Router();

router.get('/', IndexCtrl.getIndex);
router.get( '/pages/workshops', IndexCtrl.getWorkshopsList );

module.exports = router;
