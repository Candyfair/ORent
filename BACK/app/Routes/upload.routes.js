const {Router} = require('express');
const router = Router();

const cloudinary = require('../../configs/cloudinary')
const upload = require('../../configs/multer')

router.post('/upload', upload.single('property_image'), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        res.json(result)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;