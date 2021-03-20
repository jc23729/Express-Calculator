const express = require('express');
const app = express();
const ExpressError = require('./expressError');

app.get('/mean', function(request, response) {
    return response.send('Dogs go brk brk');
  });

app.get('/median', function(request, response) {
  return response.send('Dogs go brk brk');
});

app.get('/mode', function(request, response) {
    return response.send('Dogs go brk brk');
  });

app.listen(3000, function(){
  console.log('App on port 3000');
}) 

