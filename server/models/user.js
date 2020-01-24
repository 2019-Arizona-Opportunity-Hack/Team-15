const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  familyName: {
    type: String,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  address: {
    type: String,
  },
  zipCode: {
    type: Number,
  },
  city: {
    type: String,
  },
  phoneNumber: {
    type: Number,
    max: 9999999999,
  },
  gender: {
    type: String,
  },
  housingType: {
    type: String,
  },
  maritalStatus: {
    type: String,
  },
  ethnicity: {
    type: String,
  },
  selfStatus: {
    type: [String],
  },
  education: {
    type: String,
  },
  primaryLanguage: {
    type: String,
  },
  dentalInsurance: {
    type: String,
  },
  primaryDoctor: {
    type: String,
  },
  employmentType: {
    type: String,
  },
  monthlyIncomeAmount: {
    type: Number,
  },
  monthlyIncomeType: {
    type: String,
  },
  medicalInsurance: {
    type: String,
  },
  childCareType: {
    type: String,
  }
});

userSchema.statics.findByUserName = async function(familyName) {
  let user = await this.findOne({
    familyName: familyName,
  });

  if (!user) {
    user = await this.findOne({ email: login });
  }

  return user;
};

userSchema.statics.createUser = async function(familyName, userObj) {
  //Count users
  // let cnt = await this.countDocuments({familyName:familyName});
  // if(cnt >= 0) {
  try {
    await userObj.save();
    return { 
      isError : false,
      msg: "success"
    }
  } catch(err) {
    const error = { 
      isError : true, 
      errorCode: 422
    }
    if (err.name === 'MongoError' && err.code === 11000) {
      error['msg'] = "Username already exists";
    } else error['msg'] = err.errmsg;
    return error;
  }
};

userSchema.statics.checkByUserName = async (familyName,userObj) => {
  //returns count of user names
  return await this.countDocuments({familyName:familyName});
};

userSchema.statics.getAge = async function(familyName, firstname, lastname) {		
  let user = await this.findOne({
    familyName: familyName,		
    firstName: firstname,
    lastName: lastname,		
  });
  if(user) {
    var age = Math.ceil(Math.abs(Date.now() - new Date(user['dateOfBirth']))/(1000*60*60*24*365));		
    return age;		
  } else {
    return {
      isError: true,
      errorMsg: "User not registered"}
  }
}


userSchema.pre('remove', function(next) {
  this.model('Message').deleteMany({ user: this._id }, next);
});

const User = mongoose.model('User', userSchema);

module.exports = {
  'User' : User
}
