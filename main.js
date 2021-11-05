/*
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
nome autore,
foto profilo,
data,
testo del post,
immagine (non tutti i post devono avere una immagine) [quindi gestisco il caso],
numero di likes.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
- Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.
*/

/*
1. create array containing objects that represents posts
    1.2 every object must be completed of every possible variable: 
        name, profile pic, date, post text, image(where present), likes counter
2. use the already present layout to create posts
3. like button must update like counter
*/

// 1.
const postsArr = [
    // 1.2
    {
        "name": "John Doe",
        "profilePic": "https://unsplash.it/300/300?image",
        "date": "3 mesi fa",
        "postText": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "image": "https://unsplash.it/300/300?image",
        "likes": 10,
    },

    {
        "name": "Jane Doe",
        "profilePic": "",
        "date": "6 mesi fa",
        "postText": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Et nihil ullam aut alias.",
        "image": "https://unsplash.it/300/300?image",
        "likes": 67,
    },

    {
        "name": "Panco Pinco",
        "profilePic": "https://unsplash.it/300/300?image",
        "date": "2 mesi fa",
        "postText": "Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "image": "https://unsplash.it/300/300?image",
        "likes": 34,
    },

    {
        "name": "Jack Doe",
        "profilePic": "https://unsplash.it/300/300?image",
        "date": "1 mesi fa",
        "postText": "Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "image": "",
        "likes": 12,
    }

];

// create variable to print
const printVariable = document.querySelector('.posts-list');

// create a function to print objects values
function addNewPost (name, profilePic, date, postText, image, likes, i) {
    // 2.
    printVariable.innerHTML +=`
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${profilePic}" alt="${name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${name}</div>
                    <div class="post-meta__time">${date}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${postText}</div>
        <div class="post__image">
            <img src="${image}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button js-like-button" data-postid="${i}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label"> Mi Piace </span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-0 class="js-likes-counter">${likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>`;       
}

// print new post for each object
for(let i = 0; i < postsArr.length; i++) {
    let {name, profilePic, date, postText, image, likes} = postsArr[i];
    if(profilePic === "") {
        profilePic = "img/unknown-profile-pic.jpg";
    }else if(image === "") {
        image = "img/unreadble-image.jpg";
    }
    addNewPost (name, profilePic, date, postText, image, likes, i);

    // toggle class and add to counter on click
    let likeButtons = document.getElementsByClassName('like-button')
    for(let i = 0; i < likeButtons.length; i++) {
        likeButtons[i].addEventListener('click',
            function() {
                likeButtons[i].classList.toggle('like-button--liked');
                const likesCounter = this.getAttribute('data-postid');
                postsArr[likesCounter].likes++;
                console.log(postsArr[likesCounter].likes++);
            }
        );
    }     
}


