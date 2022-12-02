const path = require( 'path' );

const getIndex = ( req, res ) => {
    res.sendFile( path.join( process.cwd(), 'views/index.html' ) );
};

module.exports = {
    getIndex
};