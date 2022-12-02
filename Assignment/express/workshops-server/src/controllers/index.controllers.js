const path = require( 'path' );

const getIndex = ( req, res ) => {
    // HTTP Header added - 'Content-Type: 'text/html' (end() will not add this header)
    // res.send( 'This is the workshops server' );

    // process.cwd() will be the folder where Node JS process is launched - the project folder
    res.sendFile( path.join( process.cwd(), 'views/index.html' ) );
};

const getWorkshopsList = ( req, res ) => {
    res.sendFile( path.join( process.cwd(), 'views/workshops-list.html' ) )
};

module.exports = {
    getIndex,
    getWorkshopsList
};