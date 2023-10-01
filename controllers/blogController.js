const asyncHandler = require("express-async-handler")
const Blog = require("../models/blogModel")
//des get all sites
//access public
const getBlogs = asyncHandler(async (req,res) => {
 const blogs = await Blog.find();
 res.status(200).json(blogs)
});

//des create  new blog
//access public
const createBlog = asyncHandler(async (req,res) => {
  console.log("the request body is :",req.body);
  const{title,image,content,comment}= req.body;
  if(!title||!image||!content ||!comment){
   res.status(400);
   throw new Error("all field are mandatory")
  }
  const blog = await Blog.create({
   title,
   image,
   content,
   comment,
  })
 res.status(201).json(blog)
});

//des  Get blogs
//@route Get api/blogs/:id
//access public
const getBlog = asyncHandler(async(req,res) => {
  const blog = await Blog.findById(req.params.id);
  if(!blog){
    res.status(404);
    throw new Error("Blog not found")
  }
 res.status(200).json(blog)
});

//des  update blogs
//@route Get api/blogs/:id
//access public
const updateBlog = asyncHandler(async(req,res) => {
  const blog = await Blog.findById(req.params.id);
  if(!blog){
    res.status(404);
    throw new Error("Blog not found")
  }
  const updatedBlog = await Blog.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true}
  );
 res.status(200).json(updatedBlog);
});

//des delete blogs
//access public
const deleteBlog = asyncHandler( async (req,res) => {
  const blog = await Blog.findById(req.params.id);
  if(!blog){
    res.status(404);
    throw new Error("Blog not found")
  }
  await Blog.remove(),
 res.status(200).json({message:`Delete Blog for ${req.params.id}`})
});


module.exports = { getBlogs, createBlog, getBlog,updateBlog,deleteBlog}