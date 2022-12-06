const { Router } = require( 'express' );
const IndexCtrl = require( '../controllers/index.controllers' );

const router = Router();

// router.<http_method>()
router.get( '/', IndexCtrl.getHome );
router.get( '/pages/workshops', IndexCtrl.getWorkshopsList );

module.exports = router;