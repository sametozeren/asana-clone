const express = require('express');
const helmet = require('helmet');
const app = express();
const configs = require('./configs');
const loaders = require('./loaders');
const {
    ProjectsRoutes
} = require('./routes');

configs();
loaders();

app.use(express.json());
app.use(helmet());

app.use('/projects', ProjectsRoutes);

app.listen(process.env.APP_PORT, () => {
    console.log('Server is running...');
});