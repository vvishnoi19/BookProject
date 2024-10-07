const mongoose=require('mongoose')
const timestamps=require('mongoose-timestamps')
const Schema=mongoose.Schema;
const BookSchema=new Schema({
    bookTitle:{type:String},
    authorName:{type:String },
    publicationHouse:{type:String},
    isbnNo:{type:String},
    price:{type:String},
    language:{type:String ,enum:['Hindi','English']},
    bookImage:{type:String},
    createdAt:Date,
    updatedAt:Date,
})
BookSchema.plugin(timestamps,{ index : true})
module.exports=mongoose.model('Book',BookSchema )