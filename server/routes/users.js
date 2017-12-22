var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest:'public/upload'});
const fs = require('fs');
var storage = multer.diskStorage({
destination: function (req, file, cb) {
  cb(null, 'public/upload')
},
filename: function (req, file, cb) {
  console.log(file);
  cb(null, file.originalname)
}
})

var upload = multer({dest:'public/upload', storage: storage })



/* GET users listing. */

router.post('/add',upload.any(), function(req,res){
  console.log(req.body)
  var fileList=[]
  fs.readdirSync('public/upload').forEach(file => {
    console.log(file);
    fileList.push(file)
  })
  console.log(fileList)
  res.send(fileList)
	//res.send("file saved to folder");
});


router.get('/upload',function(req, res, next) {
  var fileList=[]
  fs.readdirSync('public/upload').forEach(file => {
    console.log(file);
    fileList.push(file)
  })
  console.log(fileList)
  res.send(fileList)
});


module.exports = router;
