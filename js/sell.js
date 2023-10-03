const boxes = document.querySelectorAll('.shop-item');

boxes.forEach(box => {
    box.addEventListener('click', eventHandlerFunction);
});

function eventHandlerFunction() {
    
    console.log('Element clicked!');
}