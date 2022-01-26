const express = require('express');
require('dotenv').config();
const expressJSDocSwagger = require('express-jsdoc-swagger');
const JsDocSwaggerOptions = require('./configs/JsDocSwaggerOptions');
const cors = require('cors');
const bodySanitizer = require('./app/middlewares/bodySanitizer');

const authRouter = require('./app/Routes/auth.routes');
const propertiesRouter = require('./app/Routes/properties.routes');
const welcomeRouter = require('./app/Routes/welcome.routes');

// const router = require('./app/router');

const app = express();
const port = process.env.PORT || 5000;

expressJSDocSwagger(app)(JsDocSwaggerOptions);


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(bodySanitizer);

app.use(cors());

app.use(welcomeRouter);
app.use(authRouter);
app.use(propertiesRouter)

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});