import { posts } from '/data.js';
const toggleBtn = document.getElementById('toggle-btn')
const navList = document.getElementById('nav-list')
const navLink = document.querySelectorAll('.nav-link')
console.log(navLink)


toggleBtn.addEventListener('click', ()=> {
    navList.classList.toggle('hidden')
})
navLink.forEach(link => {
    link.addEventListener("click", ()=> navList.classList.remove('hidden'))
})
function postsHTML(){
    let postText = ``
    posts.forEach(post => {
        postText += `
            <article class="post">
            <img class="posts-img" src="${post.image}" alt="">
            <p class="posts-date">${post.date}</p>
            <h2 class="posts-heading">${post.heading}</h2>
            <p class="posts-text">${post.text}</p>
        </article>
        `
    })
    return postText
}
function renderPosts(){
    document.querySelector('.posts').innerHTML = postsHTML()
}
renderPosts()