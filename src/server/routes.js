const {postPredictHandler, getAllPredictHandler} = require('../server/handler');
 
const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: postPredictHandler,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true
      }
    }
  },
  // {
  //   path: '/predict/histories',
  //   method: 'GET',
  //   handler: getAllPredictHandler,
  //   options: {
  //     payload: {
  //       allow: 'multipart/form-data',
  //       multipart: true
  //     }
  //   }
  // }
]
 
module.exports = routes;