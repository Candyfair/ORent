const express = require('express');
require('dotenv').config();
const expressJSDocSwagger = require('express-jsdoc-swagger');
const JsDocSwaggerOptions = require('./configs/JsDocSwaggerOptions');
const cors = require('cors');
const bodySanitizer = require('./app/middlewares/bodySanitizer');

const router = require('./app/router');


const app = express();
const port = process.env.PORT || 5000;

expressJSDocSwagger(app)(JsDocSwaggerOptions);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(bodySanitizer);



app.use(router);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

// TEST GIT PULL