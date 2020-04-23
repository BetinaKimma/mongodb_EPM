// dette er en comtroller fra clean blog, den skal omskrives

const BlogPost = require('../models/BlogPost.js')

module.exports = async (req, res) =>{
    const blogposts = await BlogPost.find({}).populate('userid');
    res.render('index',{
        blogposts
    });
}