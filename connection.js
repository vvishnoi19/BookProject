const mongoose=require('mongoose')
async function connection() {

    await mongoose.connect("mongodb://localhost:27017/book-project")
    console.log("Database is connected....")
    
}
module.exports=connection;