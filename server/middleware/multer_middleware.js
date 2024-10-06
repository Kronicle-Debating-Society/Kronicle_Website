const multer =require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, "/uploads");
    },
    filename: function (req, file, cb){
      return cb(null,`${Date.now()}-${file.originalname}`)
  
    }
  })

  const fileFilter=(req,file,cb)=>{
    if(file.mimetype==='image/jpeg'|| file.mimetype==='image/png'|| file.mimetype==='image/jpg'){
        cb(null,true)
    }
    else(
        {'error':'UNSUPPORTED FILE FORMAT. KINDLY UPLOAD ONY JPEG/JPG OR PNG FORMAT'},
        false
    ) 

  }

  const upload=multer({
    storage,
    limits: {fieldSize: 1024*1024},
    fileFilter
  })

  module.exports= upload;