const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const profileSchema = new Schema ({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    orders: [Order.schema],
});

profileSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  profileSchema.methods.isCorrectPassword = async function (password) {
    await bcrypt.compare(password, this.password);
  };
  
  const Profile = mongoose.model('Profile', profileSchema);
  
  module.exports = Profile;