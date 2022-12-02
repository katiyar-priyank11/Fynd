const express = require('express');

const app = express();

app.use( '/workshops', require( './routes/workshops.route' ) );
app.use( '/', require( './routes/index.route' ));

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}` );
} );