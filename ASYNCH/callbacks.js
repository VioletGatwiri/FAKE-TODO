const posts = {
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
    {title: 'Post Two', body: 'This is post three'}
},

function getPosts() {
    setTimeout(funtion()=> {
       let output = '';
       posts.forEach((post, inex) =>{
        output += `<li>${post.title}</li>`;
       })
       document.body.innerHTML = output;
    }, 2000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 3000);
}


createPost({title: 'Post Three', body: 'This is post four'}, getPosts);