window.onload = function() {
    setTimeout(logo, 800);
    setTimeout(menu1, 800);
    setTimeout(menu2, 800);
    setTimeout(media, 800);
    setTimeout(indi, 800);
    setTimeout(bigtext, 800);
    setTimeout(smoltext, 800);
    setTimeout(baten, 800);
    setTimeout(image, 800);
    setTimeout(navs, 800);
}

function logo() {
    let h1 = document.querySelector('#logo h1');

    h1.style.opacity = '1';
    h1.style.transform = 'translate(0)';
}

function image() {
    let img = document.querySelector('#img');

    img.style.opacity = '1';
    img.style.transform = 'translate(0)';
}

function bigtext() {
    let h1 = document.querySelector('#content h1');

    h1.style.opacity = '1';
    h1.style.transform = 'translate(0)';
}

function smoltext() {
    let p = document.querySelector('#content p');

    p.style.opacity = '1';
    p.style.transform = 'translate(0)';
}

function baten() {
    let button = document.querySelector('#content button');

    button.style.opacity = '1';
    button.style.transform = 'translate(0)';

}

function navs() {
    let nav = document.querySelector('#navigator');

    nav.style.opacity = '1';
    nav.style.transform = 'translate(0)';
}

function menu1() {
    let li = document.querySelectorAll("#menu1 ul li");
    let i;

    for (i = 0; i < li.length; i++) {
        li[i].style.opacity = '1';
        li[i].style.transform = 'translate(0)';
    }
}

function menu2() {
    let li = document.querySelectorAll("#menu2 ul li");
    let i;

    for (i = 0; i < li.length; i++) {
        li[i].style.opacity = '1';
        li[i].style.transform = 'translate(0)';
    }
}

function media() {
    let li = document.querySelectorAll("#media ul li");
    let i;

    for (i = 0; i < li.length; i++) {
        li[i].style.opacity = '1';
        li[i].style.transform = 'translate(0)';
    }
}

function indi() {
    let li = document.querySelectorAll("#indi ul li");
    let i;

    for (i = 0; i < li.length; i++) {
        li[i].style.opacity = '1';
        li[i].style.transform = 'translate(0)';
    }
}