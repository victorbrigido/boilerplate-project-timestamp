require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const {MongoClient} = require('mongodb');
const client = new MongoClient(process.env.DB_URL)
const db = client.db("urlshortner")
const urls = db.collection("urls")

const port = process.env.PORT || 3000;






app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/public', express.static(`${process.cwd()}/public`));


// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
}); 


app.post('/api/shorturl', function (req, res) {
console.log(req.body)
res.json({ greeting: 'hello API'});

});

/*app.get("/api/whoami", function (req, res) {
  res.json({
    ipaddress: req.socket.remoteAddress,
    language: req.headers['accept-language'],
    software: req.headers['user-agent'],
  })
}); 


const isInvalidDate = (date) => date.toUTCString() === "Invalid Date"

// your first API endpoint... 
app.get("/api/:date", function (req, res) {
  let date = new Date(req.params.date)

  if(isInvalidDate(date)){
    date = new Date(+req.params.date)
  }
  
  if(isInvalidDate(date)){
    res.json({error: "Invalid Date"})
    return;
  }
  
  res.json({
      unix: date.getTime(),
      utc: date.toUTCString(),
    })
  });

app.get("/api", (req, res) => {
  res.json({
    unix: new Date().getTime(),
    utc: new Date().toUTCString(),
    
  });
});*/

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});