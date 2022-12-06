const express = require( 'express' );
const path = require( 'path' );

// Create an application object
const app = express();

// set() / get() helps use key-value pairs across the app
app.set( 'app_title', 'Workshops App' );

// set up the templating engine (ejs)
app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( process.cwd(), 'views' ) );

// app.<http_method>()
// app.get( '/', ( req, res ) => {
//     res.end( 'This is the workshops server' );
// });

// /workshops -> base route for all paths handled by the router (called "mount path")
app.use( '/', require( './routes/index.route' ) );
app.use( '/workshops', require( './routes/workshops.route' ) );

const PORT = process.env.PORT || 3000;

// creates a web server and starts that internally
app.listen( PORT, () => {
    console.log( `server started on - http://localhost:${PORT}` );
});