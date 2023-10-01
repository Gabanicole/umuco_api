const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  role: {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'Role',
   required: true,
 },
});

module.exports = mongoose.model('Permission', permissionSchema);
