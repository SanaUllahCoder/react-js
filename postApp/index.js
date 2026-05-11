let userName = document.getElementById("userName").value ="";
let textArea = document.getElementById("textComment").value = "";
let postBtn = document.getElementById('postBtn');
let posts = document.getElementById('posts');

let posts = [];


postBtn.addEventListener('click', function(){
    let newPost = {
        userName: userName.value,
        userComment: textArea.value,
        
    };

    posts.push(newPost)
    renderPosts();


})