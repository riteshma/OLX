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

// ----------------ad1---------------------


let ad_img = document.querySelector('.ad_img');
let ad_icon = document.getElementById('ad_icon');

ad_icon.addEventListener('click', ()=>{
    ad_img.style = 'display:none';
});

// -----------------Load More----------------

let Load_more_id = document.getElementById('Load_more_id');
let load_more_products_id = document.getElementById('load_more_products_id');

Load_more_id.addEventListener('click',()=>{
    load_more_products_id.style = 'display:block';
    Load_more_id.style = 'display:none';
})

// --------------------ad2---------------------

let ad_img2 = document.querySelector('.ad_img2');
let ad_icon2 = document.getElementById('ad_icon2');

ad_icon2.addEventListener('click', ()=>{
    ad_img2.style = 'display:none';
});