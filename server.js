const Event = require('./models/Event');

const express = require('express');
const bodyParser = require('body-parser');

const app =  express();

app.use (bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/client/public'));
app.use(express.static("public"));

app.set('views', 'client/views'); 
app.set('view engine', 'ejs');

/* Default Events for the Events Page */
const event1 = new Event(
  "Info Session: 2023", 
  "This event will serve as an introduction of the Google Developer Student Club to the students of Central Philippine University, as well as to launch actual memberships of the students to the organization.",
  "Rafael Prudente",
  null
); 

const event2 = new Event(
  "Machine's Still Learning!",
  "This workshop aims to provide the audience an opportunity to grasp the idea of Tensorflow, its practices and how to apply it in practice. ",
  "Lyzza Flores",
  null
);

const event3 = new Event(
  "CareerTrail",
  "The event will mainly be an informative and interactive session covering the different pathways a tech graduate could take in the industry.",
  "Dave Alivio",
  null
);

const defaultAdmin = {
  username: "gdscadmin",
  password: "gdscpassword",
}

const defaultEvents = [event1, event2, event3];

// Home Route
app.get('/', (req, res) => {
  res.render('home', {

  })
  console.log(__dirname + '/client/public')
})

app.post('/', (req, res) => {

})

// About Route
app.get('/about', (req, res) => {
  res.render('about', {

  })
})

app.post('/about', (req, res) => {

})

// Events Route
app.get('/events', (req, res) => {

  res.render('events', {
    defaultEvents: defaultEvents
  })
}) 

app.post('/events', (req, res) => {

})

// Create Event Form 
app.get('/create-event', (req, res) => {
  res.render('create-event', {

  })
}) 

app.post('/create-event', (req, res) => {

  const newEvent = new EventPost(req.body.title, req.body.name, req.body.description);
  
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

app.listen(8080, () => {
  console.log("Server is up and running."); 
});