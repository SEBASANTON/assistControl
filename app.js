const express = require('express');
const cors = require('cors');

const { registrationsRouter } = require('./routes/registrations.routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/v1/registrations', registrationsRouter);

module.exports = { app };
