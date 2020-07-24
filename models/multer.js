// Cloudinary Configuration


const cloudinary = require('cloudinary').v2;

cloudinary.config({
	cloud_name: 'saaak',                          //  process.end.CLOUD_Name -----we can write this way to secure our details
	api_key: '579363839996829',                  // process.env.API_ID
  api_secret: 'dONHlRalEyvG39BfU0UTOGgpXuM'   //process.env.API_SECRET
 });


 //All multer configuration

const multer = require('multer')

module.exports = multer({
  storage: multer.diskStorage({}),       // to take url o file and upload it to cloudinary
  fileFilter: (req, file, cb) => {      //allowing which files to be uploaded only
    if (!file.mimetype.match(/pdf/)) {
      cb(new Error('File is not supported'), false)
      return
    }

    cb(null, true)
  }
})


