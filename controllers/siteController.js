const asyncHandler = require("express-async-handler")
const Site = require("../models/sitesModel")
//des get all sites
//access public
const getSites = asyncHandler(async (req,res) => {
 const sites = await Site.find();
 res.status(200).json(sites)
});

//des create  new sites
//access public
const createSite = asyncHandler(async (req,res) => {
  console.log("the request body is :",req.body);
  const{name,image,description,location}= req.body;
  if(!name||!image||!description ||  !location){
   res.status(400);
   throw new Error("all field are mandatory")
  }
  const site = await Site.create({
   name,
   image,
   description,
   location,
  })
 res.status(201).json(site)
});

//des  Get sites
//@route Get api/sites/:id
//access public
const getSite = asyncHandler(async(req,res) => {
  const site = await Site.findById(req.params.id);
  if(!site){
    res.status(404);
    throw new Error("Site not found")
  }
 res.status(200).json(site)
});

//des  update sites
//@route Get api/sites/:id
//access public
const updateSite = asyncHandler(async(req,res) => {
  const site = await Site.findById(req.params.id);
  if(!site){
    res.status(404);
    throw new Error("Site not found")
  }
  const updatedSite = await Site.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true}
  );
 res.status(200).json(updatedSite);
});

//des delete sites
//access public
const deleteSite = asyncHandler( async (req,res) => {
  const site = await Site.findById(req.params.id);
  if(!site){
    res.status(404);
    throw new Error("Site not found")
  }
  await Site.remove(),
 res.status(200).json({message:`Delete Site for ${req.params.id}`})
});


module.exports = { getSites, createSite, getSite,updateSite,deleteSite}