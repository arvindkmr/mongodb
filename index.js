const mongoose = require('mongoose');

mongoose
  .connect("mongodb://localhost:27017/",{useNewUrlParser:true,useUnifiedTopology:true})
  .then(() => {
	  console.log('connected');
	})
	.catch((err) => {
	  console.log('error is happening');
    console.log(err);
  });

//   mongoose.Schema()
//   mongoose.model()
// const std = new mongoose.model("stdent", stdent);
// std.find({height : {$eq:6}}) trick part 