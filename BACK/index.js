const express = require('express');
require('dotenv').config();
const expressJSDocSwagger = require('express-jsdoc-swagger');
const JsDocSwaggerOptions = require('./configs/JsDocSwaggerOptions');
const cors = require('cors');
const bodySanitizer = require('./app/middlewares/bodySanitizer');

const authRouter = require('./app/Routes/auth.routes');
const propertiesRouter = require('./app/Routes/properties.routes');
const propertiesImagesRouter = require('./app/Routes/propertiesImages.routes');
const welcomeRouter = require('./app/Routes/welcome.routes');
const uploadRoutes = require('./app/Routes/upload.routes');
const usersRoutes = require('./app/Routes/user.routes');
const bookingsRoutes = require('./app/Routes/bookings.routes');
const vacanciesRoutes = require('./app/Routes/vacancies.routes');

// const router = require('./app/router');

const app = express();
const port = process.env.PORT || 5000;

expressJSDocSwagger(app)(JsDocSwaggerOptions);


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(bodySanitizer);

app.use(cors());

app.use(welcomeRouter);
app.use(uploadRoutes)
app.use(authRouter);
app.use(propertiesRouter);
app.use(propertiesImagesRouter);
app.use(usersRoutes);
app.use(bookingsRoutes);
app.use(vacanciesRoutes);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

// ok