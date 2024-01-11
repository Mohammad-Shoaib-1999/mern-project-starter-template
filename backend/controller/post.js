const Post = require("../model/post");
const AWS = require('aws-sdk');

exports.getAllPosts = async (req, res, next) => {
  try {
    res.send("this is get all product route");
  } catch (error) {
    return next(error);
  }
};

exports.getPost = async (req, res, next) => {
  try {
    res.send("this is get product categories route");
  } catch (error) {
    return next(error);
  }
};

exports.createPost = async (req, res, next) => {
  const form = new multiparty.Form();
  form.parse(request, async (error, fields, files) => {
    if (error) {
      return response.status(500).send(error);
    };
    try {
      const path = files.file[0].path;
      const buffer = fs.readFileSync(path);
      const type = await FileType.fromBuffer(buffer);
      const fileName = `bucketFolder/${Date.now().toString()}`;
      const data = await uploadFile(buffer, fileName, type);
      return response.status(200).send(data);
    } catch (err) {
      return response.status(500).send(err);
    }
  });
};
const s3 = new AWS.S3();

const uploadFile = (buffer, name, type) => {
  const params = {
    ACL: 'public-read',
    Body: buffer,
    Bucket: process.env.S3_BUCKET,
    ContentType: type.mime,
    Key: `${name}.${type.ext}`,
  };
  return s3.upload(params).promise();
};

exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if(!post){
      return res.status(404).json({msg:'post not found'});
    }
    if(post.user.toString() !== req.user.id){
      return res.status(401).json({msg:'This is not your post you cannot add a photo'});
    }
    if(!req.files){
      res.status(400).json({
        errors:[{msg:'please upload a file, or click next'}]
      })
    }

    const file = req.files.file;
    if(!file.mimetype.startsWith('image')){
      res.status(400).json({errors:[{msg:'images only'}]})
    }
    file.name = `photo_${post._id}${path.parse(file.name).ext}`
    let Blob = req.files.file.data
    const s3 = new AWS.S3()

    let params ={
      Bucket:process.env.S3_BUCKET,
      Key:file.name,
      Body:Blob,
    }

    s3.upload(params,function(err,data){
      console.log(err,data);
    })
    let newPhoto = await Post.findByIdAndUpdate(req.params.id,{postphoto:file.name},{new:true})
    res.status(200).json({msg:"Successfully Updated",newPhoto})
  } catch (error) {
    return next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    res.send("this is the delete product route");
  } catch (error) {
    return next(error);
  }
};