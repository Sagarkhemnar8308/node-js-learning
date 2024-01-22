const { Promise } = require("mongoose");
const app = require("../models/app.model");

const app1= {
  
  getAllapp: async function () {
    return await app.find();
  },

  save: async function (appObject) {
    return await app.create(appObject);
  },

  //update app.....
  updateapp: function (id, topic) {
    app.findByIdAndUpdate(id, topic, { new: true }, function (err, doc) {
      if (err) {
        console.log("error ", err)
        return false;
      } else {
        console.log("data ", doc);
        return doc
      }
    });
  },
   //find by name
 findByName: async function (name) {
  const data = await app.find({
    name: { $regex : '.*'+ name + '.*', $options:'i'} ,
  });
  return data;
},
  //Delete app.......
  delete: function (id)

 {
    return new Promise((resolve, reject) => {
      app.findByIdAndDelete(id, function (err, doc) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(doc);
        }
      });
    });
  },



};
 

module.exports = app1;