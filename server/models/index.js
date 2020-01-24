const mongoose = require('mongoose');

const User = require('./user').User;
const Message = require('./message').Message;
const Visitation = require('./visitation').Visitation;
const Household = require('./household').Household;

//IP: 64.125.67.66/32
const DATABASE_URL = "mongodb+srv://opphackaz:PaypalKeap@cluster0-puod6.mongodb.net/test?retryWrites=true&w=majority";
const connectDb = () => {
  return mongoose.connect(DATABASE_URL, {useNewUrlParser: true});
};

const models = { User, Message, Visitation, Household };

module.exports = { 
  'connectDb':connectDb,
  'models': models 
};

