const { Registration } = require('../models/registration.model');
const { Sequelize } = require('sequelize');

const gettAllRegistration = async (req, res) => {
  try {
    const registrations = await Registration.findAll();

    res.status(200).json({
      registrations,
    });
  } catch (error) {
    console.log(error);
  }
};

const createRegistration = async (req, res) => {
  try {
    /* const { entranceTime } = req.body; */

    const newRegistration = await Registration.create(/* { entranceTime } */);
    res.status(201).json({
      newRegistration,
    });
  } catch (error) {
    console.log(error);
  }
};

const gettAllRegistrationById = async (req, res) => {
  try {
    const { registration } = req;

    res.status(200).json({
      registration,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRegistration = async (req, res) => {
  try {
    const { registration } = req;

    /* const { exitTime } = req.body; */

    await registration.update({ exitTime: new Date(), status: 'out' });

    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteRegistration = async (req, res) => {
  try {
    const { registration } = req;
    await registration.update({ status: 'cancelled' });

    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  gettAllRegistration,
  createRegistration,
  gettAllRegistrationById,
  updateRegistration,
  deleteRegistration,
};
