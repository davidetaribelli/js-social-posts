const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


const containerEl = document.getElementById("container");



posts.forEach((element, i, array) =>{

    const singlePost = posts[i];
    
    let post = document.createElement("div");
    post.classList.add("post");

    post.innerHTML +=   `<div class="post__header">
                            <div class="post-meta">
                                <div class="post-meta__icon">
                                    <img class="profile-pic" src="${singlePost.author.image}" alt="${singlePost.author.name}">                  
                                </div>
                                <div class="post-meta__data">
                                    <div class="post-meta__author">${singlePost.author.name}</div>
                                    <div class="post-meta__time">${singlePost.created}</div>
                                </div>
                            </div>
                        </div>`;
 
    post.innerHTML +=   `<div class="post__text">${singlePost.content}</div>`
    post.innerHTML +=   `<div class="post__image">
                            <img src="${singlePost.media}" alt="${singlePost.name}">
                        </div>`

    post.innerHTML +=   `<div class="post__footer">
                            <div class="likes js-likes">
                                <div class="likes__cta">
                                    <a class="like-button  js-like-button" data-postid="${singlePost.id}">
                                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                        <span class="like-button__label">Mi Piace</span>
                                    </a>
                                </div>
                                <div class="likes__counter">
                                    Piace a <b id="like-counter-${singlePost.id}" class="js-likes-counter">${singlePost.likes}</b> persone
                                </div>
                            </div>
                        </div>`;
   
    containerEl.append(post);
    
});

const btnLike = document.querySelectorAll(".like-button");

btnLike.forEach(element =>{
    element.addEventListener("click", like)
})

let liked = [];
// funzione per il like
function like(){
    let idPost = this.getAttribute("data-postid")
    let counter = document.getElementById(`like-counter-${idPost}`);
    this.classList.toggle("like-button--liked");
    if(liked.includes(idPost) == false){
        add(idPost, counter);
    }else{
        remove(idPost, counter);
    }
}


// funzione per aggiungere

function add(idPost, counter){
    liked.push(idPost);
    posts[idPost-1].likes++
    counter.innerText = posts[idPost-1].likes;
}

// funzione per togliere

function remove(idPost, counter){
    posts[idPost-1].likes--;
    liked = liked.filter(i => i !== idPost);
    counter.innerText = posts[idPost-1].likes;
}












