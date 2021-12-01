const express = require('express');
const helmet = require('helmet');
const app = express();
const configs = require('./configs');
const loaders = require('./loaders');
const events = require('./scripts/events');
const {
    ProjectsRoutes,
    UsersRoutes,
} = require('./routes');

configs();
loaders();
events();

app.use(express.json());
app.use(helmet());

app.use('/projects', ProjectsRoutes);
app.use('/users', UsersRoutes);

app.listen(process.env.APP_PORT, () => {
    console.log('Server is running...');
});