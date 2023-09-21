let slider = document.querySelector('.slider');
let innerSlider = document.querySelector('.slider-inner');

let pressed = false;
let startx;
let x;

slider.addEventListener('mousedown', (e) => {
    pressed = true;
    startx = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = 'grabbing';

});


slider.addEventListener('mouseenter', () => {
    slider.style.cursor = 'grab';

});

// slider.addEventListener('mouseleave', () => {
//     slider.style.cursor = 'default';

// });

slider.addEventListener('mouseup', () => {
    slider.style.cursor = 'grab';

});

window.addEventListener('mouseup', () => {
    pressed = false;

});

slider.addEventListener('mousemove', (e) => {
    e = e || window.e;
    if (!pressed) return;

    e.preventDefault();
    innerBound = innerSlider.getBoundingClientRect();
    outerBound = slider.getBoundingClientRect();
    console.log(innerBound.left + innerBound.width, innerBound.width, outerBound.width, innerSlider.style.left );
    x = e.offsetX;
    
    if (x -startx > 0)
        {
         innerSlider.style.left ='0px';
        }

    else{
        innerSlider.style.left = `${x -startx}px`;
    }

});