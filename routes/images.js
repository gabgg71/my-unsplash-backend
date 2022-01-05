const { check } = require("express-validator");
const {validateInputs} = require('../middlewares/validate-inputs');
const { Router } = require("express");
const { addImage, deleteImage , getImage} = require("../controllers/images");
const router = Router();

router.post('/new', [
    check("title", "Title must exist").not().isEmpty(),
    check("url", "Url must exist").not().isEmpty(),
    validateInputs
  ], addImage);

  router.get('/', getImage
    );

router.delete('/delete/:id',deleteImage);


module.exports = router;
  

