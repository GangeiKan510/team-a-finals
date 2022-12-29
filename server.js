require('dotenv').config();

const { SuperAdmin, SubAdmin, Event } = require('./models/Models');

const sgMail = require('@sendgrid/mail');
const sgClient = require('@sendgrid/client');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgClient.setApiKey(process.env.SENDGRID_API_KEY);

const express = require('express');
const expressFileUpload = require('express-fileupload');
const bodyParser = require('body-parser');

const app =  express();

app.use (bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/client/public'));
app.use(express.static("public"));
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgClient.setApiKey(process.env.SENDGRID_API_KEY);

app.set('views', 'client/views'); 
app.set('view engine', 'ejs');

/* Default Events for the Events Page */

const event1 = Event.build({
  eventID: 1, 
  title: "Info Session: 2023", 
  description: "This event will serve as an introduction of the Google Developer Student Club to the students of Central Philippine University, as well as to launch actual memberships of the students to the organization.",
  hostName: "Rafael Prudente",
  photoLink: "https://lh3.googleusercontent.com/larmi9ybFj0duZoULrniNnKhNoDJ_TbohSL2GKMm7LlfFvYqfjUL9R2ed0sPFZgnPAYVUPzovTkqwMP_H_lW6rI2J5_tuBA4MPbboaIAMLHvTtP_4vuy7ObizOBSAGyoTLAWr4g-t58Yf_jCGL8qM1LgQAwHTJ2aBIO6s19Aqv5u_WEIOPCpUEl5IO0p4bCKZOOHfAmQCNjD5ZAAirL_CFHLrLrIEwBT55a4OWjYKVlwC5CXNXfM7JlzwGU8bRTJs-o44mwO27eJCN1vs5RPR4b_z3RPpbAYrxrUEX18XiXE9na0VecoO5JOEvNu_kx6UuhbBLRBT_wMpfW5yqn1dFlj2orU9nSv1ySc35DcbNrUe1nsvPyLJxx47SALmpzb4HGItymY7lkvmb9ZVD9hvxPzpuYERshUuosxynJYhonhU5bX5fGlH4FFvGoDSCsnmuClhCeTRnIPNcJvZk7or8p5g1HBT74NoB7vjC4_6J4xJU4ZN0Y_hBNPYqwdFJkLFkwh98f0ZEB12fJC5leuxomA3Bma1dMNAAVg1j-BU-BOzkl635o9YLF_FeQAqK96LT_mrwZPQunYMFXWvUWUS2aJ5u3vpTA7CpYzqqH2WkOxMObp-fxEz13p-W6VQls6H1TQZ6o3-K1PmiRFS4TyiGq1e6OxCGtkR9iRR6xqueAGyl1RAKiOq_pZaDZflrWyWAxR_d-tCOEXy-o7QazmRxFQAhQKa1U9tCm8KKdhgyxIKTZBiOC6iBnD55-cvg42ndd6HVt4Q-B_-Tcr7DZ4SzBZvPYvsX8m0ouy8NcMPzekJSd1hmEivp9qXsAj8ab5o4EpxZlykNpRfQgD51K1EOEZKpGJ_TOl4PfU2M9a2NB7tXuwuOw026YLHqtFc4k53VTFT4Z4vrTno4DkjhFatrb9b0MnAZnr_sxyxLy52iwso0bBXwm_zRcCBDFZOJ2jxfEoUjySssnT95AHJNv6g9ss0GzP6ip9X3PKlVweuZPy8sJ0eiQy0BVzXbc1GgZw7a9tZcs3MbhkYT1dB3DXB5CDXTtesc8kBCNDc21OIpx-h-oeCblqTSOSuIsgBf0fZhOMdLU8EHxF4oqJs_yuJOlewSQ-rg2QaW4a0R1ynbzLD0X6teoc6JESprtW6vhXCYBn=w880-h220-no?authuser=2"
}); 

const event2 = Event.build({
  eventID: 2, 
  title: "Machine's Still Learning!",
  description: "This workshop aims to provide the audience an opportunity to grasp the idea of Tensorflow, its practices and how to apply it in practice. ",
  hostName: "Lyzza Flores",
  photoLink: "https://lh3.googleusercontent.com/larmi9ybFj0duZoULrniNnKhNoDJ_TbohSL2GKMm7LlfFvYqfjUL9R2ed0sPFZgnPAYVUPzovTkqwMP_H_lW6rI2J5_tuBA4MPbboaIAMLHvTtP_4vuy7ObizOBSAGyoTLAWr4g-t58Yf_jCGL8qM1LgQAwHTJ2aBIO6s19Aqv5u_WEIOPCpUEl5IO0p4bCKZOOHfAmQCNjD5ZAAirL_CFHLrLrIEwBT55a4OWjYKVlwC5CXNXfM7JlzwGU8bRTJs-o44mwO27eJCN1vs5RPR4b_z3RPpbAYrxrUEX18XiXE9na0VecoO5JOEvNu_kx6UuhbBLRBT_wMpfW5yqn1dFlj2orU9nSv1ySc35DcbNrUe1nsvPyLJxx47SALmpzb4HGItymY7lkvmb9ZVD9hvxPzpuYERshUuosxynJYhonhU5bX5fGlH4FFvGoDSCsnmuClhCeTRnIPNcJvZk7or8p5g1HBT74NoB7vjC4_6J4xJU4ZN0Y_hBNPYqwdFJkLFkwh98f0ZEB12fJC5leuxomA3Bma1dMNAAVg1j-BU-BOzkl635o9YLF_FeQAqK96LT_mrwZPQunYMFXWvUWUS2aJ5u3vpTA7CpYzqqH2WkOxMObp-fxEz13p-W6VQls6H1TQZ6o3-K1PmiRFS4TyiGq1e6OxCGtkR9iRR6xqueAGyl1RAKiOq_pZaDZflrWyWAxR_d-tCOEXy-o7QazmRxFQAhQKa1U9tCm8KKdhgyxIKTZBiOC6iBnD55-cvg42ndd6HVt4Q-B_-Tcr7DZ4SzBZvPYvsX8m0ouy8NcMPzekJSd1hmEivp9qXsAj8ab5o4EpxZlykNpRfQgD51K1EOEZKpGJ_TOl4PfU2M9a2NB7tXuwuOw026YLHqtFc4k53VTFT4Z4vrTno4DkjhFatrb9b0MnAZnr_sxyxLy52iwso0bBXwm_zRcCBDFZOJ2jxfEoUjySssnT95AHJNv6g9ss0GzP6ip9X3PKlVweuZPy8sJ0eiQy0BVzXbc1GgZw7a9tZcs3MbhkYT1dB3DXB5CDXTtesc8kBCNDc21OIpx-h-oeCblqTSOSuIsgBf0fZhOMdLU8EHxF4oqJs_yuJOlewSQ-rg2QaW4a0R1ynbzLD0X6teoc6JESprtW6vhXCYBn=w880-h220-no?authuser=2"
});

const event3 = Event.build({
  eventID: 3, 
  title: "CareerTrail",
  description: "The event will mainly be an informative and interactive session covering the different pathways a tech graduate could take in the industry.",
  hostName: "Dave Alivio",
  photoLink: "https://lh3.googleusercontent.com/larmi9ybFj0duZoULrniNnKhNoDJ_TbohSL2GKMm7LlfFvYqfjUL9R2ed0sPFZgnPAYVUPzovTkqwMP_H_lW6rI2J5_tuBA4MPbboaIAMLHvTtP_4vuy7ObizOBSAGyoTLAWr4g-t58Yf_jCGL8qM1LgQAwHTJ2aBIO6s19Aqv5u_WEIOPCpUEl5IO0p4bCKZOOHfAmQCNjD5ZAAirL_CFHLrLrIEwBT55a4OWjYKVlwC5CXNXfM7JlzwGU8bRTJs-o44mwO27eJCN1vs5RPR4b_z3RPpbAYrxrUEX18XiXE9na0VecoO5JOEvNu_kx6UuhbBLRBT_wMpfW5yqn1dFlj2orU9nSv1ySc35DcbNrUe1nsvPyLJxx47SALmpzb4HGItymY7lkvmb9ZVD9hvxPzpuYERshUuosxynJYhonhU5bX5fGlH4FFvGoDSCsnmuClhCeTRnIPNcJvZk7or8p5g1HBT74NoB7vjC4_6J4xJU4ZN0Y_hBNPYqwdFJkLFkwh98f0ZEB12fJC5leuxomA3Bma1dMNAAVg1j-BU-BOzkl635o9YLF_FeQAqK96LT_mrwZPQunYMFXWvUWUS2aJ5u3vpTA7CpYzqqH2WkOxMObp-fxEz13p-W6VQls6H1TQZ6o3-K1PmiRFS4TyiGq1e6OxCGtkR9iRR6xqueAGyl1RAKiOq_pZaDZflrWyWAxR_d-tCOEXy-o7QazmRxFQAhQKa1U9tCm8KKdhgyxIKTZBiOC6iBnD55-cvg42ndd6HVt4Q-B_-Tcr7DZ4SzBZvPYvsX8m0ouy8NcMPzekJSd1hmEivp9qXsAj8ab5o4EpxZlykNpRfQgD51K1EOEZKpGJ_TOl4PfU2M9a2NB7tXuwuOw026YLHqtFc4k53VTFT4Z4vrTno4DkjhFatrb9b0MnAZnr_sxyxLy52iwso0bBXwm_zRcCBDFZOJ2jxfEoUjySssnT95AHJNv6g9ss0GzP6ip9X3PKlVweuZPy8sJ0eiQy0BVzXbc1GgZw7a9tZcs3MbhkYT1dB3DXB5CDXTtesc8kBCNDc21OIpx-h-oeCblqTSOSuIsgBf0fZhOMdLU8EHxF4oqJs_yuJOlewSQ-rg2QaW4a0R1ynbzLD0X6teoc6JESprtW6vhXCYBn=w880-h220-no?authuser=2"
});

const defaultAdmin = SuperAdmin.build({
  SuperAdminId: 1,
  username: "gdscadmin",
  password: "gdscpassword",
});

const defaultEvents = [event1, event2, event3];

// Home Route
app.get('/', (req, res) => {
  res.render('home', {

  })
})

// About Route
app.get('/about', (req, res) => {
  res.render('about', {

  })
})


// Events Route
app.get('/events', (req, res) => {

  res.render('events', {
    defaultEvents: defaultEvents
  })
}) 

// Create Event Form 
app.get('/create-event', (req, res) => {
  res.render('create-event', {

  })
}) 

app.post('/create-event', (req, res) => {

  const newEvent = Event.build({
    eventID: defaultEvents.length + 1,
    title: req.body.title, 
    hostName: req.body.name, 
    description: req.body.description
  });
  
  defaultEvents.push(newEvent);
  
  res.redirect('/events');
}) 

// Admin Login Form 
app.get('/admin-login', (req, res) => {
  res.render('admin-login', {
    
  })
})

app.post('/admin-login', (req, res) => {
  const adminUsername = req.body.adminUsername;
  const adminPassword = req.body.adminPassword;

  if (adminUsername == defaultAdmin.username && adminPassword == defaultAdmin.password) {
    res.send(`Successfully logged in! Welcome, ${defaultAdmin.username}`);
  }

})

/*
SEND GRID NEWSLETTER ROUTES
*/

// Routes

app.get('/signup', (req, res) => {
});

app.post('/signup', async (req, res) => {
});

app.get('/confirm', async (req, res) => {

});

app.get('/upload', (req, res) => {
});

app.post('/upload', async (req, res) => {

});

app.get('/delete', async (req, res) => {

});


app.listen(8080, () => {
  console.log("Server is up and running."); 
});