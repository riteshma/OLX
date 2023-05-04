let country = document.getElementById('country');
let moving = document.getElementById('moving');
let text = document.getElementById('text');
let list = document.getElementById('list');

country.addEventListener('click',()=>{
    list.classList.toggle('hidden');
    moving.classList.toggle('roted');
});

function myfunction(ritesh){
    text.innerHTML = ritesh;
}

let eng_tag = document.getElementById('eng_tag');
let hin_eng = document.querySelector('.hin_eng');
let language = document.querySelector('.language');


language.addEventListener('click',()=>{
    hin_eng.classList.toggle('display_div');
})
function languageolx(anyone){
    eng_tag.innerHTML = anyone;
}  

let girl_img_id = document.getElementById('girl_img_id');
let gropdown_id = document.getElementById('gropdown_id');

girl_img_id.addEventListener('click', ()=>{
    gropdown_id.classList.toggle('block_div');
})

// --------------------ad2---------------------

let ad_img2 = document.querySelector('.ad_img2');
let ad_icon2 = document.getElementById('ad_icon2');

ad_icon2.addEventListener('click', ()=>{
    ad_img2.style = 'display:none';
});

// ----------------Product img1------------------

const swiper = new Swiper('.swiper', {
   
    loop: true,
  
    
    pagination: {
      el: '.swiper-pagination',
    },
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
    
  });