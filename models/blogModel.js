const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title:{
     type: String,
     required:[true, " Please add the site name"]
    },
    image:{
     type: String,
     required:[true, " Please add the site image "]
    },
    content:{
     type: String,
     required:[true, " Please add the site description"]
    },
    comment:{
     type: String,
     required:[true, "please add the iste Location"]
    },
   },
    {
     timestamps: true,
    }
);

module.exports = mongoose.model("Blog", blogSchema)