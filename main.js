let s1=document.querySelector('.slider')
let s="";
let imgNames=["https://static0.moviewebimages.com/wordpress/wp-content/uploads/article/xOw6msJtL2YtlnEra7vglma6eLW0yP.jpg?w=1200&h=628&fit=crop","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaClGcOnLmYxXebg-Rb_FZw--SyVZCWjEkXQ&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWTAA0uZ0azhuIXdzuCF9eR1l-EJ0iAdPzFw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQsU5xbn_7xduknCu2CzOwGOVVCi8zTYf6xg&s"];
let N=10;

// Netflix animation - wait for video to finish playing before hiding
const video = document.getElementById("loading-video");
const preloader = document.getElementById("video-preloader");

video.addEventListener("ended", function() {
    // Smoothly fade out the preloader after video ends
    preloader.style.transition = "opacity 0.5s ease";
    preloader.style.opacity = "0";

    // Completely remove it after the fade animation
    setTimeout(() => {
        preloader.style.display = "none";
    }, 500);
});

// Fallback: If video fails to load or play, hide preloader after 5 seconds
video.addEventListener("error", function() {
    preloader.style.display = "none";
});

setTimeout(() => {
    if (preloader.style.display !== "none") {
        preloader.style.transition = "opacity 0.5s ease";
        preloader.style.opacity = "0";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }
}, 10000); // 10 second fallback

for(let i=0;i<N;i++){
    s+=` <div class="netflix-card" style="background: linear-gradient(135deg, #1e3c72, #2a5298);">
                    <img src="${imgNames[i%(imgNames.length)]}.jpg" class="w-full h-full object-cover object-bottom" alt="Show 1">
                    <div class="netflix-badge">New</div>
                </div>`
}
s1.innerHTML+=s;
let s2=document.querySelector('.slider2');
let st="";
let imgNames2=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf1DK32xKMQzqSl8wnY1BLVu_gdwsRYzVSNM6A03r6c-fEwrif8raKzkFRuerw1KHdDICvOw&s=10","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaClGcOnLmYxXebg-Rb_FZw--SyVZCWjEkXQ&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWTAA0uZ0azhuIXdzuCF9eR1l-EJ0iAdPzFw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQsU5xbn_7xduknCu2CzOwGOVVCi8zTYf6xg&s"];
let M=10;
for(let i=0;i<M;i++){
    st+=` <div class="netflix-card-square" style="background: linear-gradient(135deg, #1e3c72, #2a5298);">
                    <img src="${imgNames2[i%(imgNames2.length)]}.jpg" class="w-full h-full object-cover object-bottom" alt="Show 1">
                    ${i<3?`<div class="netflix-badge">New</div>`:''}
                </div>`
}
s2.innerHTML+=st;

let s3=document.querySelector('.slider3');
let stn="";
let imgNames3=["seven","https://m.media-amazon.com/images/M/MV5BMDBkZDNjMWEtOTdmMi00NmExLTg5MmMtNTFlYTJlNWY5YTdmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlP2XvP3Gv01lkkJBfkWMJKkVkQ3fic3jIaA&s","dk","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQsU5xbn_7xduknCu2CzOwGOVVCi8zTYf6xg&s"];
let J=10;
for(let i=0;i<J;i++){
    stn+=` <div class="netflix-card-square" style="background: linear-gradient(135deg, #1e3c72, #2a5298);">
                    <img src="${imgNames3[i%(imgNames3.length)]}.jpg" class="w-full h-full object-cover object-bottom" alt="Show 1">
            </div>`
}
s3.innerHTML+=stn;

