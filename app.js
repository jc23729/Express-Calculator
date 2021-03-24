const express = require('express');
const app = express();
const ExpressError = require('./expressError');

// const { convertAndValidateNumsArray, findMode, findMean, findMedian } = require('./helpers');


// The three base routes are /mean, /median, /mode. All accept GET requests
// Each route takes a query key of nums which is a comma-separated list of numbers. For example, if I want to get the mean of 1, 3, 5, and 7, that would look like be a GET request to /mean?nums=1,3,5,7.

// The response of each operation should be JSON which looks like this:

// response: {
//   operation: "mean",
//   value: 4
// }


app.get('/mean', function(req, res) {
    console.log(req.query.nums);
    res.send("Okay");
    // return response.send('mean route');


  });

app.get('/median', function(req, res) {
  return response.send('median route');
});

app.get('/mode', function(request, response) {
    return response.send('mode route');
  });


//   The app should “gracefully” handle the following errors:

//   Passing in an invalid number (NaN errors). For instance, /mean?nums=foo,2,3 should respond with a 400 Bad Request status code and a response that saying something like: foo is not a number.
//   Empty input: /mean without passing any nums should respond with a 400 Bad Request status code saying something like nums are required.
//   Make sure you have unit tests for mean, median and mode.


// // Global Error Handler

//   app.use(function(err, req, res, next) {
//     // the default status is 500 Internal Server Error
//     let status = err.status || 500;
//     let message = err.message;
  
//     // set the status and alert the user
//     return res.status(status).json({
//       error: {message, status}
//     });
//   })

/** general error handler */

// app.use(function (req, res, next) {
//     const err = new ExpressError("Not Found",404);
  
//     // pass the error to the next piece of middleware
//     return next(err);
//   });
  
//   /** general error handler */
  
//   app.use(function (err, req, res, next) {
//     res.status(err.status || 500);
  
//     return res.json({
//       error: err,
//       message: err.message
//     });
//   });

// use port 3000 unless there exists a preconfigured port
var port = process.env.PORT || 3000;

app.listen(3000, function(){
  console.log('App on port 3000');
}) 

