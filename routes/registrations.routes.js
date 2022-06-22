const express = require('express');

const {
  registrationExists,
} = require('../middlewares/registrations.middlewares');

const {
  gettAllRegistration,
  createRegistration,
  gettAllRegistrationById,
  updateRegistration,
  deleteRegistration,
} = require('../controllers/registrations.controllers');

const router = express.Router();

router.route('/').get(gettAllRegistration).post(createRegistration);

router
  .route('/:id')
  .get(registrationExists, gettAllRegistrationById)
  .patch(registrationExists, updateRegistration)
  .delete(registrationExists, deleteRegistration);

module.exports = { registrationsRouter: router };
