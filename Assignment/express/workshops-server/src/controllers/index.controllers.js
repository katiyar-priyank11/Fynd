const path = require( 'path' );
const workshops = require( '../../data/workshops.json' );

const getHome = ( req, res ) => {
    // HTTP Header added - 'Content-Type: 'text/html' (end() will not add this header)
    // res.send( 'This is the workshops server' );

    // process.cwd() will be the folder where Node JS process is launched - the project folder
    res.sendFile( path.join( process.cwd(), 'views/index.html' ) );
};

const getWorkshopsList = ( req, res ) => {
    res.render( 'workshops-list', {
        appTitle: req.app.get( 'app_title' ),
        pageTitle: 'List of workshops!',
        workshops
    } );
};

module.exports = {
    getHome,
    getWorkshopsList
};