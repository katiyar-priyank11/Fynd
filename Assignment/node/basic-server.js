// Common JS module system (predates ES2015 modules)
// http is a built-in Node module
// import http from 'http'; // ES2015
const http = require( 'http' ); // Common JS

const server = http.createServer(
    ( req, res ) => { // request handler function - called whenever request comes in
        res.write( 'Hello Node. ' );
        res.end( 'Bye for now' ); // or res.end()
    }
);

// 0 - 65535 (0 - 1024 for special services)
server.listen( 3000 );