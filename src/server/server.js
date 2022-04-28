const path = require('path');
const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, '../../dist')));
app.set('port', process.env.PORT || 8080);

app.get('/styles',(req,res)=>{
  res.sendFile(path.join(__dirname,"../../App.css"))
})

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});