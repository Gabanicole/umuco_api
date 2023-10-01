const mongoose = require("mongoose");

const siteSchema = mongoose.Schema({
    
    name:{
     type: String,
     required:[true, " Please add the site name"]
    },
    image:{
     type: String,
     required:[true, " Please add the site image "]
    },
    description:{
     type: String,
     required:[true, " Please add the site description"]
    },
    location:{
     type: String,
     required:[true, "please add the iste Location"]
    },
   },
    {
     timestamps: true,
    }
);
module.exports = mongoose.model("Site", siteSchema)