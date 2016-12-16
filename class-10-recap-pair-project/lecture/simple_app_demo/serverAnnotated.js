//load the express and express-request-proxy modules from Node and assign them to variables
const express = require('express')

//instantiate express so we have access to the express app object and all its functionality
const app = express()

//designate a port to serve the app on.
//It can be specified with the PORT environment variable OR default to port 3000
const PORT = process.env.PORT || 3000


//serve static files from the project home directory
app.use(express.static('./public'))

//check all get requests that haven't been caught by the GH route
// app.get('http://localhost:3000')
app.get('/', function(request, response) {
  //no matter what the request is, respond by sending index.html
  response.sendFile('index.html', { root: './public' })
})

//start the server!
app.listen(PORT, function() {
  console.log(`Server started on port: ${PORT}!`)
})
