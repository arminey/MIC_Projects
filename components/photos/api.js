const express = require('express');//
const sizeof = require('image-size');//
const multer = require('multer');//
const fs = require('fs');//
const base64 = require('base-64');//
const utf8 = require('utf8');//
const gm = require('gm');
const PhotosRouter = express.Router(); //
const PhotosService = require('./service'); //
const upload = multer({ dest: 'private/'});

function base64_encode(file) {
      var bitmap = fs.readFileSync(file);
      return new Buffer(bitmap).toString('base64');
}

function base64_decode(base64str, file) {
    var bitmap = new Buffer(base64str, 'base64');
    fs.writeFileSync(file, bitmap);
}

PhotosRouter.post('/processing', upload.single('photo'), (req, res) => {
    let img = base64_encode(req.file.path);
    let dimensions = sizeof('{dest}/{filename}'.replace('{dest}',req.file.destination)
                    .replace('{filename}',req.file.filename));
    let photo = {
      content_type: req.file.mimetype,
      image: img,
      size: req.file.size,
      width: dimensions.width,
      height: dimensions.height
    }
    PhotosService.insertPhotos(photo).then(data => {
      let filename = req.file.filename;
         fs.unlink('./private/' + filename, err => {
           if(err) {
             console.log('Something went wrong');
           }
         });
         //data.image = base64_decode(img,'insert_img.jpg');
         console.log(data);
        return res.send(data);
    });
});

//----------------- upload two photos -----------------//

PhotosRouter.post('/max', upload.array('photo', 2), (req, res) => {
    let photo = req.files;
    let img_0 = base64_encode(photo[0].path);
    let img_1 = base64_encode(photo[1].path);
    let dimensions_0 = sizeof('{dest}/{filename}'.replace('{dest}',photo[0].destination)
                    .replace('{filename}',photo[0].filename));
    let dimensions_1 = sizeof('{dest}/{filename}'.replace('{dest}',photo[1].destination)
                    .replace('{filename}',photo[1].filename));
    let photo_0 = {
      content_type: photo[0].mimetype,
      image: img_0,
      size: photo[0].size,
      width: dimensions_0.width,
      height: dimensions_0.height
    }
    let photo_1 = {
      content_type: photo[1].mimetype,
      image: img_1,
      size: photo[1].size,
      width: dimensions_1.width,
      height: dimensions_1.height
    }
    PhotosService.insertPhotos(photo_0, photo_1).then(data => {
      let filename_0 = photo[0].filename;
      fs.unlink('./private/' + filename_0, err => {
        if(err) {
          console.log('Something went wrong');
        }
      });
      let filename_1 = photo[1].filename;
      fs.unlink('./private/' + filename_1, err => {
        if(err) {
          console.log('Something went wrong');
        }
      });
      return res.send(data);
    });
});



module.exports = PhotosRouter;
