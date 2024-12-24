// =>>>>>>>>>>slider
let sliderImages = [
  "./images/slider1.jpg",
  "./images/slider2.jpg",
  "./images/slider3.jpg",
  "./images/slider4.png",
];
let nextSliderBtn = document.querySelector(".slider .next");
let previousSliderBtn = document.querySelector(".slider .previous");
let sliderImg = document.querySelector(".slider img");
// control slides
sliderImg.src = sliderImages[0];
let index = 0;
let sliderIntervel=setInterval(()=>{
   getNext()
},5000)
nextSliderBtn.onclick = () => {
  getNext();
};
previousSliderBtn.onclick = () => {
  getPrevious();
};
function getNext() {
  index == sliderImages.length - 1 ? (index = 0) : index++;
  sliderImg.src = sliderImages[index];
}
function getPrevious() {
  index == 0 ? (index = sliderImages.length - 1) : index--;
  sliderImg.src = sliderImages[index];
}
// wish list
function wishList(el){
  el.classList.toggle("animate")
  el.classList.toggle("inactive")
  el.classList.toggle("active")
console.log(el)
}