const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const uuidv1 = require('uuid/v1');

const models = require('./models').models;
const connectDb = require('./models').connectDb;
const routes = require('./routes');

const app = express();

// Application-Level Middleware

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'));

app.use(async (req, res, next) => {
  req.context = {
    models
  };
  next();
});

// Routes
app.use('/api/users', routes.user);
app.use('/api/messages', routes.message);
app.use('/api/visitation', routes.visitation);
app.use('/api/household', routes.household);

// 404 -> react
app.get('*', function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname+'/public/index.html');
});
// Start

const eraseDatabaseOnSync = false;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Message.deleteMany({}),
      models.Visitation.deleteMany({}),
      models.Household.deleteMany({})
    ]);

    // await createUser("1234");
    // await updateUser();
    // await visitCreate("1234");
    // await householdCreate("1234");
    // await visitCount1("1234");

  }

  const port = process.env.PORT || 5000;

  // TODO: Change port
  app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`),
  );
});

const visitCreate = async (formData) => {
  const age = await models.User.getAge("formData","formData","formData");
  var chld=false;
  if(age<18) {chld=true};

  const visit = new models.Visitation({
    visitId: uuidv1(),
    username: "formData",
    firstName: "formData",
    lastName: "formData",
    visitationType: "AHCCCS",
    child: chld,
    dateOfVisit: new Date("2019-08-02"),
  });
  const visit1 = new models.Visitation({
    visitId: uuidv1(),
    username: "formData1",
    firstName: "formData",
    lastName: "formData",
    visitationType: "WIC",
    child: chld,
    dateOfVisit: new Date("1988-10-23"),
  });
  const visit2 = new models.Visitation({
    visitId: uuidv1(),
    username: "formData",
    firstName: "formData1",
    lastName: "formData2",
    visitationType: "WIC",
    child: chld,
    dateOfVisit: new Date("2019-09-02"),
  });
  await visit.save();
  await visit1.save();
  await visit2.save();

  var allow=false;
  if("AHCCCS" === "AHCCCS"){
    // yearly twice
    var cnt = await models.Visitation.yearlyCount("formData","AHCCCS");
    if(cnt<=2){
      allow=true;
    }
  }
  else if(formData.visitationType.equals("WIC")){
    // yearly twice
    var cnt = await models.Visitation.yearlyCount("formData","AHCCCS");
    if(cnt<=2){
      allow=true;
    }
  }
  else if(formData.visitationType.equals("Food Bank")){
    // monthly twice
    var cnt = await models.Visitation.monthlyCount("formData","AHCCCS");
    if(cnt <= 2){
      allow=true;
    }
  }
  else if(formData.visitationType.equals("FTF")){
    // yearly twice
    var cnt = await models.Visitation.yearlyCount("formData","AHCCCS");
    if(cnt<=2){
      allow=true;
    }
  }
  else if(formData.visitationType.equals("Diapers")){
    // yearly thrice
    var cnt = await models.Visitation.yearlyCount("formData","AHCCCS");
    if(cnt<=3){
      allow=true;
    }
  }
  else if(formData.visitationType.equals("Medical")){
    // yearly twice
    var cnt = await models.Visitation.yearlyCount("formData","AHCCCS");
    if(cnt<=2){
      allow=true;
    }
  }
  else if(formData.visitationType.equals("Dental")){
    // yearly twice
    var cnt = await models.Visitation.yearlyCount("formData","AHCCCS");
    if(cnt<=2){
      allow=true;
    }
  }
  else if(formData.visitationType.equals("Immunizations")){
    // yearly twice
    var cnt = await models.Visitation.yearlyCount("formData","AHCCCS");
    if(cnt<=2){
      allow=true;
    }
  }
  else if(formData.visitationType.equals("Vision and Hearing")){
    // yearly twice
    var cnt = await models.Visitation.yearlyCount("formData","AHCCCS");
    if(cnt<=2){
      allow=true;
    }
  }

};

const householdCreate = async (formData) => {
  var members = ['a','b','c'];
  await members.forEach(function(e) {
    var member = new models.Household({
      username: 'formData',
      firstName: 'formData'+e,
      lastName: 'formData'+e,
      relationship: 'formData',
      childSpecial: 'formData',
      dateOfBirth: new Date("1995-03-05"),
      gender: 'formData',
      ethnicity: 'formData',
      selfStatus: 'formData',
      primaryLanguage: 'formData',
      nameOfSchool: 'formData',
      dentalInsurance: true,
      primaryDoctor: true,
      medicalInsurance: 'formData',
    });
    member.save();
  })
}

const visitCount1 = async (formData) => {
  var cnt1 = await models.Visitation.totalFamilyCount("formData");
  console.log(cnt1);
}
