const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
let randomColor;

start.addEventListener('click', () => {
    colorGenerator = setInterval(function(){
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
    }, 500);
});

stop.addEventListener('click', () => {
    clearInterval(colorGenerator);
    colorGenerator = null; // to cleanup memory occupied by the variable.
});
