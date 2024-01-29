document.addEventListener('DOMContentLoaded', function () {
    const leftbtn = document.querySelector(".l-btn");
    const rightbtn = document.querySelector(".r-btn");

    rightbtn.addEventListener('click', function (event) {
        console.log('done');
        const content = document.querySelector('.product-slide');
        content.scrollLeft += 1100;
        event.preventDefault();
    });

    leftbtn.addEventListener('click', function (event) {
        console.log('done');
        const content = document.querySelector('.product-slide');
        content.scrollLeft -= 1100;
        event.preventDefault();
    });
    const leftbtn1 = document.querySelector(".btn-1b");
    const rightbtn1 = document.querySelector(".btn-1a");

    rightbtn1.addEventListener('click', function (event) {
        console.log('done');
        const content = document.querySelector('.product-slide-1');
        content.scrollLeft += 1100;
        event.preventDefault();
    });

    leftbtn1.addEventListener('click', function (event) {
        console.log('done');
        const content = document.querySelector('.product-slide-1');
        content.scrollLeft -= 1100;
        event.preventDefault();
    });
    const leftbtn2 = document.querySelector(".btn-2b");
    const rightbtn2 = document.querySelector(".btn-2a");

    rightbtn2.addEventListener('click', function (event) {
        console.log('done');
        const content = document.querySelector('.product-slide-2');
        content.scrollLeft += 1100;
        event.preventDefault();
    });

    leftbtn2.addEventListener('click', function (event) {
        console.log('done');
        const content = document.querySelector('.product-slide-2');
        content.scrollLeft -= 1100;
        event.preventDefault();
    });
    const leftbtn3 = document.querySelector(".btn-3b");
    const rightbtn3 = document.querySelector(".btn-3a");

    rightbtn3.addEventListener('click', function (event) {
        console.log('done');
        const content = document.querySelector('.product-slide-3');
        content.scrollLeft += 1100;
        event.preventDefault();
    });

    leftbtn3.addEventListener('click', function (event) {
        console.log('done');
        const content = document.querySelector('.product-slide-3');
        content.scrollLeft -= 1100;
        event.preventDefault();
    });
    const leftbtn4 = document.querySelector(".btn-4b");
    const rightbtn4 = document.querySelector(".btn-4a");

    rightbtn4.addEventListener('click', function (event) {
        console.log('done');
        const content = document.querySelector('.product-slide-4');
        content.scrollLeft += 1100;
        event.preventDefault();
    });

    leftbtn4.addEventListener('click', function (event) {
        console.log('done');
        const content = document.querySelector('.product-slide-4');
        content.scrollLeft -= 1100;
        event.preventDefault();
    });
    const leftbtn5 = document.querySelector(".btn-5b");
    const rightbtn5 = document.querySelector(".btn-5a");

    rightbtn5.addEventListener('click', function (event) {
        console.log('done');
        const content = document.querySelector('.product-slide-5');
        content.scrollLeft += 1100;
        event.preventDefault();
    });

    leftbtn5.addEventListener('click', function (event) {
        console.log('done');
        const content = document.querySelector('.product-slide-5');
        content.scrollLeft -= 1100;
        event.preventDefault();
    });
    const leftbtn6 = document.querySelector(".btn-6b");
    const rightbtn6 = document.querySelector(".btn-6a");

    rightbtn6.addEventListener('click', function (event) {
        console.log('done');
        const content = document.querySelector('.product-slide-6');
        content.scrollLeft += 1100;
        event.preventDefault();
    });

    leftbtn6.addEventListener('click', function (event) {
        console.log('done');
        const content = document.querySelector('.product-slide-6');
        content.scrollLeft -= 1100;
        event.preventDefault();
    });
    const backtop=document.querySelector(".backtop");
    backtop.addEventListener("click",()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    });
    const sidebar = document.querySelector(".sidebar");
    const cross = document.querySelector(".fa-xmark");
    const black = document.querySelector(".black");
    const sidebtn = document.querySelector(".second-1");

    sidebtn.addEventListener("click",()=> {
        sidebar.classList.add("active");
        cross.classList.add("active");
        black.classList.add("active");
    document.body.classList.add("stop-scroll");
    });
    cross.addEventListener("click",  () =>{
        sidebar.classList.remove("active");
        cross.classList.remove("active");
        black.classList.remove("active");
    document.body.classList.remove("stop-scroll");
    });
    const sign=document.querySelector(".ac");
    const tri=document.querySelector(".triangle");
    const signin=document.querySelector(".hdn-sign");
    sign.addEventListener("click",()=>{
        black.classList.toggle("active-1");
        signin.classList.toggle("active");
        tri.classList.toggle("active");
    document.body.classList.toggle("stop-scroll");
    })
});