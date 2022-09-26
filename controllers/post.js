const getPosts = require('./handlers/getPosts');
const posts = getPosts();
// const testScript = require('../public/javascripts/test');

async function postController(request, response, next) {
    const postId = request.params.id;

    const post = posts.filter(el => {
        return el.id === postId;
    });

    if(post.length === 1){
        const viewContext = {
            ...post[0],
            posts: posts,
            scripts: [
                {
                    file: 'test.js',
                    defer: false,
                    async: false
                }
            ]
        };
        return response.render('post', viewContext);
    }
    return response.redirect('/');
};

module.exports = {
    postController
};