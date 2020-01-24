const Router = require('express');
const models = require('../models').models;
const router = Router();

router.get('/', async (req, res) => {
  if(req.query.familyName){
    const user = await req.context.models.User.findByUserName(
      req.query.familyName
    );
    return res.send(user);
  }
  const users = await req.context.models.User.find();
  return res.status(200).send(users);
});

router.post('/', async (req, res) => {
  const formData = req.body.formData;
  const userModel = new models.User({
    familyName: formData.familyName,
    firstName: formData.firstName,
    lastName: formData.lastName,
    dateOfBirth: formData.dateOfBirth, //TODO
    addressLine1: formData.addressLine1,
    addressLine2: formData.addressLine2,
    zipCode: formData.zipcode,
    phoneNumber: 1234444, //TODO
    gender: formData.gender,
    housingType: formData.housingType,
    maritalStatus: formData.maritalStatus,
    ethnicity: formData.ethnicity,
    selfIdentity: formData.selfIdentity,
    highestEducation: formData.highestEducation,
    primaryLanguage: formData.primaryLanguage,
    primaryDoctor: formData.primaryDoctor, // TODO
    monthlyIncome: formData.monthlyIncome,
    monthlyIncomeType: formData.incomeType,
    medicalInsurance: formData.medicalInsType,
    childCareType: formData.childCareType,
  });
  const user = await req.context.models.User.createUser(req.body.formData.familyName,userModel);
  console.log(user);
  if(user && user.isError){
    const errorCode = user.errorCode || 500;
    return res.status(errorCode).send(user);
  } else if(user){
    res.status(200).send(user);
  }
})


module.exports = { 'router' : router };
