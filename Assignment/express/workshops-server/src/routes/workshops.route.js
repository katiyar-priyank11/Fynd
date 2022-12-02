const { Router } = require( 'express' );
const WorkShopsCtrl = require( '../controllers/workshops.controllers' );

const router = Router();

router.get( '/', WorkShopsCtrl.getWorkshops );
router.post( '/pages/workshops', WorkShopsCtrl.postWorkshops );

module.exports = router;