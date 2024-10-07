const Book=require('../models/Book')
const cloudinary=require('cloudinary').v2;
cloudinary.config({
    cloud_name:"dqq17edea",
    api_key:"542373457145651",
    api_secret:"yEMj1ErMrBD4Hl370Io1cNsM2uE"
});
async function addbook(req,res)
{
    try{
    const result=await cloudinary.uploader.upload(req.file.path)
    let book=new Book(req.body);
    book.bookImage=result.secure_url;
    await book.save();
    res.redirect('/')}
    catch(err)
    {
        console.log(err)
    }
}
async function getlist(req,res)
{
    try{
        let books=await Book.find({})
        res.render('booklist',{
        books:books
    });
}
    catch(err)
    {
        console.log(err)
    }

}

async function getParticulareditBook(req,res){
    try{
        let id=req.params.id;
        let book=await Book.findOne({_id:id});

        res.render('bookforedit',{
            book:book
        })
    }
    catch(err)
    {
        console.log(err)
    }
}
async function editBook(req,res){
    try{
    let id=req.params.id;
    let book=await Book.findById(id);
    book.bookTitle=req.body.bookTitle;
    book.authorName=req.body.authorName;
    book.publicationHouse=req.body.publicationHouse;
    book.isbnNo=req.body.isbnNo;
    book.price=req.body.price;
    book.language=req.body.language;
    if(req.file)
    {
    const result=await cloudinary.uploader.upload(req.file.path)
    book.bookImage=result.secure_url;}
    await book.save();
    let books=await Book.find({})
    res.render('booklist',{
        books:books
    })
    }
    catch(err)
    {
        console.log(err)
    }
}
async function deleteBook(req,res)
{
    try{
    let id=req.params.id;
    await Book.deleteOne({_id:id});
    let books=await Book.find({})
    res.render('booklist',{
        books:books
    })
    }
    catch(err)
    {
        console.log(err)
    }
}

module.exports={
    addbook,getlist,getParticulareditBook,editBook,deleteBook
}