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

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            }else{
                reject('Error:Something went wrong');
            }
        }, 3000);
    });
}

createPost({ title: 'Post Four', body: 'This is post four'})
  .then(getPosts)
  .catch(err => console.log(err));
