let slideleft = document.getElementById("slide-left");
let slideright = document.getElementById("slide-right");
let imgitem = document.querySelectorAll(".image-item"); // Corrected selector to ".image-item"
console.log(imgitem.length - 1); // Logging the correct length of imgitems
let startSlider = 0;
let endSlider = (imgitem.length - 1)*100; // Corrected variable name to "endslider"

slideleft.addEventListener("click", () => {
    if (startSlider < 0) { // Adjusted condition to move slider left
        startSlider = startSlider + 100; // Increment startslider
    }
    imgitem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`; // Adjusted direction of translation for left slide
    })
})
slideright.addEventListener("click", () => {
    if (startSlider >= -endSlider + 100) { // Adjusted condition to move slider right
          startSlider = startSlider - 100; // Decrement startslider
    }
    imgitem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`; // Adjusted direction of translation for right slide
    })
})