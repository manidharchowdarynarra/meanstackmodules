const express=require('express')
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/CSE_C",(err)=>{
	if(err)
	console.log("db not connected");
	else
	console.log("db connected");
});

const ns=new mongoose.Schema({
name:String,
age:Number,
rno:Number
});

const nm=new mongoose.model("records",ns);

const data=new nm({name:'mani',age:21,phno:1234356789});
const data1=new nm({name:'ranga',age:20,phno:2223334444});
data.save();
data1.save();

nm.insertMany([
	{name:'raji',age:'20'},
	{name:'sai',age:'22'},
	{name:'venky',age:'19'}
]).then(function(){
	console.log("data inserted")
}).catch(function(error){
	consolelog(error)
});

nm.findOne({},function(err,data){
	if(err){
	    console.log(err);
	}
	else{
	     console.log("First function call:",data);
	}
});