const {Schema, model}= require('mongoose');

const ImagenSchema =({
    title:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true,
        unique: true
    }
});

module.exports = model('Image', ImagenSchema);

