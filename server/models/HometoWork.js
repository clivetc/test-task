const mongoose = require ('mongoose');

//geolocation Schema
const GeoSchema = new mongoose.Schema({
    type:{
        type:String,
        default:"LineString"
    },
    coordinates:{
        type:[Number],
        index:"2dsphere"
    }
})

const RoutesSchema = new mongoose.Schema({
  name: {
    type: String
  },
  properties: {
    direction: String,
    power: Number
  },
    createdAt:{
        type:Date,
        default: Date.now
    },
    geometry:GeoSchema
});

module.exports =mongoose.model('Village', RoutesSchema);