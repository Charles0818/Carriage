
 const tabs = (display) => {
    const tabContent = document.querySelectorAll('.tab-content');
    // const textContent = document.querySelectorAll('.text-content');
    tabContent.forEach((el, index) => {
        el.querySelector('.text-content').style.animation = 'slide-to-left .5s ease 0s 1 backwards';
        el.querySelector('.circled > img').style.animation = 'fade-in .5s ease-in-out 0s 1';
        el.dataset.slide = index + 1;
        // console.log(el.dataset.slide)
        el.style.display = 'none';
    });
    const toggleBtnIcon = document.querySelectorAll('[data-toggle] > .icon');
    toggleBtnIcon.forEach(el => el.classList.remove('active'));
    document.querySelector(display).style.display="block";
}; 


export class Carousel {
    constructor(event, slides) {
        if(moving) return;
        moving = true;
        const slidesArray = Array.from(slides);
        const totalSlides = slides.length;
        const target = event.target;
        // let currentSlide = document.querySelector(`.carousel-item.active`);
        const rightBtn = target.classList.contains('right');
        slides.forEach((el, index)=> {
            el.dataset.slide = index + 1;
            console.log(el);
            el.classList.remove('active');
            el.classList.remove('prev');
            el.classList.remove('next');
        })
        console.log(slideID);
        
        (rightBtn) ? slideID++ : slideID--;
        if(slideID < 1) slideID = totalSlides;
        // console.log(slides.length);
        if(slideID > totalSlides) slideID = 1;
        console.log(slideID);
        let newActiveSlide = slidesArray.find(slide => slide.dataset.slide === `${slideID}`);
        console.log(newActiveSlide);
        newActiveSlide.classList.add('active');
        let prevSlide = slideID - 1;
        let nextSlide = slideID + 1;
        if(prevSlide < 1) prevSlide = totalSlides;
        if(nextSlide > totalSlides) nextSlide = 1;
        slidesArray.find(slide => slide.dataset.slide === `${nextSlide}`).classList.add('next');
       
        slidesArray.find(slide => slide.dataset.slide === `${prevSlide}`).classList.add('prev');

        setTimeout(()=> {
            moving = false;
        }, 500);

    }
}

// Remember to re-write the Carousel class to
// hold the below variables

const carouselItems = document.querySelectorAll('.carousel-item');
let moving = false;
let slideID = 1;
// carouselItems[0].classList.add('active');



const controls = document.querySelectorAll('.control');
controls.forEach(el=> el.addEventListener('click', event => {
        new Carousel(event, carouselItems);
}));


const collapsible = (event, content)=> {
    const target = event.target;
    // const targetedContent = target.querySelector
    target.classList.toggle('active');
    if(content.style.maxHeight) {
        content.style.maxHeight = null;
    }else {
        content.style.maxHeight = `${content.scrollHeight}px`
    }

}


const uiCanInteract = ()=> {
    document.querySelectorAll('.nav--icons > [data-toggle]').forEach((el, index) => {
        el.addEventListener('click', () => {
            tabs(`.tab-content[data-slide="${index + 1}"]`);
            el.querySelector('.icon').classList.add('active');
        });
    });

   const dropdownBtn = document.querySelectorAll('.dropdown--btn');
   
    dropdownBtn.forEach((el) => {
        const dropdownItem = el.nextElementSibling;
        el.addEventListener('click', (event)=> {
            collapsible(event, dropdownItem);
        });
    });

    // document.querySelectorAll('.toggle--nav').forEach((el, index)=> {
    //     el.addEventListener('click', event => {
    //         const mainNav = document.querySelector('.wrap--main-nav');
    //         if(el.classList.contains('times')) {
    //             mainNav.
    //         }
    //     })
    // })
};

document.addEventListener('DOMContentLoaded', uiCanInteract);

//Very useful tip below
// for (const [i, v] of ['a', 'b', 'c'].entries()) {
//     console.log(i, v)
//   };

