
const mongoose = require('mongoose');
const { Schema } = mongoose;
// login registration schema 



const collegedata = new Schema({
  user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
  },  
    name:{
        type: String,
        required: true
    },
    phoneno:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now,
      },

  });
  
  module.exports =  mongoose.model('addcollege', collegedata);
 
//  const Addstudent Schema mongoose

//   const AddStudent = new Schema({
//     firstname:{
//         type: String,
//         required: true
//     },
//     lastname:{
//         type: String,
//         required: true,
//         unique: true
//     },
//     email:{
//         type: String,
//         required: true
//     },
//     mobileno:{
//         type: String,
//         required: true
//     },
//      collegeid:{
//         type: String,
//         required: true
//     },
//     date:{
//         type: Date,
//         default: Date.now
//     },
    
//   });
//      const ajay =mongoose.model('AdstudentData', AddStudent);
//     //  export default ajay;
//      module.exports=ajay