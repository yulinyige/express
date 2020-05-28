var express = require('../../');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.all('/all/path',function (req,res) {
  res.send('this is all path');
})

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
