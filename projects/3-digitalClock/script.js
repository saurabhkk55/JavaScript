const clock = document.querySelector('#clock');
console.log(clock);

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000); // 1000ms is equal to 1 second
