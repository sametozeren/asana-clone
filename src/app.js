const express = require('express');
const helmet = require('helmet');
const app = express();
const configs = require('./configs');
const {
    ProjectsRoutes
} = require('./routes');

configs();

app.use(express.json());
app.use(helmet());

app.use('/projects', ProjectsRoutes);

app.listen(process.env.APP_PORT, () => {
    console.log('Sunucu ayağa kalktı..');
});