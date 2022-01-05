
const { response } = require("express");

const Image = require('../models/Image');
const addImage=async(req, res = response)=>{
    const image = new Image(req.body);

    try {
      const imageSaved = await image.save();
      return res.json({
        ok: true,
        image: imageSaved,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        ok: false,
        msg: req.uid,
      });
    }
}

const getImage =async(req, res)=>{
  const images = await Image.find();
  return res.status(200).json({
    ok: true,
    msg: images,
  });
}

const deleteImage = async(req, res)=>{
  const imageId = req.params.id; 
  try{
    const image = await Image.findById(imageId);
    if(!image){
      return res.status(404).json({
        ok: false,
        msg: "Image doesnt exist",
      });  
    }

    const imageDeleted = await Image.findByIdAndDelete(imageId, {new: true});
    return res.status(200).json({
      ok:true,
      msg: 'The image was deleted',
      image: imageDeleted
    });

  }catch(error){
    return res.status(500).json({
      ok: false,
      msg: "Contact the administrator",
    });
    
  }
}

module.exports = { addImage , getImage, deleteImage};


