const express = require('express');
const app = express();
const {calcMean} = require('./operations');

// const { convertAndValidateNumsArray, findMode, findMean, findMedian } = require('./helpers');
//stopped at 22 mins of second video

app.get('/mean', function(req, res) {
  let numsAsStrings = req.query.nums.split(',');

  console.log(numsAsStrings);
  console.log(typeof (req.query.nums));
    res.send("Okay");
    // return response.send('mean route');
  });

app.get('/median', function(req, res) {
  return response.send('median route');
});

app.get('/mode', function(request, response) {
    return response.send('mode route');
  });


// use port 3000 unless there exists a preconfigured port
var port = process.env.PORT || 3000;

app.listen(3000, function(){
  console.log('App on port 3000');
}) 

