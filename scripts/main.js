
// let introSlideBox = document.querySelector('.slider-box');
// let  introSlides = document.querySelectorAll('.slider-box__item');
// let prevBtn = document.querySelector('.slider-path--prev');
// let nextBtn = document.querySelector('.slider-path--next');
// let controlSlide = document.querySelector('.slider-controls');

// // let eni = getComputedStyle(introSlides);
// let defaultOtish = 680 ;+'px'
// let otish = 0  ;+ 'px'
// let slideWidth = 934; +'px'
// let points=[],slideIndex = 2;
// introSlides.forEach((el,i)=>{
//     let pointBtn = document.createElement('button');
//     pointBtn.dataset.id = i+1;
//     pointBtn.className = 'slider-controls__btn';
//     controlSlide.appendChild(pointBtn)
//     points.push(pointBtn);
// })
//     // slideIndex = points.dataset.id

// points[1].classList.add("slider-controls__btn--active");
// introSlideBox.style.transform = `translateX(-${defaultOtish}px)`;

// nextBtn.addEventListener('click',()=>{
    
//     if( otish == slideWidth + defaultOtish  ){
//         otish = 0;
//     }else if(otish == defaultOtish){
//         otish += slideWidth;
//         // otish = 934*2

//     } else  {
//         otish += defaultOtish

//     }
//     if (slideIndex == points.length - 1) {
//         slideIndex = 0;
//       } else {
//         slideIndex ++;
//       }
//       points.forEach((item) => {
//         item.classList.remove("slider-controls__btn--active");
//       });
//       points[slideIndex].classList.add("slider-controls__btn--active");
// introSlideBox.style.transform = `translateX(-${otish}px)`;
// })
// prevBtn.addEventListener('click',()=>{
//     if(otish == 0 ){
//      otish = slideWidth + defaultOtish
//     }
//     else if(otish == defaultOtish){
//         otish -= defaultOtish}
//         else{
//         otish -= slideWidth;
//     }
//     if (slideIndex == 0) {
//         slideIndex = points.length - 1;
//       } else {
//         slideIndex --;
//       }
//       points.forEach((item) => {
//         item.classList.remove("slider-controls__btn--active");
//       });
//       points[slideIndex].classList.add("slider-controls__btn--active");
// introSlideBox.style.transform = `translateX(-${otish}px)`;
// })

