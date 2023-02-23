const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:8328',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
	console.log("connected")
}).catch((err)=>{
	console.log(err)
})