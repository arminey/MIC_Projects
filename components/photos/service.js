const PhotoDAO = require('./private/dao');

class PhotosService {

  insertPhotos(photo) {
    return new Promise((resolve, reject) => {
      PhotoDAO.insertData(photo).then(data => {
        resolve(data);
      }).catch(err => {
        reject(err);
      })
    })
  }
  insertPhotos(photo_0, photo_1) {
    return new Promise((resolve, reject) => {
      let photos = photo_0
        if(photo_0.size < photo_1.size)
          photos = photo_1;
        PhotoDAO.insertData({
          content_type:photos.content_type,
          image:photos.image,
          size:photos.size,
          width:photos.width,
          height:photos.height,
        }).then(data => {
            resolve(data);
            console.log(data);
          }).catch(err => {
            reject(err);
          })
    })
  }
}


module.exports = new PhotosService();
