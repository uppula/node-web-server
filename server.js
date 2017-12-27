const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('Hello this is my first Node JS web app');

  res.send({
    message: "This is first message",
    likes: ['Sports', 'Love','food']
  });

});

app.get('/about', (req, res) => {

  res.send('THis is about page...');

});

app.get('/bad', (req,res) => {

  res.send({
    errorMessage: 'This is an errorMessage',
    advice: 'Better not to invoke'
  });
})

app.listen(3000, () => {
  console.log('server is up and running on port 3000 !!!!');
});
